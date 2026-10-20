# Graph Report - AppReservasSDD  (2026-10-20)

## Corpus Check
- 202 files · ~1,595,739 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 4242 nodes · 6346 edges · 204 communities (141 shown, 63 thin omitted)
- Extraction: 95% EXTRACTED · 5% INFERRED · 0% AMBIGUOUS · INFERRED: 320 edges (avg confidence: 0.69)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `e9a71146`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- common.ps1
- create-new-feature.ps1
- index.d.ts
- client.d.ts
- client.js
- wasm-compiler-edge.js
- #n
- addErrorMessage
- r
- session.ts
- date.ts
- interpretNode
- _c
- toString
- e
- Tasks: Iguapé Aparts — Motor de Reservas y PMS
- t
- write
- slice
- Ws
- cs
- compilerOptions
- AGENTS.md — ReservasIguape v0.1.0
- constructor
- What You Must Do When Invoked
- Tasks: [FEATURE NAME]
- SKILL.md
- SKILL.md
- User Scenarios & Testing *(mandatory)*
- receipts.ts
- PrismaClient
- query_compiler_fast_bg.js
- client.ts
- constructor
- dependencies
- devDependencies
- Feature Specification: Cupones de Descuento Promocionales
- db.ts
- write
- Transaction_2
- slice
- AdminUserDelegate
- AnonymizationRequestDelegate
- CategoryDelegate
- CompanionDelegate
- DiscountRuleDelegate
- GuestDelegate
- PaymentDelegate
- ReservationDelegate
- SeasonDelegate
- SeasonPriceDelegate
- SystemSettingDelegate
- UnitDelegate
- UnitOccupancyDelegate
- PRD-001: <nombre del proyecto> — <una línea de qué es>
- PRD-001: <nombre del proyecto> — <una línea de qué es>
- Entidades y Atributos
- Execution Steps
- admin-inventory-calendar.test.ts
- admin-guests.test.ts
- Yt
- ma
- writeInto
- Execution Steps
- Kn
- a
- Ta
- lu
- ri
- Feature Specification: [FEATURE NAME]
- admin-seasons.test.ts
- lifecycle.ts
- sync.ts
- exports
- Span
- SKILL.md
- SKILL.md
- SKILL.md
- formatDateDisplay
- import
- require
- MergedExtensionsList
- SKILL.md
- SKILL.md
- SKILL.md
- Core Principles
- Core Principles
- Prisma__ReservationClient
- package.json
- Decisiones Técnicas y Arquitectura
- PrismaPromise
- RequestHandler
- graphify reference: extra exports and benchmark
- scripts
- Implementation Plan: [FEATURE]
- Implementation Plan: Iguapé Aparts — Motor de Reservas y PMS
- 3. Escenarios de Validación Rápida
- Nuevas Entidades y Extensiones de Esquema
- Implementation Plan: Cupones de Descuento Promocionales
- SKILL.md
- ./runtime/client
- #wasm-compiler-loader
- Engine
- index-browser.d.ts
- SKILL.md
- Contratos de API Administrativa: Panel PMS (001-motor-reservas-pms)
- Decisiones Técnicas y Arquitectura
- SKILL.md
- SKILL.md
- Prisma__CategoryClient
- Prisma__UnitClient
- F
- Create AGENTS.md
- Create Implementation Plan
- Create Tasks for Implementation
- SKILL.md
- SKILL.md
- Use Graphify
- Create AGENTS.md
- Create Implementation Plan
- Create Tasks for Implementation
- Use Graphify
- Quickstart: Validación y Ejecución (002-cupones-descuento)
- SKILL.md
- SKILL.md
- edge.js
- Prisma__GuestClient
- Prisma__SeasonPriceClient
- Prisma__UnitOccupancyClient
- PrismaPromise_2
- TracingHelper
- graphify reference: query, path, explain
- SKILL.md
- SKILL.md
- package.json
- load-availability.ts
- Contratos de API Pública: Motor de Reservas (001-motor-reservas-pms)
- Contratos de API Administrativa: Gestión de Cupones (002-cupones-descuento)
- index-browser.js
- Prisma__AnonymizationRequestClient
- Prisma__CompanionClient
- Prisma__PaymentClient
- Prisma__SeasonClient
- ./edge
- ./extension
- ./index-browser
- ./runtime/index-browser
- ./runtime/wasm-compiler-edge
- Ai
- TraceState
- [CHECKLIST TYPE] Checklist: [FEATURE NAME]
- Contratos de API Pública: Cupones y Protección Anti-Bot (002-cupones-descuento)
- Troubleshooting: PostgreSQL Exclusion Constraint con Predicado Inmutable
- Prisma__SystemSettingClient
- Context
- DataLoader
- TypedSql
- page.tsx
- graphify reference: add a URL and watch a folder
- graphify reference: commit hook and native CLAUDE.md integration
- graphify reference: incremental update and cluster-only
- env.ts
- page.tsx
- PrismaClientBaseOptions
- Skip
- layout.tsx
- graphify reference: GitHub clone and cross-repo merge
- graphify reference: transcribe video and audio
- AnyNull
- DbNull
- JsonNull
- AccelerateEngineConfig
- CallSite
- DecimalJsLike
- ExtendedSpanOptions
- JsonConvertible
- CLAUDE.md
- CLAUDE.md
- SKILL.md
- extraction-spec.md
- eslint.config.mjs
- eslint-config-next
- next.config.ts
- next-env.d.ts
- prisma
- tsx
- @types/pg
- SKILL.md

