# Implementation Plan: Cupones de Descuento Promocionales

**Branch**: `002-cupones-descuento` | **Date**: 2026-10-20 | **Spec**: [spec.md](file:///C:/Users/cabal/OneDrive/Documentos/Port/iguape/AppReservasSDD/specs/002-cupones-descuento/spec.md)

**Input**: Feature specification from `/specs/002-cupones-descuento/spec.md`

---

## Summary

Incorporar la gestión y aplicación de cupones de descuento promocionales al ecosistema de reservas de Iguapé Aparts:
1. **Portal Público**: Ingreso de código de 6 caracteres alfanuméricos en el Paso 2 de reserva con normalización automática a mayúsculas, cálculo bi-monetario (ARS/USD), soporte de acumulación porcentual y retención temporal atada al *soft lock* de 15 minutos para evitar sobre-canjes en cupones de uso único.
2. **Defensas Perimetrales**: Rate limiting contra fuerza bruta de códigos de 6 caracteres (5 intentos erróneos por minuto con bloqueo de 5 minutos) y protección anti-bot nativa en la confirmación de reservas (honeypot invisible + time-gate de permanencia ≥ 3 segundos).
3. **Panel Administrativo**: Módulo CRUD para cupones, con control de usos máximos, restricciones por categoría/noches, bloqueo de edición sobre campos sensibles en cupones con canjes asentados y trazabilidad histórica de uso por reserva.

---

## Technical Context

**Language/Version**: TypeScript 5.5+ / Node.js 22 LTS

**Primary Dependencies**:
- Next.js 16 (App Router con `proxy.ts`)
- React 19
- Tailwind CSS 4
- Prisma 7.10.0 (cliente generado en `app/generated/prisma`)
- `date-fns` / `date-fns-tz` (cálculo de vigencia en `America/Argentina/Buenos_Aires`)
- `crypto` (módulo nativo de Node.js para generación y verificación de tokens time-gate)

**Storage**:
- PostgreSQL 17 relacional con índices parciales para soft locks de cupones vigentes.

**Testing**:
- Vitest 5 (tests unitarios de la función pura de pricing y tests de integración con base de datos de soft-lock de cupones y concurrencia)
- Playwright (test E2E de canje en el portal público y administración en el panel)

**Target Platform**: Servidor Next.js Node.js en puerto `7777`.

**Project Type**: Feature complementaria sobre la aplicación web existente.

**Performance Goals**:
- Validación y recálculo de cupón en portal público < 200 ms.
- Cero sobre-canjes garantizado bajo concurrencia (SC-002).

**Constraints**:
- Códigos exactamente de 6 caracteres alfanuméricos en mayúsculas `^[A-Z0-9]{6}$`.
- Total final a pagar nunca menor a 0.
- Protección anti-bot con cero dependencias externas y sin fricción para el huésped legítimo.

**Scale/Scope**: Decenas de cupones activos simultáneos, cupones individuales de uso único y promociones de temporada.

---

## Constitution Check

*GATE: Must pass before Phase 0 research. Re-check after Phase 1 design.*

| Principio Constitucional | Estado | Justificación / Cumplimiento |
|--------------------------|--------|------------------------------|
| **I. Test-First & Red-Green-Refactor** | ✅ PASA | Se planifican tests unitarios de pricing (`tests/unit/pricing-coupons.test.ts`), de integración de soft lock y E2E antes del código productivo. |
| **II. Fidelidad de Diseño Frontend** | ✅ PASA | El campo de cupón y el desglose en el formulario respetan la paleta (#2B3D24, #E4E2C5, #E6EF73) y controles accesibles `aria-invalid`. |
| **III. Mentalidad Ponytail & YAGNI** | ✅ PASA | La defensa anti-bot usa honeypot y time-gate nativos de HTML/crypto sin librerías externas de captcha; la lógica de cupones reutiliza el motor de pricing existente. |
| **IV. Integridad Anti-Overbooking en DB** | ✅ PASA | El uso de cupón se retiene en soft lock y se valida concurrentemente con el tiempo del motor PostgreSQL. |
| **V. Seguridad y Privacidad** | ✅ PASA | Rate limit nativo para evitar fuerza bruta de cupones y bloqueo de edición de cupones canjeados. |

---

## Project Structure

### Documentation (this feature)

```text
specs/002-cupones-descuento/
├── plan.md                       # Plan de implementación
├── research.md                   # Decisiones técnicas y defensas anti-bot/rate-limit
├── data-model.md                 # Modelo de datos de cupones y soft locks
├── quickstart.md                 # Guía de verificación rápida
├── contracts/
│   ├── public-coupons-api.md     # Validación y soft lock de cupones en portal
│   └── admin-coupons-api.md      # CRUD y auditoría de cupones en admin
└── checklists/
    └── requirements.md           # Checklist de requerimientos
```

### Source Code Impact

```text
app/
├── (public)/reservar/
│   └── components/
│       ├── CouponInput.tsx       # Componente de ingreso y remoción de cupón
│       └── BookingForm.tsx       # Inclusión de honeypot y token time-gate
├── adminpanel/coupons/
│   ├── page.tsx                  # Grilla y métricas de cupones
│   ├── new/page.tsx              # Formulario de alta
│   └── [id]/page.tsx             # Edición protegida e historial de canjes
├── api/
│   ├── public/
│   │   └── coupons/
│   │       ├── validate/route.ts # Validación con rate-limiting y soft-lock
│   │       └── release/route.ts  # Liberación de cupón
│   └── admin/coupons/
│       ├── route.ts              # GET listado / POST alta
│       ├── [id]/route.ts         # PUT edición protegida
│       └── [id]/history/route.ts # Historial de reservas con cupón
lib/
├── pricing/
│   └── coupons.ts                # Motor matemático de cálculo y acumulabilidad
├── security/
│   ├── rate-limiter.ts           # Limitador de intentos por IP/sesión
│   └── anti-bot.ts               # Validación honeypot y time-gate criptográfico
prisma/
└── schema.prisma                 # Modelo Coupon, CouponSoftLock, campos en Reservation
tests/
├── unit/
│   └── pricing-coupons.test.ts   # Pruebas unitarias de cálculo y combinaciones
├── integration/
│   └── coupon-soft-lock.test.ts  # Pruebas de concurrencia y retención en soft-lock
└── e2e/
    └── coupon-redemption.spec.ts # Flujo E2E de canje en portal y panel
```

**Structure Decision**: La feature se integra sobre el layout existente de la aplicación, incorporando módulos especializados en `lib/pricing/coupons.ts` y `lib/security/` sin alterar la arquitectura base.

---

## Complexity Tracking

*No se detectan violaciones a la Constitución ni dependencias adicionales no autorizadas.*
