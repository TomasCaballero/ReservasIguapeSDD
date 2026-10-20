# ReservasIguape Constitution

## Core Principles

### I. Test-First & Red-Green-Refactor (NON-NEGOTIABLE)
El desarrollo DEBE seguir estrictamente un enfoque Test-First con ciclo Rojo-Verde-Refactor:
- **Rojo:** Ninguna línea de código de producción puede escribirse sin que exista previamente un test automatizado (unitario, de base de datos o e2e) que falle demostrando la necesidad del cambio.
- **Verde:** La implementación DEBE ser la solución más simple y directa para hacer pasar el test, sin agregar funcionalidades especulativas.
- **Refactor:** Solo una vez que la suite pasa en verde se optimiza y limpia el código, manteniendo todos los tests verdes.
- **Cobertura y herramientas:** Vitest para lógica de dominio, pricing, validaciones y tests de base de datos (`pg`/Prisma); Playwright (modo single worker `workers: 1`) para flujos punta a punta (e2e).

### II. Fidelidad de Diseño Frontend e Identidad Visual (Iguapé Aparts)
La interfaz del portal público y componentes web DEBEN basarse fielmente en el diseño, estructura estética y lenguaje visual de la página web oficial de Iguapé Aparts ubicada en `C:\Users\cabal\OneDrive\Documentos\Port\iguape\IguapeAparts`:
- **Activos visuales:** Se DEBEN reutilizar las imágenes principales y fotografías de cada Categoría provenientes de dicho proyecto oficial.
- **Guía de estilo canónica (RNF-02, AC-103):** Paleta inmutable compuesta por fondo `#2B3D24`, texto `#E4E2C5`, acento lima `#E6EF73` (hover `#D4DD68`, active `#C2CB5D`), tarjeta/card `#3F5934`, borde marrón `#AD9C78` (exclusivo para bordes), texto oscuro `#1E2B18`. Tipografías DM Serif Display y Source Sans 3; esquinas rectas.
- **Experiencia de usuario y accesibilidad:** Diseño responsive estricto de 360 px a 1920 px sin scroll horizontal (RNF-01, AC-102); operable integralmente mediante teclado y puntero; campos inválidos con `aria-invalid="true"` y mensaje de error visible asociado (AC-26). Textos en español rioplatense (voseo).

### III. Mentalidad Ponytail & YAGNI (Lazy Senior Dev)
Toda decisión de código DEBE priorizar la máxima simplicidad, la prevención de sobre-ingeniería y el apego estricto a los requerimientos del PRD:
- **Escalera de 6 Peldaños:** Antes de crear o modificar código, se DEBE descender por la escalera y detenerse en el primer escalón que resuelva el problema:
  1. *YAGNI:* Si ningún RF/RNF/AC o tarea lo exige, NO se implementa.
  2. *Reusar:* Buscar componentes o funciones preexistentes en el repo antes de programar nuevos.
  3. *Stdlib:* Usar las capacidades provistas por el lenguaje y runtime (Node.js/TypeScript).
  4. *Plataforma nativa:* Preferir APIs nativas de HTML5, CSS y Web Platform.
  5. *Dependencias existentes:* Aprovechar librerías ya declaradas en `package.json`.
  6. *Código mínimo:* Escribir el cambio más compacto, limpio y legible posible.
- **Cero dependencias no autorizadas:** No se introducen librerías externas ni patrones no consensuados sin aprobación formal como decisión arquitectónica `D-xx`.

### IV. Integridad de Dominio y Anti-Overbooking en Base de Datos
La integridad transaccional y la prevención de sobreventas son críticas para la hospitalidad:
- **Garantía a nivel de base de datos:** La anti-superposición de ocupación NO DEBE confiarse únicamente a la lógica de la aplicación; DEBE estar resguardada por exclusion constraints PostgreSQL (`btree_gist`) a nivel de esquema en la tabla `UnitOccupancy` con rango semiabierto `[inicio, fin)` (RNF-03, AC-41).
- **Invariantes de reserva:**
  - Noche de check-out libre: una reserva del 10 al 14 ocupa las noches 10, 11, 12 y 13 (AC-16, AC-66).
  - Soft locks: temporizados a exactamente 15 minutos calculados con la hora del motor de base de datos (RF-25, RNF-07); los locks vencidos no restan disponibilidad (RF-26).
  - Bloqueos manuales e iCal: reducen en 1 la disponibilidad de la categoría correspondiente.
  - Máquina de estados: solo se permiten las transiciones oficiales de RF-48. Reactivar una reserva sin cupo DEBE arrojar error 409 (RF-49).