## God Nodes (most connected - your core abstractions)
1. `r()` - 97 edges
2. `e()` - 44 edges
3. `a()` - 40 edges
4. `t()` - 38 edges
5. `lu()` - 34 edges
6. `#n()` - 34 edges
7. `m()` - 32 edges
8. `slice()` - 29 edges
9. `Ta()` - 27 edges
10. `Fn` - 25 edges

## Surprising Connections (you probably didn't know these)
- `workerLoop()` --indirect_call--> `r()`  [INFERRED]
  scripts/load-availability.ts → app/generated/prisma/runtime/wasm-compiler-edge.js
- `GuestsCRMPage()` --indirect_call--> `query()`  [INFERRED]
  app/adminpanel/guests/page.tsx → tests/e2e/db.ts
- `AdminLayout()` --calls--> `getSession()`  [EXTRACTED]
  app/adminpanel/layout.tsx → lib/auth/session.ts
- `ReservationDetailPage()` --calls--> `formatDateDisplay()`  [EXTRACTED]
  app/adminpanel/reservations/[id]/page.tsx → lib/utils/date.ts
- `ReservationsListPage()` --calls--> `formatDateDisplay()`  [EXTRACTED]
  app/adminpanel/reservations/page.tsx → lib/utils/date.ts

## Import Cycles
- None detected.

## Communities (204 total, 63 thin omitted)

### Community 0 - "common.ps1"
Cohesion: 0.23
Nodes (13): Find-SpecifyRoot(), Format-SpecKitCommand(), Get-CurrentBranch(), Get-FeaturePathsEnv(), Get-InvokeSeparator(), Get-NormalizedPriority(), Get-Python3Command(), Get-RepoRoot() (+5 more)

### Community 1 - "create-new-feature.ps1"
Cohesion: 0.39
Nodes (4): ConvertTo-AsciiLower(), ConvertTo-CleanBranchName(), ConvertTo-UnicodeWords(), Get-BranchName()

### Community 2 - "index.d.ts"
Cohesion: 0.00
Nodes (1302): AdminUser, AdminUserAggregateArgs, AdminUserCountAggregateInputType, AdminUserCountAggregateOutputType, AdminUserCountArgs, AdminUserCountOrderByAggregateInput, AdminUserCreateArgs, AdminUserCreateInput (+1294 more)

### Community 7 - "client.d.ts"
Cohesion: 0.01
Nodes (307): AccelerateExtensionFetch, AccelerateExtensionFetchDecorator, Action, ActiveConnectorType, Aggregate, AllModelsToStringIndex, ApplyOmit, Args (+299 more)

### Community 8 - "client.js"
Cohesion: 0.02
Nodes (61): ad(), au(), Cd(), clone(), _cloneInto(), cm(), disconnect(), dl() (+53 more)

### Community 9 - "wasm-compiler-edge.js"
Cohesion: 0.02
Nodes (67): ad(), alloc(), allocUnsafe(), Bm(), bu(), clone(), _cloneInto(), _d() (+59 more)

### Community 10 - "#n"
Cohesion: 0.05
Nodes (74): Fn, _a(), al(), apiKey(), at(), Au(), Bd(), cancelAllTransactions() (+66 more)

### Community 11 - "addErrorMessage"
Cohesion: 0.11
Nodes (54): ac(), addErrorMessage(), addField(), addSuggestion(), asObject(), bc(), cc(), Cr() (+46 more)

### Community 12 - "r"
Cohesion: 0.06
Nodes (48): addItem(), al(), Am(), bd(), bl(), cancelAllTransactions(), commitTransaction(), dispatchBatches() (+40 more)

### Community 13 - "session.ts"
Cohesion: 0.07
Nodes (31): AdminLayout(), metadata, POST(), POST(), GET(), config, path, Prisma (+23 more)

### Community 14 - "date.ts"
Cohesion: 0.11
Nodes (29): GET(), POST(), POST(), CategoryItem, BookingConfirmationResult, CreateBookingInput, createWebBooking(), generateBookingCode() (+21 more)

### Community 15 - "interpretNode"
Cohesion: 0.09
Nodes (43): _a(), an(), Be(), cp(), de(), Di(), Fi(), getTransaction() (+35 more)

### Community 16 - "_c"
Cohesion: 0.14
Nodes (43): addErrorMessage(), addField(), addSuggestion(), an(), asObject(), bc(), br(), _c() (+35 more)

### Community 17 - "toString"
Cohesion: 0.06
Nodes (41): addItem(), allocUnsafeSlow(), Ca(), construct(), Cr(), di(), ep(), er() (+33 more)

### Community 18 - "e"
Cohesion: 0.08
Nodes (35): aa(), bp(), e(), en(), fa(), fi(), ga(), getAllBatchQueryCallbacks() (+27 more)

### Community 19 - "Tasks: Iguapé Aparts — Motor de Reservas y PMS"
Cohesion: 0.06
Nodes (34): Across Parallel Teams, Dependencies & Execution Order, Format: `- [ ] [TaskID] [P?] [Story?] Description with file path`, Implementation for User Story 1, Implementation for User Story 2, Implementation for User Story 3, Implementation for User Story 4, Implementation for User Story 5 (+26 more)

