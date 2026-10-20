# Contratos de API Pública: Motor de Reservas (001-motor-reservas-pms)

Todos los endpoints públicos responden con formato JSON, cabeceras de no-cache donde aplique y están optimizados para operar sin requerir inicio de sesión de huésped.

---

## 1. Búsqueda y Disponibilidad de Categorías
- **Ruta**: `GET /api/public/availability`
- **Descripción**: Consulta categorías con capacidad y al menos 1 unidad libre para el rango de fechas.
- **Query Params**:
  - `checkIn`: String `YYYY-MM-DD` (obligatorio, ≥ hoy en Buenos Aires)
  - `checkOut`: String `YYYY-MM-DD` (obligatorio, > checkIn)
  - `adults`: Integer (obligatorio, ≥ 1)
  - `children`: Integer (opcional, default 0, ≥ 0)
  - `currency`: String `'ARS' | 'USD'` (opcional, default 'ARS')
- **Respuestas**:
  - `200 OK`:
    ```json
    {
      "search": {
        "checkIn": "2027-01-15",
        "checkOut": "2027-01-19",
        "nights": 4,
        "adults": 2,
        "children": 1,
        "currency": "ARS"
      },
      "categories": [
        {
          "id": "uuid-cat-1",
          "slug": "classic",
          "name": "Departamento Classic",
          "description": "2 ambientes con vista al jardín...",
          "maxOccupancy": 4,
          "capacityAdults": 3,
          "capacityChildren": 2,
          "availableUnitsCount": 2,
          "pricing": {
            "currency": "ARS",
            "baseNightlyPrice": 65000.00,
            "subtotal": 260000.00,
            "appliedDiscountPercent": 10,
            "discountAmount": 26000.00,
            "totalPrice": 234000.00,
            "nightlyBreakdown": [
              { "date": "2027-01-15", "rate": 65000.00, "season": "Alta Verano" },
              { "date": "2027-01-16", "rate": 65000.00, "season": "Alta Verano" },
              { "date": "2027-01-17", "rate": 65000.00, "season": "Alta Verano" },
              { "date": "2027-01-18", "rate": 65000.00, "season": "Alta Verano" }
            ]
          },
          "images": ["/images/categories/classic-1.jpg", "/images/categories/classic-2.jpg"]
        }
      ]
    }
    ```
  - `400 Bad Request`: Parámetros inválidos (ej. fechas pasadas, check-out ≤ check-in, falta de adultos).

---

## 2. Creación / Activación de Soft Lock (Paso 2)
- **Ruta**: `POST /api/public/soft-lock`
- **Descripción**: Reserva temporalmente una unidad física de la categoría por 15 minutos mientras el huésped carga sus datos.
- **Body**:
  ```json
  {
    "categoryId": "uuid-cat-1",
    "checkIn": "2027-01-15",
    "checkOut": "2027-01-19"
  }
  ```
- **Respuestas**:
  - `201 Created`:
    ```json
    {
      "lockToken": "a3f8c49e2b10d7... (64 hex chars)",
      "unitId": "uuid-unit-1",
      "expiresAt": "2027-01-10T15:45:00.000Z",
      "expiresInSeconds": 900
    }
    ```
  - `409 Conflict`: No hay unidades físicas libres para esa categoría en las fechas solicitadas.

---

## 3. Confirmación de Reserva Web Directa
- **Ruta**: `POST /api/public/bookings`
- **Descripción**: Confirma la reserva convirtiendo el soft lock en reserva confirmada en estado `PENDING`.
- **Headers**:
  - `X-Soft-Lock-Token`: `String` (token retornado por `/api/public/soft-lock`)
- **Body**:
  ```json
  {
    "categoryId": "uuid-cat-1",
    "checkIn": "2027-01-15",
    "checkOut": "2027-01-19",
    "adults": 2,
    "children": 1,
    "currency": "ARS",
    "guest": {
      "docType": "DNI",
      "docNumber": "35892104",
      "firstName": "Juan",
      "lastName": "Pérez",
      "email": "juan.perez@example.com",
      "phone": "+5491145678901",
      "birthDate": "1988-06-20"
    },
    "companions": [
      {
        "firstName": "María",
        "lastName": "Gómez",
        "docType": "DNI",
        "docNumber": "37123456",
        "birthDate": "1990-11-14"
      }
    ],
    "notes": "Llegamos alrededor de las 14 hs"
  }
  ```
- **Respuestas**:
  - `201 Created`:
    ```json
    {
      "bookingCode": "IG-93821K",
      "status": "PENDING",
      "totalPrice": 234000.00,
      "currency": "ARS",
      "guest": {
        "fullName": "Juan Pérez",
        "email": "juan.perez@example.com"
      },
      "dates": {
        "checkIn": "2027-01-15",
        "checkOut": "2027-01-19"
      },
      "message": "¡Tu solicitud de reserva fue recibida! Un recepcionista te contactará a la brevedad por WhatsApp para coordinar el pago de la seña."
    }
    ```
  - `409 Conflict`: El soft lock expiró y la unidad ya fue tomada por otra reserva.
  - `422 Unprocessable Entity`: Error de validación en datos del titular o acompañantes.

---

## 4. Exportación iCal de Unidad Física (Canales Externos)
- **Ruta**: `GET /api/ical/[unitId]/feed.ics?token=[token]`
- **Descripción**: Feed iCalendar estándar RFC 5545 para Booking/Airbnb.
- **Respuestas**:
  - `200 OK`: `text/calendar; charset=utf-8` con eventos de ocupación y resúmenes anónimos (`STATUS:CONFIRMED`, `SUMMARY:Iguapé Apart Ocupado`).
  - `404 Not Found`: Si la unidad no existe o el `token` no coincide exactamente con `Unit.ical_export_token`.
