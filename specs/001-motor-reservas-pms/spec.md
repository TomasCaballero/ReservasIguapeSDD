# Feature Specification: Iguapé Aparts — Motor de Reservas y PMS

**Feature Branch**: `001-motor-reservas-pms`

**Created**: 2026-10-20

**Status**: Draft

**Input**: User description: "Generá el spec a partir del PRD.md"

## User Scenarios & Testing *(mandatory)*

### User Story 1 - Búsqueda, Cotización y Reserva Directa por el Huésped (Priority: P1)

Como potencial huésped de Iguapé Aparts, quiero consultar fechas, cotizar en mi moneda (ARS o USD), verificar la disponibilidad de unidades y completar la reserva de forma ágil sin registrarme, para asegurar mi estadía y coordinar el pago con el establecimiento.

**Why this priority**: Es el núcleo del valor comercial y de conversión del complejo; permite al cliente auto-gestionar su reserva sin fricción, respetando la disponibilidad real e impidiendo la sobreventa.

**Independent Test**: Un visitante puede acceder al portal público, ingresar fechas y cantidad de huéspedes, seleccionar una categoría disponible, completar sus datos de contacto y acompañantes, y confirmar su reserva recibiendo confirmación con código de reserva en estado Pendiente.

**Acceptance Scenarios**:

1. **Given** un visitante en el portal público, **When** selecciona fechas (check-in y check-out) y pasajeros (mínimo 1 adulto), **Then** el sistema presenta únicamente las categorías disponibles con capacidad suficiente, indicando desglose de noches, tarifa unitaria, descuentos aplicables y precio total en la moneda elegida (ARS o USD).
2. **Given** un visitante que elige una categoría disponible y pasa al formulario de reserva, **When** accede al formulario, **Then** el sistema activa un bloqueo temporal (*soft lock*) de 15 minutos exactos sobre una unidad física de dicha categoría para garantizar su cupo mientras completa sus datos.
3. **Given** un visitante en el formulario, **When** ingresa datos válidos del titular (mayor de 18 años, documento y teléfono validados) y confirma en el modal de verificación de teléfono/WhatsApp, **Then** el sistema crea la reserva en estado *Pendiente* con origen *Web Directa*, y le muestra el código de reserva y mensaje de contacto.
4. **Given** 20 solicitudes simultáneas confirmando sobre la última unidad libre de una categoría para las mismas fechas, **When** se procesan concurrentemente, **Then** exactamente una reserva es confirmada en estado *Pendiente* y las 19 restantes son rechazadas por falta de disponibilidad sin provocar sobreventa.

---

### User Story 2 - Gestión de Inventario, Calendario y Ciclo de Reservas (Priority: P1)

Como administrador del complejo, quiero administrar las categorías, las unidades físicas, visualizar el mapa de ocupación en un calendario interactivo y gestionar el ciclo de vida de cada reserva, para mantener el control operativo y la asignación física de las habitaciones.

**Why this priority**: Sin control administrativo del inventario y del ciclo de vida de reservas, el complejo no puede operar ni asignar alojamientos a los huéspedes que reservan desde la web.

**Independent Test**: Un administrador autenticado puede crear/editar categorías y unidades físicas, ver reflejadas las reservas en el calendario visual (con noches ocupadas y noche de check-out liberada), asignar unidades a reservas y ejecutar transiciones de estado permitidas.

**Acceptance Scenarios**:

