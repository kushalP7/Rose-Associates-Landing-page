"use client"

import * as React from "react"
import { PieChart } from "lucide-react"

export function LowestPerformingModulesChart() {
  return (
    <div className="bg-white rounded-2xl border border-slate-200/90 shadow-2xs p-5 sm:p-6 flex flex-col justify-between hover:shadow-md transition-shadow">
      <div className="space-y-0.5 border-b border-slate-100 pb-3">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-md bg-red-50 text-red-600 flex items-center justify-center">
            <PieChart className="w-3.5 h-3.5" />
          </div>
          <div>
            <h3 className="text-sm font-bold text-slate-900">Lowest Performing Modules</h3>
            <p className="text-[10px] text-slate-400 font-medium">Lowest scoring sections</p>
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center py-2">
        <svg viewBox="0 0 280 220" className="w-full h-48 max-w-[260px]">
          <defs>
            <filter id="glowLow" x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow dx="0" dy="2" stdDeviation="3" floodColor="#7F1D1D" floodOpacity="0.25" />
            </filter>
          </defs>

          {/* 5 Donut Slices */}
          <g filter="url(#glowLow)">
            <circle cx="140" cy="110" r="54" fill="none" stroke="#7F1D1D" strokeWidth="24" strokeDasharray="64 275" strokeDashoffset="0" />
            <circle cx="140" cy="110" r="54" fill="none" stroke="#B91C1C" strokeWidth="24" strokeDasharray="64 275" strokeDashoffset="-68" />
            <circle cx="140" cy="110" r="54" fill="none" stroke="#DC2626" strokeWidth="24" strokeDasharray="64 275" strokeDashoffset="-136" />
            <circle cx="140" cy="110" r="54" fill="none" stroke="#EF4444" strokeWidth="24" strokeDasharray="64 275" strokeDashoffset="-204" />
            <circle cx="140" cy="110" r="54" fill="none" stroke="#F87171" strokeWidth="24" strokeDasharray="64 275" strokeDashoffset="-272" />
          </g>

          {/* Center Callout */}
          <text x="140" y="102" className="text-[9px] font-extrabold fill-slate-400 uppercase tracking-widest font-sans" textAnchor="middle">LOW 5</text>
          <text x="140" y="122" className="text-xl font-black fill-red-600 font-sans" textAnchor="middle">4.9 avg</text>

          {/* 5 Radial Leader Labels Fitted Around Graph */}
          <circle cx="180" cy="65" r="3" fill="#7F1D1D" />
          <text x="188" y="68" className="text-[9px] font-extrabold fill-slate-800 font-sans" textAnchor="start">01 Historic <tspan className="fill-red-600 font-black">(4.1)</tspan></text>

          <circle cx="202" cy="118" r="3" fill="#B91C1C" />
          <text x="210" y="121" className="text-[9px] font-extrabold fill-slate-800 font-sans" textAnchor="start">02 Culture <tspan className="fill-red-600 font-black">(4.5)</tspan></text>

          <circle cx="152" cy="172" r="3" fill="#DC2626" />
          <text x="152" y="186" className="text-[9px] font-extrabold fill-slate-800 font-sans" textAnchor="middle">03 Land Use <tspan className="fill-red-600 font-black">(4.9)</tspan></text>

          <circle cx="78" cy="128" r="3" fill="#EF4444" />
          <text x="70" y="131" className="text-[9px] font-extrabold fill-slate-800 font-sans" textAnchor="end">04 Transport <tspan className="fill-red-600 font-black">(5.2)</tspan></text>

          <circle cx="92" cy="65" r="3" fill="#F87171" />
          <text x="84" y="68" className="text-[9px] font-extrabold fill-slate-800 font-sans" textAnchor="end">05 Infra <tspan className="fill-red-600 font-black">(5.6)</tspan></text>
        </svg>
      </div>

      <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
        <span className="text-slate-500 font-medium">Lowest Performers</span>
        <span className="text-red-600 font-bold">5 Low Modules</span>
      </div>
    </div>
  )
}
