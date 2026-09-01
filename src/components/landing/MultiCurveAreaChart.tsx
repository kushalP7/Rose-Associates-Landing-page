"use client"

import * as React from "react"

export function MultiCurveAreaChart() {
  return (
    <div className="bg-white rounded-2xl border border-slate-200/90 shadow-sm p-6 space-y-4 hover:shadow-md transition-shadow">
      <div className="space-y-0.5 border-b border-slate-100 pb-3">
        <h3 className="text-sm font-bold text-slate-900">Accessibility & Transportation Score Breakdown</h3>
        <p className="text-[10px] text-slate-400 font-mono">Multi-indicator score distribution</p>
      </div>

      <div className="flex justify-center items-center py-2">
        <svg viewBox="0 0 200 200" className="w-44 h-44">
          <circle cx="100" cy="100" r="64" fill="none" stroke="#B5111B" strokeWidth="32" strokeDasharray="95 307" strokeDashoffset="0" />
          <circle cx="100" cy="100" r="64" fill="none" stroke="#D37076" strokeWidth="32" strokeDasharray="75 327" strokeDashoffset="-100" />
          <circle cx="100" cy="100" r="64" fill="none" stroke="#CCCACA" strokeWidth="32" strokeDasharray="65 337" strokeDashoffset="-180" />
          <circle cx="100" cy="100" r="64" fill="none" stroke="#444242" strokeWidth="32" strokeDasharray="80 322" strokeDashoffset="-250" />
          <circle cx="100" cy="100" r="64" fill="none" stroke="#6D0A10" strokeWidth="32" strokeDasharray="70 332" strokeDashoffset="-335" />

          <text x="100" y="92" className="text-[9px] font-bold fill-slate-400 uppercase tracking-wider font-sans" textAnchor="middle">TOTAL</text>
          <text x="100" y="112" className="text-xl font-black fill-slate-900 font-sans" textAnchor="middle">24.2</text>
        </svg>
      </div>

      <div className="pt-3 border-t border-slate-100 flex flex-wrap justify-center gap-1.5 text-xs">
        <span className="bg-slate-100 border border-slate-200/80 px-2 py-0.5 rounded-md text-[10px] font-semibold text-slate-700">STIP Projects 31% (7.5)</span>
        <span className="bg-slate-100 border border-slate-200/80 px-2 py-0.5 rounded-md text-[10px] font-semibold text-slate-700">Bike/Ped Plan 24% (5.8)</span>
        <span className="bg-slate-100 border border-slate-200/80 px-2 py-0.5 rounded-md text-[10px] font-semibold text-slate-700">Safety Score 21% (5.1)</span>
        <span className="bg-slate-100 border border-slate-200/80 px-2 py-0.5 rounded-md text-[10px] font-semibold text-slate-700">Pavement 24% (5.8)</span>
      </div>
    </div>
  )
}
