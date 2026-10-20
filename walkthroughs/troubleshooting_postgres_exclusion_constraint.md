# Troubleshooting: PostgreSQL Exclusion Constraint con Predicado Inmutable

## Síntoma
Al ejecutar `npx prisma migrate deploy` con la restricción de exclusión:
```sql
ALTER TABLE "UnitOccupancy" ADD CONSTRAINT "exclude_unit_occupancy_overlap"
EXCLUDE USING gist (
  unit_id WITH =,
  daterange(check_in, check_out, '[)') WITH &&
) WHERE (status = 'ACTIVE' AND (expires_at IS NULL OR expires_at > CURRENT_TIMESTAMP));
```
PostgreSQL lanza el error:
```
ERROR: las funciones utilizadas en predicados de índice deben estar marcadas IMMUTABLE (code 42P17)
```

## Causa Raíz
Los predicados de índices parciales y restricciones `EXCLUDE USING gist` en PostgreSQL requieren expresiones deterministas marcadas como `IMMUTABLE`. `CURRENT_TIMESTAMP` y `now()` dependen del tiempo del reloj y son `STABLE`, no `IMMUTABLE`. Por tanto, el motor de PostgreSQL rechaza su inclusión en la cláusula `WHERE` del índice.

## Solución
Se simplifica el predicado de la restricción a:
```sql
ALTER TABLE "UnitOccupancy" ADD CONSTRAINT "exclude_unit_occupancy_overlap"
EXCLUDE USING gist (
  unit_id WITH =,
  daterange(check_in, check_out, '[)') WITH &&
) WHERE (status = 'ACTIVE');
```
La gestión del ciclo de vida del soft lock garantiza la invariante:
1. Al vencer los 15 minutos exactos del soft lock, el estado pasa a `status = 'RELEASED'` (liberado) explícitamente o es ignorado por las consultas de disponibilidad y limpiado atómicamente antes de registrar un nuevo lock.
2. Mientras un soft lock esté en `status = 'ACTIVE'`, la restricción de PostgreSQL impide rigurosamente cualquier solapamiento físico en la unidad.