### Community 20 - "t"
Cohesion: 0.08
Nodes (34): bp(), bs(), Bt(), dd(), ds(), e(), ep(), fs() (+26 more)

### Community 21 - "write"
Cohesion: 0.11
Nodes (34): addMarginSymbol(), afterNextNewline(), compare(), copy(), de(), equals(), Fp(), ge() (+26 more)

### Community 22 - "slice"
Cohesion: 0.07
Nodes (34): am(), ao(), bt(), Do(), Du(), enabled(), fm(), Fo() (+26 more)

### Community 23 - "Ws"
Cohesion: 0.12
Nodes (33): ap(), Bs(), concat(), cp(), Ei(), et(), findField(), fn() (+25 more)

### Community 24 - "cs"
Cohesion: 0.10
Nodes (32): _c(), cl(), cs(), ct(), dt(), er(), Et(), Fm() (+24 more)

### Community 25 - "compilerOptions"
Cohesion: 0.06
Nodes (31): ./*, dom, dom.iterable, esnext, **/*.mjs, **/*.mts, .next/dev/types/**/*.ts, next-env.d.ts (+23 more)

### Community 26 - "AGENTS.md — ReservasIguape v0.1.0"
Cohesion: 0.07
Nodes (28): 1. Propósito, 2. Rol del agente y principios de diseño, 3. Flujo de trabajo, 4. Stack, 5. Cómo correr, 6. Reglas inmutables, 7. Invariantes de dominio, 8. Logging y datos sensibles (+20 more)

### Community 27 - "constructor"
Cohesion: 0.07
Nodes (28): Gm(), Uu(), Cc(), constructor(), ct(), el(), getConnectionInfo(), getGlobalOmit() (+20 more)

### Community 28 - "What You Must Do When Invoked"
Cohesion: 0.07
Nodes (26): For /graphify add and --watch, For /graphify query, For the commit hook and native CLAUDE.md integration, For --update and --cluster-only, /graphify, Honesty Rules, Interpreter guard for subcommands, Part A - Structural extraction for code files (+18 more)

### Community 29 - "Tasks: [FEATURE NAME]"
Cohesion: 0.07
Nodes (26): Dependencies & Execution Order, Format: `[ID] [P?] [Story] Description`, Implementation for User Story 1, Implementation for User Story 2, Implementation for User Story 3, Implementation Strategy, Incremental Delivery, MVP First (User Story 1 Only) (+18 more)

### Community 30 - "SKILL.md"
Cohesion: 0.08
Nodes (25): 1. Initialize Analysis Context, 2. Load Artifacts (Progressive Disclosure), 3. Build Semantic Models, 4. Detection Passes (Token-Efficient Analysis), 5. Severity Assignment, 6. Produce Compact Analysis Report, 7. Provide Next Actions, 8. Offer Remediation (+17 more)

### Community 31 - "SKILL.md"
Cohesion: 0.08
Nodes (25): 1. Initialize Analysis Context, 2. Load Artifacts (Progressive Disclosure), 3. Build Semantic Models, 4. Detection Passes (Token-Efficient Analysis), 5. Severity Assignment, 6. Produce Compact Analysis Report, 7. Provide Next Actions, 8. Offer Remediation (+17 more)

### Community 32 - "User Scenarios & Testing *(mandatory)*"
Cohesion: 0.08
Nodes (22): Content Quality, Feature Readiness, Notes, Requirement Completeness, Specification Quality Checklist: Iguapé Aparts — Motor de Reservas y PMS, Assumptions, Edge Cases, Feature Specification: Iguapé Aparts — Motor de Reservas y PMS (+14 more)

### Community 33 - "receipts.ts"
Cohesion: 0.18
Nodes (16): GET(), POST(), POST(), expirePendingReservations(), isReservationExpired(), purgeOldReceipts(), syncAllUnitsIcal(), CreatePaymentInput (+8 more)

### Community 35 - "query_compiler_fast_bg.js"
Cohesion: 0.11
Nodes (7): g, I(), J(), k(), u(), V(), x()

### Community 36 - "client.ts"
Cohesion: 0.10
Nodes (6): UnitIcalModal(), UnitIcalModalProps, BirthdayGuest, UpcomingBirthdaysWidget(), adapter, globalForPrisma

### Community 37 - "constructor"
Cohesion: 0.10
Nodes (21): Ba(), constructor(), da(), deserialize(), dispatchEngineSpans(), fl(), forSql(), getActiveContext() (+13 more)

### Community 38 - "dependencies"
Cohesion: 0.10
Nodes (21): argon2, date-fns, date-fns-tz, next, dependencies, argon2, date-fns, date-fns-tz (+13 more)

### Community 39 - "devDependencies"
Cohesion: 0.10
Nodes (21): eslint, devDependencies, eslint, @playwright/test, prettier, tailwindcss, @tailwindcss/postcss, @types/node (+13 more)

### Community 40 - "Feature Specification: Cupones de Descuento Promocionales"
Cohesion: 0.10
Nodes (19): Content Quality, Feature Readiness, Notes, Requirement Completeness, Specification Quality Checklist: Cupones de Descuento Promocionales, Assumptions, Clarifications, Edge Cases (+11 more)

### Community 41 - "db.ts"
Cohesion: 0.22
Nodes (8): GuestItem, GuestsCRMPage(), ReservationSummary, getUnitAvailability, cleanDb(), endPool(), getPool(), query()

