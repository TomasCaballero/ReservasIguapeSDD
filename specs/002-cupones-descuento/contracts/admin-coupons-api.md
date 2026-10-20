# Contratos de API Administrativa: Gestión de Cupones (002-cupones-descuento)

Todos los endpoints requieren sesión activa de administrador (`/api/admin/*`).

---

## 1. Listado de Cupones con Métricas
- **GET `/api/admin/coupons`**
  - **Query Params**: `search`, `status` (`ACTIVE`, `INACTIVE`, `EXPIRED`, `EXHAUSTED`), `page`, `limit`
  - **Respuesta 200**:
    ```json
    {
      "coupons": [
        {
          "id": "uuid-coupon-1",
          "code": "VERA26",
          "discountType": "PERCENTAGE",
          "percentage": 15,
          "fixedAmountArs": null,
          "fixedAmountUsd": null,
          "maxUses": 10,
          "usedCount": 3,
          "activeSoftLocksCount": 1,
          "availableUses": 6,
          "expiresAt": "2027-03-31T23:59:59.000Z",
          "isStackable": true,
          "minNights": 3,
          "isActive": true,
          "allowedCategories": ["Classic", "Superior"],
          "createdAt": "2026-10-20T10:00:00.000Z"
        }
      ],
      "total": 1
    }
    ```

---

## 2. Creación de Cupón
- **POST `/api/admin/coupons`**
  - **Body**:
    ```json
    {
      "code": "DESC10",
      "discountType": "PERCENTAGE",
      "percentage": 10,
      "maxUses": 1,
      "expiresAt": "2027-02-28T23:59:59.000Z",
      "isStackable": false,
      "minNights": 1,
      "categoryIds": []
    }
    ```
  - **Respuesta 201**: Cupón creado exitosamente.
  - **Respuesta 400**: Código no cumple con 6 caracteres alfanuméricos o parámetros incoherentes.
  - **Respuesta 409**: Código ya en uso en el sistema.

---

## 3. Edición de Cupón (Protección de Integridad Contable)
- **PUT / PATCH `/api/admin/coupons/[id]`**
  - **Regla Inmutable**: Si `usedCount > 0`, los campos `code`, `discountType`, `percentage`, `fixedAmountArs` y `fixedAmountUsd` quedan bloqueados en solo lectura. Solo se admite modificar:
    - `maxUses`: `Int` (debe ser $\ge usedCount$)
    - `expiresAt`: `DateTime`
    - `isActive`: `Boolean`
    - `notes`: `String`
  - **Body**:
    ```json
    {
      "maxUses": 15,
      "expiresAt": "2027-04-15T23:59:59.000Z",
      "isActive": true
    }
    ```
  - **Respuesta 200**: Cupón actualizado.
  - **Respuesta 409 Conflict**: Intento de alterar campos protegidos en un cupón que ya posee canjes asentados.

---

## 4. Trazabilidad e Historial de Canjes de un Cupón
- **GET `/api/admin/coupons/[id]/history`**
  - **Respuesta 200**:
    ```json
    {
      "coupon": {
        "id": "uuid-coupon-1",
        "code": "VERA26",
        "totalUsages": 3
      },
      "redemptions": [
        {
          "reservationId": "uuid-res-10",
          "bookingCode": "IG-93821K",
          "guestFullName": "Juan Pérez",
          "confirmedAt": "2027-01-10T15:32:00.000Z",
          "discountAmount": 39000.00,
          "currency": "ARS",
          "stayDates": "15/01/2027 - 19/01/2027"
        }
      ]
    }
    ```
