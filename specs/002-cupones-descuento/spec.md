# Feature Specification: Cupones de Descuento Promocionales

**Feature Branch**: `002-cupones-descuento`

**Created**: 2026-10-20

**Status**: Draft

**Input**: User description: "Añadir spec para que el usuario admin pueda dar de alta cupones de descuento de 6 dígitos, alfanuméricos, configurados con monto en porcentaje o monto numérico, cantidad de usos, fecha de vencimiento. Todo configurable, con acumulación configurable con descuentos por noches, soporte bimonetario ARS/USD, reserva en soft lock y restricciones opcionales."

## User Scenarios & Testing *(mandatory)*

### User Story 1 - Validación y Aplicación de Cupón en el Portal de Reservas (Priority: P1)

Como potencial huésped, quiero ingresar un código de cupón de 6 caracteres alfanuméricos durante mi cotización o proceso de reserva, para obtener una bonificación en el precio final de mi estadía según las condiciones comerciales del cupón.

**Why this priority**: Es el punto de contacto directo con el cliente que materializa la acción promocional y define el precio final que debe pagar.

**Independent Test**: Un visitante ingresa un código válido de 6 caracteres en el portal público; el sistema verifica vigencia, disponibilidad de cupos y restricciones, recalcula el total reflejando el descuento y congela 1 uso temporalmente durante los 15 minutos del *soft lock*.

**Acceptance Scenarios**:

1. **Given** un cupón activo de 6 caracteres alfanuméricos con descuento del 15% y usos disponibles, **When** el usuario lo ingresa en el portal (en minúsculas o mayúsculas), **Then** el sistema lo normaliza a mayúsculas, lo valida y aplica un descuento del 15% sobre el subtotal de la estadía en la cotización.
2. **Given** un cupón configurado como "acumulable con descuentos por estadía larga", **When** se aplica sobre una reserva que ya cuenta con un 10% por regla de noches mínimas, **Then** el sistema aplica ambos beneficios sobre el total de la estadía según la regla de cálculo configurada.
3. **Given** un cupón configurado como "no acumulable", **When** se aplica sobre una reserva con descuento preexistente por noches, **Then** el sistema aplica únicamente el beneficio de mayor monto económico para el huésped.
4. **Given** un cupón de monto fijo numérico (ej. $15.000 ARS y USD 15), **When** el usuario cotiza en ARS o cambia la moneda a USD, **Then** el sistema descuenta el monto correspondiente a la moneda activa sin aplicar conversión cambiaria automática.
5. **Given** un cupón con 1 solo uso disponible restante, **When** el usuario A avanza al formulario de reserva con dicho cupón, **Then** el sistema bloquea transitoriamente ese uso bajo el *soft lock* de 15 minutos; si un usuario B intenta usar el mismo cupón simultáneamente, el sistema le notifica que el cupón no tiene usos disponibles.
6. **Given** un cupón bloqueado en *soft lock*, **When** el usuario confirma la reserva, **Then** el uso se consolida definitivamente como consumido; si el *soft lock* expira sin confirmarse la reserva, el uso vuelve a quedar disponible de inmediato.

---

### User Story 2 - Administración y Configuración Integral de Cupones (Priority: P1)

Como administrador del complejo, quiero crear, editar, pausar y consultar cupones de descuento con reglas flexibles (código de 6 dígitos alfanumérico, tipo de descuento, límite de usos, vigencia, moneda y acumulabilidad), para gestionar campañas de marketing e invitaciones especiales personalizadas.

**Why this priority**: Brinda al personal administrativo el control total sobre la política promocional, límites de canje y prevención de abusos o pérdidas económicas.

**Independent Test**: El administrador accede a la sección de cupones en el panel, crea un cupón con código personalizado o autogenerado de 6 caracteres, fija un límite de 1 uso con vencimiento futuro, y verifica que tras el canje el cupón quede marcado como agotado.

**Acceptance Scenarios**:

1. **Given** un administrador autenticado en el panel, **When** completa el formulario de alta con código alfanumérico de 6 caracteres, tipo de descuento (porcentaje o monto fijo numérico en ARS y USD), cantidad máxima de usos (ej. 1 para cliente único), fecha de vencimiento y regla de acumulabilidad, **Then** el sistema valida la unicidad del código y lo da de alta en estado *Activo*.
2. **Given** un cupón activo, **When** el administrador decide desactivarlo manualmente antes de su fecha de vencimiento, **Then** el cupón pasa a estado *Inactivo* y cualquier intento posterior de canje en el portal público es rechazado.
3. **Given** un cupón configurado con restricción a categorías específicas (ej. solo *Classic* y *Superior*), **When** un usuario intenta canjearlo en una reserva de categoría *De Luxe*, **Then** el sistema rechaza el cupón informando que no es aplicable a la categoría elegida.
4. **Given** un cupón configurado con estadía mínima de noches (ej. mínimo 3 noches), **When** un usuario intenta aplicarlo en una estadía de 2 noches, **Then** el sistema lo rechaza indicando la cantidad de noches mínimas requeridas.