1. **Given** un administrador autenticado en el panel, **When** consulta el calendario de ocupación, **Then** visualiza cada unidad física con sus reservas activas y bloqueos, donde una estadía del día X al día Y ocupa las noches del X hasta el Y-1 inclusive, dejando el día Y disponible para un nuevo check-in.
2. **Given** una reserva en estado *Pendiente* con disponibilidad en su rango de fechas, **When** el administrador la transiciona a *Confirmada*, **Then** su estado se actualiza en el sistema y se consolida la ocupación en el calendario.
3. **Given** una reserva en estado *Confirmada* o *Pendiente*, **When** el administrador la cancela, **Then** la reserva pasa a estado *Cancelada* y las noches ocupadas se liberan de inmediato para nuevas búsquedas.
4. **Given** una reserva en estado *Cancelada* o *Finalizada*, **When** el administrador intenta reactivarla a *Pendiente* o *Confirmada* y no hay unidades disponibles para esas fechas, **Then** el sistema rechaza la operación informando la falta de disponibilidad y mantiene la reserva en su estado original.
5. **Given** una reserva *Confirmada* sin unidad asignada, **When** el administrador le asigna una unidad física libre en esas fechas, **Then** la reserva queda asignada a dicha unidad física; si la unidad ya estuviese ocupada en esas fechas, la operación es rechazada.

---

### User Story 3 - Gestión de Tarifas, Temporadas y Reglas de Descuento (Priority: P2)

Como administrador, quiero configurar precios base, temporadas especiales con estadías mínimas y reglas de descuento por cantidad de noches, para adaptar los precios a la demanda y premiar estadías prolongadas.

**Why this priority**: Permite la flexibilidad comercial del negocio, garantizando que el portal público cotice automáticamente con precisión matemática sin intervención manual.

**Independent Test**: Se configuran temporadas y reglas de descuento en el panel administrativo, y se comprueba en el cotizador del portal público que una búsqueda que cruza noches fuera y dentro de temporada prorratee correctamente cada noche y aplique el descuento correspondiente.

**Acceptance Scenarios**:

1. **Given** una temporada definida con precios diferenciados y estadía mínima (ej. 4 noches), **When** un huésped busca una estadía que abarca al menos una noche dentro de dicha temporada, **Then** el sistema exige cumplir con la estadía mínima configurada para poder cotizar y avanzar.
2. **Given** una estadía cuyas fechas combinan noches en temporada y noches fuera de temporada, **When** el sistema calcula el precio total, **Then** computa cada noche según la tarifa de la temporada a la que pertenece (o la tarifa base si no pertenece a ninguna) y suma los subtotales exactos.
3. **Given** múltiples reglas activas de descuento por estadía prolongada (ej. 10% desde 3 noches y 15% desde 5 noches), **When** se cotiza una estadía de 6 noches, **Then** el sistema aplica únicamente la regla de mayor porcentaje (15%) sobre el total general sin acumular descuentos.

---

### User Story 4 - Registro de Cobros Manuales y Control de Vencimientos (Priority: P2)

Como administrador o personal de recepción, quiero registrar cobros manuales (señas o pagos completos) adjuntando comprobantes, y disponer de alertas y vencimiento automático para reservas que no registren pago, para evitar que unidades queden retenidas innecesariamente.

**Why this priority**: Iguapé Aparts no procesa pagos online en V1; el seguimiento riguroso de pagos manuales y la liberación automática de cupos vencidos son indispensables para no perder ventas.

**Independent Test**: Se crea una reserva Pendiente; el administrador registra el envío del método de pago; si transcurre el plazo de vencimiento sin registrar ningún cobro, el sistema marca la reserva como cancelada por vencimiento y libera la unidad. Si se registra un cobro manual con comprobante, la reserva no se cancela por vencimiento.

**Acceptance Scenarios**:

1. **Given** una reserva en estado *Pendiente*, **When** el administrador contacta al huésped y registra en el sistema que envió el método de pago, **Then** el sistema guarda la marca temporal de contacto.
2. **Given** una reserva *Pendiente* sin registro de envío de método de pago tras 24 horas (o plazo configurado), **When** el administrador ingresa al panel, **Then** se muestra un aviso destacado alertando sobre la reserva demorada de contacto.
3. **Given** una reserva *Pendiente* con envío de método de pago registrado hace más de 5 días (o plazo configurado) y sin ningún cobro asentado, **When** se ejecuta el control periódico de vencimientos, **Then** el sistema cancela automáticamente la reserva con motivo "cancelada por vencimiento" y libera la unidad física/inventario.
4. **Given** una reserva, **When** el administrador registra un cobro manual indicando monto, moneda (ARS o USD), medio de pago y una referencia o comprobante adjunto válido (PDF/JPG/PNG hasta 10 MB), **Then** el cobro queda registrado en el historial de la reserva y el archivo queda disponible para consulta protegida.
5. **Given** archivos de comprobantes adjuntos con más de 3 meses de antigüedad desde su carga, **When** corre el proceso de purga de archivos, **Then** se eliminan los archivos físicos adjuntos conservando intactos los registros de auditoría y montos en la base de datos.

---

### User Story 5 - Sincronización Externa iCal y Prevención de Overbooking (Priority: P2)

Como administrador y propietario, quiero sincronizar la ocupación de las unidades con canales externos (como Booking y Airbnb) mediante calendarios iCal bidireccionales, para impedir reservas simultáneas entre la web directa y plataformas externas.

**Why this priority**: Evita el overbooking multicanal sin costo de intermediarios ni necesidad de integración API compleja.

**Independent Test**: Se configura una URL de importación iCal externa en una unidad; se simula la importación de un evento ocupado; la unidad pasa a estar bloqueada en el calendario y se reduce la disponibilidad en la web pública. Se consulta la URL de exportación iCal con token válido y se verifica la salida de fechas sin datos personales de huéspedes.

**Acceptance Scenarios**:

1. **Given** una unidad física con feed iCal externo configurado, **When** se ejecuta la sincronización (automática cada 15 minutos o manual inmediata vía botón "Sincronizar ahora"), **Then** el sistema crea bloqueos en el calendario para cada rango ocupado del feed externo, reduciendo la disponibilidad disponible para la web.
2. **Given** una unidad física con reservas o bloqueos, **When** un canal externo consulta su URL de exportación iCal con su token de seguridad de al menos 128 bits, **Then** el sistema devuelve el calendario estándar iCal reflejando las fechas ocupadas sin incluir nombres, correos ni datos personales de los huéspedes.
3. **Given** una solicitud a la URL de exportación iCal sin token o con token erróneo, **When** se procesa la petición, **Then** el sistema responde con error no encontrado (HTTP 404) protegiendo la existencia y estado de la unidad.

---

### User Story 6 - CRM de Huéspedes, Cumpleañeros y Anonimización (Priority: P3)

Como administrador, quiero contar con un registro histórico de clientes identificado por documento, identificar huéspedes frecuentes y próximos cumpleañeros para acciones de fidelización, y disponer de una opción para anonimizar datos personales conforme a la normativa legal vigente.

**Why this priority**: Potencia la fidelización y el trato personalizado del huésped, al tiempo que asegura el cumplimiento estricto de la Ley 25.326 de Protección de Datos Personales.

**Independent Test**: Un huésped realiza dos reservas con el mismo documento; el administrador consulta su ficha en el CRM y observa el historial consolidado de ambas estadías con sus datos actualizados. El widget de cumpleañeros muestra huéspedes con cumpleaños en los próximos 30 días. Al ejecutar una solicitud de anonimización, los datos personales se sustituyen por valores anonimizados conservando el registro estadístico de la estadía.

**Acceptance Scenarios**:

1. **Given** reservas confirmadas o finalizadas, **When** el administrador consulta el CRM, **Then** visualiza a los clientes unificados por Tipo y Número de Documento, con sus datos de contacto actualizados según su última reserva y el historial de sus visitas.
2. **Given** el panel de control administrativo, **When** el administrador visualiza el widget de "Próximos Cumpleañeros", **Then** aparecen listados los clientes cuya fecha de cumpleaños ocurra dentro de los próximos 30 días respecto de la fecha actual en Argentina.
3. **Given** un cliente que solicita la supresión de sus datos personales, **When** el administrador registra la solicitud de anonimización y la ejecuta, **Then** los datos identificatorios (nombre, apellido, documento, email, teléfono, fecha de nacimiento del titular y acompañantes) son reemplazados irreversiblemente por cadenas anónimas genéricas, conservándose las fechas de ocupación para estadísticas históricas.
4. **Given** una solicitud de anonimización registrada, **When** transcurren 30 días sin completarse la anonimización, **Then** el sistema marca la solicitud con estado de plazo vencido para alertar al administrador.

---

### Edge Cases

- **Check-in en el límite del día:** Si son las 23:30 en Argentina (02:30 UTC del día siguiente), la fecha válida para check-in inmediato debe ser el día actual en Argentina (`America/Argentina/Buenos_Aires`).
- **Noche de Check-out:** Una reserva finaliza en la mañana/mediodía del check-out; esa misma noche queda inmediatamente libre para que otro huésped haga check-in.
- **Vencimiento de Soft Lock durante la carga:** Si el usuario tarda más de 15 minutos en el formulario de reserva, el soft lock expira; al pulsar confirmar, si la unidad sigue libre se renueva automáticamente sin perder los datos ya escritos; si fue ocupada por otro usuario, se notifica el conflicto sin vaciar el formulario.
- **Cumpleaños en año no bisiesto:** Un cliente nacido un 29 de febrero debe ser contabilizado para el día 28 de febrero en años comunes dentro del widget de cumpleañeros.
- **Parámetros de URL inválidos o manipulados:** Parámetros como `checkin`, `checkout` o `categoria` con valores corruptos o inexistentes deben ignorarse en silencio sin provocar caídas ni mensajes crípticos, dejando los campos en su estado inicial por defecto.
- **Rutas no existentes:** Cualquier acceso a URLs inexistentes debe redirigir limpiamente a la portada pública (`/`).

---

## Requirements *(mandatory)*

### Functional Requirements

#### Portal Público (Motor de Reservas)

