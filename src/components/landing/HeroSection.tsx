"use client"

import * as React from "react"
import Link from "next/link"
import { ArrowRight, ShieldCheck } from "lucide-react"
import { CommunityWedgeWheel } from "./CommunityWedgeWheel"

export function HeroSection() {
  return (
    <section className="relative bg-[#540208] text-white overflow-hidden border-b border-red-950 flex items-center min-h-0 lg:min-h-[540px] xl:min-h-[620px] 2xl:min-h-[720px]">
      {/* Ambient Gradient Lighting & Mesh Accent */}
      <div className="absolute inset-0 bg-radial-[ellipse_at_center,_var(--tw-gradient-stops)] from-[#6A040E]/80 via-[#540208] to-[#3B0105] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff08_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none opacity-40" />

      {/* Desktop Flush Right Wedge Wheel Graphic */}
      <div className="hidden lg:flex absolute top-1/2 -translate-y-1/2 right-0 lg:right-2 xl:right-6 2xl:right-10 w-[44vw] xl:w-[46vw] 2xl:w-[48vw] max-w-[480px] xl:max-w-[620px] 2xl:max-w-[780px] pointer-events-none z-10 select-none items-center justify-end pr-2 lg:pr-4">
        <div className="w-full pointer-events-auto">
          <CommunityWedgeWheel />
        </div>
      </div>

      {/* Content Container */}
      <div className="w-full max-w-[1700px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-14 2xl:px-20 py-6 sm:py-8 lg:py-8 xl:py-10 2xl:py-16 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
          
          {/* Left Content Column */}
          <div className="lg:col-span-8 xl:col-span-7 2xl:col-span-7 space-y-3.5 sm:space-y-4 lg:space-y-3.5 xl:space-y-4.5 2xl:space-y-6 z-10 max-w-2xl xl:max-w-3xl 2xl:max-w-4xl">
            
            {/* Header Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-red-950/80 border border-white/80 text-white text-[11px] lg:text-xs font-extrabold uppercase tracking-widest shadow-inner">
              <ShieldCheck className="w-3.5 h-3.5 text-[#E11D48]" />
              <span>ESTABLISHED 1992 • DAVIDSON, NORTH CAROLINA</span>
            </div>

            <h1 className="text-2xl sm:text-3xl lg:text-[36px] xl:text-[44px] 2xl:text-[56px] font-black text-white tracking-tight leading-[1.08]">
              Strategic Advisory<br />
              at the Intersection of<br />
              Economic Development<br />
              & Real Estate<span className="text-[#E11D48]">.</span>
            </h1>

            <p className="text-xs sm:text-sm lg:text-xs xl:text-sm 2xl:text-base text-rose-100/90 leading-relaxed font-normal max-w-xl xl:max-w-2xl 2xl:max-w-3xl">
              Rose Associates is a real estate and economic development advisory firm providing comprehensive services for private, institutional and municipal clients. Our 30+ years of experience in both urban and rural communities throughout the Carolinas and Southeast will guide you on a path toward prosperity. <strong className="text-[#E11D48] font-bold">Problem. Solved.</strong>
            </p>

            {/* Action CTA Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-1 lg:pt-1.5">
              <Link
                href="/services"
                className="bg-[#B5111B] hover:bg-[#8F0D15] text-white px-5 py-2.5 lg:px-5 lg:py-2.5 xl:px-6 xl:py-3 rounded-xl font-black text-xs uppercase tracking-wider shadow-xl flex items-center gap-2 transition-all hover:scale-105"
              >
                <span>Explore Advisory Services</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
              <Link
                href="/report-showcase"
                className="bg-white/10 hover:bg-white/20 text-white border border-white/30 px-5 py-2.5 lg:px-5 lg:py-2.5 xl:px-6 xl:py-3 rounded-xl font-extrabold text-xs flex items-center gap-2 transition-all"
              >
                <span>View Sample Report</span>
              </Link>
            </div>

            {/* Divider Line */}
            <div className="w-full border-t border-red-900/60 pt-3 lg:pt-3" />

            {/* Bottom Stat Callout Text */}
            <div className="space-y-1 lg:space-y-1 max-w-xl xl:max-w-2xl">
              <h3 className="text-sm sm:text-base lg:text-sm xl:text-base 2xl:text-xl font-black text-white tracking-tight leading-snug">
                90+ Data Points Simplified into the Insights That Matter<span className="text-[#E11D48]">.</span>
              </h3>
              <p className="text-[11px] sm:text-xs lg:text-[11px] xl:text-xs 2xl:text-sm text-rose-200/90 font-normal leading-normal">
                Turn Municipal Spending into Measurable Quality of Life Gains with this helpful tool.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