---

### User Story 3 - Auditoría y Trazabilidad de Canjes (Priority: P2)

Como administrador, quiero ver en el detalle de cada cupón y en cada reserva el registro de los canjes efectuados, para auditar qué clientes utilizaron las promociones y el impacto económico generado.

**Why this priority**: Facilita el control de gestión y evita discrepancias en la conciliación de cobros manuales.

**Independent Test**: Se realiza una reserva utilizando un cupón; el administrador abre la reserva y verifica el código de cupón y el monto bonificado; luego abre el listado de cupones y visualiza el incremento en el contador de usos consumidos.

**Acceptance Scenarios**:

1. **Given** una reserva confirmada con cupón aplicado, **When** el administrador consulta el detalle de la reserva en el panel, **Then** visualiza el código del cupón utilizado y el desglose del descuento aplicado.
2. **Given** un cupón con límite de N usos, **When** se consulta su ficha en el panel administrativo, **Then** se muestra la cantidad de usos consumidos, usos actualmente reservados en *soft lock* activo y usos restantes disponibles.

---

### Edge Cases

- **Formato del código:** Códigos ingresados con espacios al inicio/final o en minúsculas deben recortarse (*trim*) y convertirse a mayúsculas automáticamente antes de validarse.
- **Monto fijo superior al valor de la reserva:** Si un cupón otorga un descuento numérico fijo superior al subtotal de la estadía, el descuento se topa al 100% del subtotal, resultando en un total a pagar de $0 (nunca total negativo).
- **Cancelación de reserva pendiente:** Si una reserva *Pendiente* con cupón aplicado es cancelada por falta de pago o vencimiento, el uso del cupón asociado se restituye automáticamente al cupón para no perjudicar al huésped o permitir reutilización según la política del complejo.
- **Expiración de Soft Lock:** Si transcurren los 15 minutos de soft lock sin confirmación, el cupón bloqueado se libera automáticamente sin requerir intervención manual.
- **Colisión de códigos:** El sistema debe rechazar la creación de cupones cuyo código de 6 caracteres ya exista en la base de datos (insensible a mayúsculas/minúsculas).

---

## Requirements *(mandatory)*

### Functional Requirements

- **FR-001**: El sistema DEBE permitir al administrador crear cupones de descuento identificados por un código único de exactamente 6 caracteres alfanuméricos (letras sin acentos ni caracteres especiales y números, ej. `VERA26`, `DESC10`).
- **FR-002**: El sistema DEBE validar que el código de 6 caracteres sea único en el sistema, normalizándolo siempre a mayúsculas.
- **FR-003**: El sistema DEBE permitir configurar el tipo de beneficio del cupón:
  - **Porcentaje**: porcentaje de descuento sobre el subtotal (entre 1% y 100%).
  - **Monto Fijo**: valor numérico monetario fijo diferenciado para ARS y para USD.
- **FR-004**: El sistema DEBE requerir, para cupones de monto fijo, la carga del importe en ARS y/o en USD, aplicando en cada cotización el monto correspondiente a la moneda elegida por el huésped.
- **FR-005**: El sistema DEBE permitir definir la cantidad máxima de usos permitidos para el cupón (número entero positivo ≥ 1; un valor de 1 configura un cupón de uso único para un cliente específico).
- **FR-006**: El sistema DEBE registrar la fecha y hora de vencimiento del cupón, a partir de la cual queda inhabilitado para nuevos canjes.
- **FR-007**: El sistema DEBE permitir al administrador activar o desactivar manualmente un cupón en cualquier momento desde el panel.
- **FR-008**: El sistema DEBE permitir configurar la regla de acumulación con descuentos por estadía prolongada:
  - **Acumulable**: se suma el beneficio del cupón al descuento por cantidad de noches aplicable.
  - **No acumulable**: se aplica únicamente el descuento que represente el mayor beneficio económico para el huésped.
