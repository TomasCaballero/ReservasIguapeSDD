import { describe, it, expect } from 'vitest';
import { canTransitionReservationStatus } from '@/lib/reservations/lifecycle';

describe('Reservation State Machine (US2)', () => {
  it('allows valid state transitions', () => {
    expect(canTransitionReservationStatus('PENDING', 'CONFIRMED')).toBe(true);
    expect(canTransitionReservationStatus('PENDING', 'CANCELLED')).toBe(true);
    expect(canTransitionReservationStatus('CONFIRMED', 'CANCELLED')).toBe(true);
    expect(canTransitionReservationStatus('CONFIRMED', 'FINISHED')).toBe(true);
    expect(canTransitionReservationStatus('CANCELLED', 'PENDING')).toBe(true);
    expect(canTransitionReservationStatus('CANCELLED', 'CONFIRMED')).toBe(true);
  });

  it('rejects invalid state transitions', () => {
    // FINISHED is a terminal state
    expect(canTransitionReservationStatus('FINISHED', 'PENDING')).toBe(false);
    expect(canTransitionReservationStatus('FINISHED', 'CONFIRMED')).toBe(false);
    expect(canTransitionReservationStatus('FINISHED', 'CANCELLED')).toBe(false);

    // Cannot transition to same status
    expect(canTransitionReservationStatus('CONFIRMED', 'CONFIRMED')).toBe(false);
  });
});
