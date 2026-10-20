# Research: Cupones de Descuento Promocionales (002-cupones-descuento)

## Decisiones Técnicas y Arquitectura

### D-01: Modelo de Control de Usos y Prevención de Sobrecange Concurrente
- **Decisión**: El control de usos de cupones se implementa a nivel relacional en PostgreSQL integrando el contador de usos consumidos (`used_count`) y los usos retenidos bajo *soft lock* activo. La verificación de cupos disponibles se evalúa mediante:
  $$\text{usos\_disponibles} = \text{max\_usos} - (\text{usos\_consumidos} + \text{usos\_en\_soft\_lock\_vigente})$$
  La reserva temporal del uso en soft lock se registra en una tabla relacional `CouponSoftLock` vinculada a la sesión/unidad con marca `expires_at = now() + interval '15 minutes'`.
- **Justificación**: RNF-03 y SC-002 exigen que para un cupón de 1 solo uso sea físicamente imposible que dos huéspedes lo canjeen concurrentemente. Al asociar el soft lock del cupón al mismo reloj del motor de base de datos que el soft lock de la unidad física, si el huésped no confirma la reserva antes de los 15 minutos, el uso queda disponible de inmediato para cualquier otro visitante sin intervención manual.
- **Alternativas consideradas**:
  - *Descontar el cupón únicamente al confirmar la reserva*: Provoca colisiones y frustración en el huésped que completó todo el formulario creyendo que tenía el descuento y al enviar recibe "cupón agotado".
  - *Bloqueo permanente*: Si el usuario abandona la pestaña, el cupón quedaría bloqueado indefinidamente.

### D-02: Mecánica de Cálculo de Descuentos (Porcentaje vs Monto Fijo y Acumulabilidad)
- **Decisión**: El motor de cálculo (`lib/pricing/coupons.ts`) implementa una función pura e idempotente con las siguientes reglas:
  1. **Cupón Porcentual Acumulable**: $\text{Descuento Total} = (\% \text{noches} + \% \text{cupón}) \times \text{Subtotal Base}$.
  2. **Cupón Porcentual No Acumulable**: $\text{Descuento Total} = \max(\% \text{noches}, \% \text{cupón}) \times \text{Subtotal Base}$.
  3. **Cupón Monto Fijo Acumulable**: $\text{Descuento Total} = (\% \text{noches} \times \text{Subtotal Base}) + \text{Monto Fijo Moneda Activa}$.
  4. **Cupón Monto Fijo No Acumulable**: $\text{Descuento Total} = \max((\% \text{noches} \times \text{Subtotal Base}), \text{Monto Fijo Moneda Activa})$.
  5. **Tope de Importe**: En ningún caso el total a pagar puede ser inferior a 0 ($\text{Total Final} = \max(0, \text{Subtotal Base} - \text{Descuento Total})$).
- **Justificación**: Cumple estrictamente con las clarificaciones del spec y los requerimientos FR-003, FR-004, FR-008 y FR-018, manteniendo compatibilidad bi-monetaria (ARS y USD) sin conversiones dinámicas.
- **Alternativas consideradas**:
  - *Calcular cupón sobre el subtotal ya descontado por noches (descuento compuesto)*: Rechazado en la sesión de clarificación a favor de la suma directa de porcentajes, más clara y transparente para el huésped.

### D-03: Rate Limiting Nativo contra Fuerza Bruta de Códigos de 6 Dígitos
- **Decisión**: Proteger el endpoint público de validación de cupones (`/api/public/coupons/validate`) con un limitador de tasa nativo en memoria respaldado por LRU cache / mapa de IPs o tabla de intentos fallidos en PostgreSQL: máximo 5 intentos fallidos consecutivos por IP o identificador de sesión por minuto; al 5° fallo se bloquea durante 5 minutos respondiendo HTTP 429 con cabecera `Retry-After`.
- **Justificación**: SC-005 y FR-023. Un código alfanumérico de 6 caracteres posee un espacio de búsqueda ($36^6 \approx 2.176 \times 10^9$), pero ante cupones privados de uso único (ej. `BODA26`), un ataque de diccionario automatizado podría adivinarlos si no existe rate limit.
- **Alternativas consideradas**:
  - *Cloudflare Rate Limiting*: Requiere proxy en la nube de pago/configuración externa que viola la premisa de desarrollo local y autosuficiente.

### D-04: Protección Anti-Bot Nativa en Confirmación de Reservas
- **Decisión**: Implementación de una doble barrera nativa sin CAPTCHAs invasivos ni scripts externos (Google reCAPTCHA / Cloudflare Turnstile):
  1. **Campo Honeypot**: Campo invisible denominado `website_url_verification` estilizado con `position: absolute; left: -9999px; opacity: 0;` y `aria-hidden="true"`, `tabIndex={-1}`. Los bots de scraping completan automáticamente este campo; si el payload contiene cualquier valor, la solicitud se rechaza silenciosamente o arroja 400.
  2. **Time-Gate (Tiempo Mínimo de Llenado)**: Al cargar el formulario (Paso 2) se entrega un token criptográfico firmado con la marca de tiempo `timestamp_loaded`. Al enviar la confirmación se valida:
     $$\Delta t = \text{now}() - \text{timestamp\_loaded} \ge 3 \text{ segundos}$$
     Los envíos en tiempo subhumano (< 3s) se descartan.
- **Justificación**: FR-024, SC-006 y Principio Ponytail (máxima efectividad con código nativo mínimo, cero costo y cero impacto en la conversión de usuarios reales).
- **Alternativas consideradas**:
  - *reCAPTCHA / hCaptcha*: Agregan fricción al huésped, cookies de rastreo de terceros contrarias a la Ley 25.326 y fallas intermitentes en conexiones lentas.

### D-05: Integridad Contable en la Edición de Cupones Canjeados
- **Decisión**: Validación tanto en el esquema de base de datos como en los endpoints administrativos para bloquear la mutación de `codigo`, `tipo_descuento`, `porcentaje`, `monto_fijo_ars` y `monto_fijo_usd` una vez que `usos_consumidos > 0`. Solo se permite alterar `max_usos`, `fecha_vencimiento` y `activo`.
- **Justificación**: FR-022. Modificar el valor de un cupón ya canjeado alteraría la coherencia contable y auditoría de reservas pasadas.