### V. Seguridad, Privacidad de Huéspedes y Aislamiento Administrativo
La protección de datos personales y la seguridad operativa son inquebrantables (Ley 25.326, RNF-05, RNF-06):
- **Privacidad y datos sensibles:** NUNCA registrar en logs ni exponer en endpoints públicos datos de huéspedes (documento, teléfono, email, fecha de nacimiento, comprobantes o contraseñas).
- **Canal iCal seguro:** El feed iCal de sincronización externa DEBE requerir token válido; peticiones con tokens incorrectos DEBEN responder 404 para evitar reconocimiento (AC-108).
- **Protección del panel privado:** El panel administrativo (`/adminpanel`) DEBE estar desacoplado y desvinculado de la navegación pública, protegido por Argon2id y con directivas `noindex` (RF-33, AC-49).
- **Almacenamiento de comprobantes:** Los comprobantes de pago (RF-55) se guardan fuera del directorio público (`storage/receipts/`) y solo son accesibles por personal autenticado vía endpoint interno.

## Restricciones Tecnológicas y Estándares de Arquitectura

- **Stack Canónico:** Next.js 16 (App Router, con `proxy.ts`), React 19, Node.js 22 LTS, Tailwind CSS 4, PostgreSQL 17 (`btree_gist`), Prisma 7.10.0 (cliente generado en `app/generated/prisma`).
- **Autenticación:** Implementación propia para el panel administrativo basada en contraseñas cifradas con Argon2id (`argon2`) y manejo seguro de sesiones (sin Supabase Auth en V1).
- **Fechas y Tiempo:** Manejo estricto de fechas `dd/MM/yyyy` utilizando `react-day-picker` y `date-fns`. Los campos check-in y check-out son de tipo `date` sin hora. La noción de "hoy" se calcula obligatoriamente en la zona horaria `America/Argentina/Buenos_Aires` (RNF-09).
- **Moneda y Tarifas:** Motor de cálculo multi-moneda (ARS / USD). Los descuentos aplican el mayor porcentaje sobre el total sin acumulación (RF-16, AC-24). No se realiza conversión dinámica ARS/USD en V1 (tarifas cargadas explícitamente).

## Flujo de Desarrollo y Quality Gates

- **Ciclo TDD Obligatorio:** Escribir el test que falla → implementar código mínimo → verificar paso en verde → refactorizar.
- **Gates de Verificación:** Todo cambio debe superar satisfactoriamente antes de integrarse:
  1. Verificación de tipos estática: `npx tsc --noEmit`.
  2. Linter sin errores ni advertencias: `npx eslint .`.
  3. Batería de tests completa: `npm test` (unitarios y de integración contra base de datos limpia).
  4. Build de producción: `npm run build`.
  5. Tests de integración y e2e cuando aplique: `npx playwright test`.
- **Registro de Troubleshooting:** Todo fallo técnico no trivial, bloqueo o error de dependencias DEBE documentarse en `walkthroughs/troubleshooting_<tema>.md` con síntoma, causa raíz y solución aplicada.
- **Convención de Commits:** Commits basados en Conventional Commits. Se DEBE requerir aprobación explícita del usuario antes de ejecutar cualquier commit y push.

## Governance

- **Supremacía Constitucional:** Esta Constitución rige las decisiones de arquitectura, desarrollo y calidad técnica del proyecto ReservasIguape, complementando las especificaciones canónicas de requerimientos de negocio definidas en `PRD.md` y las directivas de trabajo de `AGENTS.md`.
- **Procedimiento de Enmienda:** Cualquier modificación a los principios o reglas aquí expresados requiere propuesta formal, discusión y aprobación explícita, documentando el impacto y actualizando el número de versión según Semantic Versioning:
  - *MAJOR:* Eliminación o cambio incompatible de principios o gobernanza.
  - *MINOR:* Incorporación de nuevos principios, secciones o lineamientos arquitectónicos.
  - *PATCH:* Correcciones de redacción, erratas tipográficas y precisiones sin cambio semántico.
- **Verificación de Cumplimiento:** Todo Pull Request, tarea y revisión de diseño DEBE auditarse contra los principios y gates definidos en esta Constitución.

**Version**: 1.0.0 | **Ratified**: 2026-10-20 | **Last Amended**: 2026-10-20