- **FR-001**: El sistema DEBE proveer un selector de rango interactivo para elegir las fechas de *Check-in* y *Check-out*.
- **FR-002**: El sistema DEBE permitir seleccionar la cantidad de huéspedes divididos en adultos y niños.
- **FR-003**: El sistema DEBE requerir obligatoriamente al menos 1 adulto para permitir la cotización y reserva.
- **FR-004**: El sistema DEBE excluir del catálogo aquellas categorías cuya capacidad máxima sea inferior al total de ocupantes (adultos + niños).
- **FR-005**: El sistema DEBE preseleccionar las fechas de búsqueda si se reciben en la URL mediante parámetros estándar (`checkin` y `checkout` en formato `AAAA-MM-DD`).
- **FR-006**: El sistema DEBE preseleccionar la categoría si se recibe el parámetro de URL `categoria=<slug>`.
- **FR-007**: El sistema DEBE descartar silenciosamente parámetros de URL con fechas inválidas o slugs inexistentes sin mostrar errores en pantalla.
- **FR-008**: El sistema DEBE validar y rechazar búsquedas con: check-in anterior a hoy, estadías menores a 1 noche, estadías mayores al máximo de noches permitido (configurable, por defecto 30), o check-in posterior a la anticipación máxima (configurable, por defecto 12 meses).
- **FR-009**: El sistema DEBE mostrar exclusivamente aquellas categorías que cuenten con al menos una unidad física disponible para todo el rango seleccionado.
- **FR-010**: El sistema DEBE permitir al usuario alternar entre monedas (ARS y USD), reflejando la moneda seleccionada en todo el flujo de reserva y confirmación.
- **FR-011**: El sistema DEBE mostrar el desglose de tarifas por noche y la tarifa promedio o específica de cada noche cuando la estadía cruce noches de distintas tarifas.
- **FR-012**: El sistema DEBE exhibir claramente la cantidad total de noches calculadas.
- **FR-013**: El sistema DEBE exhibir el importe total final de la estadía con los descuentos aplicados.
- **FR-014**: El sistema DEBE calcular el costo de cada noche considerando la temporada que corresponda a esa fecha, o el precio base de la categoría si no cae en ninguna temporada.
- **FR-015**: El sistema DEBE obligar a cumplir la estadía mínima de una temporada cuando al menos una noche de la estadía caiga dentro de dicha temporada.
- **FR-016**: El sistema DEBE aplicar sobre el total el descuento de mayor porcentaje entre las reglas activas que cumplan el umbral de noches mínimas, sin acumulación de descuentos.
- **FR-017**: El sistema DEBE exigir al titular los campos obligatorios: Nombre, Apellido, Email, Teléfono con código de país, Tipo y Número de Documento, y Fecha de Nacimiento.
- **FR-018**: El sistema DEBE validar que el titular de la reserva tenga 18 años cumplidos a la fecha actual.
- **FR-019**: El sistema DEBE validar sintácticamente que el correo electrónico cumpla el formato `usuario@dominio.tld`.
- **FR-020**: El sistema DEBE proveer un selector de país para el teléfono que anteponga automáticamente el prefijo internacional correspondiente.
- **FR-021**: El sistema DEBE verificar que el número telefónico sin prefijo contenga únicamente dígitos numéricos y una longitud de entre 6 y 12 dígitos.
- **FR-022**: El sistema DEBE validar el documento según su tipo: DNI entre 7 y 8 dígitos numéricos; Pasaporte alfanumérico entre 6 y 9 caracteres.
- **FR-023**: El sistema DEBE permitir agregar acompañantes de manera opcional indicando Nombre, Apellido, Documento y Fecha de Nacimiento.
- **FR-024**: El sistema DEBE desplegar un modal previo a la confirmación con el teléfono completo y aviso de contacto por WhatsApp, con opciones *Confirmar* y *Volver*.
- **FR-025**: El sistema DEBE reservar temporalmente una unidad física mediante *soft lock* de 15 minutos exactos desde que el usuario accede al formulario de datos.
- **FR-026**: El sistema DEBE descartar e ignorar automáticamente en el cálculo de disponibilidad cualquier *soft lock* transcurrido su plazo de 15 minutos.
- **FR-027**: El sistema DEBE intentar revalidar y renovar el *soft lock* vencido al pulsar confirmar; en caso de que la unidad haya sido ocupada, DEBE informar la indisponibilidad conservando los datos cargados en el formulario.
- **FR-028**: El sistema DEBE generar la reserva en estado *Pendiente* tras la confirmación en el modal.
- **FR-029**: El sistema DEBE asignar la marca de origen *Web Directa* a toda reserva originada desde el portal público.
- **FR-030**: El sistema DEBE redirigir hacia la página principal (`/`) cualquier intento de acceso a rutas inexistentes.

#### Portal Privado (Panel de Administración)

