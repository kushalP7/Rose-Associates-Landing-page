"use client"

import * as React from "react"

export function GaugeSpeedometerChart({
  score = 6.4,
  max = 10,
  percentage = "64%",
}: {
  score?: number
  max?: number
  percentage?: string
}) {
  const angle = -90 + (score / max) * 180
  return (
    <div className="bg-white rounded-2xl border border-slate-200/90 shadow-2xs p-5 sm:p-6 space-y-4 flex flex-col justify-between hover:shadow-md transition-shadow">
      <div className="space-y-0.5 border-b border-slate-100 pb-3">
        <h3 className="text-sm font-bold text-slate-900">Overall Project Score</h3>
        <p className="text-[10px] text-slate-400 font-medium">Aggregated performance across all core metrics</p>
      </div>

      <div className="flex flex-col items-center justify-center py-2 relative">
        <svg viewBox="0 0 200 120" className="w-52 h-32">
          <defs>
            <linearGradient id="gaugeGradSpectrum" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#EF4444" />
              <stop offset="35%" stopColor="#F97316" />
              <stop offset="65%" stopColor="#EAB308" />
              <stop offset="100%" stopColor="#22C55E" />
            </linearGradient>
          </defs>
          <path
            d="M 25 95 A 75 75 0 0 1 175 95"
            fill="none"
            stroke="#F1F5F9"
            strokeWidth="16"
            strokeLinecap="round"
          />
          <path
            d="M 25 95 A 75 75 0 0 1 175 95"
            fill="none"
            stroke="url(#gaugeGradSpectrum)"
            strokeWidth="16"
            strokeLinecap="round"
          />
          <g transform={`rotate(${angle} 100 95)`}>
            <line x1="100" y1="95" x2="100" y2="40" stroke="#1E293B" strokeWidth="3.5" strokeLinecap="round" />
            <circle cx="100" cy="95" r="6" fill="#1E293B" />
            <circle cx="100" cy="95" r="2.5" fill="#FFFFFF" />
          </g>
        </svg>
        <div className="text-center pt-1">
          <div className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
            {score} <span className="text-xs sm:text-sm font-normal text-slate-400">/{max}</span>
          </div>
        </div>
      </div>

      <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
        <span className="text-slate-500 font-medium">Total Evaluation</span>
        <span className="text-[#B5111B] font-bold">{percentage} Overall Score</span>
      </div>
    </div>
  )
}
