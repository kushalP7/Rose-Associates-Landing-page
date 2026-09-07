"use client"

import * as React from "react"
import { TrendingUp } from "lucide-react"

export function TopPerformingModulesChart() {
  return (
    <div className="bg-white rounded-2xl border border-slate-200/90 shadow-2xs p-4 sm:p-5 flex flex-col justify-between hover:shadow-md transition-shadow">
      <div className="space-y-0.5 border-b border-slate-100 pb-3">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-emerald-600 to-teal-600 text-white flex items-center justify-center shrink-0 shadow-xs">
            <TrendingUp className="w-4.5 h-4.5 text-white" />
          </div>
          <div>
            <h3 className="text-base font-bold text-slate-900">Top Performing Modules</h3>
            <p className="text-xs text-slate-400 font-medium">Highest scoring sections</p>
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center py-3">
        <svg viewBox="0 0 380 240" className="w-full h-56 sm:h-60 max-w-[360px] overflow-visible">
          <defs>
            <filter id="glowTop" x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow dx="0" dy="2" stdDeviation="4" floodColor="#14532D" floodOpacity="0.25" />
            </filter>
          </defs>

          {/* 5 Donut Slices */}
          <g filter="url(#glowTop)">
            <circle cx="190" cy="120" r="66" fill="none" stroke="#14532D" strokeWidth="26" strokeDasharray="83 332" strokeDashoffset="0" />
            <circle cx="190" cy="120" r="66" fill="none" stroke="#15803D" strokeWidth="26" strokeDasharray="83 332" strokeDashoffset="-83" />
            <circle cx="190" cy="120" r="66" fill="none" stroke="#16A34A" strokeWidth="26" strokeDasharray="83 332" strokeDashoffset="-166" />
            <circle cx="190" cy="120" r="66" fill="none" stroke="#22C55E" strokeWidth="26" strokeDasharray="83 332" strokeDashoffset="-249" />
            <circle cx="190" cy="120" r="66" fill="none" stroke="#4ADE80" strokeWidth="26" strokeDasharray="83 332" strokeDashoffset="-332" />
          </g>

          {/* Center Callout */}
          <text x="190" y="110" className="text-[10px] font-extrabold fill-slate-400 uppercase tracking-widest font-sans" textAnchor="middle">TOP 5</text>
          <text x="190" y="133" className="text-2xl font-black fill-emerald-600 font-sans" textAnchor="middle">8.0 avg</text>

          {/* 5 Radial Leader Labels Fitted Around Graph */}
          <circle cx="236" cy="70" r="3.5" fill="#14532D" />
          <text x="244" y="74" className="text-[10.5px] font-extrabold fill-slate-800 font-sans" textAnchor="start">01 Housing <tspan className="fill-emerald-700 font-black">(8.8)</tspan></text>

          <circle cx="261" cy="128" r="3.5" fill="#15803D" />
          <text x="269" y="131" className="text-[10.5px] font-extrabold fill-slate-800 font-sans" textAnchor="start">02 Safety <tspan className="fill-emerald-700 font-black">(8.4)</tspan></text>

          <circle cx="204" cy="191" r="3.5" fill="#16A34A" />
          <text x="204" y="207" className="text-[10.5px] font-extrabold fill-slate-800 font-sans" textAnchor="middle">03 Labor <tspan className="fill-emerald-700 font-black">(7.9)</tspan></text>

          <circle cx="118" cy="140" r="3.5" fill="#22C55E" />
          <text x="110" y="143" className="text-[10.5px] font-extrabold fill-slate-800 font-sans" textAnchor="end">04 Health <tspan className="fill-emerald-700 font-black">(7.6)</tspan></text>

          <circle cx="136" cy="70" r="3.5" fill="#4ADE80" />
          <text x="128" y="74" className="text-[10.5px] font-extrabold fill-slate-800 font-sans" textAnchor="end">05 Transit <tspan className="fill-emerald-700 font-black">(7.2)</tspan></text>
        </svg>
      </div>

      <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
        <span className="text-slate-500 font-medium">Top Performers</span>
        <span className="text-emerald-600 font-bold">5 High Modules</span>
      </div>
    </div>
  )
}