### Community 42 - "write"
Cohesion: 0.17
Nodes (20): addMarginSymbol(), afterNextNewline(), Or, getCurrentLineLength(), getPrintWidth(), gs(), indent(), Mr() (+12 more)

### Community 43 - "Transaction_2"
Cohesion: 0.11
Nodes (7): AdapterInfo, DriverAdapterFactory, Queryable, SqlDriverAdapter, SqlDriverAdapterFactory, SqlQueryable, Transaction_2

### Community 44 - "slice"
Cohesion: 0.12
Nodes (19): enabled(), ge(), getLocation(), Hr(), indentedCurrentLine(), Jc(), Kc(), km() (+11 more)

### Community 58 - "PRD-001: <nombre del proyecto> — <una línea de qué es>"
Cohesion: 0.11
Nodes (17): Contenido obligatorio de "Lineamientos de Implementación", Contexto y Problema           (el dolor real y para quién; personas: quién lo usa y qué necesita), Create PRD, Criterios de Aceptación       (AC-01 (RF-01): Dado <contexto>, cuando <acción>, entonces <resultado medible>), El template del curso (estructura obligatoria), Fuera de Alcance              (lo que explícitamente NO entra), Lineamientos de Implementación (SOLID, buenas prácticas y patrones de diseño aplicables al proyecto), Objetivos                     (qué significa ganar, a nivel producto) (+9 more)

### Community 59 - "PRD-001: <nombre del proyecto> — <una línea de qué es>"
Cohesion: 0.11
Nodes (17): Contenido obligatorio de "Lineamientos de Implementación", Contexto y Problema           (el dolor real y para quién; personas: quién lo usa y qué necesita), Create PRD, Criterios de Aceptación       (AC-01 (RF-01): Dado <contexto>, cuando <acción>, entonces <resultado medible>), El template del curso (estructura obligatoria), Fuera de Alcance              (lo que explícitamente NO entra), Lineamientos de Implementación (SOLID, buenas prácticas y patrones de diseño aplicables al proyecto), Objetivos                     (qué significa ganar, a nivel producto) (+9 more)

### Community 60 - "Entidades y Atributos"
Cohesion: 0.11
Nodes (17): 10. `UnitOccupancy` (CRÍTICA - Integridad Postgres btree_gist), 11. `Payment`, 12. `AnonymizationRequest`, 13. `SystemSetting`, 1. `AdminUser`, 2. `Category`, 3. `Unit`, 4. `Season` (+9 more)

### Community 61 - "Execution Steps"
Cohesion: 0.12
Nodes (15): 1. Initialize Convergence Context, 2. Load Artifacts (Progressive Disclosure), 3. Build the Intent Inventory, 4. Assess the Codebase and Classify Findings, 5. Assign Severity, 6. Present the In-Session Findings Summary, 7. Append Convergence Tasks (or report converged), 8. Provide Next Actions (Handoff) (+7 more)

### Community 62 - "admin-inventory-calendar.test.ts"
Cohesion: 0.20
Nodes (7): POST(), GET(), GET(), GET(), CalendarOccupancyEvent, createManualBlock(), getCalendarMatrix()

### Community 63 - "admin-guests.test.ts"
Cohesion: 0.26
Nodes (9): POST(), GET(), GET(), anonymizeGuestData(), calculateUpcomingBirthdays(), daysUntilBirthday(), getGuestsDirectory(), isBirthdayInNext30Days() (+1 more)

### Community 64 - "Yt"
Cohesion: 0.17
Nodes (16): ae(), dp(), fp(), getAllClientExtensions(), getAllModelExtensions(), mp(), Oe(), qc() (+8 more)

### Community 65 - "ma"
Cohesion: 0.17
Nodes (16): destroy(), digest(), digestInto(), finish(), keccak(), li(), ma(), pa() (+8 more)

### Community 66 - "writeInto"
Cohesion: 0.16
Nodes (16): as(), destroy(), digest(), digestInto(), finish(), hd(), In(), keccak() (+8 more)

### Community 67 - "Execution Steps"
Cohesion: 0.12
Nodes (15): 1. Initialize Convergence Context, 2. Load Artifacts (Progressive Disclosure), 3. Build the Intent Inventory, 4. Assess the Codebase and Classify Findings, 5. Assign Severity, 6. Present the In-Session Findings Summary, 7. Append Convergence Tasks (or report converged), 8. Provide Next Actions (Handoff) (+7 more)

### Community 68 - "Kn"
Cohesion: 0.14
Nodes (15): ap(), Br(), es(), getAllComputedFields(), Hu(), je(), Kn(), kp() (+7 more)

### Community 69 - "a"
Cohesion: 0.20
Nodes (14): a(), ge(), le(), m(), P(), connect(), eu(), ks() (+6 more)

### Community 70 - "Ta"
Cohesion: 0.23
Nodes (12): C(), l(), R(), se(), y, z(), en(), Ta() (+4 more)

### Community 71 - "lu"
Cohesion: 0.21
Nodes (13): ee(), N(), q(), ue(), B(), J(), ae(), ar() (+5 more)

### Community 72 - "ri"
Cohesion: 0.18
Nodes (13): bn(), byteLength(), Ce(), getAllClientExtensions(), getAllModelExtensions(), mp(), No(), Qe() (+5 more)

