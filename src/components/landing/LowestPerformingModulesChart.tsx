"use client"

import * as React from "react"
import { TrendingDown } from "lucide-react"

export function LowestPerformingModulesChart() {
  return (
    <div className="bg-white rounded-2xl border border-slate-200/90 shadow-2xs p-4 sm:p-5 flex flex-col justify-between hover:shadow-md transition-shadow">
      <div className="space-y-0.5 border-b border-slate-100 pb-3">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#B5111B] to-[#E11D48] text-white flex items-center justify-center shrink-0 shadow-xs">
            <TrendingDown className="w-4.5 h-4.5 text-white" />
          </div>
          <div>
            <h3 className="text-base font-bold text-slate-900">Lowest Performing Modules</h3>
            <p className="text-xs text-slate-400 font-medium">Lowest scoring sections</p>
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center py-3">
        <svg viewBox="0 0 380 240" className="w-full h-56 sm:h-60 max-w-[360px] overflow-visible">
          <defs>
            <filter id="glowLow" x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow dx="0" dy="2" stdDeviation="4" floodColor="#7F1D1D" floodOpacity="0.25" />
            </filter>
          </defs>

          {/* 5 Donut Slices */}
          <g filter="url(#glowLow)">
            <circle cx="190" cy="120" r="66" fill="none" stroke="#7F1D1D" strokeWidth="26" strokeDasharray="83 332" strokeDashoffset="0" />
            <circle cx="190" cy="120" r="66" fill="none" stroke="#B91C1C" strokeWidth="26" strokeDasharray="83 332" strokeDashoffset="-83" />
            <circle cx="190" cy="120" r="66" fill="none" stroke="#DC2626" strokeWidth="26" strokeDasharray="83 332" strokeDashoffset="-166" />
            <circle cx="190" cy="120" r="66" fill="none" stroke="#EF4444" strokeWidth="26" strokeDasharray="83 332" strokeDashoffset="-249" />
            <circle cx="190" cy="120" r="66" fill="none" stroke="#F87171" strokeWidth="26" strokeDasharray="83 332" strokeDashoffset="-332" />
          </g>

          {/* Center Callout */}
          <text x="190" y="110" className="text-[10px] font-extrabold fill-slate-400 uppercase tracking-widest font-sans" textAnchor="middle">LOW 5</text>
          <text x="190" y="133" className="text-2xl font-black fill-red-600 font-sans" textAnchor="middle">4.9 avg</text>

          {/* 5 Radial Leader Labels Fitted Around Graph */}
          <circle cx="236" cy="70" r="3.5" fill="#7F1D1D" />
          <text x="244" y="74" className="text-[10.5px] font-extrabold fill-slate-800 font-sans" textAnchor="start">01 Historic <tspan className="fill-red-600 font-black">(4.1)</tspan></text>

          <circle cx="261" cy="128" r="3.5" fill="#B91C1C" />
          <text x="269" y="131" className="text-[10.5px] font-extrabold fill-slate-800 font-sans" textAnchor="start">02 Culture <tspan className="fill-red-600 font-black">(4.5)</tspan></text>

          <circle cx="204" cy="191" r="3.5" fill="#DC2626" />
          <text x="204" y="207" className="text-[10.5px] font-extrabold fill-slate-800 font-sans" textAnchor="middle">03 Land Use <tspan className="fill-red-600 font-black">(4.9)</tspan></text>

          <circle cx="118" cy="140" r="3.5" fill="#EF4444" />
          <text x="110" y="143" className="text-[10.5px] font-extrabold fill-slate-800 font-sans" textAnchor="end">04 Transport <tspan className="fill-red-600 font-black">(5.2)</tspan></text>

          <circle cx="136" cy="70" r="3.5" fill="#F87171" />
          <text x="128" y="74" className="text-[10.5px] font-extrabold fill-slate-800 font-sans" textAnchor="end">05 Infra <tspan className="fill-red-600 font-black">(5.6)</tspan></text>
        </svg>
      </div>

      <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
        <span className="text-slate-500 font-medium">Lowest Performers</span>
        <span className="text-red-600 font-bold">5 Low Modules</span>
      </div>
    </div>
  )
}
