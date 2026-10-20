import React from 'react';
import prisma from '@/lib/db/client';
import { UnitIcalModal } from './unit-ical-modal';

export default async function CategoriesUnitsPage() {
  const categories = await prisma.category.findMany({
    include: { units: true },
    orderBy: { displayOrder: 'asc' },
  });

  const units = await prisma.unit.findMany({
    include: { category: true },
    orderBy: [{ category: { displayOrder: 'asc' } }, { name: 'asc' }],
  });

  return (
    <div className="space-y-10">
      <div className="border-b border-[#AD9C78]/30 pb-4">
        <h1 className="font-display text-3xl text-[#E6EF73]">Inventario: Categorías y Unidades</h1>
        <p className="text-sm text-[#E4E2C5]/70">
          Administrá las tipologías de aparts y las unidades físicas del complejo.
        </p>
      </div>

      {/* Categories Section */}
      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="font-display text-2xl text-[#E4E2C5]">Categorías de Aparts</h2>
        </div>

        <div className="bg-[#2B3D24] border border-[#AD9C78]/30 overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead className="bg-[#3F5934] text-xs uppercase tracking-wider text-[#AD9C78] border-b border-[#AD9C78]/30">
              <tr>
                <th className="p-3">Categoría</th>
                <th className="p-3">Slug</th>
                <th className="p-3">Capacidad</th>
                <th className="p-3">Tarifa Base ARS</th>
                <th className="p-3">Tarifa Base USD</th>
                <th className="p-3">Unidades Físicas</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#AD9C78]/20 text-[#E4E2C5]/90">
              {categories.map((cat) => (
                <tr key={cat.id} className="hover:bg-[#3F5934]/40">
                  <td className="p-3 font-semibold text-[#E6EF73]">{cat.name}</td>
                  <td className="p-3 font-mono text-xs">{cat.slug}</td>
                  <td className="p-3 text-xs">
                    Hasta {cat.maxOccupancy} pers ({cat.capacityAdults} adultos, {cat.capacityChildren} niños)
                  </td>
                  <td className="p-3 font-mono font-bold">${Number(cat.basePriceArs).toLocaleString()}</td>
                  <td className="p-3 font-mono font-bold">U$S {Number(cat.basePriceUsd).toLocaleString()}</td>
                  <td className="p-3 font-mono">{cat.units.length} unidades</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Units Section */}
      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="font-display text-2xl text-[#E4E2C5]">Unidades Físicas</h2>
        </div>

        <div className="bg-[#2B3D24] border border-[#AD9C78]/30 overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead className="bg-[#3F5934] text-xs uppercase tracking-wider text-[#AD9C78] border-b border-[#AD9C78]/30">
              <tr>
                <th className="p-3">Nombre Unidad</th>
                <th className="p-3">Categoría</th>
                <th className="p-3">Estado</th>
                <th className="p-3">Token de Exportación iCal</th>
                <th className="p-3">Feed Externo (Importación)</th>
                <th className="p-3 text-right">Acciones</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#AD9C78]/20 text-[#E4E2C5]/90">
              {units.map((unit) => (
                <tr key={unit.id} className="hover:bg-[#3F5934]/40">
                  <td className="p-3 font-bold text-[#E6EF73]">{unit.name}</td>
                  <td className="p-3 text-xs text-[#E4E2C5]/80">{unit.category.name}</td>
                  <td className="p-3">
                    <span className="text-xs bg-emerald-950 text-emerald-400 border border-emerald-700 px-2 py-0.5 font-bold">
                      Activa
                    </span>
                  </td>
                  <td className="p-3 font-mono text-[11px] text-[#AD9C78] truncate max-w-xs">
                    {unit.icalExportToken}
                  </td>
                  <td className="p-3 font-mono text-[11px] text-[#E4E2C5]/60 truncate max-w-xs">
                    {unit.icalFeedUrl || 'No configurado'}
                  </td>
                  <td className="p-3 text-right">
                    <UnitIcalModal unit={unit} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