### Community 73 - "Feature Specification: [FEATURE NAME]"
Cohesion: 0.15
Nodes (12): Assumptions, Edge Cases, Feature Specification: [FEATURE NAME], Functional Requirements, Key Entities *(include if feature involves data)*, Measurable Outcomes, Requirements *(mandatory)*, Success Criteria *(mandatory)* (+4 more)

### Community 74 - "admin-seasons.test.ts"
Cohesion: 0.36
Nodes (8): GET(), POST(), GET(), POST(), createDiscount(), createSeason(), getAllDiscounts(), getAllSeasons()

### Community 75 - "lifecycle.ts"
Cohesion: 0.30
Nodes (8): PATCH(), PATCH(), assignUnitToReservation(), canTransitionReservationStatus(), isUnitAvailableForStay(), ReservationStatusType, updateReservationStatus(), VALID_TRANSITIONS

### Community 76 - "sync.ts"
Cohesion: 0.27
Nodes (8): POST(), GET(), RFC-5545, generateIcalFeed(), OccupancyItem, ParsedIcalEvent, parseIcalFeed(), syncUnitExternalFeed()

### Community 77 - "exports"
Cohesion: 0.17
Nodes (12): default, default, exports, ./client, ./index, ./package.json, ./sql, default (+4 more)

### Community 79 - "SKILL.md"
Cohesion: 0.18
Nodes (10): Completion Report, Done When, Key rules, Mandatory Post-Execution Hooks, Outline, Phase 0: Outline & Research, Phase 1: Design & Contracts, Phases (+2 more)

### Community 80 - "SKILL.md"
Cohesion: 0.18
Nodes (10): Completion Report, Done When, For AI Generation, Mandatory Post-Execution Hooks, Outline, Pre-Execution Checks, Quick Guidelines, Section Requirements (+2 more)

### Community 81 - "SKILL.md"
Cohesion: 0.18
Nodes (10): Checklist Format (REQUIRED), Completion Report, Done When, Mandatory Post-Execution Hooks, Outline, Phase Structure, Pre-Execution Checks, Task Generation Rules (+2 more)

### Community 82 - "formatDateDisplay"
Cohesion: 0.22
Nodes (5): CalendarEvent, CalendarUnit, ReservationDetailPage(), ReservationsListPage(), formatDateDisplay()

### Community 83 - "import"
Cohesion: 0.38
Nodes (11): import, import, browser, default, edge-light, node, types, worker (+3 more)

### Community 84 - "require"
Cohesion: 0.38
Nodes (11): require, require, require, browser, default, edge-light, node, types (+3 more)

### Community 86 - "SKILL.md"
Cohesion: 0.18
Nodes (10): Completion Report, Done When, Key rules, Mandatory Post-Execution Hooks, Outline, Phase 0: Outline & Research, Phase 1: Design & Contracts, Phases (+2 more)

### Community 87 - "SKILL.md"
Cohesion: 0.18
Nodes (10): Completion Report, Done When, For AI Generation, Mandatory Post-Execution Hooks, Outline, Pre-Execution Checks, Quick Guidelines, Section Requirements (+2 more)

### Community 88 - "SKILL.md"
Cohesion: 0.18
Nodes (10): Checklist Format (REQUIRED), Completion Report, Done When, Mandatory Post-Execution Hooks, Outline, Phase Structure, Pre-Execution Checks, Task Generation Rules (+2 more)

### Community 89 - "Core Principles"
Cohesion: 0.18
Nodes (10): Core Principles, Flujo de Desarrollo y Quality Gates, Governance, I. Test-First & Red-Green-Refactor (NON-NEGOTIABLE), II. Fidelidad de Diseño Frontend e Identidad Visual (Iguapé Aparts), III. Mentalidad Ponytail & YAGNI (Lazy Senior Dev), IV. Integridad de Dominio y Anti-Overbooking en Base de Datos, ReservasIguape Constitution (+2 more)

### Community 90 - "Core Principles"
Cohesion: 0.18
Nodes (10): Core Principles, Governance, [PRINCIPLE_1_NAME], [PRINCIPLE_2_NAME], [PRINCIPLE_3_NAME], [PRINCIPLE_4_NAME], [PRINCIPLE_5_NAME], [PROJECT_NAME] Constitution (+2 more)

### Community 92 - "package.json"
Cohesion: 0.20
Nodes (9): browser, dependencies, @prisma/client-runtime-utils, main, name, sideEffects, types, version (+1 more)

### Community 93 - "Decisiones Técnicas y Arquitectura"
Cohesion: 0.20
Nodes (9): D-01: Motor de Base de Datos y Prevención Anti-Overbooking, D-02: Mecanismo de Soft Lock (15 Minutos), D-03: Stack y Ruteo (Next.js 16 App Router con `proxy.ts`), D-04: Autenticación Administrativa con Argon2id, D-05: Manejo de Zonas Horarias y Fechas, D-06: Sincronización iCal Bidireccional, D-07: Almacenamiento y Protección de Comprobantes de Pago, Decisiones Técnicas y Arquitectura (+1 more)

### Community 94 - "PrismaPromise"
Cohesion: 0.22
Nodes (3): Prisma__AdminUserClient, Prisma__DiscountRuleClient, PrismaPromise

