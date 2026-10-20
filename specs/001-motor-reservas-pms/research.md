# Research: Iguapé Aparts — Motor de Reservas y PMS (001-motor-reservas-pms)

## Decisiones Técnicas y Arquitectura

### D-01: Motor de Base de Datos y Prevención Anti-Overbooking
- **Decisión**: Utilizar PostgreSQL 17 con la extensión `btree_gist` y una `EXCLUSION CONSTRAINT` a nivel de base de datos sobre la tabla `UnitOccupancy` usando rangos de fechas `daterange(check_in, check_out, '[)')`.
- **Justificación**: RNF-03 y AC-41 exigen que la disponibilidad no dependa únicamente de comprobaciones lógicas a nivel de aplicación (que sufren condiciones de carrera bajo concurrencia). El rango semiabierto `[)` garantiza matemáticamente que el día del check-out quede libre para un nuevo check-in en la misma fecha (AC-16, AC-66).
- **Alternativas consideradas**:
  - *Bloqueo pesimista `SELECT ... FOR UPDATE`*: Sufre de bloqueos prolongados y no previene inserciones concurrentes de rangos solapados en tablas relacionales sin serialización total.
  - *Comprobación en aplicación*: Vulnerable a race conditions (demostrado en tests de carga RNF-04 con 20 workers simultáneos).

### D-02: Mecanismo de Soft Lock (15 Minutos)
- **Decisión**: Los soft locks se modelan como registros en `UnitOccupancy` con tipo `SOFT_LOCK` y marca temporal `expires_at = now() + interval '15 minutes'` calculada con el reloj de PostgreSQL (`CURRENT_TIMESTAMP`), acompañados de un token de sesión criptográfico (`lock_token`) de 32 bytes en formato hex.
- **Justificación**: RF-25, RF-26 y RNF-07 exigen exactamente 15 minutos cronometrados con la hora del motor Postgres. Al formar parte de la tabla de ocupación protegida por el exclusion constraint parcial (`WHERE status IN ('ACTIVE', 'CONFIRMED') AND (expires_at IS NULL OR expires_at > now())`), ningún otro usuario puede crear un soft lock ni confirmar una reserva sobre la misma unidad. Un soft lock expirado deja de ser considerado automáticamente por las consultas de disponibilidad sin requerir workers síncronos continuos.
- **Alternativas consideradas**:
  - *Redis TTL*: Agrega una dependencia de infraestructura externa que viola el principio Ponytail/YAGNI y la directiva de base única local PostgreSQL.
  - *Memoria en Node.js*: No persiste entre reinicios, no escala con múltiples instancias y no comparte transacciones con la base de datos.

### D-03: Stack y Ruteo (Next.js 16 App Router con `proxy.ts`)
- **Decisión**: Estructurar la aplicación en Next.js 16 App Router utilizando `proxy.ts` para el enrutamiento y guardias perimetrales de sesión en `/adminpanel`, endpoints Route Handlers en `app/api/...` para contratos REST y Server Components / Client Components organizados por responsabilidad.
- **Justificación**: Next.js 16 sustituye las convenciones tradicionales de middleware por `proxy.ts` (conforme a las directivas de `AGENTS.md` y `node_modules/next/dist/docs/`). Permite desacoplar el portal público de cara al huésped (`/`) y el panel administrativo privado (`/adminpanel`).
- **Alternativas consideradas**:
  - *Separar en dos repositorios/apps*: Rechazado por PRD §1 (motor público + PMS en una sola app unificada).

### D-04: Autenticación Administrativa con Argon2id
- **Decisión**: Implementación nativa de autenticación mediante `argon2` (variante Argon2id con parámetros recomendados OWASP) y almacenamiento de sesión en cookies HTTP-only, `SameSite=Lax`, `Secure` firmadas con `SESSION_SECRET`.
- **Justificación**: Cumple con la directiva constitucional y de `AGENTS.md` que prohíbe Supabase Auth en V1. El admin inicia sesión por `/adminpanel/login` con email y contraseña.
- **Alternativas consideradas**:
  - *NextAuth / Auth.js*: Introduce abstracciones innecesarias, esquemas ajenos y dependencias no solicitadas por el PRD.
  - *Bcrypt*: Argon2id es el estándar constitucional resistente a ataques por GPU/ASIC y canal lateral.

### D-05: Manejo de Zonas Horarias y Fechas
- **Decisión**: Manejo estricto de fechas calendario como tipos `date` puros (sin offset de tiempo) en base de datos. Toda interpretación de "hoy" y cálculos de vencimiento/alertas se normalizan a la zona horaria `America/Argentina/Buenos_Aires` usando `date-fns` y `date-fns-tz` (o `Intl.DateTimeFormat` nativo).
- **Justificación**: RNF-09 y AC-105 establecen que las 23:30 en Argentina (02:30 UTC del día siguiente) corresponden inequívocamente al día actual en curso en el complejo.

### D-06: Sincronización iCal Bidireccional
- **Decisión**:
  - **Exportación**: Endpoint `/api/ical/[unitId]/feed.ics?token=[token]` que genera formato iCalendar estándar (RFC 5545). Valida un token alfanumérico seguro (≥ 128 bits). Si el token no coincide, retorna HTTP 404 (RNF-06, AC-108). Solo expone fechas `DTSTART;VALUE=DATE` y `DTEND;VALUE=DATE` con resumen genérico `Iguapé Apart Reservado` sin datos de huéspedes.
  - **Importación**: Tarea disparada por scheduler externo `/api/cron/tick` (máximo cada 15 min con `Authorization: Bearer $CRON_SECRET`) o botón manual en admin "Sincronizar ahora". Lee feeds configurados en `Unit.ical_feed_url`, parsea eventos y actualiza bloqueos de ocupación.
- **Justificación**: Elimina el riesgo de overbooking con Airbnb/Booking sin requerir channel managers de pago.

### D-07: Almacenamiento y Protección de Comprobantes de Pago
- **Decisión**: Guardar comprobantes subidos (PDF, JPG, PNG ≤ 10 MB) en el sistema de archivos local en `storage/receipts/` (fuera de la carpeta `public` y en `.gitignore`, configurable mediante `RECEIPTS_DIR`). La descarga se realiza exclusivamente a través de `/api/admin/payments/[id]/receipt` con verificación de sesión activa.
- **Justificación**: RF-55, RNF-05 y Ley 25.326 prohíben la exposición pública de comprobantes bancarios con datos sensibles.