- **FR-031**: El sistema DEBE exigir inicio de sesión con email y contraseña para acceder a cualquier ruta del panel administrativo.
- **FR-032**: El sistema DEBE aplicar bloqueo de inicio de sesión durante 15 minutos tras 3 intentos fallidos consecutivos, evaluado independientemente por dirección IP y por cuenta de correo.
- **FR-033**: El sistema DEBE servir las páginas del panel con cabeceras/etiquetas `noindex` y NUNCA enlazar hacia el panel desde el portal público.
- **FR-034**: El sistema DEBE permitir al administrador crear categorías (nombre, slug, descripción breve, capacidad máxima, precio base en ARS y USD).
- **FR-035**: El sistema DEBE permitir al administrador editar los datos de cualquier categoría existente.
- **FR-036**: El sistema DEBE permitir eliminar una categoría únicamente si no posee reservas futuras en estado *Pendiente* o *Confirmada*.
- **FR-037**: El sistema DEBE permitir crear unidades físicas asociadas a una categoría.
- **FR-038**: El sistema DEBE permitir editar unidades físicas y su asignación de categoría.
- **FR-039**: El sistema DEBE permitir eliminar una unidad física únicamente si no posee reservas futuras en estado *Pendiente* o *Confirmada*.
- **FR-040**: El sistema DEBE permitir configurar reglas de descuento por cantidad de noches (noches mínimas y porcentaje de descuento sobre el total).
- **FR-041**: El sistema DEBE permitir editar las reglas de descuento existentes.
- **FR-042**: El sistema DEBE permitir activar y desactivar reglas de descuento.
- **FR-043**: El sistema DEBE permitir crear temporadas con rango de fechas, estadía mínima y tarifas nocturnas específicas por categoría en ARS y USD.
- **FR-044**: El sistema DEBE permitir editar temporadas existentes.
- **FR-045**: El sistema DEBE permitir eliminar temporadas existentes.
- **FR-046**: El sistema DEBE persistir y permitir modificar los parámetros operativos del sistema: plazo de aviso de contacto sin registrar (por defecto 24 h), plazo de vencimiento de reserva pendiente (por defecto 5 días), máximo de noches por reserva (por defecto 30), máximo de anticipación (por defecto 12 meses) y plazo de solicitud de anonimización (por defecto 30 días).
- **FR-047**: El sistema DEBE ofrecer un calendario visual de ocupación mensual y semanal organizado por unidad física.
- **FR-048**: El sistema DEBE controlar que las transiciones de estado de reserva sigan estrictamente las transiciones permitidas:
  - *Pendiente* → *Confirmada* o *Cancelada*.
  - *Confirmada* → *Cancelada* o *Finalizada*.
  - *Cancelada* → *Pendiente* o *Confirmada*.
  - *Finalizada* → Cualquier otro estado.
- **FR-049**: El sistema DEBE rechazar con error de conflicto (HTTP 409) cualquier cambio a estado *Pendiente* o *Confirmada* si no existe disponibilidad para las fechas de la reserva, manteniendo el estado anterior.
- **FR-050**: El sistema DEBE permitir asignar o reasignar manualmente una unidad física a una reserva garantizando que no existan superposiciones.
- **FR-051**: El sistema DEBE permitir al administrador registrar bloqueos manuales sobre unidades físicas (mantenimiento, uso propio), reduciendo la disponibilidad de la categoría.
- **FR-052**: El sistema DEBE permitir asentar la fecha y hora en que el personal envió los datos de pago al huésped en reservas *Pendientes*.
- **FR-053**: El sistema DEBE presentar un aviso visual al ingresar al panel con el listado de reservas *Pendientes* que hayan superado el plazo de aviso (24 h) sin registro de envío de datos de pago.
- **FR-054**: El sistema DEBE cancelar automáticamente aquellas reservas *Pendientes* sin cobros registrados que hayan superado el plazo de vencimiento desde el envío de datos de pago, rotulándolas como "cancelada por vencimiento" y liberando el cupo.
- **FR-055**: El sistema DEBE permitir registrar cobros manuales asociados a una reserva, especificando monto, moneda (ARS o USD), medio de pago y obligatoriamente una referencia alfanumérica o un archivo de comprobante (formatos PDF, JPG, JPEG o PNG hasta 10 MB).
- **FR-056**: El sistema DEBE eliminar automáticamente los archivos adjuntos de comprobantes transcurridos 3 meses desde su carga, preservando los datos contables del cobro.
- **FR-057**: El sistema DEBE registrar en el CRM a todo titular de reserva, indexado unívocamente por Tipo y Número de Documento.
- **FR-058**: El sistema DEBE actualizar el email y teléfono de un cliente preexistente con los datos consignados en su última reserva.
- **FR-059**: El sistema DEBE presentar el historial cronológico de estadías y reservas asociadas a cada cliente en el CRM.
- **FR-060**: El sistema DEBE ofrecer un widget de "Próximos Cumpleañeros" listando los clientes cuyo aniversario natal ocurra en los siguientes 30 días respecto de la fecha actual.
- **FR-061**: El sistema DEBE permitir registrar una solicitud formal de anonimización para un cliente con su respectiva fecha de solicitud.
- **FR-062**: El sistema DEBE permitir ejecutar la anonimización de datos de un cliente, reemplazando datos sensibles (nombres, documentos, emails, teléfonos, fechas de nacimiento) por cadenas fijas disociadas, conservando las fechas históricas de estadía.
- **FR-063**: El sistema DEBE publicar una URL de exportación iCal protegida por cada unidad física con sus fechas ocupadas o bloqueadas, sin incluir datos personales de huéspedes.
- **FR-064**: El sistema DEBE permitir configurar enlaces iCal externos de importación para cada unidad física.
- **FR-065**: El sistema DEBE convertir los eventos importados desde canales iCal externos en bloqueos de ocupación de la unidad correspondiente.
- **FR-066**: El sistema DEBE ejecutar la sincronización automática de feeds iCal externos con una periodicidad máxima de 15 minutos.
- **FR-067**: El sistema DEBE permitir al administrador desencadenar la sincronización iCal de forma manual e inmediata desde el panel.

