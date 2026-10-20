# Implementation Plan: Iguapé Aparts — Motor de Reservas y PMS

**Branch**: `001-motor-reservas-pms` | **Date**: 2026-10-20 | **Spec**: [spec.md](file:///C:/Users/cabal/OneDrive/Documentos/Port/iguape/AppReservasSDD/specs/001-motor-reservas-pms/spec.md)

**Input**: Feature specification from `/specs/001-motor-reservas-pms/spec.md` y PRD canónico (`PRD.md`).

---

## Summary

Implementar el sistema integral de reservas de Iguapé Aparts compuesto por:
1. **Motor de Reservas Público**: Cotización multi-moneda (ARS/USD), selección de categorías con capacidad real, reserva asistida con soft lock de 15 minutos exactos, sin pagos online (contacto directo vía WhatsApp).
2. **Panel PMS Administrativo**: Autenticado con Argon2id, gestión de inventario (categorías y unidades físicas), calendario interactivo de ocupación con regla inmutable de noche de check-out libre, registro de cobros manuales con adjuntos protegidos, CRM de clientes con widget de cumpleañeros y sincronización iCal bidireccional contra Booking y Airbnb.
3. **Núcleo de Integridad**: Base de datos PostgreSQL 17 con exclusión constraint `btree_gist` para garantizar cero overbooking a nivel de almacenamiento.

---

## Technical Context

**Language/Version**: TypeScript 5.5+ / Node.js 22 LTS

**Primary Dependencies**:
- Next.js 16 (App Router con `proxy.ts` para enrutamiento perimetral)
- React 19
- Tailwind CSS 4
- Prisma 7.10.0 (cliente generado en `app/generated/prisma`)
- `argon2` (variante Argon2id para autenticación administrativa)
- `react-day-picker` + `date-fns` / `date-fns-tz` (formato canónico `dd/MM/yyyy`, zona horaria `America/Argentina/Buenos_Aires`)
- `ical-generator` / parser nativo para sincronización externa de calendarios RFC 5545

**Storage**:
- PostgreSQL 17 con extensión `btree_gist` habilitada.
- Almacenamiento local para comprobantes en `storage/receipts/` (protegido, no público).

**Testing**:
- Vitest 5 (tests unitarios y de integración contra base de datos limpia)
- Playwright (tests e2e, single worker `workers: 1` para auditoría visual, flujos completos y accesibilidad)

**Target Platform**: Linux / Windows Node.js Server en puerto `7777`.

**Project Type**: Web Application unificada (Portal Público `/` + PMS Administrativo `/adminpanel`).

**Performance Goals**:
- Tiempo de respuesta de cotización y disponibilidad < 300 ms.
- Soporte de 20 peticiones concurrentes simultáneas confirmando sobre la última unidad disponible sin producir sobreventa (RNF-04).

**Constraints**:
- Anti-overbooking garantizado en PostgreSQL con exclusion constraint `btree_gist` en rango `[check_in, check_out)`.
- Soft lock de 15 minutos cronometrado con la hora del motor Postgres.
- Paleta y tipografía inmutables de Iguapé Aparts: fondo `#2B3D24`, texto `#E4E2C5`, lima `#E6EF73`, card `#3F5934`, borde `#AD9C78`. Esquinas rectas, tipografías DM Serif Display y Source Sans 3.

**Scale/Scope**: 1 complejo (Iguapé Aparts), 3 a 5 categorías, 10 a 20 unidades físicas, ~50 reservas/mes, catálogo de fotos estático.

---

## Constitution Check

*GATE: Must pass before Phase 0 research. Re-check after Phase 1 design.*

| Principio Constitucional | Estado | Justificación / Cumplimiento |
|--------------------------|--------|------------------------------|
| **I. Test-First & Red-Green-Refactor** | ✅ PASA | Se implementa suite TDD en Vitest antes de cada módulo y Playwright para e2e. |
| **II. Fidelidad de Diseño Frontend** | ✅ PASA | Se reutilizan fotos y paleta canónica (`#2B3D24`, `#E4E2C5`, `#E6EF73`, etc.) del proyecto IguapeAparts. Estricto responsive 360px a 1920px. |
| **III. Mentalidad Ponytail & YAGNI** | ✅ PASA | Sin microservicios ni sobre-ingeniería; código mínimo, stdlib y dependencias aprobadas en package.json. |
| **IV. Integridad Anti-Overbooking en DB** | ✅ PASA | Exclusión constraint en `UnitOccupancy` con `btree_gist` en Postgres; soft lock 15 min y noche de check-out libre. |
| **V. Seguridad y Privacidad de Huéspedes** | ✅ PASA | Panel `/adminpanel` aislado con `noindex` y Argon2id; feed iCal anónimo sin datos de huéspedes y 404 ante token erróneo; comprobantes en directorio privado. |

---

## Project Structure

### Documentation (this feature)

```text
specs/001-motor-reservas-pms/
├── plan.md              # Plan de implementación
├── research.md          # Decisiones de arquitectura y stack
├── data-model.md        # Entidades, relaciones y restricciones SQL
├── quickstart.md        # Guía de levantado y verificación
├── contracts/
│   ├── public-api.md    # Endpoints del motor de reservas público e iCal
│   └── admin-api.md     # Endpoints de gestión PMS y cron
└── checklists/
    └── requirements.md  # Checklist de requerimientos
```

### Source Code (repository layout)

```text
app/
├── (public)/                 # Portal público de reservas
│   ├── layout.tsx            # Layout con header/footer institucional Iguapé
│   ├── page.tsx              # Portada y buscador con selector de fechas y huéspedes
│   └── reservar/             # Flujo de reserva (Paso 2) con formulario y soft-lock
├── adminpanel/               # Panel PMS Administrativo
│   ├── layout.tsx            # Layout admin con sidebar y estado de sesión
│   ├── login/                # Pantalla de acceso admin (Argon2id)
│   ├── page.tsx              # Dashboard resumen y alertas
│   ├── calendar/             # Mapa visual de ocupación mensual/semanal
│   ├── reservations/         # Lista y detalle de reservas, asignación y cobros
│   ├── categories-units/     # Gestión de inventario e iCal
│   ├── seasons-rates/        # Temporadas, precios diferenciados y descuentos
│   └── guests/               # CRM de huéspedes y widget de cumpleañeros
├── api/                      # Route Handlers
│   ├── public/
│   │   ├── availability/route.ts
│   │   ├── soft-lock/route.ts
│   │   └── bookings/route.ts
│   ├── admin/
│   │   ├── auth/[...route]/route.ts
│   │   ├── reservations/route.ts
│   │   ├── calendar/route.ts
│   │   ├── payments/route.ts
│   │   └── guests/route.ts
│   ├── ical/[unitId]/feed.ics/route.ts
│   └── cron/tick/route.ts
├── generated/
│   └── prisma/               # Cliente Prisma generado
└── proxy.ts                  # Guardias y enrutamiento Next.js 16

lib/
├── db/                       # Cliente Prisma singleton y conexión pg directa
├── auth/                     # Funciones de hashing Argon2id y sesión en cookies
├── pricing/                  # Motor de cálculo de tarifas, temporadas y descuentos
├── occupancy/                # Lógica de soft-lock y asignación de unidades
└── ical/                     # Generador y parser iCalendar RFC 5545

prisma/
├── schema.prisma             # Modelos Prisma
└── migrations/               # Migraciones SQL (incluye exclusion constraint btree_gist)

storage/
└── receipts/                 # Comprobantes de cobro (fuera de public, gitignored)

tests/
├── unit/                     # Vitest: pricing, validaciones, ical
├── integration/              # Vitest: soft-lock concurrente, base de datos
└── e2e/                      # Playwright: flujo completo de reserva y admin
```

**Structure Decision**: Aplicación unificada Next.js 16 App Router con separación clara entre rutas públicas de cara al huésped `(public)` y rutas administrativas `adminpanel/`, coordinadas por `proxy.ts` y una capa de dominio compartida en `lib/`.

---

## Complexity Tracking

*No se detectan violaciones a la Constitución ni patrones sobre-ingeniados. El diseño se adhiere 100% a la Escalera de 6 Peldaños de Ponytail.*
