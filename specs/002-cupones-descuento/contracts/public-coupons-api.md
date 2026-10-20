# Contratos de API Pública: Cupones y Protección Anti-Bot (002-cupones-descuento)

---

## 1. Validación y Aplicación de Cupón en Portal Público
- **Ruta**: `POST /api/public/coupons/validate`
- **Descripción**: Valida el código de 6 dígitos ingresado por el huésped en el formulario de reserva (Paso 2), calcula el beneficio correspondiente según categoría, moneda y noches, y reserva 1 uso bajo el *soft lock* de 15 minutos.
- **Protección contra Fuerza Bruta**: Máximo 5 intentos fallidos consecutivos por IP o sesión cada minuto. Si se excede, responde `429 Too Many Requests` con tiempo de penalización de 5 minutos.
- **Headers**:
  - `X-Soft-Lock-Token`: `String` (token activo del soft lock de unidad)
- **Body**:
  ```json
  {
    "code": "VERA26",
    "categoryId": "uuid-cat-1",
    "checkIn": "2027-01-15",
    "checkOut": "2027-01-19",
    "currency": "ARS",
    "baseSubtotal": 260000.00,
    "stayDiscountPercent": 10
  }
  ```
- **Respuestas**:
  - `200 OK`:
    ```json
    {
      "valid": true,
      "code": "VERA26",
      "discountType": "PERCENTAGE",
      "discountValue": 15,
      "isStackable": true,
      "stayDiscountAmount": 26000.00,
      "couponDiscountAmount": 39000.00,
      "totalDiscountAmount": 65000.00,
      "finalTotalPrice": 195000.00,
      "expiresAt": "2027-01-10T15:45:00.000Z",
      "message": "¡Cupón VERA26 aplicado exitosamente! (15% adicional)"
    }
    ```
  - `400 Bad Request`: Formato de código inválido (debe contener 6 caracteres alfanuméricos) o parámetros incompletos.
  - `404 Not Found`: Cupón inexistente.
  - `409 Conflict`: Cupón agotado o en reserva simultánea por otro usuario.
  - `422 Unprocessable Entity`: Cupón vencido, inactivo, no aplicable a la categoría seleccionada o no alcanza el mínimo de noches exigido.
  - `429 Too Many Requests`:
    ```json
    {
      "error": "Demasiados intentos fallidos. Por favor esperá 5 minutos antes de volver a intentar.",
      "retryAfterSeconds": 300
    }
    ```

---

## 2. Remoción de Cupón en Soft Lock
- **Ruta**: `DELETE /api/public/coupons/release`
- **Descripción**: Libera de inmediato el uso retenido si el usuario quita el cupón en pantalla o ingresa otro distinto.
- **Headers**:
  - `X-Soft-Lock-Token`: `String`
- **Respuestas**:
  - `200 OK`: `{ "released": true }`

---

## 3. Confirmación de Reserva con Protección Anti-Bot
- **Ruta**: `POST /api/public/bookings` (Extensión del endpoint base de 001)
- **Headers**:
  - `X-Soft-Lock-Token`: `String`
- **Body**:
  ```json
  {
    "categoryId": "uuid-cat-1",
    "checkIn": "2027-01-15",
    "checkOut": "2027-01-19",
    "adults": 2,
    "children": 1,
    "currency": "ARS",
    "couponCode": "VERA26",
    "website_url_verification": "",
    "form_loaded_token": "eyJhbGciOi...",
    "guest": {
      "docType": "DNI",
      "docNumber": "35892104",
      "firstName": "Juan",
      "lastName": "Pérez",
      "email": "juan.perez@example.com",
      "phone": "+5491145678901"
    }
  }
  ```
- **Validaciones Anti-Bot**:
  1. Si `website_url_verification` no está vacío $\rightarrow$ Rechazo con `400 Bad Request` ("Solicitud inválida").
  2. Si el tiempo entre `form_loaded_token` y el momento de confirmación es menor a 3 segundos $\rightarrow$ Rechazo con `400 Bad Request` ("Confirmación descartada por velocidad inusitada").