---

### Key Entities

- **Categoría (Category)**: Tipología de alojamiento (ej. De Luxe, Premium, Superior, Loft). Posee nombre, slug, descripción breve, capacidad máxima de huéspedes, precio base nocturno en ARS y precio base nocturno en USD. Agrupa a una o más unidades físicas.
- **Unidad Física (Physical Unit)**: Apartamento real concreto (ej. Apart 1, Apart 2). Pertenece a una categoría. Posee identificador, nombre y configuración de feeds iCal (token de exportación y URLs de importación externa).
- **Reserva (Reservation)**: Intención o contrato de estadía. Posee código identificador, fechas de check-in y check-out, cantidad de adultos y niños, estado (*Pendiente*, *Confirmada*, *Cancelada*, *Finalizada*), motivo de cancelación (opcional, ej. "cancelada por vencimiento"), origen (*Web Directa*), moneda elegida, desglose de cotización (subtotal, descuento aplicado, total final), marca de fecha/hora de envío de método de pago, cliente titular, acompañantes, cobros asociados y unidad física asignada (opcional en estado inicial, obligatoria al confirmar/ocupar).
- **Ocupación / Bloqueo (Unit Occupancy & Block)**: Intervalo de ocupación de una unidad física con rango semiabierto `[fecha_inicio, fecha_fin)`. Representa reservas activas, bloqueos manuales por mantenimiento/propietario o bloqueos importados vía iCal.
- **Soft Lock**: Bloqueo transitorio de 15 minutos sobre una unidad de una categoría, ligado a una sesión de usuario mientras completa el formulario público.
- **Cliente / Huésped (Customer / Guest)**: Persona titular identificada unívocamente por combinación de Tipo de Documento y Número de Documento. Almacena Nombre, Apellido, Email, Teléfono con prefijo internacional, Fecha de Nacimiento, historial de reservas y estado de solicitud de anonimización.
- **Acompañante (Companion)**: Persona adicional ligada a una reserva específica. Contiene Nombre, Apellido, Documento y Fecha de Nacimiento.
- **Cobro Manual (Manual Payment)**: Registro de pago recibido fuera de línea. Contiene monto, moneda (ARS o USD), método de pago utilizado (transferencia, efectivo, etc.), fecha de registro, referencia escrita y/o identificador de comprobante adjunto almacenado de forma segura.
- **Temporada (Season)**: Período de fechas de calendario con condiciones tarifarias diferenciadas. Contiene fecha inicial, fecha final, estadía mínima en noches y tabla de precios por noche para cada categoría en ARS y USD.
- **Regla de Descuento (Discount Rule)**: Promoción basada en volumen de noches. Contiene cantidad mínima de noches requeridas, porcentaje de descuento sobre el importe total y estado activo/inactivo.
- **Parámetros del Sistema (System Settings)**: Valores configurables del complejo que controlan los tiempos operativos: plazo de aviso de contacto (horas), plazo de vencimiento de reservas pendientes (días), límite máximo de noches por reserva, límite máximo de anticipación de reserva (meses) y plazo límite de anonimización (días).

