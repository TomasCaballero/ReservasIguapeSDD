# Quickstart: Validación y Ejecución (001-motor-reservas-pms)

Guía rápida para levantar el entorno de desarrollo y validar los flujos críticos de extremo a extremo.

---

## 1. Requisitos Previos

- **Node.js**: v22 LTS o superior
- **PostgreSQL**: v17 con extensión `btree_gist` habilitada
- **NPM**: v10+

---

## 2. Configuración del Entorno Local

1. **Variables de entorno (`.env`)**:
   ```bash
   DATABASE_URL="postgresql://postgres:postgres@localhost:5432/reservas_iguape?schema=public"
   DIRECT_URL="postgresql://postgres:postgres@localhost:5432/reservas_iguape?schema=public"
   SESSION_SECRET="generar_clave_criptografica_segura_de_al_menos_32_bytes"
   CRON_SECRET="clave_secreta_para_ejecucion_cron"
   ADMIN_EMAIL="admin@iguapeaparts.com"
   ADMIN_PASSWORD="ContraseñaSegura123!"
   RECEIPTS_DIR="storage/receipts"
   ```

2. **Instalación y Base de Datos**:
   ```bash
   npm install
   npx prisma generate
   npx prisma migrate deploy
   npx prisma db seed
   ```

3. **Ejecución del Servidor de Desarrollo**:
   ```bash
   npm run dev
   # Servidor escuchando en http://localhost:7777
   ```

---

## 3. Escenarios de Validación Rápida

### Escenario A: Búsqueda y Reserva en Portal Público
1. Acceder a `http://localhost:7777/`
2. Seleccionar fechas: del 15 al 19 del mes próximo, 2 adultos.
3. Verificar que se liste la categoría "Departamento Classic" con desglose de tarifas en ARS y USD.
4. Presionar "Reservar" e ingresar al formulario de datos:
   - Se activa el contador de *soft lock* de 15 minutos en pantalla.
   - Completar datos del titular y acompañante.
5. Confirmar reserva:
   - Se muestra pantalla de confirmación con código `IG-XXXXXX` en estado `PENDING`.
   - La unidad queda bloqueada en el calendario.

### Escenario B: Calendario Administrativo y Noche de Check-out Libre
1. Acceder a `http://localhost:7777/adminpanel/login` con credenciales de admin.
2. Navegar a **Calendario**:
   - Para la reserva del 15 al 19, verificar que las noches 15, 16, 17 y 18 figuren ocupadas.
   - El día 19 (noche de salida) debe figurar libre para un nuevo check-in.
3. Abrir otra ventana de incógnito y cotizar una reserva del 19 al 22 para la misma unidad/categoría: debe figurar disponible.

### Escenario C: Registro de Cobro y Carga de Comprobante
1. En `/adminpanel/reservations`, abrir la reserva pendiente.
2. Hacer clic en "Registrar Cobro":
   - Monto: seña del 50%.
   - Medio: Transferencia Bancaria ARS.
   - Adjuntar comprobante PDF de prueba.
3. Guardar y verificar que el pago se asiente en el balance de la reserva.
4. Descargar el comprobante adjunto para confirmar que se sirve con verificación de sesión.

### Escenario D: Batería de Tests Automatizados
```bash
# Tests unitarios y de base de datos
npm test

# Tests E2E con Playwright (single worker)
npx playwright test
```
