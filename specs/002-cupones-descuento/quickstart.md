# Quickstart: Validación y Ejecución (002-cupones-descuento)

Guía rápida para verificar la funcionalidad de cupones de descuento y defensas anti-bot.

---

## 1. Escenario A: Alta de Cupón en el Panel Admin
1. Iniciar sesión en `http://localhost:7777/adminpanel/login`.
2. Dirigirse a la sección **Cupones de Descuento** (`/adminpanel/coupons`).
3. Hacer clic en "Nuevo Cupón":
   - Código: `DESC15` (6 caracteres).
   - Tipo: Porcentaje (15%).
   - Cantidad de usos: 1 (uso único).
   - Vencimiento: último día del mes próximo.
   - Acumulable: Sí.
4. Guardar y verificar que aparezca en la grilla con 0 usos consumidos y 1 disponible.

---

## 2. Escenario B: Validación y Reserva en Soft Lock (Portal Público)
1. Abrir una ventana de incógnito en `http://localhost:7777/`.
2. Cotizar una estadía de 4 noches para 2 adultos en "Apart Classic".
3. Avanzar al formulario de datos (Paso 2).
4. En el campo "Cupón de Descuento", escribir `desc15` (minúsculas):
   - El sistema normaliza a `DESC15` y aplica el 15% sobre el subtotal.
   - Se muestra el desglose del descuento por noches y el descuento por cupón sumados.
5. Abrir una segunda ventana de incógnito e intentar ingresar el mismo cupón `DESC15` sobre otra reserva:
   - El sistema debe responder que el cupón no tiene usos disponibles (retenido por el soft lock de la primera ventana).
6. En la primera ventana, completar los datos del titular y confirmar la reserva:
   - La reserva se crea con el descuento reflejado.
   - En el panel admin, el cupón pasa a figurar con 1 uso consumido (0 disponibles).

---

## 3. Escenario C: Protección contra Fuerza Bruta
1. En el formulario de reserva, ingresar sucesivamente 5 códigos erróneos inexistentes (ej. `ERR001`, `ERR002`, `ERR003`, `ERR004`, `ERR005`).
2. Al 6° intento dentro del mismo minuto, el sistema debe responder `429 Too Many Requests` indicando que se debe esperar 5 minutos.

---

## 4. Escenario D: Validación de Protección Anti-Bot
1. Enviar una petición POST a `/api/public/bookings` simulando un bot:
   - **Caso 1**: Incluyendo cualquier texto en el campo invisible `website_url_verification`.
   - **Caso 2**: Enviando la confirmación con una marca de tiempo inferior a 3 segundos desde la carga.
2. En ambos casos, el servidor debe rechazar la solicitud sin crear registros en la base de datos ni alterar los usos del cupón.

---

## 5. Ejecución de Tests Automatizados
```bash
# Tests unitarios del motor de cálculo de cupones y acumulabilidad
npx vitest run tests/unit/pricing-coupons.test.ts

# Tests de integración de soft-lock de cupones y rate limit
npx vitest run tests/integration/coupon-soft-lock.test.ts

# Test E2E de canje completo
npx playwright test tests/e2e/coupon-redemption.spec.ts
```