---

## Success Criteria *(mandatory)*

### Measurable Outcomes

- **SC-001**: Un huésped nuevo puede cotizar, completar sus datos y generar una reserva en el portal público en menos de 2 minutos sin asistencia externa.
- **SC-002**: Ante alta concurrencia (ej. 20 solicitudes simultáneas para la última unidad disponible), el sistema garantiza cero sobreventas (exactamente 1 reserva exitosa y 19 rechazos con información clara).
- **SC-003**: El tiempo de respuesta percibido para la consulta de disponibilidad y cotización de tarifas se mantiene por debajo de 1,5 segundos (p95) bajo condiciones normales y picos de tráfico.
- **SC-004**: El portal público es 100% operable sin scroll horizontal en cualquier dispositivo con pantalla entre 360 px y 1920 px de ancho, y operable completamente mediante teclado y controles táctiles o puntero.
- **SC-005**: El 100% de los elementos visuales del portal público respeta de forma estricta la paleta de colores, tipografías y estética de la web oficial de Iguapé Aparts.
- **SC-006**: Ningún dato personal identificable de huéspedes (documento, email, teléfono, fecha de nacimiento) es accesible desde el exterior mediante endpoints públicos o feeds iCal.
- **SC-007**: Los feeds de sincronización iCal reflejan eventos externos con una latencia máxima de 15 minutos en sincronización automática y de forma inmediata ante sincronización manual.
- **SC-008**: El sistema libera automáticamente el 100% de las unidades bloqueadas por *soft locks* vencidos (al cumplirse exactamente 15 minutos) y cancela reservas pendientes sin pago al cumplirse el plazo configurado.

---

## Assumptions

- **Perfil de cobros V1**: En la versión inicial (V1) no existen pasarelas de pago electrónico en línea; todos los cobros son coordinados manualmente por el personal del complejo vía WhatsApp/transferencia y asentados por el administrador en el panel.
- **Canal de contacto**: El medio primario de comunicación con el huésped para el envío de datos de pago es WhatsApp directo y llamada/correo manual realizado por el personal.
- **Zona horaria estándar**: Todas las determinaciones de fecha ("hoy"), plazos de 24 horas y vencimientos se computan en la zona horaria oficial argentina (`America/Argentina/Buenos_Aires`).
- **Noche de check-out libre**: Se asume el estándar hotelero universal donde el día de check-out libera la unidad para un nuevo check-in en esa misma jornada (la ocupación efectiva es el conjunto de noches pernoctadas).
- **Reglas de desempate de descuentos**: Si dos reglas de descuento aplicaran para una misma cantidad de noches, rige siempre la de mayor porcentaje; en caso de igual porcentaje, rige cualquiera indistintamente dado que el resultado matemático es idéntico.
- **Cálculo de años para bisiestos**: Para clientes nacidos el 29 de febrero, en años no bisiestos el widget de cumpleaños considerará el 28 de febrero como fecha de recordatorio.
- **Purga de archivos y preservación contable**: La eliminación a los 3 meses de los comprobantes adjuntos afecta únicamente al archivo binario almacenado, preservando intactos los registros de fecha, monto, moneda y método en la base de datos para respaldo administrativo.
- **Acceso administrativo único en V1**: En la versión 1 no se diferencian roles con permisos granulares; el personal de recepción, administradores y dueños comparten el acceso administrativo unificado.