### Community 96 - "graphify reference: extra exports and benchmark"
Cohesion: 0.22
Nodes (8): graphify reference: extra exports and benchmark, Step 6b - Wiki (only if --wiki flag), Step 7 - Neo4j export (only if --neo4j or --neo4j-push flag), Step 7a - FalkorDB export (only if --falkordb or --falkordb-push flag), Step 7b - SVG export (only if --svg flag), Step 7c - GraphML export (only if --graphml flag), Step 7d - MCP server (only if --mcp flag), Step 8 - Token reduction benchmark (only if total_words > 5000)

### Community 97 - "scripts"
Cohesion: 0.22
Nodes (9): scripts, admin:reset-password, build, dev, lint, start, test, test:e2e (+1 more)

### Community 98 - "Implementation Plan: [FEATURE]"
Cohesion: 0.22
Nodes (8): Complexity Tracking, Constitution Check, Documentation (this feature), Implementation Plan: [FEATURE], Project Structure, Source Code (repository root), Summary, Technical Context

### Community 99 - "Implementation Plan: Iguapé Aparts — Motor de Reservas y PMS"
Cohesion: 0.22
Nodes (8): Complexity Tracking, Constitution Check, Documentation (this feature), Implementation Plan: Iguapé Aparts — Motor de Reservas y PMS, Project Structure, Source Code (repository layout), Summary, Technical Context

### Community 100 - "3. Escenarios de Validación Rápida"
Cohesion: 0.22
Nodes (8): 1. Requisitos Previos, 2. Configuración del Entorno Local, 3. Escenarios de Validación Rápida, Escenario A: Búsqueda y Reserva en Portal Público, Escenario B: Calendario Administrativo y Noche de Check-out Libre, Escenario C: Registro de Cobro y Carga de Comprobante, Escenario D: Batería de Tests Automatizados, Quickstart: Validación y Ejecución (001-motor-reservas-pms)

### Community 101 - "Nuevas Entidades y Extensiones de Esquema"
Cohesion: 0.22
Nodes (8): 1. `Coupon`, 2. `CouponCategoryRestriction`, 3. `CouponSoftLock`, 4. Extensión a la Entidad `Reservation` (Auditoría de Canje), Cálculo de Usos Disponibles en Tiempo Real, Data Model: Cupones de Descuento Promocionales (002-cupones-descuento), Diagrama Entidad-Relación, Nuevas Entidades y Extensiones de Esquema

### Community 102 - "Implementation Plan: Cupones de Descuento Promocionales"
Cohesion: 0.22
Nodes (8): Complexity Tracking, Constitution Check, Documentation (this feature), Implementation Plan: Cupones de Descuento Promocionales, Project Structure, Source Code Impact, Summary, Technical Context

### Community 103 - "SKILL.md"
Cohesion: 0.25
Nodes (7): Anti-Examples: What NOT To Do, Checklist Purpose: "Unit Tests for English", Example Checklist Types & Sample Items, Execution Steps, Post-Execution Checks, Pre-Execution Checks, User Input

### Community 104 - "./runtime/client"
Cohesion: 0.25
Nodes (8): ./runtime/client, default, require, default, import, node, require, types

### Community 105 - "#wasm-compiler-loader"
Cohesion: 0.25
Nodes (8): imports, #main-entry-point, #wasm-compiler-loader, default, default, edge-light, worker, workerd

### Community 107 - "index-browser.d.ts"
Cohesion: 0.25
Nodes (7): Args, Exact, GetRuntimeOutput, Narrowable, Operation, Public, RuntimeName

### Community 108 - "SKILL.md"
Cohesion: 0.25
Nodes (7): Anti-Examples: What NOT To Do, Checklist Purpose: "Unit Tests for English", Example Checklist Types & Sample Items, Execution Steps, Post-Execution Checks, Pre-Execution Checks, User Input

### Community 109 - "Contratos de API Administrativa: Panel PMS (001-motor-reservas-pms)"
Cohesion: 0.25
Nodes (7): 1. Autenticación Administrativa, 2. Gestión de Reservas y Ciclo de Vida, 3. Calendario y Ocupación, 4. Cobros Manuales y Comprobantes, 5. CRM de Clientes y Cumpleañeros, 6. Sincronización iCal y Tareas Cron, Contratos de API Administrativa: Panel PMS (001-motor-reservas-pms)

### Community 110 - "Decisiones Técnicas y Arquitectura"
Cohesion: 0.25
Nodes (7): D-01: Modelo de Control de Usos y Prevención de Sobrecange Concurrente, D-02: Mecánica de Cálculo de Descuentos (Porcentaje vs Monto Fijo y Acumulabilidad), D-03: Rate Limiting Nativo contra Fuerza Bruta de Códigos de 6 Dígitos, D-04: Protección Anti-Bot Nativa en Confirmación de Reservas, D-05: Integridad Contable en la Edición de Cupones Canjeados, Decisiones Técnicas y Arquitectura, Research: Cupones de Descuento Promocionales (002-cupones-descuento)

### Community 111 - "SKILL.md"
Cohesion: 0.29
Nodes (6): Completion Report, Done When, Mandatory Post-Execution Hooks, Outline, Pre-Execution Checks, User Input

### Community 112 - "SKILL.md"
Cohesion: 0.29
Nodes (6): Completion Report, Done When, Mandatory Post-Execution Hooks, Outline, Pre-Execution Checks, User Input

