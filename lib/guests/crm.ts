import prisma from '@/lib/db/client';

export function isLeapYear(year: number): boolean {
  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}

/**
 * Checks if a birth date falls in the next 30 days from referenceDate.
 * Enforces RF-60 / AC-94: If born on Feb 29, in non-leap years birthday is celebrated on Feb 28.
 */
export function isBirthdayInNext30Days(birthDate: Date, referenceDate: Date = new Date()): boolean {
  const refYear = referenceDate.getFullYear();
  const startOfRefDay = new Date(refYear, referenceDate.getMonth(), referenceDate.getDate()).getTime();
  const msPerDay = 1000 * 60 * 60 * 24;

  const bMonth = birthDate.getUTCMonth();
  let bDay = birthDate.getUTCDate();

  // Check both refYear and refYear + 1 (for window crossing New Year)
  for (const year of [refYear, refYear + 1]) {
    let targetMonth = bMonth;
    let targetDay = bDay;

    // Feb 29 mapping
    if (bMonth === 1 && bDay === 29) {
      if (!isLeapYear(year)) {
        targetDay = 28;
      }
    }

    const candidate = new Date(year, targetMonth, targetDay).getTime();
    const diffDays = Math.round((candidate - startOfRefDay) / msPerDay);

    if (diffDays >= 0 && diffDays <= 30) {
      return true;
    }
  }

  return false;
}

export function daysUntilBirthday(birthDate: Date, referenceDate: Date = new Date()): number {
  const refYear = referenceDate.getFullYear();
  const startOfRefDay = new Date(refYear, referenceDate.getMonth(), referenceDate.getDate()).getTime();
  const msPerDay = 1000 * 60 * 60 * 24;

  const bMonth = birthDate.getUTCMonth();
  let bDay = birthDate.getUTCDate();

  for (const year of [refYear, refYear + 1]) {
    let targetDay = bDay;
    if (bMonth === 1 && bDay === 29 && !isLeapYear(year)) {
      targetDay = 28;
    }
    const candidate = new Date(year, bMonth, targetDay).getTime();
    const diffDays = Math.round((candidate - startOfRefDay) / msPerDay);
    if (diffDays >= 0) {
      return diffDays;
    }
  }
  return 999;
}

export async function getGuestsDirectory(search?: string) {
  const whereClause: any = {};
  if (search && search.trim()) {
    const q = search.trim();
    whereClause.OR = [
      { firstName: { contains: q, mode: 'insensitive' } },
      { lastName: { contains: q, mode: 'insensitive' } },
      { docNumber: { contains: q } },
      { email: { contains: q, mode: 'insensitive' } },
    ];
  }

  return prisma.guest.findMany({
    where: whereClause,
    include: {
      reservations: {
        orderBy: { checkIn: 'desc' },
        select: {
          id: true,
          checkIn: true,
          checkOut: true,
          status: true,
          totalPrice: true,
          currency: true,
          category: { select: { name: true } },
        },
      },
    },
    orderBy: { lastName: 'asc' },
  });
}

export async function calculateUpcomingBirthdays() {
  const guests = await prisma.guest.findMany({
    where: {
      birthDate: { not: null },
      firstName: { not: 'ANONIMIZADO' },
    },
    select: {
      id: true,
      firstName: true,
      lastName: true,
      email: true,
      phone: true,
      birthDate: true,
    },
  });

  const now = new Date();
  const upcoming = guests
    .filter((g) => g.birthDate && isBirthdayInNext30Days(g.birthDate, now))
    .map((g) => ({
      ...g,
      daysRemaining: daysUntilBirthday(g.birthDate!, now),
    }))
    .sort((a, b) => a.daysRemaining - b.daysRemaining);

  return upcoming;
}
