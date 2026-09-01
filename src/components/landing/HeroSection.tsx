"use client"

import * as React from "react"
import Link from "next/link"
import { ArrowRight, ShieldCheck, Award } from "lucide-react"
import { CommunityWedgeWheel } from "./CommunityWedgeWheel"

export function HeroSection() {
  return (
    <section className="relative bg-[#540208] text-white overflow-hidden border-b border-red-950 min-h-[580px] lg:min-h-[660px] xl:min-h-[720px] 2xl:min-h-[780px] flex items-center">
      {/* Ambient Gradient Lighting & Mesh Accent */}
      <div className="absolute inset-0 bg-radial-[ellipse_at_center,_var(--tw-gradient-stops)] from-[#6A040E]/80 via-[#540208] to-[#3B0105] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff08_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none opacity-40" />

      {/* Desktop Flush Top-Right Wheel Graphic */}
      <div className="hidden lg:block absolute top-0 right-0 w-[52vw] max-w-[720px] xl:max-w-[840px] 2xl:max-w-[980px] h-full pointer-events-none z-10 select-none">
        <div className="relative w-full h-full flex items-start justify-end -mt-4 xl:-mt-8 2xl:-mt-12 -mr-4 xl:-mr-8 2xl:-mr-12">
          <div className="w-full max-w-[580px] xl:max-w-[700px] 2xl:max-w-[820px] pointer-events-auto">
            <CommunityWedgeWheel />
          </div>
        </div>
      </div>

      {/* Content Container */}
      <div className="w-full max-w-[1700px] mx-auto px-4 sm:px-6 lg:px-12 xl:px-16 2xl:px-24 py-14 sm:py-18 lg:py-20 xl:py-24 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Content Column */}
          <div className="lg:col-span-8 xl:col-span-7 2xl:col-span-7 space-y-6 sm:space-y-8 z-10 py-2 max-w-3xl xl:max-w-4xl 2xl:max-w-5xl">
            
            {/* Header Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-950/80 border border-white/80 text-white text-xs font-extrabold uppercase tracking-widest shadow-inner">
              <ShieldCheck className="w-4 h-4 text-[#E11D48]" />
              <span>ESTABLISHED 1992 • DAVIDSON, NORTH CAROLINA</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-[56px] 2xl:text-[66px] font-black text-white tracking-tight leading-[1.08]">
              Strategic Advisory<br />
              at the Intersection of<br />
              Economic Development<br />
              & Real Estate<span className="text-[#E11D48]">.</span>
            </h1>

            <p className="text-sm sm:text-base lg:text-lg xl:text-xl text-rose-100/90 leading-relaxed font-normal max-w-2xl xl:max-w-3xl 2xl:max-w-4xl">
              Rose Associates is a real estate and economic development advisory firm providing comprehensive services for private, institutional and municipal clients. Our 30+ years of experience in both urban and rural communities throughout the Carolinas and Southeast will guide you on a path toward prosperity. <strong className="text-[#E11D48] font-bold">Problem. Solved.</strong>
            </p>

            {/* Action CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link
                href="/services"
                className="bg-[#B5111B] hover:bg-[#8F0D15] text-white px-6 py-3.5 rounded-xl font-black text-xs uppercase tracking-wider shadow-xl flex items-center gap-2.5 transition-all hover:scale-105"
              >
                <span>Explore Advisory Services</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/report-showcase"
                className="bg-white/10 hover:bg-white/20 text-white border border-white/30 px-6 py-3.5 rounded-xl font-extrabold text-xs flex items-center gap-2 transition-all"
              >
                <span>View Sample Report</span>
              </Link>
            </div>

            {/* Divider Line */}
            <div className="w-full border-t border-red-900/60 pt-4 sm:pt-6" />

            {/* Bottom Stat Callout Text */}
            <div className="space-y-2 max-w-2xl xl:max-w-3xl">
              <h3 className="text-base sm:text-lg lg:text-xl xl:text-2xl font-black text-white tracking-tight leading-snug">
                90+ Data Points Simplified into the Insights That Matter<span className="text-[#E11D48]">.</span>
              </h3>
              <p className="text-xs sm:text-sm lg:text-base text-rose-200/90 font-normal leading-relaxed">
                Turn Municipal Spending into Measurable Quality of Life Gains with this helpful tool.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