### Community 116 - "Create AGENTS.md"
Cohesion: 0.29
Nodes (6): Create AGENTS.md, Estructura del documento, Paso 0 — Leer antes de escribir, Paso 2 — Validar antes de entregar, Qué va en cada sección, Reglas duras (siempre)

### Community 117 - "Create Implementation Plan"
Cohesion: 0.29
Nodes (6): Create Implementation Plan, Estructura obligatoria del plan, Paso 0 — Leer antes de planificar, Paso 2 — Validar antes de entregar, Qué va en cada sección, Reglas duras (siempre)

### Community 118 - "Create Tasks for Implementation"
Cohesion: 0.29
Nodes (6): Create Tasks for Implementation, Estructura obligatoria del documento, Paso 0 — Leer antes de desglosar, Paso 2 — Validar antes de entregar, Qué va en cada sección, Reglas duras (siempre)

### Community 119 - "SKILL.md"
Cohesion: 0.29
Nodes (6): Completion Report, Done When, Mandatory Post-Execution Hooks, Outline, Pre-Execution Checks, User Input

### Community 120 - "SKILL.md"
Cohesion: 0.29
Nodes (6): Completion Report, Done When, Mandatory Post-Execution Hooks, Outline, Pre-Execution Checks, User Input

### Community 121 - "Use Graphify"
Cohesion: 0.29
Nodes (6): Cuándo NO usarlo, Instalación (una vez por máquina / repo), Protocolo al arrancar una tarea, Qué hay en `graphify-out/`, Reglas duras, Use Graphify

### Community 122 - "Create AGENTS.md"
Cohesion: 0.29
Nodes (6): Create AGENTS.md, Estructura del documento, Paso 0 — Leer antes de escribir, Paso 2 — Validar antes de entregar, Qué va en cada sección, Reglas duras (siempre)

### Community 123 - "Create Implementation Plan"
Cohesion: 0.29
Nodes (6): Create Implementation Plan, Estructura obligatoria del plan, Paso 0 — Leer antes de planificar, Paso 2 — Validar antes de entregar, Qué va en cada sección, Reglas duras (siempre)

### Community 124 - "Create Tasks for Implementation"
Cohesion: 0.29
Nodes (6): Create Tasks for Implementation, Estructura obligatoria del documento, Paso 0 — Leer antes de desglosar, Paso 2 — Validar antes de entregar, Qué va en cada sección, Reglas duras (siempre)

### Community 125 - "Use Graphify"
Cohesion: 0.29
Nodes (6): Cuándo NO usarlo, Instalación (una vez por máquina / repo), Protocolo al arrancar una tarea, Qué hay en `graphify-out/`, Reglas duras, Use Graphify

### Community 126 - "Quickstart: Validación y Ejecución (002-cupones-descuento)"
Cohesion: 0.29
Nodes (6): 1. Escenario A: Alta de Cupón en el Panel Admin, 2. Escenario B: Validación y Reserva en Soft Lock (Portal Público), 3. Escenario C: Protección contra Fuerza Bruta, 4. Escenario D: Validación de Protección Anti-Bot, 5. Ejecución de Tests Automatizados, Quickstart: Validación y Ejecución (002-cupones-descuento)

### Community 127 - "SKILL.md"
Cohesion: 0.33
Nodes (5): Outline, Post-Execution Checks, Pre-Execution Checks, Scope Guard, User Input

### Community 128 - "SKILL.md"
Cohesion: 0.33
Nodes (5): Deprecation Notice, Outline, Post-Execution Checks, Pre-Execution Checks, User Input

### Community 129 - "edge.js"
Cohesion: 0.33
Nodes (5): config, Prisma, PrismaClient, {
  PrismaClientKnownRequestError,
  PrismaClientUnknownRequestError,
  PrismaClientRustPanicError,
  PrismaClientInitializationError,
  PrismaClientValidationError,
  getPrismaClient,
  sqltag,
  empty,
  join,
  raw,
  skip,
  Decimal,
  Debug,
  DbNull,
  JsonNull,
  AnyNull,
  NullTypes,
  makeStrictEnum,
  Extensions,
  warnOnce,
  defineDmmfProperty,
  Public,
  getRuntime,
  createParam,
}, empty()

### Community 135 - "graphify reference: query, path, explain"
Cohesion: 0.33
Nodes (5): For /graphify explain, For /graphify path, graphify reference: query, path, explain, Step 0 — Constrained query expansion (REQUIRED before traversal), Step 1 — Traversal

### Community 136 - "SKILL.md"
Cohesion: 0.33
Nodes (5): Outline, Post-Execution Checks, Pre-Execution Checks, Scope Guard, User Input

### Community 137 - "SKILL.md"
Cohesion: 0.33
Nodes (5): Deprecation Notice, Outline, Post-Execution Checks, Pre-Execution Checks, User Input

### Community 138 - "package.json"
Cohesion: 0.33
Nodes (5): name, prisma, seed, private, version

### Community 139 - "load-availability.ts"
Cohesion: 0.40
Nodes (5): CONCURRENCY, DURATION_SECONDS, main(), Metrics, workerLoop()

### Community 140 - "Contratos de API Pública: Motor de Reservas (001-motor-reservas-pms)"
Cohesion: 0.33
Nodes (5): 1. Búsqueda y Disponibilidad de Categorías, 2. Creación / Activación de Soft Lock (Paso 2), 3. Confirmación de Reserva Web Directa, 4. Exportación iCal de Unidad Física (Canales Externos), Contratos de API Pública: Motor de Reservas (001-motor-reservas-pms)

