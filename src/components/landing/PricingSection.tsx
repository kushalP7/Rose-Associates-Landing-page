"use client"

import * as React from "react"
import Link from "next/link"
import { Calculator, Activity, FileText, ArrowRight, Check } from "lucide-react"

export function PricingSection() {
  const reportPrice = 1000
  const subscriptionPrice = 800
  const totalPlanPrice = reportPrice + subscriptionPrice

  return (
    <section id="pricing-section" className="scroll-mt-20 py-12 sm:py-16 bg-slate-50/50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Header & Formula Pill */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
            Billing Plan Options
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl mx-auto">
            Select between a single scorecard audit report payment or our full All-In-One platform subscription package.
          </p>

          <div className="inline-flex items-center gap-2 text-xs font-bold text-[#B5111B] bg-red-50 px-4 py-2 rounded-full border border-red-200 shadow-2xs">
            <Calculator className="w-4 h-4 text-[#B5111B]" />
            <span>Plan Calculation: <strong className="font-extrabold text-slate-900">${reportPrice} (Report Plan) + ${subscriptionPrice} (Subscription Plan) = ${totalPlanPrice} / Year</strong></span>
          </div>
        </div>

        {/* Sequential Billing Workflow Card */}
        <div className="bg-white rounded-2xl border border-slate-200/90 shadow-2xs p-6 sm:p-8 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-100 pb-4">
            <div className="flex items-center gap-2.5">
              <div className="w-7 h-7 rounded-lg bg-red-50 text-[#B5111B] flex items-center justify-center">
                <Activity className="w-4 h-4" />
              </div>
              <span className="text-xs font-black uppercase tracking-wider text-slate-900">
                Billing Plan Architecture
              </span>
            </div>
            <span className="px-3 py-1 rounded-full text-xs font-bold bg-emerald-50 text-emerald-700 border border-emerald-200/80 shadow-2xs w-fit flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Active 2-Plan System</span>
            </span>
          </div>

          <div className="flex flex-col lg:flex-row items-center gap-3">
            
            <div className="flex-1 p-5 bg-slate-50/70 rounded-2xl border border-slate-200/80 flex items-start gap-4 w-full h-full">
              <div className="w-10 h-10 rounded-xl bg-red-50 text-[#B5111B] flex items-center justify-center shrink-0">
                <FileText className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <div className="text-[10px] font-extrabold text-[#B5111B] uppercase tracking-wider">Option 01: Single Audit</div>
                <div className="font-extrabold text-slate-900 text-sm">Single Report Plan (${reportPrice} / Report)</div>
                <p className="text-xs text-slate-500 font-normal leading-relaxed">
                  Single project audit calculation. Unlocks executive scorecard PDF generation & seal.
                </p>
              </div>
            </div>

            <div className="hidden lg:flex items-center justify-center text-slate-300 shrink-0 px-1">
              <ArrowRight className="w-5 h-5" />
            </div>

            <div className="flex-1 p-5 bg-slate-50/70 rounded-2xl border border-slate-200/80 flex items-start gap-4 w-full h-full">
              <div className="w-10 h-10 rounded-xl bg-red-50 text-[#B5111B] flex items-center justify-center shrink-0">
                <Calculator className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <div className="text-[10px] font-extrabold text-[#B5111B] uppercase tracking-wider">Option 02: All-In-One Package</div>
                <div className="font-extrabold text-slate-900 text-sm">Total All-In-One Plan (${totalPlanPrice} / Year)</div>
                <p className="text-xs text-slate-500 font-normal leading-relaxed">
                  Complete bundle: ${reportPrice} Report + ${subscriptionPrice} Subscription = ${totalPlanPrice}/yr.
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* 2 Real Plans Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch pt-2 w-full">
          
          {/* PLAN 1: Single Report Plan ($1,000 / Report) */}
          <div className="bg-white rounded-2xl border border-slate-200/90 p-6 sm:p-8 space-y-6 flex flex-col justify-between shadow-2xs hover:shadow-md transition-shadow">
            <div className="space-y-5">
              <div className="space-y-1.5">
                <div className="text-xs font-black text-[#B5111B] uppercase tracking-wider">Single Report Option</div>
                <h3 className="text-xl font-bold text-slate-900">Single Report Plan</h3>
                <p className="text-xs text-slate-500 leading-relaxed">Official scorecard audit calculation, single project assessment PDF delivery & verified stamp.</p>
              </div>

              <div className="pt-2 border-t border-slate-100 space-y-1.5">
                <div className="text-4xl font-black text-slate-900">
                  ${reportPrice}
                  <span className="text-xs font-semibold text-slate-400"> /Report</span>
                </div>
                <span className="inline-block text-[11px] font-bold text-slate-700 bg-slate-100 px-3 py-1 rounded-lg border border-slate-200">
                  Single Report One-Time Payment
                </span>
              </div>

              <ul className="space-y-3 pt-2 text-xs text-slate-700 font-medium">
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-[#B5111B] shrink-0" />
                  <span>Single Certified Audit Calculation</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-[#B5111B] shrink-0" />
                  <span>Executive PDF Export Download</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-[#B5111B] shrink-0" />
                  <span>Kathleen Rose, CCIM/CRE Advisory Seal</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-[#B5111B] shrink-0" />
                  <span>Action vs Inaction Projections</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-[#B5111B] shrink-0" />
                  <span>Official Audit Timestamp & Cryptographic Hash</span>
                </li>
              </ul>
            </div>

            <Link
              href="/login"
              className="w-full bg-[#0A101D] hover:bg-slate-800 text-white font-extrabold text-xs sm:text-sm py-3.5 rounded-xl shadow-xs transition-all text-center block cursor-pointer mt-4"
            >
              Buy Single Report (${reportPrice})
            </Link>
          </div>

          {/* PLAN 2: All-In-One Solution ($1,800 / Year) */}
          <div className="bg-white rounded-2xl border-2 border-[#B5111B] p-6 sm:p-8 space-y-6 flex flex-col justify-between shadow-lg relative overflow-hidden ring-4 ring-[#B5111B]/10">
            <div className="absolute top-0 right-0 bg-[#B5111B] text-white text-[10px] font-black uppercase tracking-wider py-1 px-3.5 rounded-bl-xl shadow-xs">
              All-In-One Solution
            </div>

            <div className="space-y-5">
              <div className="space-y-1.5">
                <div className="text-xs font-black text-[#B5111B] uppercase tracking-wider">Complete Package</div>
                <h3 className="text-xl font-bold text-slate-900">Total All-In-One Plan</h3>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Includes Single Report Plan (${reportPrice}) + Platform Subscription (${subscriptionPrice}). Clients get updated reports as project data changes.
                </p>
              </div>

              <div className="p-3.5 bg-red-50/90 border border-red-200 rounded-xl space-y-1 text-xs">
                <div className="text-[10px] font-extrabold text-[#B5111B] uppercase tracking-wider">
                  Plan Calculation Formula
                </div>
                <div className="font-extrabold text-slate-900 text-xs sm:text-sm flex items-center justify-between flex-wrap gap-1">
                  <span>$1,000 Report + $800 Subscription</span>
                  <span className="text-[#B5111B] font-black text-sm sm:text-base">= $1,800 / Year</span>
                </div>
              </div>

              <div className="pt-2 border-t border-slate-100 space-y-1.5">
                <div className="text-4xl font-black text-[#B5111B]">
                  ${totalPlanPrice}
                  <span className="text-xs font-semibold text-slate-400"> /Year</span>
                </div>
                <span className="inline-block text-[11px] font-bold text-[#B5111B] bg-red-50 px-3 py-1 rounded-lg border border-red-200/80">
                  $1,000 (Report Plan) + $800 (Subscription)
                </span>
              </div>

              <ul className="space-y-3 pt-2 text-xs text-slate-700 font-medium">
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-[#B5111B] shrink-0" />
                  <span>Full Annual Platform Access ($800 Value)</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-[#B5111B] shrink-0" />
                  <span>Single Certified Report Plan ($1,000 Value)</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-[#B5111B] shrink-0" />
                  <span className="font-bold text-slate-900">Receive Continuous Updated Reports as Data Evolves</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-[#B5111B] shrink-0" />
                  <span>Unlimited Certified Scorecard Reports</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-[#B5111B] shrink-0" />
                  <span>Custom Section Maker & Schema Engine</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-[#B5111B] shrink-0" />
                  <span>Priority Advisory Review & Support SLA</span>
                </li>
              </ul>
            </div>

            <Link
              href="/login"
              className="w-full bg-[#B5111B] hover:bg-[#8F0D15] text-white font-extrabold text-xs sm:text-sm py-3.5 rounded-xl shadow-md transition-all text-center block cursor-pointer mt-4"
            >
              Buy All-In-One Solution ($1,800/yr)
            </Link>
          </div>

        </div>

      </div>
    </section>
  )
}
