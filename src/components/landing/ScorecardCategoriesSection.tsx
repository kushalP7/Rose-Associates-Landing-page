"use client"

import * as React from "react"
import { ChevronRight, Check } from "lucide-react"

export function ScorecardCategoriesSection() {
  const [activeAccordionCat, setActiveAccordionCat] = React.useState<string | null>("accessibility")

  const categories = [
    {
      id: "accessibility",
      title: "Accessibility & Transportation",
      question: "How well can residents, visitors and workers move in and around your community?",
      description: "Often, we defer to roads to provide a network of transportation. Many communities are car-dependent; however, it is important to explore alternative modes of transportation including rail, bus service, micro-transit, rideshare, and regional transit systems. Universal design integrates both land use and transportation planning for one seamless plan of mobility—ensuring accessibility for all abilities through biking, walking, and multi-use trail networks.",
      quote: "The reality about transportation is that it's future-oriented. If we're planning for what we have, we're behind the curve.",
      quoteAuthor: "Anthony Foxx, Former U.S. Secretary of Transportation",
      icon: (
        <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
          <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5z" />
        </svg>
      ),
      metrics: ["Major Highway & Arterial Routes", "Households Without a Vehicle", "Average Commute Duration", "Public Transit & Micro-Transit Options", "State Transportation Funds (STIP)", "Adopted Bike & Pedestrian Plan"]
    },
    {
      id: "arts",
      title: "Arts & Culture",
      question: "Does your community foster and support local and visiting artists?",
      description: "Museums, performing arts, and visual installations highlight local culture and history while creating dynamic destinations for visitors. Public art such as murals, sculpture trails, and historic performance centers drive economic activity and support the hospitality industry. A thriving arts and entertainment sector attracts creative talent, strengthens downtown vitality, and enhances overall quality of life.",
      quote: "Art is the signature of civilizations.",
      quoteAuthor: "Beverly Sills",
      icon: (
        <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M2 10a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4z" />
          <circle cx="6" cy="10" r="1" fill="currentColor" />
          <circle cx="10" cy="10" r="1" fill="currentColor" />
          <path d="M6 13c1 1 2 1 3 0" />
          <path d="M14 6h4a4 4 0 0 1 4 4v2a4 4 0 0 1-4 4h-4" />
          <path d="M18 10h.01" />
        </svg>
      ),
      metrics: ["Public Art Installations & Murals", "Public Art Trail Maps", "Cultural Facilities (Theatres & Museums)", "Civic Event Programs & Festivals", "Creative Sector Employment Share", "Downtown Appearance Initiatives"]
    },
    {
      id: "safety",
      title: "Crime & Public Safety",
      question: "Do residents, visitors and workers feel safe in your community?",
      description: "Public safety is the foundation of community prosperity, protecting people and property from harm. When a community is perceived as safe, families and businesses invest with confidence and tourism flourishes. In addition to proactive law enforcement and rapid emergency response times, resilient communities establish coordinated disaster preparedness, infrastructure safety, and sustainable recovery systems.",
      quote: "Protecting people and property is the primary responsibility of municipal leadership.",
      quoteAuthor: "FBI & FEMA Municipal Safety Guidelines",
      icon: (
        <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2l7 4v6c0 5.25-3.5 10-7 12-3.5-2-7-6.75-7-12V6l7-4z" />
          <path d="M12 8v4" />
          <path d="M12 16h.01" />
        </svg>
      ),
      metrics: ["Personal & Violent Crime Index", "Property Crime Index", "Officer-to-Resident Ratio", "EMS & Fire Emergency Response Times", "Natural Disaster Recovery & Resilience", "Modern Correctional & Fire Facilities"]
    },
    {
      id: "education",
      title: "Education",
      question: "Does your community provide resources for educational attainment?",
      description: "Educational attainment directly correlates with household income, workforce readiness, and long-term economic mobility. Primary K-12 schooling, community colleges, vocational trade programs, and regional 4-year university partnerships create a robust pipeline for industry attraction. Continuous adult learning and technical certifications ensure the local labor force remains competitive.",
      quote: "The correlation between education, employment, and income is driven by job readiness.",
      quoteAuthor: "U.S. Bureau of Labor Statistics & NCES",
      icon: (
        <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
          <path d="M6 12v5c3 3 9 3 12 0v-5" />
        </svg>
      ),
      metrics: ["High School Graduation Rate", "Higher Education Attainment (Degrees)", "K-12 Performance & Attendance", "Community College & Vocational Trades", "Regional University Partnerships", "Technical Workforce Training"]
    },
    {
      id: "employment",
      title: "Employment & Labor",
      question: "Is there a balanced workforce that provides business opportunity and expansion?",
      description: "Building a resilient local economy requires a balanced workforce encompassing services, white-collar professionals, and blue-collar manufacturing. Understanding the local economic base and high-performing target clusters determines future commercial and industrial land use needs, facilitating competitive pad-ready sites and attracting major enterprise employers.",
      quote: "Understanding local employment sectors is essential to planning sustainable growth.",
      quoteAuthor: "U.S. Bureau of Labor Statistics",
      icon: (
        <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect width="20" height="14" x="2" y="7" rx="2" />
          <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
        </svg>
      ),
      metrics: ["Workforce Mix (White / Blue / Services)", "Unemployment & Labor Participation", "Median & Average Household Income", "Certified Pad-Ready Industrial Sites", "Large Employers (500+ & 1,000+)", "Fortune 500 & Corporate HQs"]
    },
    {
      id: "goods",
      title: "Goods & Services",
      question: "Are there adequate offerings for food, beverages and other goods?",
      description: "A thriving retail landscape balances local independent businesses with regional commercial trade. Communities evaluate retail leakage and daytime visitor population to identify unmet consumer demand for groceries, dining, and specialty goods. Collaborating with local farmers, shared commercial kitchens, and downtown districts keeps consumer dollars circulating locally.",
      quote: "Retail density and commercial variety drive downtown vibrancy and municipal sales tax capture.",
      quoteAuthor: "International Council of Shopping Centers (ICSC)",
      icon: (
        <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="m7.5 4.27 9 5.15" />
          <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" />
          <path d="m3.3 7 8.7 5 8.7-5" />
          <path d="M12 22V12" />
        </svg>
      ),
      metrics: ["Retail Trade Employment Share", "Hospitality & Dining Density", "Retail Vacancy Rates", "Commercial Trade Area Capture", "Retail Leakage & Opportunity Analysis", "Farmers Markets & Local Food Hubs"]
    },
    {
      id: "healthcare",
      title: "Healthcare & Wellness",
      question: "What is the status of public health and access to medical care?",
      description: "Access to comprehensive medical care and proactive public health initiatives shapes community longevity and productivity. Beyond regional hospitals and urgent care clinics, modern community health assesses social determinants including healthy food access, air quality, poverty levels, and the integration of greenways with preventative wellness programs.",
      quote: "One Health connects human, animal, and environmental health across all community systems.",
      quoteAuthor: "Centers for Disease Control and Prevention (CDC)",
      icon: (
        <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
          <path d="M3.22 12H9.5l.5-1 2 4.5 2-7 1.5 3.5h5.27" />
        </svg>
      ),
      metrics: ["Hospital Bed Capacity & Trauma Centers", "Outpatient Clinics & Medical Facilities", "County Health Factor Rankings", "Air Quality Index & Environment", "Poverty Rate & Insurance Coverage", "Access to Fresh Healthy Food"]
    },
    {
      id: "historic",
      title: "Historic Preservation",
      question: "Does your community preserve and honor its historic assets?",
      description: "Historic structures, landmarks, and downtown architectural character define a community's distinct identity and value proposition. Through alliances with state historic offices and Main Street programs, adaptive reuse commercial projects leverage historic tax credits to revitalize downtown cores and celebrate cultural heritage.",
      quote: "Preservation is in the business of saving communities and the values they embody.",
      quoteAuthor: "National Trust for Historic Preservation",
      icon: (
        <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 21h18M4 18h16M6 18v-7M10 18v-7M14 18v-7M18 18v-7M12 3l10 5H2l10-5z" />
        </svg>
      ),
      metrics: ["Designated Historic Districts", "Main Street America Designation", "Registered Historic Landmarks", "Business Improvement Districts (BID)", "Adaptive Reuse Projects", "Heritage Walking Tours & Maps"]
    },
    {
      id: "housing",
      title: "Population & Housing",
      question: "Is there adequate and affordable housing for all generations?",
      description: "Shelter is the fundamental physiological requirement of community life. Changing demographics and multigenerational households demand a diverse housing supply—including single-family residences, townhomes, duplexes, apartments, and senior living. Balancing housing affordability with residential pipeline velocity prevents displacement and fuels workforce stability.",
      quote: "Changing demographics require a diversity of housing choices for all generations.",
      quoteAuthor: "National Association of Realtors (NAR)",
      icon: (
        <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
          <polyline points="9 22 9 12 15 12 15 22" />
        </svg>
      ),
      metrics: ["Housing Tenure (Renter vs Owner)", "Median Home Value & Monthly Rent", "Housing Stock Age (% Post-1979)", "Cost-Burdened Household Ratio", "Multigenerational Housing Diversity", "Residential Entitlement Pipeline"]
    },
    {
      id: "infrastructure",
      title: "Infrastructure",
      question: "Does your current infrastructure meet the needs of your community and future expansion?",
      description: "Infrastructure evaluates the physical condition and forward-looking capacity of municipal water, wastewater treatment, electrical substation grids, and gigabit fiber broadband. Sustainable capital improvement planning ensures utility expansion aligns with land use policy without encouraging unmanaged sprawl.",
      quote: "Infrastructure performance requires proactive investment across energy, water, and connectivity grids.",
      quoteAuthor: "American Society of Civil Engineers (ASCE)",
      icon: (
        <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z" />
          <path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2" />
          <path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2" />
          <path d="M10 6h4M10 10h4M10 14h4M10 18h4" />
        </svg>
      ),
      metrics: ["Public Water & Sewer Capacity", "Electric Substation Grid (MW)", "Broadband Gigabit Availability", "STIP Roadway Expansion Plans", "Stormwater Quality & Drainage", "Green Energy & Solar Alternatives"]
    },
    {
      id: "openspace",
      title: "Open Space & Recreation",
      question: "Are there ample opportunities for both passive and active recreation in your community?",
      description: "Recreational assets are major differentiators in attracting new residents and commercial investment. Communities benefit from a diverse mix of passive open spaces, greenways, and high-impact active sportsplexes that host regional tournaments, support mountain biking, and preserve farmlands.",
      quote: "On average, park and recreation agencies provide one park for every 2,386 residents.",
      quoteAuthor: "ASCE Infrastructure Report Card",
      icon: (
        <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="18.5" cy="17.5" r="3.5" />
          <circle cx="5.5" cy="17.5" r="3.5" />
          <circle cx="15" cy="5" r="1" />
          <path d="M12 17.5V14l-3-3 4-3 2 3h2" />
        </svg>
      ),
      metrics: ["Parks & Recreation Master Plan", "Full-Time Recreation Leadership", "Greenway & Multi-Use Trail Miles", "Total Open Space & County Parks", "Farmland & Conservation Ordinances", "Regional Sportsplex & Tournaments"]
    },
    {
      id: "planning",
      title: "Planning & Land Use",
      question: "Does your land use policy provide for preservation and a balanced tax base?",
      description: "Balancing development pressures with the preservation of open space, agricultural lands, and natural resources requires comprehensive land use planning. A balanced tax base between residential and commercial sectors ensures sustainable public service delivery without overburdening resident taxpayers.",
      quote: "Land use policy must balance the built environment, municipal budgets, and resource conservation.",
      quoteAuthor: "Tax Foundation & APA",
      icon: (
        <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="3 6 9 3 15 6 21 3 21 18 15 21 9 18 3 21" />
          <line x1="9" x2="9" y1="3" y2="18" />
          <line x1="15" x2="15" y1="6" y2="21" />
        </svg>
      ),
      metrics: ["Comprehensive Land Use Plan Status", "Voluntary Agricultural Districts (VAD)", "Residential vs Commercial Tax Base Split", "Vacant Land & Infill Inventory", "Tax-Exempt Institutional Acreage", "Unified Development Ordinance (UDO)"]
    }
  ]

  return (
    <section id="scorecard-categories" className="scroll-mt-20 py-10 sm:py-14 bg-gradient-to-b from-rose-50/30 via-white to-slate-50 border-y border-slate-200 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-[1.15]">
            Scorecard Categories & <br />
            <span className="text-[#B5111B]">Evaluation Framework</span>
          </h2>

          <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
            Explore the 12 comprehensive community prosperity modules and detailed indicator criteria measured in our certified reports.
          </p>
        </div>

        {/* 12-Category 2-Column Interactive Accordion */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 items-start">
          {categories.map((cat) => (
            <div 
              key={cat.id}
              className="bg-white rounded-2xl border border-slate-200/90 shadow-2xs hover:shadow-md transition-all overflow-hidden"
            >
              <div 
                onClick={() => setActiveAccordionCat((prev) => (prev === cat.id ? null : cat.id))}
                className="p-4 sm:p-5 flex items-center justify-between gap-3.5 cursor-pointer select-none group"
              >
                <div className="flex items-center gap-3.5 min-w-0">
                  <div className="w-10 h-10 rounded-xl bg-red-50 text-[#B5111B] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform shadow-2xs">
                    {cat.icon}
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-xs sm:text-sm font-extrabold text-slate-900 group-hover:text-[#B5111B] transition-colors truncate">
                      {cat.title}
                    </h3>
                    <p className="text-[11px] text-slate-500 italic truncate max-w-sm">
                      {cat.question}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2 shrink-0">
                  <div className={`w-8 h-8 rounded-full bg-slate-50 border border-slate-200/80 flex items-center justify-center text-slate-400 group-hover:text-[#B5111B] group-hover:border-red-200 group-hover:bg-red-50 transition-all duration-300 ${
                    activeAccordionCat === cat.id ? "rotate-180 bg-red-50 text-[#B5111B] border-red-200" : ""
                  }`}>
                    <ChevronRight className="w-4 h-4 rotate-90" />
                  </div>
                </div>
              </div>

              {/* Expanded Accordion Details */}
              {activeAccordionCat === cat.id && (
                <div className="px-5 pb-5 pt-1 space-y-4 border-t border-slate-100 bg-slate-50/50">
                  
                  <div className="p-3 rounded-xl bg-white border border-slate-200/80 text-xs text-slate-900 italic font-semibold leading-relaxed shadow-2xs">
                    "{cat.question}"
                  </div>

                  <p className="text-xs text-slate-600 leading-relaxed font-normal">
                    {cat.description}
                  </p>

                  {cat.quote && (
                    <div className="border-l-2 border-[#B5111B] pl-3 py-0.5 space-y-0.5">
                      <p className="text-[11px] text-slate-700 italic font-medium leading-snug">
                        "{cat.quote}"
                      </p>
                      <span className="text-[10px] text-slate-400 font-bold block">
                        — {cat.quoteAuthor}
                      </span>
                    </div>
                  )}

                  <div className="space-y-1.5 pt-1">
                    <div className="text-[10px] font-black text-slate-800 uppercase tracking-wider">
                      Key Audit Indicators:
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                      {cat.metrics.map((m, i) => (
                        <div key={i} className="text-[11px] text-slate-600 bg-white border border-slate-200/70 rounded-lg px-2.5 py-1 flex items-center gap-1.5 font-medium">
                          <Check className="w-3 h-3 text-[#B5111B] shrink-0" />
                          <span>{m}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