### Community 141 - "Contratos de API Administrativa: Gestión de Cupones (002-cupones-descuento)"
Cohesion: 0.33
Nodes (5): 1. Listado de Cupones con Métricas, 2. Creación de Cupón, 3. Edición de Cupón (Protección de Integridad Contable), 4. Trazabilidad e Historial de Canjes de un Cupón, Contratos de API Administrativa: Gestión de Cupones (002-cupones-descuento)

### Community 142 - "index-browser.js"
Cohesion: 0.40
Nodes (3): {
  Decimal,
  DbNull,
  JsonNull,
  AnyNull,
  NullTypes,
  makeStrictEnum,
  Public,
  getRuntime,
  skip
}, Prisma, PrismaClient

### Community 147 - "./edge"
Cohesion: 0.40
Nodes (5): default, import, require, types, ./edge

### Community 148 - "./extension"
Cohesion: 0.40
Nodes (5): ./extension, default, import, require, types

### Community 149 - "./index-browser"
Cohesion: 0.40
Nodes (5): ./index-browser, default, import, require, types

### Community 150 - "./runtime/index-browser"
Cohesion: 0.40
Nodes (5): ./runtime/index-browser, default, import, require, types

### Community 151 - "./runtime/wasm-compiler-edge"
Cohesion: 0.40
Nodes (5): ./runtime/wasm-compiler-edge, default, import, require, types

### Community 152 - "Ai"
Cohesion: 0.40
Nodes (5): fe(), Ai(), dt(), xp(), $()

### Community 154 - "[CHECKLIST TYPE] Checklist: [FEATURE NAME]"
Cohesion: 0.40
Nodes (4): [Category 1], [Category 2], [CHECKLIST TYPE] Checklist: [FEATURE NAME], Notes

### Community 155 - "Contratos de API Pública: Cupones y Protección Anti-Bot (002-cupones-descuento)"
Cohesion: 0.40
Nodes (4): 1. Validación y Aplicación de Cupón en Portal Público, 2. Remoción de Cupón en Soft Lock, 3. Confirmación de Reserva con Protección Anti-Bot, Contratos de API Pública: Cupones y Protección Anti-Bot (002-cupones-descuento)

### Community 156 - "Troubleshooting: PostgreSQL Exclusion Constraint con Predicado Inmutable"
Cohesion: 0.40
Nodes (4): Causa Raíz, Solución, Síntoma, Troubleshooting: PostgreSQL Exclusion Constraint con Predicado Inmutable

### Community 163 - "graphify reference: add a URL and watch a folder"
Cohesion: 0.50
Nodes (3): For /graphify add, For --watch, graphify reference: add a URL and watch a folder

### Community 164 - "graphify reference: commit hook and native CLAUDE.md integration"
Cohesion: 0.50
Nodes (3): For git commit hook, For native CLAUDE.md integration, graphify reference: commit hook and native CLAUDE.md integration

### Community 165 - "graphify reference: incremental update and cluster-only"
Cohesion: 0.50
Nodes (3): For --cluster-only, For --update (incremental re-extraction), graphify reference: incremental update and cluster-only

### Community 168 - "PrismaClientBaseOptions"
Cohesion: 0.67
Nodes (3): PrismaClientBaseOptions, PrismaClientOptionsWithAccelerateUrl, PrismaClientOptionsWithAdapter

## Knowledge Gaps
- **2278 isolated node(s):** `CategoryItem`, `CompanionItem`, `CalendarUnit`, `CalendarEvent`, `UnitIcalModalProps` (+2273 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **63 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `gs()` connect `write` to `client.js`, `cs`?**
  _High betweenness centrality (0.121) - this node is a cross-community bridge._
- **Why does `Or` connect `write` to `client.d.ts`?**
  _High betweenness centrality (0.121) - this node is a cross-community bridge._
- **Why does `r()` connect `r` to `client.js`, `wasm-compiler-edge.js`, `#n`, `addErrorMessage`, `load-availability.ts`, `interpretNode`, `_c`, `toString`, `e`, `t`, `write`, `slice`, `cs`, `Ai`, `constructor`, `query_compiler_fast_bg.js`, `constructor`, `write`, `slice`, `Yt`, `writeInto`, `Kn`, `a`, `Ta`, `lu`, `ri`?**
  _High betweenness centrality (0.077) - this node is a cross-community bridge._
- **Are the 83 inferred relationships involving `r()` (e.g. with `k()` and `l()`) actually correct?**
  _`r()` has 83 INFERRED edges - model-reasoned connections that need verification._
- **Are the 24 inferred relationships involving `e()` (e.g. with `wasm-compiler-edge.js` and `am()`) actually correct?**
  _`e()` has 24 INFERRED edges - model-reasoned connections that need verification._
- **Are the 36 inferred relationships involving `a()` (e.g. with `constructor()` and `gl()`) actually correct?**
  _`a()` has 36 INFERRED edges - model-reasoned connections that need verification._
- **Are the 21 inferred relationships involving `t()` (e.g. with `Bt()` and `cl()`) actually correct?**
  _`t()` has 21 INFERRED edges - model-reasoned connections that need verification._