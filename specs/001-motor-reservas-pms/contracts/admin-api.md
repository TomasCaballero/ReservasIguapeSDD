# Contratos de API Administrativa: Panel PMS (001-motor-reservas-pms)

Todos los endpoints administrativos bajo `/api/admin/*` requieren sesión activa de administrador validada mediante cookie HttpOnly o cabecera de autorización Bearer de sesión. En caso contrario responden `401 Unauthorized`.

---

## 1. Autenticación Administrativa
- **POST `/api/admin/auth/login`**
  - **Body**: `{ "email": "admin@iguapeaparts.com", "password": "..." }`
  - **Respuesta 200**: Setea cookie de sesión `session_token` (HttpOnly, Secure, SameSite=Lax). Body: `{ "user": { "id": "...", "name": "Admin", "email": "..." } }`
  - **Respuesta 401**: Credenciales inválidas.
- **POST `/api/admin/auth/logout`**
  - **Respuesta 200**: Invalida sesión y limpia la cookie.
- **GET `/api/admin/auth/me`**
  - **Respuesta 200**: Retorna usuario actual logueado.

---

## 2. Gestión de Reservas y Ciclo de Vida
- **GET `/api/admin/reservations`**
  - **Query Params**: `status`, `search` (código, nombre, documento), `dateFrom`, `dateTo`, `page`, `limit`
  - **Respuesta 200**: Lista paginada de reservas con cliente, unidad, fechas y estado financiero.
- **GET `/api/admin/reservations/[id]`**
  - **Respuesta 200**: Detalle completo con desglose tarifario, acompañantes, historial de cobros y notas.
- **PATCH `/api/admin/reservations/[id]/status`**
  - **Body**: `{ "status": "CONFIRMED" | "CANCELLED" | "FINISHED" | "PENDING", "reason": "..." }`
  - **Respuesta 200**: Estado actualizado y ocupación modificada acordemente.
  - **Respuesta 409 Conflict**: En caso de reactivación (`PENDING` o `CONFIRMED`) sin cupo disponible en las fechas.
- **PATCH `/api/admin/reservations/[id]/assign-unit`**
  - **Body**: `{ "unitId": "uuid-unit-2" }`
  - **Respuesta 200**: Unidad asignada.
  - **Respuesta 409 Conflict**: Unidad ocupada en las fechas de la estadía.
- **POST `/api/admin/reservations/[id]/mark-contacted`**
  - **Body**: `{}`
  - **Respuesta 200**: Actualiza `payment_method_sent_at = now()`.

---

## 3. Calendario y Ocupación
- **GET `/api/admin/calendar`**
  - **Query Params**: `startDate` (`YYYY-MM-DD`), `endDate` (`YYYY-MM-DD`)
  - **Respuesta 200**: Matriz de unidades físicas vs días, con eventos de reservas, bloqueos manuales y bloqueos iCal. La noche de check-out aparece libre para nueva entrada.
- **POST `/api/admin/calendar/blocks`**
  - **Body**: `{ "unitId": "...", "checkIn": "...", "checkOut": "...", "notes": "Mantenimiento pintura" }`
  - **Respuesta 201**: Bloqueo manual registrado en `UnitOccupancy`.
  - **Respuesta 409**: Solapamiento con otra reserva o bloqueo activo.
- **DELETE `/api/admin/calendar/blocks/[occupancyId]`**
  - **Respuesta 200**: Bloqueo liberado.

---

## 4. Cobros Manuales y Comprobantes
- **POST `/api/admin/reservations/[id]/payments`**
  - **Form Data / Multipart**:
    - `amount`: `Decimal`
    - `currency`: `'ARS' | 'USD'`
    - `paymentMethod`: `'TRANSFER_ARS' | 'TRANSFER_USD' | 'CASH_ARS' | 'CASH_USD' | 'MERCADO_PAGO' | 'OTHER'`
    - `notes`: `String` (opcional)
    - `receipt`: `File` (opcional, PDF/JPG/PNG hasta 10 MB)
  - **Respuesta 201**: Pago registrado.
- **GET `/api/admin/payments/[paymentId]/receipt`**
  - **Respuesta 200**: Flujo de bytes del archivo comprobante con cabecera `Content-Type` y descarga protegida.
  - **Respuesta 404**: Comprobante no existente o purgado por antigüedad (> 3 meses).

---

## 5. CRM de Clientes y Cumpleañeros
- **GET `/api/admin/guests`**
  - **Query Params**: `search`, `page`, `limit`
  - **Respuesta 200**: Directorio de clientes con documento, contacto y total de estadías.
- **GET `/api/admin/guests/upcoming-birthdays`**
  - **Respuesta 200**: Clientes con cumpleaños en los próximos 30 días respecto a la fecha actual en Buenos Aires (contemplando el 29 de febrero en años comunes como 28 de febrero).
- **POST `/api/admin/guests/[id]/anonymize`**
  - **Respuesta 200**: Sustitución irreversible de datos personales por cadenas genéricas anonimizadas.

---

## 6. Sincronización iCal y Tareas Cron
- **POST `/api/admin/units/[id]/sync-ical`**
  - **Respuesta 200**: Sincronización inmediata del feed externo de la unidad.
- **POST `/api/cron/tick`**
  - **Headers**: `Authorization: Bearer $CRON_SECRET`
  - **Respuesta 200**:
    ```json
    {
      "syncedIcalUnits": 4,
      "expiredReservationsCount": 1,
      "purgedReceiptsCount": 0
    }
    ```