- **FR-009**: El sistema DEBE permitir configurar opcionalmente una cantidad mínima de noches requeridas para que el cupón sea válido.
- **FR-010**: El sistema DEBE permitir restringir opcionalmente la validez del cupón a una o varias categorías de alojamiento específicas, o habilitarlo para todas.
- **FR-011**: El sistema DEBE proveer en el portal público un campo de texto para que el usuario ingrese el código de cupón durante el flujo de reserva.
- **FR-012**: El sistema DEBE validar al ingresar el cupón: sintaxis de 6 caracteres, existencia, estado activo, fecha vigente, existencia de cupos de uso restantes, cumplimiento de estadía mínima y coincidencia con la categoría seleccionada.
- **FR-013**: El sistema DEBE reservar temporalmente 1 uso del cupón bajo el mecanismo de *soft lock* de 15 minutos en cuanto el usuario avanza al formulario de datos con un cupón válido.
- **FR-014**: El sistema DEBE liberar de inmediato el uso reservado del cupón si el *soft lock* expira, si el usuario quita el cupón o si abandona la reserva.
- **FR-015**: El sistema DEBE consolidar el descuento del cupón en la reserva al confirmarse en estado *Pendiente*, incrementando en 1 el contador de usos consumidos del cupón.
- **FR-016**: El sistema DEBE restituir el uso del cupón si la reserva es cancelada por vencimiento del plazo de pago.
- **FR-017**: El sistema DEBE almacenar y exhibir en el detalle de la reserva el código del cupón aplicado y el monto exacto descontado.
- **FR-018**: El sistema DEBE impedir que un descuento por cupón resulte en un importe total final menor a cero.
- **FR-019**: El sistema DEBE mostrar en el panel administrativo el listado de cupones con sus métricas: código, tipo, valor, usos máximos, usos consumidos, usos en soft lock activo, fecha de expiración y estado.
- **FR-020**: El sistema DEBE registrar en el historial de cada cupón el listado de reservas que lo hayan canjeado.

---

### Key Entities

- **Cupón de Descuento (Discount Coupon)**:
  - `codigo`: cadena alfanumérica de 6 caracteres en mayúsculas (clave única).
  - `tipo_descuento`: `PORCENTAJE` o `MONTO_FIJO`.
  - `porcentaje`: número entero (1 a 100), aplicable si el tipo es porcentaje.
  - `monto_fijo_ars`: monto numérico decimal en Pesos Argentinos, aplicable si el tipo es monto fijo.
  - `monto_fijo_usd`: monto numérico decimal en Dólares Estadounidenses, aplicable si el tipo es monto fijo.
  - `max_usos`: cantidad total de canjes permitidos (ej. 1 para uso personal).
  - `usos_consumidos`: contador de reservas confirmadas que utilizaron el cupón.
  - `fecha_vencimiento`: fecha y hora de expiración en zona horaria de Buenos Aires.
  - `es_acumulable`: booleano indicando si se acumula con descuentos de estadía larga.
  - `min_noches`: número entero de noches mínimas exigidas (opcional, por defecto 1).
  - `categorias_permitidas`: lista de categorías donde el cupón es válido (opcional, vacío = todas).
  - `activo`: booleano indicando si el cupón está disponible para uso.

- **Reserva de Cupón en Soft Lock (Coupon Soft Lock Link)**:
  - Vinculación temporal entre un cupón y un soft lock de unidad física con marca temporal de 15 minutos.

- **Aplicación de Cupón en Reserva (Reservation Coupon Link)**:
  - Asociación entre la reserva creada y el cupón canjeado, indicando el monto monetario efectivamente bonificado.

---

## Success Criteria *(mandatory)*

### Measurable Outcomes

- **SC-001**: El huésped puede validar y ver reflejado el descuento de su cupón en menos de 1 segundo tras ingresarlo en el portal público.
- **SC-002**: Ante cupones de uso único (1 uso), el sistema garantiza cero sobre-canjes (exactamente 1 reserva puede consumirlo, impidiendo canjes simultáneos mediante reserva en soft lock).
- **SC-003**: El administrador puede dar de alta un nuevo cupón completamente configurado en el panel en menos de 1 minuto.
- **SC-004**: El 100% de los cálculos de cotización con cupón (porcentaje o monto fijo bi-monetario, acumulable o no acumulable) arroja el resultado matemático exacto sin inconsistencias monetarias.
- **SC-005**: El 100% de los cupones vencidos o agotados son rechazados de forma transparente con mensajes claros para el usuario sin interrumpir el flujo de reserva regular.

---

## Assumptions

- **Formato estricto de código**: Todos los códigos de cupón tienen exactamente 6 caracteres alfanuméricos en mayúsculas sin espacios ni símbolos (ej. `PROMO1`, `DESC20`).
- **Moneda de cotización**: Si un cupón de monto fijo solo tiene cargado valor en ARS y el usuario cotiza en USD (o viceversa), el sistema no aplica conversión automática y solicita al usuario cambiar de moneda o muestra que el cupón no es válido para la moneda seleccionada.
- **Prevalencia no acumulable**: Cuando un cupón no es acumulable y coincide con un descuento de noches, rige el descuento que resulte en el menor importe total a pagar para el huésped.
- **Restitución por cancelación**: La restitución del cupón aplica a reservas canceladas por vencimiento de pago o canceladas por el administrador antes de la fecha de check-in.
