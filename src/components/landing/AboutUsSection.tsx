"use client"

import * as React from "react"
import Link from "next/link"
import { 
  Award, 
  Compass, 
  Sparkles, 
  Building2, 
  Mail, 
  CheckCircle2, 
  ShieldCheck,
  TrendingUp
} from "lucide-react"

export function AboutUsSection() {
  return (
    <div className="bg-slate-50 text-slate-900 font-sans">
      
      {/* 1. EDITORIAL HERO HEADER */}
      <section className="relative bg-gradient-to-b from-slate-950 via-[#3B070B] to-slate-900 text-white py-16 sm:py-24 border-b border-red-950/80 overflow-hidden">
        {/* Subtle background glow pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(181,17,27,0.25),rgba(255,255,255,0))]" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-6 text-center max-w-4xl">
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.12]">
            Architects of Community Prosperity & <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-white via-rose-100 to-[#E11D48] bg-clip-text text-transparent">
              Strategic Real Estate Advisory
            </span>
          </h1>

          <p className="text-sm sm:text-base lg:text-lg text-slate-300 font-normal leading-relaxed max-w-3xl mx-auto">
            Three decades of transforming how municipalities, institutions, and developers harmonize land use planning, economic growth, and quality of life across the Carolinas and Southeast.
          </p>

          <div className="pt-4 flex flex-wrap items-center justify-center gap-4 text-xs font-bold">
            <div className="flex items-center gap-2 bg-slate-900/80 border border-slate-800 px-4 py-2 rounded-xl text-slate-300">
              <ShieldCheck className="w-4 h-4 text-[#E11D48]" />
              <span>Certified Woman-Owned Business</span>
            </div>
            <div className="flex items-center gap-2 bg-slate-900/80 border border-slate-800 px-4 py-2 rounded-xl text-slate-300">
              <Award className="w-4 h-4 text-[#E11D48]" />
              <span>CCIM & CRE Designated Leadership</span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. THE ORIGIN STORY: 1967 WORLD'S FAIR & GEODESIC VISION */}
      <section className="py-14 sm:py-20 bg-white border-b border-slate-200 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-extrabold uppercase tracking-widest text-[#B5111B]">
                  OUR INSPIRATION & HERITAGE
                </span>
                <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight leading-snug">
                  From Buckminster Fuller’s Dome to a 30-Year Advisory Legacy
                </h2>
              </div>

              <div className="space-y-4 text-sm text-slate-600 leading-relaxed font-normal">
                <p className="first-letter:text-4xl first-letter:font-black first-letter:text-[#B5111B] first-letter:mr-2 first-letter:float-left">
                  Our inspiration lies in a 1967 visit to the World’s Fair (Expo 67) by <strong>Robert E. Rose</strong>, whose calling as a home builder, developer, and master craftsman was transformed by Buckminster Fuller’s iconic geodesic dome. Rose returned home with a revolutionary vision for construction—one that fully considered a structure’s relationship to people and to the land.
                </p>
                <p>
                  Since 1992, <strong>Kathleen Rose, CCIM, CRE</strong> has carried forward her father’s vision by building an advisory practice that uniquely integrates real estate strategy, land use planning, and economic development expertise.
                </p>
                <p>
                  Today, Rose Associates provides municipal leaders, institutions, and private clients with data-grounded frameworks that develop prosperity, elevate quality of life, and curate lasting balance in the built environment.
                </p>
              </div>

              {/* Stat Callouts */}
              <div className="grid grid-cols-3 gap-4 pt-4 border-t border-slate-100">
                <div className="space-y-0.5">
                  <div className="text-2xl sm:text-3xl font-black text-[#B5111B]">30+</div>
                  <div className="text-[11px] font-bold text-slate-700">Years Industry Leadership</div>
                </div>
                <div className="space-y-0.5">
                  <div className="text-2xl sm:text-3xl font-black text-slate-900">90+</div>
                  <div className="text-[11px] font-bold text-slate-700">Verified Quality Metrics</div>
                </div>
                <div className="space-y-0.5">
                  <div className="text-2xl sm:text-3xl font-black text-[#B5111B]">Top 25</div>
                  <div className="text-[11px] font-bold text-slate-700">CBJ Women in Business</div>
                </div>
              </div>
            </div>

            {/* Right Card Image/Quote Box */}
            <div className="lg:col-span-5">
              <div className="bg-gradient-to-br from-slate-900 via-[#3B070B] to-slate-950 text-white p-8 sm:p-10 rounded-3xl shadow-2xl relative space-y-6 border border-red-950/80">
                
                <div className="w-12 h-12 rounded-2xl bg-red-600/30 border border-red-500/40 text-white flex items-center justify-center shadow-inner">
                  <Compass className="w-6 h-6 text-white" />
                </div>

                <blockquote className="space-y-4 italic text-sm text-slate-200 leading-relaxed font-serif">
                  &ldquo;A structure or community must never exist in isolation. True prosperity happens when land use, market realities, and human well-being align in seamless harmony.&rdquo;
                </blockquote>

                <div className="pt-4 border-t border-red-900/50 space-y-1">
                  <div className="text-base font-extrabold text-white">Kathleen Rose, CCIM, CRE</div>
                  <div className="text-xs text-rose-200/80 font-medium">Founder, President & CEO • Rose Associates</div>
                  <div className="text-[11px] text-slate-400 font-mono pt-1">Davidson, North Carolina</div>
                </div>

              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 3. THREE CORE PHILOSOPHY PILLARS */}
      <section className="py-14 sm:py-20 bg-slate-100/70 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#B5111B]">
              THE ROSE METHODOLOGY
            </span>
            <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight">
              Our Core Advisory Philosophy
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 font-normal">
              How we translate complex economic realities into actionable community outcomes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Pillar 1 */}
            <div className="bg-white rounded-2xl p-7 border border-slate-200/90 shadow-2xs space-y-4 hover:shadow-lg transition-all group">
              <div className="w-12 h-12 rounded-xl bg-red-50 text-[#B5111B] flex items-center justify-center shrink-0 group-hover:bg-[#B5111B] group-hover:text-white transition-colors">
                <TrendingUp className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-black text-slate-900 tracking-tight">
                Developing Prosperity
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Connecting economic development strategies with private market feasibility to generate tax base growth, high-wage jobs, and resilient local economies.
              </p>
            </div>

            {/* Pillar 2 */}
            <div className="bg-white rounded-2xl p-7 border border-slate-200/90 shadow-2xs space-y-4 hover:shadow-lg transition-all group">
              <div className="w-12 h-12 rounded-xl bg-red-50 text-[#B5111B] flex items-center justify-center shrink-0 group-hover:bg-[#B5111B] group-hover:text-white transition-colors">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-black text-slate-900 tracking-tight">
                Building Quality of Life
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Evaluating accessibility, public health, historic preservation, and recreational assets to build communities where people thrive and businesses invest.
              </p>
            </div>

            {/* Pillar 3 */}
            <div className="bg-white rounded-2xl p-7 border border-slate-200/90 shadow-2xs space-y-4 hover:shadow-lg transition-all group">
              <div className="w-12 h-12 rounded-xl bg-red-50 text-[#B5111B] flex items-center justify-center shrink-0 group-hover:bg-[#B5111B] group-hover:text-white transition-colors">
                <Building2 className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-black text-slate-900 tracking-tight">
                Curating Built Balance
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Integrating site selection, land use planning, and architectural heritage to ensure commercial and residential growth complements environmental assets.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* 4. EXPERT TEAM & LEADERSHIP SHOWCASE WITH BLURRED PHOTO BACKDROPS */}
      <section className="py-16 sm:py-24 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#B5111B]">
              LEADERSHIP & EXPERTISE
            </span>
            <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight">
              Meet Our Senior Leadership Team
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 font-normal">
              Seasoned advisors with decades of real estate, economic analytics, and urban planning credentials.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
            
            {/* Team Member 1: Kathleen Rose */}
            <div className="bg-slate-50/80 rounded-3xl border border-slate-200 p-6 space-y-6 flex flex-col justify-between hover:border-[#B5111B]/40 hover:shadow-xl transition-all group overflow-hidden">
              <div className="space-y-5">
                
                {/* Blurred Backdrop Headshot Container */}
                <div className="relative rounded-2xl overflow-hidden bg-slate-900 p-6 flex items-center justify-center border border-slate-200/80 shadow-inner group-hover:border-[#B5111B]/30 transition-colors">
                  {/* Soft Blurred Background Image Fill */}
                  <div 
                    className="absolute inset-0 bg-cover bg-center filter blur-xl opacity-60 scale-125 transition-all duration-500 group-hover:scale-140" 
                    style={{ backgroundImage: `url('/kathleen_rose.png')` }} 
                  />
                  {/* Subtle Dark Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-900/30 to-slate-950/40" />

                  {/* Crisp Foreground Avatar */}
                  <div className="relative z-10 w-28 h-28 sm:w-32 sm:h-32 rounded-full border-2 border-white/90 shadow-2xl overflow-hidden bg-slate-200 group-hover:scale-105 transition-transform duration-300">
                    <img 
                      src="/kathleen_rose.png" 
                      alt="Kathleen Rose, CCIM, CRE"
                      className="w-full h-full object-cover object-center"
                    />
                  </div>
                </div>

                {/* Header */}
                <div className="space-y-1.5 text-center">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-100 text-[#B5111B] text-[11px] font-extrabold uppercase tracking-wide">
                    FOUNDER & PRESIDENT
                  </div>
                  <h3 className="text-xl font-black text-slate-900 tracking-tight">
                    Kathleen Rose, <span className="text-[#B5111B]">CCIM, CRE</span>
                  </h3>
                  <div className="text-xs font-bold text-slate-600">
                    &ldquo;Chief Problem Solver&rdquo;
                  </div>
                </div>

                {/* Bio & Credentials */}
                <p className="text-xs text-slate-600 leading-relaxed font-normal">
                  Over three decades of commercial real estate and economic development leadership. Serves on the Board of Directors for the Counselors of Real Estate (CRE), CCIM Life Member & Faculty, and active ULI Carolinas WLI Champion. Recipient of Charlotte Business Journal&apos;s Top 25 Women in Business award.
                </p>

                <div className="space-y-2 pt-2 border-t border-slate-200/80 text-[11px] text-slate-700 font-medium">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#B5111B] shrink-0" />
                    <span>CCIM (Certified Commercial Investment Member) Life Faculty</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#B5111B] shrink-0" />
                    <span>CRE (Counselor of Real Estate) Board of Directors</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#B5111B] shrink-0" />
                    <span>NC Downtown Development Association Board</span>
                  </div>
                </div>

              </div>

              {/* Footer Contacts */}
              <div className="pt-4 border-t border-slate-200 flex items-center justify-between text-xs">
                <a
                  href="mailto:krose@roseassociates.com"
                  className="font-bold text-[#B5111B] hover:underline flex items-center gap-1.5"
                >
                  <Mail className="w-3.5 h-3.5" />
                  <span>krose@roseassociates.com</span>
                </a>
                <a
                  href="https://www.linkedin.com/in/roseassociates/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-white border border-slate-200 text-slate-600 hover:text-[#B5111B] hover:border-red-200 transition-colors"
                  aria-label="Kathleen Rose LinkedIn"
                >
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
                  </svg>
                </a>
              </div>
            </div>

            {/* Team Member 2: Daniel Bellot */}
            <div className="bg-slate-50/80 rounded-3xl border border-slate-200 p-6 space-y-6 flex flex-col justify-between hover:border-[#B5111B]/40 hover:shadow-xl transition-all group overflow-hidden">
              <div className="space-y-5">
                
                {/* Blurred Backdrop Headshot Container */}
                <div className="relative rounded-2xl overflow-hidden bg-slate-900 p-6 flex items-center justify-center border border-slate-200/80 shadow-inner group-hover:border-[#B5111B]/30 transition-colors">
                  {/* Soft Blurred Background Image Fill */}
                  <div 
                    className="absolute inset-0 bg-cover bg-center filter blur-xl opacity-60 scale-125 transition-all duration-500 group-hover:scale-140" 
                    style={{ backgroundImage: `url('/daniel_bellot.png')` }} 
                  />
                  {/* Subtle Dark Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-900/30 to-slate-950/40" />

                  {/* Crisp Foreground Avatar */}
                  <div className="relative z-10 w-28 h-28 sm:w-32 sm:h-32 rounded-full border-2 border-white/90 shadow-2xl overflow-hidden bg-slate-200 group-hover:scale-105 transition-transform duration-300">
                    <img 
                      src="/daniel_bellot.png" 
                      alt="Daniel Bellot"
                      className="w-full h-full object-cover object-center"
                    />
                  </div>
                </div>

                {/* Header */}
                <div className="space-y-1.5 text-center">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-200 text-slate-800 text-[11px] font-extrabold uppercase tracking-wide">
                    CHIEF ANALYST & BROKER
                  </div>
                  <h3 className="text-xl font-black text-slate-900 tracking-tight">
                    Daniel Bellot
                  </h3>
                  <div className="text-xs font-bold text-slate-600">
                    Economist & Commercial Broker
                  </div>
                </div>

                {/* Bio & Credentials */}
                <p className="text-xs text-slate-600 leading-relaxed font-normal">
                  B.S. in Economics from UNC Charlotte. Leads the firm&apos;s data analytics, GIS-based spatial research, site selection modeling, and commercial brokerage operations. Experienced in municipal scorecard compilation and economic health assessments across North Carolina.
                </p>

                <div className="space-y-2 pt-2 border-t border-slate-200/80 text-[11px] text-slate-700 font-medium">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#B5111B] shrink-0" />
                    <span>B.S. Economics (UNC Charlotte)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#B5111B] shrink-0" />
                    <span>NC Licensed Commercial Broker</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#B5111B] shrink-0" />
                    <span>ULI Young Leaders & NCDDA Associate</span>
                  </div>
                </div>

              </div>

              {/* Footer Contacts */}
              <div className="pt-4 border-t border-slate-200 flex items-center justify-between text-xs">
                <a
                  href="mailto:dbellot@roseassociates.com"
                  className="font-bold text-[#B5111B] hover:underline flex items-center gap-1.5"
                >
                  <Mail className="w-3.5 h-3.5" />
                  <span>dbellot@roseassociates.com</span>
                </a>
                <a
                  href="https://www.linkedin.com/in/daniel-bellot-60b25811b/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-white border border-slate-200 text-slate-600 hover:text-[#B5111B] hover:border-red-200 transition-colors"
                  aria-label="Daniel Bellot LinkedIn"
                >
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
                  </svg>
                </a>
              </div>
            </div>

            {/* Team Member 3: Dr. William McCoy (Emeritus) */}
            <div className="bg-slate-50/80 rounded-3xl border border-slate-200 p-6 space-y-6 flex flex-col justify-between hover:border-[#B5111B]/40 hover:shadow-xl transition-all group overflow-hidden">
              <div className="space-y-5">
                
                {/* Blurred Backdrop Headshot Container */}
                <div className="relative rounded-2xl overflow-hidden bg-slate-900 p-6 flex items-center justify-center border border-slate-200/80 shadow-inner group-hover:border-[#B5111B]/30 transition-colors">
                  {/* Soft Blurred Background Image Fill */}
                  <div 
                    className="absolute inset-0 bg-cover bg-center filter blur-xl opacity-60 scale-125 transition-all duration-500 group-hover:scale-140" 
                    style={{ backgroundImage: `url('/dr_william_mccoy.png')` }} 
                  />
                  {/* Subtle Dark Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-900/30 to-slate-950/40" />

                  {/* Crisp Foreground Avatar */}
                  <div className="relative z-10 w-28 h-28 sm:w-32 sm:h-32 rounded-full border-2 border-white/90 shadow-2xl overflow-hidden bg-slate-200 group-hover:scale-105 transition-transform duration-300">
                    <img 
                      src="/dr_william_mccoy.png" 
                      alt="Dr. William McCoy"
                      className="w-full h-full object-cover object-center"
                    />
                  </div>
                </div>

                {/* Header */}
                <div className="space-y-1.5 text-center">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-[11px] font-extrabold uppercase tracking-wide">
                    SENIOR ADVISOR EMERITUS
                  </div>
                  <h3 className="text-xl font-black text-slate-900 tracking-tight">
                    Dr. William McCoy
                  </h3>
                  <div className="text-xs font-bold text-slate-600">
                    Urban Planning & Policy Expert
                  </div>
                </div>

                {/* Bio & Credentials */}
                <p className="text-xs text-slate-600 leading-relaxed font-normal">
                  Retired Director of the UNC Charlotte Urban Institute and Professor Emeritus of Political Science. Ph.D. from Univ. of Tennessee. Brings over four decades of academic rigor to community engagement, public policy surveys, land use planning, and regional housing studies.
                </p>

                <div className="space-y-2 pt-2 border-t border-slate-200/80 text-[11px] text-slate-700 font-medium">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#B5111B] shrink-0" />
                    <span>Ph.D. Political Science (Univ. of Tennessee)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#B5111B] shrink-0" />
                    <span>Former Director UNC Charlotte Urban Institute</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#B5111B] shrink-0" />
                    <span>NC National Bank Teaching Award Winner</span>
                  </div>
                </div>

              </div>

              {/* Footer Contacts */}
              <div className="pt-4 border-t border-slate-200 flex items-center justify-between text-xs text-slate-500 font-medium">
                <span>Senior Policy Advisor</span>
                <span className="font-mono text-[11px]">UNC Charlotte Professor Emeritus</span>
              </div>
            </div>

          </div>

        </div>
      </section>

    </div>
  )
}
