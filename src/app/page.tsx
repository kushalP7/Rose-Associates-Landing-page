"use client"

import * as React from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useAppStore } from "@/store"
import { 
  Building2, 
  BarChart3, 
  ShieldCheck, 
  ArrowRight, 
  ExternalLink, 
  FileText, 
  Layers, 
  CheckCircle2, 
  Award, 
  Lock, 
  Database,
  ChevronRight,
  TrendingUp,
  FileCheck2,
  PieChart,
  Sparkles,
  Check,
  FolderOpen,
  ReceiptText,
  DollarSign,
  Users,
  Settings,
  X,
  FileDown,
  Activity,
  Eye,
  Download,
  ArrowUp,
  Sliders,
  Calculator,
  Zap,
  HelpCircle,
  CreditCard,
  Menu,
  Globe,
  User,
  Mail
} from "lucide-react"

// --- HIGH-PRECISION SVG CHART COMPONENTS (LUXURY RED & GRAY MONOCHROME PALETTE) ---

// 1. Semi-Circle Gauge Speedometer (Multi-Color Gradient: Red -> Orange -> Yellow -> Green)
function GaugeSpeedometerChart({ score = 6.4, max = 10, percentage = "64%" }: { score?: number; max?: number; percentage?: string }) {
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

// 2. Section Analysis Radar Spider Chart (Red & Gray Theme)
function RadarSectionChart() {
  return (
    <div className="bg-white rounded-2xl border border-slate-200/90 shadow-2xs p-5 sm:p-6 space-y-4 flex flex-col justify-between hover:shadow-md transition-shadow">
      <div className="space-y-0.5 border-b border-slate-100 pb-3">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-md bg-red-50 text-[#B5111B] flex items-center justify-center">
            <Layers className="w-3.5 h-3.5" />
          </div>
          <div>
            <h3 className="text-sm font-bold text-slate-900">Section Analysis</h3>
            <p className="text-[10px] text-slate-400 font-medium">Performance Index per module</p>
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center py-1">
        <svg viewBox="0 0 240 200" className="w-full max-w-[220px] h-40">
          <polygon points="120,20 190,60 190,140 120,180 50,140 50,60" fill="none" stroke="#E2E8F0" strokeWidth="1" />
          <polygon points="120,45 167,72 167,127 120,155 73,127 73,72" fill="none" stroke="#E2E8F0" strokeWidth="1" />
          <polygon points="120,70 145,85 145,115 120,130 95,115 95,85" fill="none" stroke="#E2E8F0" strokeWidth="1" />
          
          <line x1="120" y1="100" x2="120" y2="20" stroke="#CBD5E1" strokeWidth="1" />
          <line x1="120" y1="100" x2="190" y2="60" stroke="#CBD5E1" strokeWidth="1" />
          <line x1="120" y1="100" x2="190" y2="140" stroke="#CBD5E1" strokeWidth="1" />
          <line x1="120" y1="100" x2="120" y2="180" stroke="#CBD5E1" strokeWidth="1" />
          <line x1="120" y1="100" x2="50" y2="140" stroke="#CBD5E1" strokeWidth="1" />
          <line x1="120" y1="100" x2="50" y2="60" stroke="#CBD5E1" strokeWidth="1" />

          <polygon 
            points="120,35 178,75 160,132 120,165 65,125 70,70" 
            fill="#B5111B" 
            fillOpacity="0.18" 
            stroke="#B5111B" 
            strokeWidth="1.8" 
          />

          <text x="120" y="12" textAnchor="middle" className="text-[8.5px] fill-slate-600 font-semibold">Land Use</text>
          <text x="196" y="60" textAnchor="start" className="text-[8.5px] fill-slate-600 font-semibold">Housing</text>
          <text x="196" y="145" textAnchor="start" className="text-[8.5px] fill-slate-600 font-semibold">Wellness</text>
          <text x="120" y="195" textAnchor="middle" className="text-[8.5px] fill-slate-600 font-semibold">Labor</text>
          <text x="44" y="145" textAnchor="end" className="text-[8.5px] fill-slate-600 font-semibold">Safety</text>
          <text x="44" y="60" textAnchor="end" className="text-[8.5px] fill-slate-600 font-semibold">Transit</text>
        </svg>
      </div>

      <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
        <span className="text-slate-500 font-medium">Radar Evaluation</span>
        <span className="text-[#B5111B] font-bold">Multi-Axis Compliant</span>
      </div>
    </div>
  )
}

// 3. Top Modules Donut Chart (Red & Gray Shades)
function TopModulesChart() {
  return (
    <div className="bg-white rounded-2xl border border-slate-200/90 shadow-2xs p-5 sm:p-6 space-y-4 flex flex-col justify-between hover:shadow-md transition-shadow">
      <div className="space-y-0.5 border-b border-slate-100 pb-3">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-md bg-red-50 text-[#B5111B] flex items-center justify-center">
            <PieChart className="w-3.5 h-3.5" />
          </div>
          <div>
            <h3 className="text-sm font-bold text-slate-900">Top Modules</h3>
            <p className="text-[10px] text-slate-400 font-medium">Highest scoring sections</p>
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center py-1">
        <svg viewBox="0 0 200 200" className="w-40 h-40">
          {/* Segment 1: Housing (Slate Gray) */}
          <circle cx="100" cy="100" r="64" fill="none" stroke="#94A3B8" strokeWidth="32" strokeDasharray="65 337" strokeDashoffset="0" />
          {/* Segment 2: Safety (Charcoal) */}
          <circle cx="100" cy="100" r="64" fill="none" stroke="#334155" strokeWidth="32" strokeDasharray="75 327" strokeDashoffset="-70" />
          {/* Segment 3: Labor (Deep Crimson) */}
          <circle cx="100" cy="100" r="64" fill="none" stroke="#5C090E" strokeWidth="32" strokeDasharray="80 322" strokeDashoffset="-150" />
          {/* Segment 4: Health (Red) */}
          <circle cx="100" cy="100" r="64" fill="none" stroke="#8F0D15" strokeWidth="32" strokeDasharray="90 312" strokeDashoffset="-235" />
          {/* Segment 5: Transit (Bright Crimson) */}
          <circle cx="100" cy="100" r="64" fill="none" stroke="#B5111B" strokeWidth="32" strokeDasharray="85 317" strokeDashoffset="-330" />

          {/* Labels positioned cleanly on the donut slices */}
          <text x="145" y="65" className="text-[7.5px] font-extrabold fill-slate-800" textAnchor="middle">01 Housing</text>
          <text x="150" y="130" className="text-[7.5px] font-extrabold fill-white" textAnchor="middle">02 Safety</text>
          <text x="100" y="166" className="text-[7.5px] font-extrabold fill-white" textAnchor="middle">03 Labor</text>
          <text x="48" y="125" className="text-[7.5px] font-extrabold fill-white" textAnchor="middle">04 Health</text>
          <text x="56" y="65" className="text-[7.5px] font-extrabold fill-white" textAnchor="middle">05 Transit</text>
        </svg>
      </div>

      <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
        <span className="text-slate-500 font-medium">Section Distribution</span>
        <span className="text-[#B5111B] font-bold">5 Core Modules</span>
      </div>
    </div>
  )
}

// 4. Bar & Trend Line Combo Chart (Red & Gray Shades)
function ComboBarLineChart() {
  return (
    <div className="bg-white rounded-2xl border border-slate-200/90 shadow-sm p-6 space-y-4 hover:shadow-md transition-shadow">
      <div className="space-y-0.5 border-b border-slate-100 pb-3">
        <h3 className="text-sm font-bold text-slate-900">Accessibility & Transportation Value Overview</h3>
        <p className="text-[10px] text-slate-400 font-mono">Regional infrastructure evaluation</p>
      </div>

      <div className="flex flex-wrap items-center gap-3 text-[10px] text-slate-600 font-bold">
        <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-[#B5111B]" /> Client Total Score</span>
        <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-slate-400" /> Regional Baseline</span>
        <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-slate-900" /> Overall Trend</span>
      </div>

      <div className="pt-2">
        <svg viewBox="0 0 400 160" className="w-full h-44">
          <line x1="30" y1="20" x2="390" y2="20" stroke="#F1F5F9" strokeWidth="1" />
          <line x1="30" y1="60" x2="390" y2="60" stroke="#F1F5F9" strokeWidth="1" />
          <line x1="30" y1="100" x2="390" y2="100" stroke="#F1F5F9" strokeWidth="1" />
          <line x1="30" y1="140" x2="390" y2="140" stroke="#E2E8F0" strokeWidth="1" />

          <text x="20" y="24" className="text-[9px] fill-slate-400 font-mono" textAnchor="end">80</text>
          <text x="20" y="64" className="text-[9px] fill-slate-400 font-mono" textAnchor="end">45</text>
          <text x="20" y="104" className="text-[9px] fill-slate-400 font-mono" textAnchor="end">15</text>
          <text x="20" y="144" className="text-[9px] fill-slate-400 font-mono" textAnchor="end">0</text>

          <rect x="50" y="110" width="12" height="30" fill="#B5111B" rx="2" />
          <rect x="65" y="125" width="12" height="15" fill="#CBD5E1" rx="2" />

          <rect x="110" y="128" width="12" height="12" fill="#B5111B" rx="2" />
          <rect x="125" y="120" width="12" height="20" fill="#94A3B8" rx="2" />

          <rect x="170" y="130" width="12" height="10" fill="#B5111B" rx="2" />
          <rect x="185" y="125" width="12" height="15" fill="#CBD5E1" rx="2" />

          <rect x="230" y="80" width="12" height="60" fill="#B5111B" rx="2" />
          <rect x="245" y="115" width="12" height="25" fill="#94A3B8" rx="2" />

          <rect x="290" y="70" width="12" height="70" fill="#64748B" rx="2" />
          <rect x="305" y="130" width="12" height="10" fill="#B5111B" rx="2" />

          <rect x="350" y="125" width="12" height="15" fill="#B5111B" rx="2" />

          <path
            d="M 56,100 C 100,125 150,130 236,45 C 270,20 310,120 356,120"
            fill="none"
            stroke="#1E293B"
            strokeWidth="2.5"
          />
          <circle cx="56" cy="100" r="4" fill="#1E293B" />
          <circle cx="116" cy="122" r="4" fill="#1E293B" />
          <circle cx="176" cy="128" r="4" fill="#1E293B" />
          <circle cx="236" cy="45" r="5" fill="#B5111B" />
          <circle cx="296" cy="120" r="4" fill="#1E293B" />
          <circle cx="356" cy="120" r="4" fill="#1E293B" />

          <text x="56" y="155" className="text-[8px] fill-slate-500 font-semibold" textAnchor="middle">Major Routes</text>
          <text x="116" y="155" className="text-[8px] fill-slate-500 font-semibold" textAnchor="middle">HH w/o Vehicle</text>
          <text x="176" y="155" className="text-[8px] fill-slate-500 font-semibold" textAnchor="middle">Avg Commute</text>
          <text x="236" y="155" className="text-[8px] fill-slate-500 font-semibold" textAnchor="middle">Transit Options</text>
          <text x="296" y="155" className="text-[8px] fill-slate-500 font-semibold" textAnchor="middle">STIP Projects</text>
          <text x="356" y="155" className="text-[8px] fill-slate-500 font-semibold" textAnchor="middle">Ped Plan</text>
        </svg>
      </div>
    </div>
  )
}

// 5. Multi-Curve Layered Wave Area Chart (Crimson & Slate Shades)
function MultiCurveAreaChart() {
  return (
    <div className="bg-white rounded-2xl border border-slate-200/90 shadow-sm p-6 space-y-4 hover:shadow-md transition-shadow">
      <div className="space-y-0.5 border-b border-slate-100 pb-3">
        <h3 className="text-sm font-bold text-slate-900">Accessibility & Transportation Score Breakdown</h3>
        <p className="text-[10px] text-slate-400 font-mono">Multi-year comparative variance</p>
      </div>

      <div className="pt-2">
        <svg viewBox="0 0 400 160" className="w-full h-44">
          <defs>
            <linearGradient id="areaRed1Main" x1="0%" y1="0%" x2="0%" y2="1">
              <stop offset="0%" stopColor="#B5111B" stopOpacity="0.55" />
              <stop offset="100%" stopColor="#B5111B" stopOpacity="0.04" />
            </linearGradient>
            <linearGradient id="areaSlate2Main" x1="0%" y1="0%" x2="0%" y2="1">
              <stop offset="0%" stopColor="#475569" stopOpacity="0.35" />
              <stop offset="100%" stopColor="#475569" stopOpacity="0.04" />
            </linearGradient>
          </defs>

          <line x1="30" y1="20" x2="390" y2="20" stroke="#F1F5F9" strokeWidth="1" />
          <line x1="30" y1="60" x2="390" y2="60" stroke="#F1F5F9" strokeWidth="1" />
          <line x1="30" y1="100" x2="390" y2="100" stroke="#F1F5F9" strokeWidth="1" />
          <line x1="30" y1="140" x2="390" y2="140" stroke="#E2E8F0" strokeWidth="1" />

          <text x="20" y="24" className="text-[9px] fill-slate-400 font-mono" textAnchor="end">80</text>
          <text x="20" y="64" className="text-[9px] fill-slate-400 font-mono" textAnchor="end">45</text>
          <text x="20" y="104" className="text-[9px] fill-slate-400 font-mono" textAnchor="end">15</text>
          <text x="20" y="144" className="text-[9px] fill-slate-400 font-mono" textAnchor="end">0</text>

          <path
            d="M 30,120 C 100,135 180,140 250,50 C 300,20 350,130 390,135 L 390,140 L 30,140 Z"
            fill="url(#areaRed1Main)"
            stroke="#B5111B"
            strokeWidth="2"
          />

          <path
            d="M 30,110 C 110,120 190,125 250,75 C 290,45 350,125 390,130 L 390,140 L 30,140 Z"
            fill="url(#areaSlate2Main)"
            stroke="#475569"
            strokeWidth="1.5"
            strokeDasharray="4 2"
          />

          <text x="56" y="155" className="text-[8px] fill-slate-500 font-semibold" textAnchor="middle">Major Routes</text>
          <text x="116" y="155" className="text-[8px] fill-slate-500 font-semibold" textAnchor="middle">HH w/o Vehicle</text>
          <text x="176" y="155" className="text-[8px] fill-slate-500 font-semibold" textAnchor="middle">Avg Commute</text>
          <text x="236" y="155" className="text-[8px] fill-slate-500 font-semibold" textAnchor="middle">Transit Options</text>
          <text x="296" y="155" className="text-[8px] fill-slate-500 font-semibold" textAnchor="middle">STIP Projects</text>
          <text x="356" y="155" className="text-[8px] fill-slate-500 font-semibold" textAnchor="middle">Ped Plan</text>
        </svg>
      </div>
    </div>
  )
}

// 6. Interactive 6-Sector Faceted Community Photo Polygon Wheel
function CommunityWedgeWheel() {
  const cx = 245
  const cy = 235

  const vertices = [
    { x: 110, y: 45 },   // V0: Top-left
    { x: 325, y: 0 },    // V1: Top peak
    { x: 500, y: 45 },   // V2: Top-right corner
    { x: 500, y: 275 },  // V3: Right edge
    { x: 245, y: 495 },  // V4: Bottom point
    { x: 35, y: 335 },   // V5: Lower left
  ]

  const sectors = [
    {
      id: "sec-market",
      points: `${cx},${cy} ${vertices[0].x},${vertices[0].y} ${vertices[1].x},${vertices[1].y}`,
      image: "/sector_market.jpg",
      imgX: 70,
      imgY: -10,
      imgW: 310,
      imgH: 270,
      title: "Fresh Produce & Local Agriculture",
    },
    {
      id: "sec-park",
      points: `${cx},${cy} ${vertices[1].x},${vertices[1].y} ${vertices[2].x},${vertices[2].y}`,
      image: "/sector_park.jpg",
      imgX: 230,
      imgY: -10,
      imgW: 290,
      imgH: 265,
      title: "Parks & Green Infrastructure",
    },
    {
      id: "sec-commercial",
      points: `${cx},${cy} ${vertices[2].x},${vertices[2].y} ${vertices[3].x},${vertices[3].y}`,
      image: "/sector_commercial.jpg",
      imgX: 240,
      imgY: 35,
      imgW: 280,
      imgH: 260,
      title: "Commercial & Civic Hubs",
    },
    {
      id: "sec-students",
      points: `${cx},${cy} ${vertices[3].x},${vertices[3].y} ${vertices[4].x},${vertices[4].y}`,
      image: "/sector_students.jpg",
      imgX: 190,
      imgY: 200,
      imgW: 315,
      imgH: 315,
      title: "Education & Campus Life",
    },
    {
      id: "sec-housing",
      points: `${cx},${cy} ${vertices[4].x},${vertices[4].y} ${vertices[5].x},${vertices[5].y}`,
      image: "/sector_housing.jpg",
      imgX: 15,
      imgY: 200,
      imgW: 270,
      imgH: 315,
      title: "Suburban & Urban Housing",
    },
    {
      id: "sec-transit",
      points: `${cx},${cy} ${vertices[5].x},${vertices[5].y} ${vertices[0].x},${vertices[0].y}`,
      image: "/sector_transit.jpg",
      imgX: 10,
      imgY: 30,
      imgW: 270,
      imgH: 320,
      title: "Mobility & Transit Access",
    },
  ]

  const polygonPointsString = vertices.map((v) => `${v.x},${v.y}`).join(" ")

  return (
    <div className="relative w-full aspect-square flex items-center justify-center">
      {/* Ambient Red Glow */}
      <div className="absolute inset-0 rounded-full bg-radial from-red-500/30 via-transparent to-transparent blur-3xl pointer-events-none" />

      <svg viewBox="0 0 500 500" className="w-full h-full drop-shadow-2xl overflow-visible">
        <defs>
          {sectors.map((sec) => (
            <clipPath id={sec.id} key={sec.id}>
              <polygon points={sec.points} />
            </clipPath>
          ))}
        </defs>

        {/* Sectors with real community photos centered inside each wedge */}
        {sectors.map((sec) => (
          <g key={sec.id} className="cursor-pointer group">
            <image
              href={sec.image}
              x={sec.imgX}
              y={sec.imgY}
              width={sec.imgW}
              height={sec.imgH}
              preserveAspectRatio="xMidYMid slice"
              clipPath={`url(#${sec.id})`}
              className="transition-all duration-500 group-hover:scale-105 pointer-events-none select-none"
            />
          </g>
        ))}

        {/* Solid Refined Red Divider Spokes (Reduced Border) */}
        {vertices.map((v, idx) => (
          <line
            key={idx}
            x1={cx}
            y1={cy}
            x2={v.x}
            y2={v.y}
            stroke="#A30A14"
            strokeWidth="5"
            strokeLinecap="round"
          />
        ))}

        {/* Center Hub */}
        <circle cx={cx} cy={cy} r="4.5" fill="#A30A14" />

        {/* Outer Faceted Polygonal Red Rim (Reduced Border) */}
        <polygon
          points={polygonPointsString}
          fill="none"
          stroke="#A30A14"
          strokeWidth="6"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  )
}

export default function Home() {
  const router = useRouter()
  const { isAuthenticated } = useAppStore()
  const [mounted, setMounted] = React.useState(false)

  // Mobile navigation menu toggle state
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false)

  // Scroll to Top state
  const [showScrollTop, setShowScrollTop] = React.useState(false)

  // Active Fanned 3D Page State (1 = Cover, 2 = Middle Audit, 3 = Risk Action)
  const [activeFannedPage, setActiveFannedPage] = React.useState<number>(2)

  // Active Scorecard Category Accordion State
  const [activeAccordionCat, setActiveAccordionCat] = React.useState<string | null>("accessibility")

  // --- PRICING RATES MATCHING SETTINGS MODULE ($149 Subscription / $99 Report / $248 Bundle) ---
  const subscriptionPrice = 149
  const reportPrice = 99
  const bundlePrice = subscriptionPrice + reportPrice // $248

  React.useEffect(() => {
    setMounted(true)
  }, [])

  // Automatically redirect logged in users to /projects
  React.useEffect(() => {
    if (mounted && isAuthenticated) {
      router.push("/projects")
    }
  }, [mounted, isAuthenticated, router])

  // Scroll position listener for Back-to-Top button
  React.useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollTop(true)
      } else {
        setShowScrollTop(false)
      }
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  if (!mounted) {
    return (
      <div className="min-h-screen bg-slate-950 flex items-center justify-center">
        <div className="w-8 h-8 border-4 border-[#B5111B] border-t-transparent rounded-full animate-spin" />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans flex flex-col">
      
      {/* CLEAN, ICON-FREE, FULLY-RESPONSIVE FLOATING GLASS NAVIGATION HEADER */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-xl border-b border-slate-200/80 shadow-2xs">
        <div className="h-0.5 bg-gradient-to-r from-[#5C090E] via-[#B5111B] to-[#E11D48]" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-4">
          
          {/* Brand Logo */}
          <Link href="/" className="flex items-center gap-3 shrink-0">
            <img src="/logo.png" alt="Rose Associates" draggable={false} className="h-9 sm:h-10 w-auto object-contain select-none pointer-events-none" />
          </Link>

          {/* Desktop Navigation Links (Streamlined & Matching Page Flow) */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-bold text-slate-700">
            <a href="#project-partners" className="hover:text-[#B5111B] transition-colors whitespace-nowrap">Partners</a>
            <a href="#report-showcase" className="hover:text-[#B5111B] transition-colors whitespace-nowrap">Report Showcase</a>
            <a href="#analytics-showcase" className="hover:text-[#B5111B] transition-colors whitespace-nowrap">Analytics</a>
            <a href="#scorecard-categories" className="hover:text-[#B5111B] transition-colors whitespace-nowrap">Categories</a>
            <a href="#advisory-services" className="hover:text-[#B5111B] transition-colors whitespace-nowrap">Services</a>
            <a href="#pricing-section" className="hover:text-[#B5111B] transition-colors whitespace-nowrap">Pricing Plans</a>
          </nav>

          {/* Desktop Action Buttons */}
          <div className="hidden lg:flex items-center gap-3 shrink-0">
            <Link
              href="/login"
              className="text-sm font-bold text-slate-700 hover:text-[#B5111B] px-3.5 py-2 rounded-lg transition-colors whitespace-nowrap"
            >
              Sign In
            </Link>
            <Link
              href="/login"
              className="bg-[#B5111B] hover:bg-[#8F0D15] text-white text-sm font-extrabold px-5 py-2.5 rounded-xl shadow-xs transition-all cursor-pointer whitespace-nowrap"
            >
              Buy Subscription
            </Link>
          </div>

          {/* Mobile / Tablet Hamburger Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-xl text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile / Tablet Responsive Drawer Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-b border-slate-200 px-4 py-6 space-y-4 shadow-xl animate-in slide-in-from-top-2">
            <nav className="flex flex-col space-y-3 text-sm font-bold text-slate-800">
              <a 
                href="#project-partners" 
                onClick={() => setMobileMenuOpen(false)}
                className="p-2.5 rounded-lg hover:bg-red-50 hover:text-[#B5111B] transition-colors"
              >
                Partners
              </a>
              <a 
                href="#report-showcase" 
                onClick={() => setMobileMenuOpen(false)}
                className="p-2.5 rounded-lg hover:bg-red-50 hover:text-[#B5111B] transition-colors"
              >
                Report Showcase
              </a>
              <a 
                href="#analytics-showcase" 
                onClick={() => setMobileMenuOpen(false)}
                className="p-2.5 rounded-lg hover:bg-red-50 hover:text-[#B5111B] transition-colors"
              >
                Analytics
              </a>
              <a 
                href="#scorecard-categories" 
                onClick={() => setMobileMenuOpen(false)}
                className="p-2.5 rounded-lg hover:bg-red-50 hover:text-[#B5111B] transition-colors"
              >
                Categories
              </a>
              <a 
                href="#advisory-services" 
                onClick={() => setMobileMenuOpen(false)}
                className="p-2.5 rounded-lg hover:bg-red-50 hover:text-[#B5111B] transition-colors"
              >
                Services
              </a>
              <a 
                href="#pricing-section" 
                onClick={() => setMobileMenuOpen(false)}
                className="p-2.5 rounded-lg hover:bg-red-50 hover:text-[#B5111B] transition-colors"
              >
                Pricing Plans
              </a>
            </nav>

            <div className="pt-4 border-t border-slate-100 flex flex-col gap-2.5">
              <Link
                href="/login"
                className="w-full text-center py-2.5 text-sm font-bold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-xl transition-colors"
              >
                Sign In
              </Link>
              <Link
                href="/login"
                className="w-full text-center py-3 text-sm font-extrabold text-white bg-[#B5111B] hover:bg-[#8F0D15] rounded-xl shadow-xs transition-colors"
              >
                Buy Subscription
              </Link>
            </div>
          </div>
        )}
      </header>

      {/* 1. EXECUTIVE HERO SECTION (STRATEGIC ADVISORY & COMMUNITY WHEEL) */}
      <section className="relative bg-[#540208] text-white overflow-hidden border-b border-red-950 min-h-[580px] lg:min-h-[660px] xl:min-h-[720px] 2xl:min-h-[780px] flex items-center">
        {/* Ambient Gradient Lighting & Mesh Accent */}
        <div className="absolute inset-0 bg-radial-[ellipse_at_center,_var(--tw-gradient-stops)] from-[#6A040E]/80 via-[#540208] to-[#3B0105] pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff08_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none opacity-40" />

        {/* Desktop Flush Top-Right Wheel Graphic (Stretches to top-right corner) */}
        <div className="hidden lg:block absolute top-0 right-0 w-[52vw] max-w-[720px] xl:max-w-[840px] 2xl:max-w-[980px] h-full pointer-events-none z-10 select-none">
          <div className="relative w-full h-full flex items-start justify-end -mt-4 xl:-mt-8 2xl:-mt-12 -mr-4 xl:-mr-8 2xl:-mr-12">
            <div className="w-full max-w-[580px] xl:max-w-[700px] 2xl:max-w-[820px] pointer-events-auto">
              <CommunityWedgeWheel />
            </div>
          </div>
        </div>

        {/* Content Container (Full-width & Expansive) */}
        <div className="w-full max-w-[1700px] mx-auto px-4 sm:px-6 lg:px-12 xl:px-16 2xl:px-24 py-14 sm:py-18 lg:py-20 xl:py-24 relative z-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Content Column (Expansive width and larger typography) */}
            <div className="lg:col-span-8 xl:col-span-7 2xl:col-span-7 space-y-6 sm:space-y-8 z-10 py-2 max-w-3xl xl:max-w-4xl 2xl:max-w-5xl">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-[56px] 2xl:text-[66px] font-black text-white tracking-tight leading-[1.08]">
                Strategic Advisory<br />
                at the Intersection of<br />
                Economic Development<br />
                & Real Estate<span className="text-[#E11D48]">.</span>
              </h1>

              <p className="text-sm sm:text-base lg:text-lg xl:text-xl text-rose-100/90 leading-relaxed font-normal max-w-2xl xl:max-w-3xl 2xl:max-w-4xl">
                Rose Associates is a real estate and economic development advisory firm providing comprehensive services for private, institutional and municipal clients. Our 30+ years of experience in both urban and rural communities throughout the Carolinas and Southeast will guide you on a path toward prosperity. <strong className="text-[#E11D48] font-bold">Problem. Solved.</strong>
              </p>

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

            {/* Mobile / Tablet Centered Wheel */}
            <div className="lg:hidden flex justify-center relative mt-6 pb-6">
              <div className="relative w-full max-w-[340px] sm:max-w-[440px]">
                <CommunityWedgeWheel />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. PROJECT PARTNERS CONTINUOUS MARQUEE SECTION (INSTANT SOCIAL PROOF) */}
      <section id="project-partners" className="scroll-mt-20 py-6 sm:py-8 bg-white border-b border-slate-200/80 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          
          {/* Streamlined Compact Title */}
          <div className="text-center">
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
              Project <span className="text-[#B5111B]">Partners</span>
            </h2>
          </div>

          {/* Infinite Moving Single-Row Carousel */}
          <div className="relative w-full overflow-hidden py-2">
            {/* Left and Right Fade Gradients */}
            <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-24 bg-gradient-to-r from-white via-white/90 to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-24 bg-gradient-to-l from-white via-white/90 to-transparent z-10 pointer-events-none" />

            <div className="flex animate-marquee gap-8 sm:gap-12 md:gap-14 items-center">
              {[
                {
                  id: "swh-1",
                  name: "SeamonWhiteside",
                  image: "/partners/partner_seamonwhiteside.png",
                },
                {
                  id: "boudreaux-1",
                  name: "BOUDREAUX",
                  image: "/partners/partner_boudreaux.png",
                },
                {
                  id: "uli-1",
                  name: "Urban Land Institute",
                  image: "/partners/partner_uli.png",
                },
                {
                  id: "vhb-1",
                  name: "VHB",
                  image: "/partners/partner_vhb.png",
                },
                {
                  id: "ls3p-1",
                  name: "LS3P",
                  image: "/partners/partner_ls3p.png",
                },
                {
                  id: "iedc-1",
                  name: "IEDC",
                  image: "/partners/partner_iedc.png",
                },
                {
                  id: "bolton-menk-1",
                  name: "Bolton & Menk",
                  image: "/partners/partner_boltonmenk.png",
                },
                {
                  id: "stantec-1",
                  name: "Stantec",
                  image: "/partners/partner_stantec.png",
                },
                {
                  id: "clarion-1",
                  name: "Clarion",
                  image: "/partners/partner_clarion.png",
                },
                {
                  id: "ccim-1",
                  name: "The CCIM Institute",
                  image: "/partners/partner_ccim.png",
                },
                {
                  id: "mcadams-1",
                  name: "McAdams",
                  image: "/partners/partner_mcadams.png",
                },
                {
                  id: "stewart-1",
                  name: "Stewart",
                  image: "/partners/partner_stewart.png",
                },
                {
                  id: "cre-1",
                  name: "CRE",
                  image: "/partners/partner_cre.png",
                },
                // Duplicated set for seamless infinite loop
                {
                  id: "swh-2",
                  name: "SeamonWhiteside",
                  image: "/partners/partner_seamonwhiteside.png",
                },
                {
                  id: "boudreaux-2",
                  name: "BOUDREAUX",
                  image: "/partners/partner_boudreaux.png",
                },
                {
                  id: "uli-2",
                  name: "Urban Land Institute",
                  image: "/partners/partner_uli.png",
                },
                {
                  id: "vhb-2",
                  name: "VHB",
                  image: "/partners/partner_vhb.png",
                },
                {
                  id: "ls3p-2",
                  name: "LS3P",
                  image: "/partners/partner_ls3p.png",
                },
                {
                  id: "iedc-2",
                  name: "IEDC",
                  image: "/partners/partner_iedc.png",
                },
                {
                  id: "bolton-menk-2",
                  name: "Bolton & Menk",
                  image: "/partners/partner_boltonmenk.png",
                },
                {
                  id: "stantec-2",
                  name: "Stantec",
                  image: "/partners/partner_stantec.png",
                },
                {
                  id: "clarion-2",
                  name: "Clarion",
                  image: "/partners/partner_clarion.png",
                },
                {
                  id: "ccim-2",
                  name: "The CCIM Institute",
                  image: "/partners/partner_ccim.png",
                },
                {
                  id: "mcadams-2",
                  name: "McAdams",
                  image: "/partners/partner_mcadams.png",
                },
                {
                  id: "stewart-2",
                  name: "Stewart",
                  image: "/partners/partner_stewart.png",
                },
                {
                  id: "cre-2",
                  name: "CRE",
                  image: "/partners/partner_cre.png",
                },
              ].map((partner, idx) => (
                <div
                  key={`${partner.id}-${idx}`}
                  className="shrink-0 flex items-center justify-center px-3 py-1 hover:scale-105 transition-transform duration-300 cursor-pointer"
                  title={partner.name}
                >
                  <img
                    src={partner.image}
                    alt={partner.name}
                    draggable={false}
                    className="h-10 sm:h-12 md:h-14 w-auto max-w-[130px] sm:max-w-[170px] object-contain drop-shadow-2xs select-none pointer-events-none"
                  />
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* 3. SCORECARD PDF REPORT SHOWCASE (FANNED 3D STACK WITH REAL ADMIN CALLOUTS & CLEAN ARROWS) */}
      <section id="report-showcase" className="scroll-mt-20 py-12 sm:py-16 bg-gradient-to-b from-slate-100 via-white to-slate-50 text-slate-900 border-b border-slate-200/90 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 relative z-10">
          
          {/* Header */}
          <div className="space-y-2 pb-6 border-b border-slate-200">
            <h2 className="text-3xl sm:text-4xl font-black text-[#B5111B] tracking-tight">
              Scorecard PDF Report Design Showcase
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-none">
              A 3-page executive document folio compiled automatically by Prosperity Builder with real-time embedded analytics graphs. Click any page to focus or open full-screen preview.
            </p>
          </div>

          {/* 3D FANNED PAPER STACK CONTAINER WITH REAL ADMIN PORTAL CALLOUTS */}
          <div className="relative min-h-[640px] flex items-center justify-center py-6 px-4 overflow-visible">
            
            {/* ANNOTATION 1 (Top Left): Official 12-Step Prosperity Guide */}
            <div 
              onClick={() => setActiveFannedPage(1)}
              className={`hidden xl:flex flex-col items-start gap-1.5 absolute top-0 left-0 max-w-[280px] cursor-pointer transition-all duration-500 ${
                activeFannedPage === 1 
                  ? "opacity-100 scale-105 z-50 pointer-events-auto" 
                  : "opacity-75 scale-95 z-30 hover:opacity-100 hover:scale-100 pointer-events-auto"
              }`}
            >
              <div className={`p-3.5 rounded-2xl transition-all duration-300 ${
                activeFannedPage === 1
                  ? "bg-white border-2 border-[#B5111B] shadow-2xl ring-4 ring-[#B5111B]/15"
                  : "bg-white/95 border border-slate-300 shadow-sm"
              }`}>
                <h4 className="text-xs font-black tracking-tight flex items-center gap-2">
                  <span className={`p-1.5 rounded-lg flex items-center justify-center transition-colors ${
                    activeFannedPage === 1 ? "bg-[#B5111B] text-white shadow-xs" : "bg-slate-100 text-slate-500"
                  }`}>
                    <ShieldCheck className="w-4 h-4" />
                  </span>
                  <span className={activeFannedPage === 1 ? "text-slate-900 font-extrabold text-sm" : "text-slate-700 font-bold text-xs"}>
                    Official 12-Step Guide Cover
                  </span>
                </h4>
                <p className={`text-[11px] leading-tight pt-1.5 pl-0.5 ${
                  activeFannedPage === 1 ? "text-slate-700 font-semibold" : "text-slate-500 font-medium"
                }`}>
                  Lee County, NC 2025 Prosperity Building guide with Kathleen Rose CCIM/CRE seal.
                </p>
              </div>
              <svg viewBox="0 0 160 70" className="w-36 h-16 overflow-visible ml-6">
                <path
                  d="M 15 5 C 50 5, 85 20, 115 45"
                  fill="none"
                  stroke={activeFannedPage === 1 ? "#B5111B" : "#94A3B8"}
                  strokeWidth={activeFannedPage === 1 ? "2.5" : "1.5"}
                  strokeLinecap="round"
                  strokeDasharray="3 4"
                />
                <polygon points="115 45, 103 40, 110 34" fill={activeFannedPage === 1 ? "#B5111B" : "#64748B"} />
              </svg>
            </div>

            {/* ANNOTATION 2 (Top Right): 12-Category Quality Scorecard Matrix */}
            <div 
              onClick={() => setActiveFannedPage(2)}
              className={`hidden xl:flex flex-col items-end gap-1.5 absolute top-2 -right-4 max-w-[280px] cursor-pointer transition-all duration-500 ${
                activeFannedPage === 2 
                  ? "opacity-100 scale-105 z-50 pointer-events-auto" 
                  : "opacity-75 scale-95 z-30 hover:opacity-100 hover:scale-100 pointer-events-auto"
              }`}
            >
              <div className={`p-3.5 rounded-2xl text-right transition-all duration-300 relative ${
                activeFannedPage === 2
                  ? "bg-white border-2 border-[#B5111B] shadow-2xl ring-4 ring-[#B5111B]/15"
                  : "bg-white/95 border border-slate-300 shadow-sm"
              }`}>
                <h4 className="text-xs font-black tracking-tight flex items-center justify-end gap-2">
                  <span className={activeFannedPage === 2 ? "text-slate-900 font-extrabold text-sm" : "text-slate-700 font-bold text-xs"}>
                    12-Category Scorecard Matrix
                  </span>
                  <span className={`p-1.5 rounded-lg flex items-center justify-center transition-colors ${
                    activeFannedPage === 2 ? "bg-[#B5111B] text-white shadow-xs" : "bg-slate-100 text-slate-500"
                  }`}>
                    <Layers className="w-4 h-4" />
                  </span>
                </h4>
                <p className={`text-[11px] leading-tight pt-1.5 pr-0.5 ${
                  activeFannedPage === 2 ? "text-slate-700 font-semibold" : "text-slate-500 font-medium"
                }`}>
                  Comprehensive 12-module evaluation across 90 verified community indicators.
                </p>

                {/* Arrow with comfortable gap from page border */}
                <svg viewBox="0 0 140 80" className="w-32 h-16 overflow-visible absolute -left-[105px] top-6 pointer-events-none z-40">
                  <path
                    d="M 130 10 C 95 10, 60 30, 25 55"
                    fill="none"
                    stroke={activeFannedPage === 2 ? "#B5111B" : "#94A3B8"}
                    strokeWidth={activeFannedPage === 2 ? "2.5" : "1.5"}
                    strokeLinecap="round"
                    strokeDasharray="4 5"
                  />
                  <polygon points="25 55, 38 51, 33 43" fill={activeFannedPage === 2 ? "#B5111B" : "#64748B"} />
                </svg>
              </div>
            </div>

            {/* ANNOTATION 3 (Bottom Left): Overall Quality of Life Dial (74/100) */}
            <div 
              onClick={() => setActiveFannedPage(2)}
              className={`hidden xl:flex flex-col items-start gap-1.5 absolute bottom-4 -left-4 max-w-[280px] cursor-pointer transition-all duration-500 ${
                activeFannedPage === 2 
                  ? "opacity-100 scale-105 z-50 pointer-events-auto" 
                  : "opacity-75 scale-95 z-30 hover:opacity-100 hover:scale-100 pointer-events-auto"
              }`}
            >
              <div className={`p-3.5 rounded-2xl transition-all duration-300 relative ${
                activeFannedPage === 2
                  ? "bg-white border-2 border-[#B5111B] shadow-2xl ring-4 ring-[#B5111B]/15"
                  : "bg-white/95 border border-slate-300 shadow-sm"
              }`}>
                <h4 className="text-xs font-black tracking-tight flex items-center gap-2">
                  <span className={`p-1.5 rounded-lg flex items-center justify-center transition-colors ${
                    activeFannedPage === 2 ? "bg-[#B5111B] text-white shadow-xs" : "bg-slate-100 text-slate-500"
                  }`}>
                    <Activity className="w-4 h-4" />
                  </span>
                  <span className={activeFannedPage === 2 ? "text-slate-900 font-extrabold text-sm" : "text-slate-700 font-bold text-xs"}>
                    Quality of Life Score Dial
                  </span>
                </h4>
                <p className={`text-[11px] leading-tight pt-1.5 pl-0.5 ${
                  activeFannedPage === 2 ? "text-slate-700 font-semibold" : "text-slate-500 font-medium"
                }`}>
                  Aggregated 74/100 community prosperity index with Poor/Average/Good/Excellent bands.
                </p>

                {/* Arrow with comfortable gap from page border */}
                <svg viewBox="0 0 140 80" className="w-32 h-16 overflow-visible absolute -right-[105px] -top-14 pointer-events-none z-40">
                  <path
                    d="M 10 70 C 45 70, 80 50, 115 25"
                    fill="none"
                    stroke={activeFannedPage === 2 ? "#B5111B" : "#94A3B8"}
                    strokeWidth={activeFannedPage === 2 ? "2.5" : "1.5"}
                    strokeLinecap="round"
                    strokeDasharray="4 5"
                  />
                  <polygon points="115 25, 102 29, 107 37" fill={activeFannedPage === 2 ? "#B5111B" : "#64748B"} />
                </svg>
              </div>
            </div>

            {/* ANNOTATION 4 (Bottom Right): 3-Phase Implementation Blueprint */}
            <div 
              onClick={() => setActiveFannedPage(3)}
              className={`hidden xl:flex flex-col items-end gap-1.5 absolute bottom-0 right-0 max-w-[280px] cursor-pointer transition-all duration-500 ${
                activeFannedPage === 3 
                  ? "opacity-100 scale-105 z-50 pointer-events-auto" 
                  : "opacity-75 scale-95 z-30 hover:opacity-100 hover:scale-100 pointer-events-auto"
              }`}
            >
              <svg viewBox="0 0 160 70" className="w-36 h-16 overflow-visible mr-6">
                <path
                  d="M 145 65 C 110 65, 75 50, 45 25"
                  fill="none"
                  stroke={activeFannedPage === 3 ? "#B5111B" : "#94A3B8"}
                  strokeWidth={activeFannedPage === 3 ? "2.5" : "1.5"}
                  strokeLinecap="round"
                  strokeDasharray="3 4"
                />
                <polygon points="45 25, 57 30, 50 36" fill={activeFannedPage === 3 ? "#B5111B" : "#64748B"} />
              </svg>
              <div className={`p-3.5 rounded-2xl text-right transition-all duration-300 ${
                activeFannedPage === 3
                  ? "bg-white border-2 border-[#B5111B] shadow-2xl ring-4 ring-[#B5111B]/15"
                  : "bg-white/95 border border-slate-300 shadow-sm"
              }`}>
                <h4 className="text-xs font-black tracking-tight flex items-center justify-end gap-2">
                  <span className={activeFannedPage === 3 ? "text-slate-900 font-extrabold text-sm" : "text-slate-700 font-bold text-xs"}>
                    3-Phase Action Roadmap
                  </span>
                  <span className={`p-1.5 rounded-lg flex items-center justify-center transition-colors ${
                    activeFannedPage === 3 ? "bg-[#B5111B] text-white shadow-xs" : "bg-slate-100 text-slate-500"
                  }`}>
                    <Sparkles className="w-4 h-4" />
                  </span>
                </h4>
                <p className={`text-[11px] leading-tight pt-1.5 pr-0.5 ${
                  activeFannedPage === 3 ? "text-slate-700 font-semibold" : "text-slate-500 font-medium"
                }`}>
                  Reality Check → Plan Blueprint → Prosperity Building implementation chevrons.
                </p>
              </div>
            </div>

            {/* FANNED STACK CONTAINER */}
            <div className="relative w-full max-w-4xl h-[580px] flex items-center justify-center">
              
              {/* PAGE 1: COVER PAGE (Exact Match to PDF Page 1) */}
              <div 
                onClick={() => setActiveFannedPage(1)}
                className={`absolute left-[2%] sm:left-[8%] top-2 w-[290px] sm:w-[350px] h-[520px] sm:h-[560px] bg-white text-slate-900 rounded-2xl p-6 space-y-3.5 cursor-pointer transition-all duration-500 ease-out origin-bottom-left flex flex-col justify-between ${
                  activeFannedPage === 1 
                    ? "z-30 scale-105 sm:scale-108 rotate-0 shadow-[0_35px_90px_-15px_rgba(0,0,0,0.6)] ring-4 ring-[#B5111B]/30 border-2 border-[#B5111B] opacity-100" 
                    : "z-10 -rotate-6 scale-98 border border-slate-200 shadow-xl opacity-90 hover:opacity-100 hover:scale-100"
                }`}
              >
                {/* Top Gold Accent Bar */}
                <div className="h-1.5 bg-[#A48256] w-full rounded-full" />

                <div className="space-y-3 relative z-10">
                  <div className="space-y-1">
                    <h3 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight leading-tight">
                      Prosperity <br /><span className="text-[#B5111B]">Building</span>
                    </h3>
                    <p className="text-xs font-bold text-[#8F0D15] leading-snug">
                      A 12-Step Guide to constructing quality of life and community prosperity.
                    </p>
                  </div>

                  {/* Split Photography Collage Matching Real Cover */}
                  <div className="rounded-xl overflow-hidden border border-slate-200 shadow-sm relative space-y-1 bg-slate-100 p-1">
                    <div className="grid grid-cols-2 gap-1 h-32">
                      <img 
                        src="/rose_community_hero.jpg" 
                        alt="Sanford Historic Downtown"
                        className="w-full h-full object-cover rounded-lg"
                      />
                      <img 
                        src="/rose_report_team.jpg" 
                        alt="Kathleen Rose Community Presentation"
                        className="w-full h-full object-cover rounded-lg"
                      />
                    </div>
                    <div className="p-1 text-[8.5px] font-mono text-slate-500 flex justify-between items-center">
                      <span>Historic Sanford & Davidson, NC</span>
                      <span className="font-bold text-[#B5111B]">Case Study</span>
                    </div>
                  </div>

                  <div className="space-y-1 pt-1 border-t border-slate-100">
                    <div className="text-[11px] font-black text-slate-900">Lee County, NC 2025</div>
                    <div className="text-[9.5px] font-bold text-[#8F0D15]">Prosperity Builder Scorecard™</div>
                    <div className="text-[9px] text-slate-500">Rose & Associates Southeast, Inc.</div>
                    <div className="text-[9px] font-extrabold text-slate-700">Kathleen Rose, CCIM, CRE</div>
                  </div>
                </div>

                <div className="pt-2 border-t border-slate-200 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <img src="/logo.png" alt="Rose Associates" className="h-6 w-auto object-contain" />
                  </div>
                  <span className="text-[8.5px] font-mono text-slate-400">Page 1 • Official Cover</span>
                </div>
              </div>

              {/* PAGE 2: MIDDLE PAGE (Exact Match to PDF Page 6 - Quality of Life Scorecard) */}
              <div 
                onClick={() => setActiveFannedPage(2)}
                className={`absolute top-0 w-[310px] sm:w-[380px] h-[550px] sm:h-[600px] bg-white text-slate-900 rounded-2xl p-4 sm:p-5 space-y-2 cursor-pointer transition-all duration-500 ease-out origin-bottom-center flex flex-col justify-between overflow-hidden ${
                  activeFannedPage === 2 
                    ? "z-30 scale-105 sm:scale-108 rotate-0 shadow-[0_35px_90px_-15px_rgba(0,0,0,0.6)] border-4 border-[#8F0D15] ring-4 ring-[#B5111B]/30 opacity-100" 
                    : "z-20 rotate-4 scale-98 border border-slate-200 shadow-xl opacity-90 hover:opacity-100 hover:scale-100"
                }`}
              >
                {/* Top Gold Accent Bar */}
                <div className="h-1 bg-[#A48256] w-full rounded-full shrink-0" />

                <div className="space-y-1.5 relative z-10 flex-1 flex flex-col justify-between">
                  {/* Header Title */}
                  <div className="text-center space-y-0.5">
                    <div className="text-[11px] sm:text-xs font-serif font-black text-slate-900 tracking-tight">
                      Prosperity Builder Scorecard™
                    </div>
                    <h4 className="text-xs sm:text-sm font-bold text-slate-800 tracking-tight">
                      Quality of Life
                    </h4>
                  </div>

                  {/* 4-ZONE SPEEDOMETER DIAL (EXACT MATCH TO SHARED IMAGE) */}
                  <div className="flex flex-col items-center justify-center py-0.5">
                    <svg viewBox="0 0 200 105" className="w-44 sm:w-48 h-22 sm:h-24">
                      {/* 4 Distinct Colored Arc Bands */}
                      {/* 1. Poor (Red) */}
                      <path d="M 30 85 A 70 70 0 0 1 50 36" fill="none" stroke="#E11D48" strokeWidth="18" />
                      {/* 2. Average (Yellow) */}
                      <path d="M 50 36 A 70 70 0 0 1 115 17" fill="none" stroke="#FBBF24" strokeWidth="18" />
                      {/* 3. Good (Lime Green) */}
                      <path d="M 115 17 A 70 70 0 0 1 158 50" fill="none" stroke="#84CC16" strokeWidth="18" />
                      {/* 4. Excellent (Dark Green) */}
                      <path d="M 158 50 A 70 70 0 0 1 170 85" fill="none" stroke="#16A34A" strokeWidth="18" />

                      {/* Zone Labels */}
                      <text x="38" y="70" className="text-[6.5px] font-black fill-white" textAnchor="middle">Poor</text>
                      <text x="86" y="24" className="text-[6.5px] font-black fill-slate-900" textAnchor="middle">Average</text>
                      <text x="145" y="44" className="text-[6.5px] font-black fill-slate-900" textAnchor="middle">Good</text>
                      <text x="163" y="74" className="text-[5.5px] font-black fill-white" textAnchor="middle">Excellent</text>

                      {/* Needle pointing to 74 */}
                      <g transform="rotate(45 100 85)">
                        <line x1="100" y1="85" x2="100" y2="24" stroke="#1E293B" strokeWidth="2.5" strokeLinecap="round" />
                        <circle cx="100" cy="85" r="4.5" fill="#1E293B" />
                        <circle cx="100" cy="85" r="2" fill="#FFFFFF" />
                      </g>
                    </svg>

                    <div className="text-center -mt-2">
                      <div className="text-xl sm:text-2xl font-black text-slate-900 leading-none">74</div>
                      <div className="text-[9px] sm:text-[10px] font-black text-slate-900 tracking-tight">Lee County, North Carolina</div>
                      <div className="text-[8px] sm:text-[8.5px] text-slate-600 font-semibold">Overall Score</div>
                    </div>
                  </div>

                  {/* 12 CORE MODULE HORIZONTAL GRADIENT SCORE BARS (EXACT ICONS MATCHING REPORT PAGE 6) */}
                  <div className="grid grid-cols-2 gap-x-2.5 gap-y-1 text-[7.5px] sm:text-[8px] pt-0.5">
                    
                    {/* Column 1 - Item 1: Accessibility & Transportation (80) */}
                    <div className="flex items-start gap-1">
                      <div className="w-3.5 h-3.5 rounded-xs bg-slate-100 flex items-center justify-center shrink-0 mt-0.5 text-slate-700">
                        <svg viewBox="0 0 24 24" className="w-2.5 h-2.5 fill-current">
                          <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5z" />
                        </svg>
                      </div>
                      <div className="flex-1 space-y-0.5">
                        <div className="flex items-center gap-1">
                          <span className="text-[7px] text-slate-500 font-bold">Score:</span>
                          <div className="flex-1 h-2 rounded-xs bg-gradient-to-r from-red-500 via-amber-400 to-emerald-500 relative flex items-center">
                            <span className="absolute right-3 text-[6.5px] font-black text-slate-900 bg-white/70 px-1 rounded-xs">80</span>
                          </div>
                        </div>
                        <div className="font-bold text-slate-900 leading-tight">Accessibility & Transportation</div>
                        <div className="text-[6px] text-slate-500 leading-tight truncate">How well can residents, visitors & workers move</div>
                      </div>
                    </div>

                    {/* Column 2 - Item 7: Healthcare & Wellness (59) */}
                    <div className="flex items-start gap-1">
                      <div className="w-3.5 h-3.5 rounded-xs bg-slate-100 flex items-center justify-center shrink-0 mt-0.5 text-slate-700">
                        <svg viewBox="0 0 24 24" className="w-2.5 h-2.5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                          <path d="M3.22 12H9.5l.5-1 2 4.5 2-7 1.5 3.5h5.27" />
                        </svg>
                      </div>
                      <div className="flex-1 space-y-0.5">
                        <div className="flex items-center gap-1">
                          <span className="text-[7px] text-slate-500 font-bold">Score:</span>
                          <div className="flex-1 h-2 rounded-xs bg-gradient-to-r from-red-500 via-amber-400 to-emerald-500 relative flex items-center">
                            <span className="absolute right-6 text-[6.5px] font-black text-slate-900 bg-white/70 px-1 rounded-xs">59</span>
                          </div>
                        </div>
                        <div className="font-bold text-slate-900 leading-tight">Healthcare & Wellness</div>
                        <div className="text-[6px] text-slate-500 leading-tight truncate">Status of public health & medical care</div>
                      </div>
                    </div>

                    {/* Column 1 - Item 2: Arts & Culture (74) */}
                    <div className="flex items-start gap-1">
                      <div className="w-3.5 h-3.5 rounded-xs bg-slate-100 flex items-center justify-center shrink-0 mt-0.5 text-slate-700">
                        <svg viewBox="0 0 24 24" className="w-2.5 h-2.5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M2 10a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4z" />
                          <circle cx="6" cy="10" r="1" fill="currentColor" />
                          <circle cx="10" cy="10" r="1" fill="currentColor" />
                          <path d="M6 13c1 1 2 1 3 0" />
                          <path d="M14 6h4a4 4 0 0 1 4 4v2a4 4 0 0 1-4 4h-4" />
                          <path d="M18 10h.01" />
                        </svg>
                      </div>
                      <div className="flex-1 space-y-0.5">
                        <div className="flex items-center gap-1">
                          <span className="text-[7px] text-slate-500 font-bold">Score:</span>
                          <div className="flex-1 h-2 rounded-xs bg-gradient-to-r from-red-500 via-amber-400 to-emerald-500 relative flex items-center">
                            <span className="absolute right-4 text-[6.5px] font-black text-slate-900 bg-white/70 px-1 rounded-xs">74</span>
                          </div>
                        </div>
                        <div className="font-bold text-slate-900 leading-tight">Arts & Culture</div>
                        <div className="text-[6px] text-slate-500 leading-tight truncate">Foster & support local and visiting artists</div>
                      </div>
                    </div>

                    {/* Column 2 - Item 8: Historic Preservation (100) */}
                    <div className="flex items-start gap-1">
                      <div className="w-3.5 h-3.5 rounded-xs bg-slate-100 flex items-center justify-center shrink-0 mt-0.5 text-slate-700">
                        <svg viewBox="0 0 24 24" className="w-2.5 h-2.5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M3 21h18M4 18h16M6 18v-7M10 18v-7M14 18v-7M18 18v-7M12 3l10 5H2l10-5z" />
                        </svg>
                      </div>
                      <div className="flex-1 space-y-0.5">
                        <div className="flex items-center gap-1">
                          <span className="text-[7px] text-slate-500 font-bold">Score:</span>
                          <div className="flex-1 h-2 rounded-xs bg-gradient-to-r from-red-500 via-amber-400 to-emerald-500 relative flex items-center">
                            <span className="absolute right-0.5 text-[6.5px] font-black text-white bg-black/60 px-1 rounded-xs">100</span>
                          </div>
                        </div>
                        <div className="font-bold text-slate-900 leading-tight">Historic Preservation</div>
                        <div className="text-[6px] text-slate-500 leading-tight truncate">Preserve & honor historic assets</div>
                      </div>
                    </div>

                    {/* Column 1 - Item 3: Crime & Public Safety (61) */}
                    <div className="flex items-start gap-1">
                      <div className="w-3.5 h-3.5 rounded-xs bg-slate-100 flex items-center justify-center shrink-0 mt-0.5 text-slate-700">
                        <svg viewBox="0 0 24 24" className="w-2.5 h-2.5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M12 2l7 4v6c0 5.25-3.5 10-7 12-3.5-2-7-6.75-7-12V6l7-4z" />
                          <path d="M12 8v4" />
                          <path d="M12 16h.01" />
                        </svg>
                      </div>
                      <div className="flex-1 space-y-0.5">
                        <div className="flex items-center gap-1">
                          <span className="text-[7px] text-slate-500 font-bold">Score:</span>
                          <div className="flex-1 h-2 rounded-xs bg-gradient-to-r from-red-500 via-amber-400 to-emerald-500 relative flex items-center">
                            <span className="absolute right-6 text-[6.5px] font-black text-slate-900 bg-white/70 px-1 rounded-xs">61</span>
                          </div>
                        </div>
                        <div className="font-bold text-slate-900 leading-tight">Crime & Public Safety</div>
                        <div className="text-[6px] text-slate-500 leading-tight truncate">Residents & workers feel safe in community</div>
                      </div>
                    </div>

                    {/* Column 2 - Item 9: Population & Housing (95) */}
                    <div className="flex items-start gap-1">
                      <div className="w-3.5 h-3.5 rounded-xs bg-slate-100 flex items-center justify-center shrink-0 mt-0.5 text-slate-700">
                        <svg viewBox="0 0 24 24" className="w-2.5 h-2.5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                          <polyline points="9 22 9 12 15 12 15 22" />
                        </svg>
                      </div>
                      <div className="flex-1 space-y-0.5">
                        <div className="flex items-center gap-1">
                          <span className="text-[7px] text-slate-500 font-bold">Score:</span>
                          <div className="flex-1 h-2 rounded-xs bg-gradient-to-r from-red-500 via-amber-400 to-emerald-500 relative flex items-center">
                            <span className="absolute right-1 text-[6.5px] font-black text-slate-900 bg-white/70 px-1 rounded-xs">95</span>
                          </div>
                        </div>
                        <div className="font-bold text-slate-900 leading-tight">Population & Housing</div>
                        <div className="text-[6px] text-slate-500 leading-tight truncate">Adequate & affordable housing for all</div>
                      </div>
                    </div>

                    {/* Column 1 - Item 4: Education (63) */}
                    <div className="flex items-start gap-1">
                      <div className="w-3.5 h-3.5 rounded-xs bg-slate-100 flex items-center justify-center shrink-0 mt-0.5 text-slate-700">
                        <svg viewBox="0 0 24 24" className="w-2.5 h-2.5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                          <path d="M6 12v5c3 3 9 3 12 0v-5" />
                        </svg>
                      </div>
                      <div className="flex-1 space-y-0.5">
                        <div className="flex items-center gap-1">
                          <span className="text-[7px] text-slate-500 font-bold">Score:</span>
                          <div className="flex-1 h-2 rounded-xs bg-gradient-to-r from-red-500 via-amber-400 to-emerald-500 relative flex items-center">
                            <span className="absolute right-6 text-[6.5px] font-black text-slate-900 bg-white/70 px-1 rounded-xs">63</span>
                          </div>
                        </div>
                        <div className="font-bold text-slate-900 leading-tight">Education</div>
                        <div className="text-[6px] text-slate-500 leading-tight truncate">Resources for educational attainment</div>
                      </div>
                    </div>

                    {/* Column 2 - Item 10: Infrastructure (81) */}
                    <div className="flex items-start gap-1">
                      <div className="w-3.5 h-3.5 rounded-xs bg-slate-100 flex items-center justify-center shrink-0 mt-0.5 text-slate-700">
                        <svg viewBox="0 0 24 24" className="w-2.5 h-2.5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z" />
                          <path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2" />
                          <path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2" />
                          <path d="M10 6h4M10 10h4M10 14h4M10 18h4" />
                        </svg>
                      </div>
                      <div className="flex-1 space-y-0.5">
                        <div className="flex items-center gap-1">
                          <span className="text-[7px] text-slate-500 font-bold">Score:</span>
                          <div className="flex-1 h-2 rounded-xs bg-gradient-to-r from-red-500 via-amber-400 to-emerald-500 relative flex items-center">
                            <span className="absolute right-3 text-[6.5px] font-black text-slate-900 bg-white/70 px-1 rounded-xs">81</span>
                          </div>
                        </div>
                        <div className="font-bold text-slate-900 leading-tight">Infrastructure</div>
                        <div className="text-[6px] text-slate-500 leading-tight truncate">Meet needs for current & future expansion</div>
                      </div>
                    </div>

                    {/* Column 1 - Item 5: Employment & Labor (53) */}
                    <div className="flex items-start gap-1">
                      <div className="w-3.5 h-3.5 rounded-xs bg-slate-100 flex items-center justify-center shrink-0 mt-0.5 text-slate-700">
                        <svg viewBox="0 0 24 24" className="w-2.5 h-2.5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <rect width="20" height="14" x="2" y="7" rx="2" />
                          <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
                        </svg>
                      </div>
                      <div className="flex-1 space-y-0.5">
                        <div className="flex items-center gap-1">
                          <span className="text-[7px] text-slate-500 font-bold">Score:</span>
                          <div className="flex-1 h-2 rounded-xs bg-gradient-to-r from-red-500 via-amber-400 to-emerald-500 relative flex items-center">
                            <span className="absolute right-7 text-[6.5px] font-black text-slate-900 bg-white/70 px-1 rounded-xs">53</span>
                          </div>
                        </div>
                        <div className="font-bold text-slate-900 leading-tight">Employment & Labor</div>
                        <div className="text-[6px] text-slate-500 leading-tight truncate">Balanced workforce & expansion</div>
                      </div>
                    </div>

                    {/* Column 2 - Item 11: Open Space & Recreation (77) */}
                    <div className="flex items-start gap-1">
                      <div className="w-3.5 h-3.5 rounded-xs bg-slate-100 flex items-center justify-center shrink-0 mt-0.5 text-slate-700">
                        <svg viewBox="0 0 24 24" className="w-2.5 h-2.5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <circle cx="18.5" cy="17.5" r="3.5" />
                          <circle cx="5.5" cy="17.5" r="3.5" />
                          <circle cx="15" cy="5" r="1" />
                          <path d="M12 17.5V14l-3-3 4-3 2 3h2" />
                        </svg>
                      </div>
                      <div className="flex-1 space-y-0.5">
                        <div className="flex items-center gap-1">
                          <span className="text-[7px] text-slate-500 font-bold">Score:</span>
                          <div className="flex-1 h-2 rounded-xs bg-gradient-to-r from-red-500 via-amber-400 to-emerald-500 relative flex items-center">
                            <span className="absolute right-3.5 text-[6.5px] font-black text-slate-900 bg-white/70 px-1 rounded-xs">77</span>
                          </div>
                        </div>
                        <div className="font-bold text-slate-900 leading-tight">Open Space & Recreation</div>
                        <div className="text-[6px] text-slate-500 leading-tight truncate">Passive & active recreation opportunities</div>
                      </div>
                    </div>

                    {/* Column 1 - Item 6: Goods & Services (72) */}
                    <div className="flex items-start gap-1">
                      <div className="w-3.5 h-3.5 rounded-xs bg-slate-100 flex items-center justify-center shrink-0 mt-0.5 text-slate-700">
                        <svg viewBox="0 0 24 24" className="w-2.5 h-2.5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="m7.5 4.27 9 5.15" />
                          <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" />
                          <path d="m3.3 7 8.7 5 8.7-5" />
                          <path d="M12 22V12" />
                        </svg>
                      </div>
                      <div className="flex-1 space-y-0.5">
                        <div className="flex items-center gap-1">
                          <span className="text-[7px] text-slate-500 font-bold">Score:</span>
                          <div className="flex-1 h-2 rounded-xs bg-gradient-to-r from-red-500 via-amber-400 to-emerald-500 relative flex items-center">
                            <span className="absolute right-4 text-[6.5px] font-black text-slate-900 bg-white/70 px-1 rounded-xs">72</span>
                          </div>
                        </div>
                        <div className="font-bold text-slate-900 leading-tight">Goods & Services</div>
                        <div className="text-[6px] text-slate-500 leading-tight truncate">Adequate food, beverages & goods</div>
                      </div>
                    </div>

                    {/* Column 2 - Item 12: Planning & Land Use (78) */}
                    <div className="flex items-start gap-1">
                      <div className="w-3.5 h-3.5 rounded-xs bg-slate-100 flex items-center justify-center shrink-0 mt-0.5 text-slate-700">
                        <svg viewBox="0 0 24 24" className="w-2.5 h-2.5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <polygon points="3 6 9 3 15 6 21 3 21 18 15 21 9 18 3 21" />
                          <line x1="9" x2="9" y1="3" y2="18" />
                          <line x1="15" x2="15" y1="6" y2="21" />
                        </svg>
                      </div>
                      <div className="flex-1 space-y-0.5">
                        <div className="flex items-center gap-1">
                          <span className="text-[7px] text-slate-500 font-bold">Score:</span>
                          <div className="flex-1 h-2 rounded-xs bg-gradient-to-r from-red-500 via-amber-400 to-emerald-500 relative flex items-center">
                            <span className="absolute right-3.5 text-[6.5px] font-black text-slate-900 bg-white/70 px-1 rounded-xs">78</span>
                          </div>
                        </div>
                        <div className="font-bold text-slate-900 leading-tight">Planning & Land Use</div>
                        <div className="text-[6px] text-slate-500 leading-tight truncate">Preservation & balanced tax base</div>
                      </div>
                    </div>

                  </div>
                </div>

                <div className="pt-1.5 border-t border-slate-200 flex justify-between items-center text-[8px] font-mono text-slate-400 shrink-0">
                  <span>Rose Associates Southeast, Inc.</span>
                  <span className="font-bold text-[#B5111B]">Page 6</span>
                </div>
              </div>

              {/* PAGE 3: BACK PAGE (Exact Authentic Match to PDF Page 31 - Next Steps & Resources) */}
              <div 
                onClick={() => setActiveFannedPage(3)}
                className={`absolute right-[2%] sm:right-[8%] top-0 w-[310px] sm:w-[380px] h-[550px] sm:h-[600px] bg-white text-slate-900 rounded-2xl p-5 sm:p-6 cursor-pointer transition-all duration-500 ease-out origin-bottom-right flex flex-col justify-between overflow-hidden ${
                  activeFannedPage === 3 
                    ? "z-30 scale-105 sm:scale-108 rotate-0 shadow-[0_35px_90px_-15px_rgba(0,0,0,0.6)] border-4 border-[#8F0D15] ring-4 ring-[#B5111B]/30 opacity-100" 
                    : "z-10 rotate-8 scale-98 border border-slate-200 shadow-xl opacity-90 hover:opacity-100 hover:scale-100"
                }`}
              >
                {/* Top Gold Accent Bar */}
                <div className="h-1 bg-[#A48256] w-full rounded-full shrink-0" />

                <div className="space-y-2 relative z-10 flex-1 flex flex-col justify-between">
                  {/* Header & Watermark Pin */}
                  <div className="flex justify-between items-start pt-1">
                    <div className="space-y-0.5">
                      <h3 className="text-base sm:text-lg font-serif font-black text-slate-900 tracking-tight">
                        Next Steps & Resources
                      </h3>
                      <p className="text-[10px] sm:text-[11px] text-slate-700 italic font-medium">
                        Where do we go from here?
                      </p>
                    </div>

                    {/* Winding road destination watermark icon */}
                    <div className="w-8 h-8 text-slate-300 shrink-0 flex items-center justify-center opacity-80">
                      <svg viewBox="0 0 24 24" className="w-6 h-6 fill-none stroke-current" strokeWidth="1.5">
                        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5z" />
                        <path d="M19 16c-2 1-4-1-6 0s-3 3-5 2" strokeDasharray="1.5 1.5" />
                      </svg>
                    </div>
                  </div>

                  {/* Intro Paragraph */}
                  <p className="text-[8px] sm:text-[9px] text-slate-700 leading-relaxed">
                    The Scorecard provides a foundational first step in understanding your current reality. There are several resources available to assist communities in building prosperity. In addition to the Scorecard, these steps include the following:
                  </p>

                  {/* 3 Authentic Bullet Points */}
                  <div className="space-y-1 text-[7.5px] sm:text-[8.5px] text-slate-800 leading-snug pl-1">
                    <div className="flex items-start gap-1.5">
                      <span className="text-slate-900 font-black shrink-0">•</span>
                      <span><strong>Understand your community characteristics and dynamics.</strong> This includes updated demographic and economic data from state and federal resources such as the U.S. Census and the Bureau of Labor Statistics.</span>
                    </div>
                    <div className="flex items-start gap-1.5">
                      <span className="text-slate-900 font-black shrink-0">•</span>
                      <span><strong>Set forth a Vision and Mission for your community.</strong> This requires input from local residents, business owners and other stakeholders.</span>
                    </div>
                    <div className="flex items-start gap-1.5">
                      <span className="text-slate-900 font-black shrink-0">•</span>
                      <span><strong>Identify your community assets.</strong> What makes your community special?</span>
                    </div>
                  </div>

                  {/* 3-PHASE INTERLOCKING CHEVRON FLOW (EXACT PDF PAGE 31 MATCH) */}
                  <div className="py-1">
                    <svg viewBox="0 0 330 42" className="w-full h-auto drop-shadow-2xs">
                      {/* Step 1: Reality Check */}
                      <polygon points="0,0 95,0 110,21 95,42 0,42" fill="#F8FAFC" stroke="#64748B" strokeWidth="1" />
                      <text x="48" y="17" textAnchor="middle" className="text-[8px] font-sans font-bold fill-slate-900 tracking-tight">REALITY</text>
                      <text x="48" y="29" textAnchor="middle" className="text-[8px] font-sans font-bold fill-slate-900 tracking-tight">CHECK</text>

                      {/* Step 2: Plan Blueprint */}
                      <polygon points="105,0 200,0 215,21 200,42 105,42 120,21" fill="#F8FAFC" stroke="#64748B" strokeWidth="1" />
                      <text x="160" y="17" textAnchor="middle" className="text-[8px] font-sans font-bold fill-slate-900 tracking-tight">PLAN</text>
                      <text x="160" y="29" textAnchor="middle" className="text-[8px] font-sans font-bold fill-slate-900 tracking-tight">BLUEPRINT</text>

                      {/* Step 3: Prosperity Building */}
                      <polygon points="210,0 305,0 320,21 305,42 210,42 225,21" fill="#FEF2F2" stroke="#B5111B" strokeWidth="1.2" />
                      <text x="265" y="17" textAnchor="middle" className="text-[8px] font-sans font-black fill-[#8F0D15] tracking-tight">PROSPERITY</text>
                      <text x="265" y="29" textAnchor="middle" className="text-[8px] font-sans font-black fill-[#8F0D15] tracking-tight">BUILDING</text>
                    </svg>
                  </div>

                  {/* The Prosperity Builder Program Section from Report */}
                  <div className="space-y-1 border-t border-slate-100 pt-1.5">
                    <div className="text-[9px] sm:text-[10px] font-serif font-black text-slate-900 italic text-center">
                      The Prosperity Builder Program™
                    </div>
                    <p className="text-[7px] sm:text-[8px] text-slate-600 leading-tight">
                      If further interested, join our Prosperity Builder Program. Our process begins by evaluating the community's health and well-being through data sources and tools that interpret complex information into a scorecard to assist in prioritizing decisions based on market reality, vision and goals.
                    </p>
                    <p className="text-[7.5px] sm:text-[8px] text-slate-800 pt-0.5">
                      Reach out to us at <strong className="text-[#B5111B]">info@roseassociates.com</strong> to schedule a consultation on building your best path forward.
                    </p>
                  </div>
                </div>

                {/* Footer */}
                <div className="pt-1.5 border-t border-slate-200 flex justify-between items-center text-[8px] font-mono text-slate-400 shrink-0">
                  <span>Rose Associates Southeast, Inc.</span>
                  <span className="font-bold text-slate-700">31</span>
                </div>
              </div>

            </div>
          </div>

          <div className="text-center pt-2">
            <Link
              href="/login"
              className="bg-[#B5111B] hover:bg-[#8F0D15] text-white font-extrabold text-xs sm:text-sm px-6 py-3.5 rounded-xl shadow-md transition-all inline-flex items-center gap-2 cursor-pointer"
            >
              <FileDown className="w-4 h-4" />
              <span>Buy Subscription to Generate Certified Reports</span>
            </Link>
          </div>
        </div>
      </section>

      {/* 4. LIVE DASHBOARD ANALYTICS & SCORECARD INSIGHTS (EXACT MATCH TO 2ND REFERENCE IMAGE) */}
      <section id="analytics-showcase" className="scroll-mt-20 py-12 sm:py-16 bg-gradient-to-b from-white via-slate-50/60 to-white text-slate-900 border-b border-slate-200/90 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 relative z-10">
          
          {/* Top Row: Left Header & Buttons + Right 3 Executive Metric Chart Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Header Box */}
            <div className="lg:col-span-4 space-y-4">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-[1.12]">
                Executive Analytics & <br />
                <span className="text-[#B5111B]">Scorecard Insights</span>
              </h2>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                Real-time score speedometers, radar analysis, module insights, and trend visualizations — all in one place.
              </p>
            </div>

            {/* Right 3 Executive Chart Cards (Overall Score, Section Analysis Radar, Top Modules Rose Wheel) */}
            <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-3 gap-5 items-stretch">
              <GaugeSpeedometerChart score={6.4} max={10} percentage="64%" />
              <RadarSectionChart />
              <TopModulesChart />
            </div>

          </div>

          {/* Middle Row: 2 Comprehensive Broad Charts (Value Overview Combo & Multi-Curve Breakdown) */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">
            <ComboBarLineChart />
            <MultiCurveAreaChart />
          </div>

          {/* Bottom Row: 4 Feature Callouts (Real-time Insights, Advanced Analytics, Actionable Advisory, Secure & Reliable) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-2">
            {[
              {
                icon: <Activity className="w-5 h-5 text-[#B5111B]" />,
                title: "Real-time Insights",
                desc: "Live data from trusted sources & benchmarks"
              },
              {
                icon: <PieChart className="w-5 h-5 text-[#B5111B]" />,
                title: "Advanced Analytics",
                desc: "Radar, trend & distribution charts for deep insights"
              },
              {
                icon: <Zap className="w-5 h-5 text-[#B5111B]" />,
                title: "Actionable Advisory",
                desc: "Data-driven recommendations to improve performance"
              },
              {
                icon: <ShieldCheck className="w-5 h-5 text-[#B5111B]" />,
                title: "Secure & Reliable",
                desc: "Enterprise-grade security and data integrity"
              }
            ].map((f, i) => (
              <div key={i} className="bg-white rounded-xl border border-slate-200/80 p-4 flex items-start gap-3 shadow-2xs hover:shadow-xs transition-shadow">
                <div className="w-10 h-10 rounded-lg bg-red-50 flex items-center justify-center shrink-0">
                  {f.icon}
                </div>
                <div className="space-y-0.5 min-w-0">
                  <h4 className="text-xs font-bold text-slate-900 truncate">{f.title}</h4>
                  <p className="text-[11px] text-slate-500 leading-tight">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 5. 12-CATEGORY SCORECARD EVALUATION ACCORDION SECTION */}
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
            {[
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
            ].map((cat) => (
              <div 
                key={cat.id}
                className="bg-white rounded-2xl border border-slate-200/90 shadow-2xs hover:shadow-md transition-all overflow-hidden"
              >
                <div 
                  onClick={() => setActiveAccordionCat(prev => prev === cat.id ? null : cat.id)}
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
                    
                    {/* Inquiry Question Callout */}
                    <div className="p-3 rounded-xl bg-white border border-slate-200/80 text-xs text-slate-900 italic font-semibold leading-relaxed shadow-2xs">
                      "{cat.question}"
                    </div>

                    {/* Detailed Category Description from PDF */}
                    <p className="text-xs text-slate-600 leading-relaxed font-normal">
                      {cat.description}
                    </p>

                    {/* Expert Quote & Source */}
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

                    {/* Key Assessment Indicators */}
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

      {/* 5. ROSE ASSOCIATES ADVISORY SERVICES (COMPACT 3-COLUMN GRID) */}
      <section id="advisory-services" className="scroll-mt-20 py-10 sm:py-14 bg-slate-50/50 border-b border-slate-200 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
              Our Advisory <span className="text-[#B5111B]">Services</span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 font-normal">
              Specialized commercial real estate, land use planning, and economic growth advisory.
            </p>
          </div>

          {/* 3 Compact Services Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
            
            {/* Service 1: Land Use & Real Estate Advisory */}
            <div className="bg-white rounded-2xl border border-slate-200/90 p-6 space-y-4 shadow-2xs hover:shadow-md hover:border-[#B5111B]/40 transition-all flex flex-col justify-between group">
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-red-50 text-[#B5111B] flex items-center justify-center shrink-0">
                    <Layers className="w-5 h-5" />
                  </div>
                  <h3 className="text-sm sm:text-base font-extrabold text-slate-900 leading-snug">
                    Land Use & Real Estate Advisory
                  </h3>
                </div>

                <p className="text-xs text-slate-600 leading-relaxed font-normal">
                  Maximize the potential of land for different uses and property types by assessing development feasibility and providing strategic guidance on land use planning to identify and unlock highest and best use.
                </p>

                <div className="space-y-1.5 pt-1">
                  <div className="text-[11px] font-bold text-slate-900 uppercase tracking-wider">Our work includes:</div>
                  <div className="flex flex-wrap gap-1.5">
                    {[
                      "Real Estate Market Analysis",
                      "Asset/Portfolio Strategy & Repositioning",
                      "Financial Feasibility Studies",
                      "Highest & Best Use"
                    ].map((item, i) => (
                      <span key={i} className="text-[11px] bg-slate-50 border border-slate-200/80 rounded-md px-2 py-0.5 text-slate-700 font-medium flex items-center gap-1">
                        <Check className="w-3 h-3 text-[#B5111B] shrink-0" />
                        <span>{item}</span>
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <a 
                href="https://roseassociates.com/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-xs font-bold text-[#B5111B] hover:text-[#8F0D15] inline-flex items-center gap-1.5 pt-2 group-hover:translate-x-1 transition-transform"
              >
                <span>Explore Advisory</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Service 2: Economic Development */}
            <div className="bg-white rounded-2xl border border-slate-200/90 p-6 space-y-4 shadow-2xs hover:shadow-md hover:border-[#B5111B]/40 transition-all flex flex-col justify-between group">
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-red-50 text-[#B5111B] flex items-center justify-center shrink-0">
                    <TrendingUp className="w-5 h-5" />
                  </div>
                  <h3 className="text-sm sm:text-base font-extrabold text-slate-900 leading-snug">
                    Economic Development
                  </h3>
                </div>

                <p className="text-xs text-slate-600 leading-relaxed font-normal">
                  Through analytics, we assess overall economic health to create plans for attracting businesses, supporting existing enterprises, promoting job creation, and delivering strategic growth frameworks.
                </p>

                <div className="space-y-1.5 pt-1">
                  <div className="text-[11px] font-bold text-slate-900 uppercase tracking-wider">Our work includes:</div>
                  <div className="flex flex-wrap gap-1.5">
                    {[
                      "Economic Development Strategy",
                      "Revitalization & Adaptive Reuse",
                      "Tourism & Place Marketing",
                      "Retail Positioning",
                      "Developer Solicitation & Selection",
                      "Incentive Negotiation Support"
                    ].map((item, i) => (
                      <span key={i} className="text-[11px] bg-slate-50 border border-slate-200/80 rounded-md px-2 py-0.5 text-slate-700 font-medium flex items-center gap-1">
                        <Check className="w-3 h-3 text-[#B5111B] shrink-0" />
                        <span>{item}</span>
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <a 
                href="https://roseassociates.com/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-xs font-bold text-[#B5111B] hover:text-[#8F0D15] inline-flex items-center gap-1.5 pt-2 group-hover:translate-x-1 transition-transform"
              >
                <span>Explore Advisory</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Service 3: Commercial Real Estate */}
            <div className="bg-white rounded-2xl border border-slate-200/90 p-6 space-y-4 shadow-2xs hover:shadow-md hover:border-[#B5111B]/40 transition-all flex flex-col justify-between group">
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-red-50 text-[#B5111B] flex items-center justify-center shrink-0">
                    <Building2 className="w-5 h-5" />
                  </div>
                  <h3 className="text-sm sm:text-base font-extrabold text-slate-900 leading-snug">
                    Commercial Real Estate
                  </h3>
                </div>

                <p className="text-xs text-slate-600 leading-relaxed font-normal">
                  Experienced advisory specializing in facilitating due diligence, buying, selling, and leasing commercial properties and land, negotiating favorable terms for public and private clients.
                </p>

                <div className="space-y-1.5 pt-1">
                  <div className="text-[11px] font-bold text-slate-900 uppercase tracking-wider">Our work includes:</div>
                  <div className="flex flex-wrap gap-1.5">
                    {[
                      "Site Selection Strategy & Services",
                      "Market Analysis",
                      "Property & Asset Strategy",
                      "Distressed Assets Forensics",
                      "Property Acquisition & Disposition",
                      "Brokerage Services"
                    ].map((item, i) => (
                      <span key={i} className="text-[11px] bg-slate-50 border border-slate-200/80 rounded-md px-2 py-0.5 text-slate-700 font-medium flex items-center gap-1">
                        <Check className="w-3 h-3 text-[#B5111B] shrink-0" />
                        <span>{item}</span>
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <a 
                href="https://roseassociates.com/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-xs font-bold text-[#B5111B] hover:text-[#8F0D15] inline-flex items-center gap-1.5 pt-2 group-hover:translate-x-1 transition-transform"
              >
                <span>Explore Advisory</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>

          </div>

          {/* COMBINED TRUST NOTICE BANNER */}
          <div className="bg-gradient-to-r from-slate-50 via-white to-slate-50 rounded-2xl border border-slate-200/90 p-6 sm:p-8 relative overflow-hidden shadow-2xs">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
              
              {/* Left Item: Verified Data Quality Guarantee */}
              <div className="lg:col-span-7 flex items-center gap-4">
                <div className="w-12 h-12 rounded-full border border-red-200 bg-white text-[#B5111B] flex items-center justify-center shrink-0 shadow-2xs">
                  <ShieldCheck className="w-6 h-6 text-[#B5111B]" />
                </div>
                <div className="space-y-0.5">
                  <span className="text-[11px] font-extrabold uppercase tracking-wider text-[#B5111B] block">
                    VERIFIED DATA QUALITY GUARANTEE
                  </span>
                  <p className="text-xs sm:text-sm font-bold text-slate-900 leading-snug">
                    All data and metrics used across our scorecards are gathered and collected from trusted and verified genuine public and government sources.
                  </p>
                </div>
              </div>

              {/* Right Item: Trusted. Verified. Reliable. */}
              <div className="lg:col-span-5 flex items-center gap-4 lg:border-l lg:border-slate-200 lg:pl-8">
                <div className="w-12 h-12 rounded-full bg-red-50 text-[#B5111B] flex items-center justify-center shrink-0">
                  <Database className="w-6 h-6 text-[#B5111B]" />
                </div>
                <div className="space-y-0.5">
                  <h4 className="text-sm font-extrabold text-slate-900">
                    Trusted. Verified. Reliable.
                  </h4>
                  <p className="text-xs text-slate-500 font-medium">
                    Committed to accuracy and transparency.
                  </p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* 6. REAL SETTINGS MODULE PRICING PLANS & SEQUENTIAL BILLING WORKFLOW */}
      <section id="pricing-section" className="scroll-mt-20 py-12 sm:py-16 bg-slate-50/50 border-b border-slate-200 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          
          {/* Header & Formula Pill */}
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
              Sequential Billing Plans
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl mx-auto">
              Official pricing structure configured in Prosperity Builder Settings. Platform subscription on account login and report generation plan upon final audit completion.
            </p>

            {/* Formula Summary Badge matching Settings */}
            <div className="inline-flex items-center gap-2 text-xs font-bold text-[#B5111B] bg-red-50 px-4 py-2 rounded-full border border-red-200 shadow-2xs">
              <Calculator className="w-4 h-4 text-[#B5111B]" />
              <span>Official Settings Formula: <strong className="font-extrabold text-slate-900">${subscriptionPrice} (Subscription) + ${reportPrice} (Report) = ${bundlePrice} / Year</strong></span>
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
                  Sequential Billing Workflow
                </span>
              </div>
              <span className="px-3 py-1 rounded-full text-xs font-bold bg-emerald-50 text-emerald-700 border border-emerald-200/80 shadow-2xs w-fit flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>Active System Flow</span>
              </span>
            </div>

            <div className="flex flex-col lg:flex-row items-center gap-3">
              
              {/* Step 1: Account Login */}
              <div className="flex-1 p-5 bg-slate-50/70 rounded-2xl border border-slate-200/80 flex items-start gap-4 w-full h-full">
                <div className="w-10 h-10 rounded-xl bg-red-50 text-[#B5111B] flex items-center justify-center shrink-0">
                  <User className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <div className="text-[10px] font-extrabold text-[#B5111B] uppercase tracking-wider">01. Account Login</div>
                  <div className="font-extrabold text-slate-900 text-sm">Platform Subscription (${subscriptionPrice}/yr)</div>
                  <p className="text-xs text-slate-500 font-normal leading-relaxed">
                    Required upfront on login to unlock platform access, section maker & project management.
                  </p>
                </div>
              </div>

              {/* Connecting Arrow 1 */}
              <div className="hidden lg:flex items-center justify-center text-slate-300 shrink-0 px-1">
                <ArrowRight className="w-5 h-5" />
              </div>

              {/* Step 2: Order Stepper */}
              <div className="flex-1 p-5 bg-slate-50/70 rounded-2xl border border-slate-200/80 flex items-start gap-4 w-full h-full">
                <div className="w-10 h-10 rounded-xl bg-red-50 text-[#B5111B] flex items-center justify-center shrink-0">
                  <ReceiptText className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <div className="text-[10px] font-extrabold text-[#B5111B] uppercase tracking-wider">02. Order Stepper</div>
                  <div className="font-extrabold text-slate-900 text-sm">Audit Steps 1 to 5</div>
                  <p className="text-xs text-slate-500 font-normal leading-relaxed">
                    Complete questionnaires, 3rd party web data audit & score calculation.
                  </p>
                </div>
              </div>

              {/* Connecting Arrow 2 */}
              <div className="hidden lg:flex items-center justify-center text-slate-300 shrink-0 px-1">
                <ArrowRight className="w-5 h-5" />
              </div>

              {/* Step 3: Final Delivery */}
              <div className="flex-1 p-5 bg-slate-50/70 rounded-2xl border border-slate-200/80 flex items-start gap-4 w-full h-full">
                <div className="w-10 h-10 rounded-xl bg-red-50 text-[#B5111B] flex items-center justify-center shrink-0">
                  <FileText className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <div className="text-[10px] font-extrabold text-[#B5111B] uppercase tracking-wider">03. Final Delivery</div>
                  <div className="font-extrabold text-slate-900 text-sm">Report Plan (${reportPrice} / Report)</div>
                  <p className="text-xs text-slate-500 font-normal leading-relaxed">
                    Paid upon report generation to unlock official PDF download & verified stamp.
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* 3 Real Plans Matching Settings Module */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch pt-2">
            
            {/* PLAN 1: Platform Subscription Plan ($149 / Year) */}
            <div className="bg-white rounded-2xl border border-slate-200/90 p-6 sm:p-8 space-y-6 flex flex-col justify-between shadow-2xs hover:shadow-md transition-shadow">
              <div className="space-y-5">
                <div className="space-y-1.5">
                  <div className="text-xs font-black text-[#B5111B] uppercase tracking-wider">Step 1 Billing</div>
                  <h3 className="text-lg font-bold text-slate-900">Platform Subscription Plan</h3>
                  <p className="text-xs text-slate-500 leading-relaxed">Ongoing platform access, unlimited master plans, team seats & executive dashboards.</p>
                </div>

                <div className="pt-2 border-t border-slate-100 space-y-1.5">
                  <div className="text-4xl font-black text-slate-900">
                    ${subscriptionPrice}
                    <span className="text-xs font-semibold text-slate-400"> /Year</span>
                  </div>
                  <span className="inline-block text-[11px] font-bold text-slate-700 bg-slate-100 px-3 py-1 rounded-lg border border-slate-200">
                    Paid Upon Account Login
                  </span>
                </div>

                <ul className="space-y-3 pt-2 text-xs text-slate-700 font-medium">
                  <li className="flex items-center gap-2.5">
                    <Check className="w-4 h-4 text-[#B5111B] shrink-0" />
                    <span>Full Platform & Dashboard Access</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <Check className="w-4 h-4 text-[#B5111B] shrink-0" />
                    <span>Projects Control Center & Assignment</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <Check className="w-4 h-4 text-[#B5111B] shrink-0" />
                    <span>Custom Section Maker & Schema Engine</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <Check className="w-4 h-4 text-[#B5111B] shrink-0" />
                    <span>Real-Time Multi-Axis Analytics Charts</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <Check className="w-4 h-4 text-[#B5111B] shrink-0" />
                    <span>Multi-User Regional Team Collaboration</span>
                  </li>
                </ul>
              </div>

              <Link
                href="/login"
                className="w-full bg-[#0A101D] hover:bg-slate-800 text-white font-extrabold text-xs sm:text-sm py-3.5 rounded-xl shadow-xs transition-all text-center block cursor-pointer"
              >
                Sign In to Subscribe (${subscriptionPrice}/yr)
              </Link>
            </div>

            {/* PLAN 2: Report Generation Plan ($99 / Report) */}
            <div className="bg-white rounded-2xl border border-slate-200/90 p-6 sm:p-8 space-y-6 flex flex-col justify-between shadow-2xs hover:shadow-md transition-shadow">
              <div className="space-y-5">
                <div className="space-y-1.5">
                  <div className="text-xs font-black text-[#B5111B] uppercase tracking-wider">Step 2 Billing</div>
                  <h3 className="text-lg font-bold text-slate-900">Report Generation Plan</h3>
                  <p className="text-xs text-slate-500 leading-relaxed">Official scorecard audit calculations, certified PDF report delivery & verification stamp.</p>
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
                    <span>3-Page Executive PDF Export Download</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <Check className="w-4 h-4 text-[#B5111B] shrink-0" />
                    <span>Kathleen Rose, CCIM/CRE Advisory Seal</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <Check className="w-4 h-4 text-[#B5111B] shrink-0" />
                    <span>Action vs Inaction 5-Year Projections</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <Check className="w-4 h-4 text-[#B5111B] shrink-0" />
                    <span>Official Audit Timestamp & Cryptographic Hash</span>
                  </li>
                </ul>
              </div>

              <Link
                href="/login"
                className="w-full bg-[#0A101D] hover:bg-slate-800 text-white font-extrabold text-xs sm:text-sm py-3.5 rounded-xl shadow-xs transition-all text-center block cursor-pointer"
              >
                Buy Single Report (${reportPrice})
              </Link>
            </div>

            {/* COMBINED PLAN: Combined Subscription & Report Plan ($248 / Year) (FEATURED / POPULAR) */}
            <div className="bg-white rounded-2xl border-2 border-[#B5111B] p-6 sm:p-8 space-y-6 flex flex-col justify-between shadow-lg relative overflow-hidden ring-4 ring-[#B5111B]/10">
              <div className="absolute top-0 right-0 bg-[#B5111B] text-white text-[10px] font-black uppercase tracking-wider py-1 px-3.5 rounded-bl-xl shadow-xs">
                All-In-One Package
              </div>

              <div className="space-y-5">
                <div className="space-y-1.5">
                  <div className="text-xs font-black text-[#B5111B] uppercase tracking-wider">Complete Package</div>
                  <h3 className="text-lg font-bold text-slate-900">Combined Subscription & Report Plan</h3>
                  <p className="text-xs text-slate-500 leading-relaxed">Includes both Subscription (${subscriptionPrice}) + Report Generation (${reportPrice}).</p>
                </div>

                <div className="pt-2 border-t border-slate-100 space-y-1.5">
                  <div className="text-4xl font-black text-[#B5111B]">
                    ${bundlePrice}
                    <span className="text-xs font-semibold text-slate-400"> /Year</span>
                  </div>
                  <span className="inline-block text-[11px] font-bold text-[#B5111B] bg-red-50 px-3 py-1 rounded-lg border border-red-200/80">
                    ${subscriptionPrice} Subscription + ${reportPrice} Report
                  </span>
                </div>

                <ul className="space-y-3 pt-2 text-xs text-slate-700 font-medium">
                  <li className="flex items-center gap-2.5">
                    <Check className="w-4 h-4 text-[#B5111B] shrink-0" />
                    <span>Full Annual Platform Access ($149 Value)</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <Check className="w-4 h-4 text-[#B5111B] shrink-0" />
                    <span>Included Certified Report Plan ($99 Value)</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <Check className="w-4 h-4 text-[#B5111B] shrink-0" />
                    <span>ACH Debit Preferred & Net 30/60 Invoicing</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <Check className="w-4 h-4 text-[#B5111B] shrink-0" />
                    <span>HubSpot & Stripe Billing Integration</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <Check className="w-4 h-4 text-[#B5111B] shrink-0" />
                    <span>Priority Advisory Review & Support SLA</span>
                  </li>
                </ul>
              </div>

              <Link
                href="/login"
                className="w-full bg-[#B5111B] hover:bg-[#8F0D15] text-white font-extrabold text-xs sm:text-sm py-3.5 rounded-xl shadow-md transition-all text-center block cursor-pointer"
              >
                Buy Combined Bundle (${bundlePrice}/yr)
              </Link>
            </div>

          </div>

        </div>
      </section>

      {/* 7. CONSOLIDATED BOTTOM FOOTER */}
      <footer className="bg-white border-t border-slate-200 text-xs text-slate-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
          
          {/* Main Content Row */}
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            
            {/* Brand Logo & Tagline */}
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 text-center sm:text-left">
              <Link href="/" className="shrink-0">
                <img src="/logo.png" alt="Rose Associates" className="h-10 w-auto object-contain" />
              </Link>
              <p className="text-xs text-slate-500 leading-relaxed font-medium">
                Rose Associates Prosperity Builder Platform<br />
                • Kathleen Rose, CCIM, CRE • Davidson, NC.
              </p>
            </div>

            {/* Middle Quick Actions */}
            <div className="flex flex-wrap items-center justify-center gap-6 text-xs font-medium">
              
              {/* Visit Official Website */}
              <a 
                href="https://roseassociates.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-3 hover:text-[#B5111B] transition-colors group"
              >
                <div className="w-9 h-9 rounded-full bg-red-50 text-[#B5111B] flex items-center justify-center shrink-0 group-hover:bg-[#B5111B] group-hover:text-white transition-colors">
                  <Globe className="w-4 h-4" />
                </div>
                <div className="text-left">
                  <div className="font-bold text-slate-900 group-hover:text-[#B5111B] transition-colors flex items-center gap-1">
                    <span>Visit Official Website</span>
                    <ExternalLink className="w-3 h-3 text-slate-400" />
                  </div>
                  <div className="text-[11px] text-slate-400">roseassociates.com</div>
                </div>
              </a>

              {/* Client Login */}
              <Link 
                href="/login"
                className="flex items-center gap-3 hover:text-[#B5111B] transition-colors group"
              >
                <div className="w-9 h-9 rounded-full bg-red-50 text-[#B5111B] flex items-center justify-center shrink-0 group-hover:bg-[#B5111B] group-hover:text-white transition-colors">
                  <User className="w-4 h-4" />
                </div>
                <div className="text-left">
                  <div className="font-bold text-slate-900 group-hover:text-[#B5111B] transition-colors">
                    Client Login
                  </div>
                  <div className="text-[11px] text-slate-400">Access your account</div>
                </div>
              </Link>

              {/* Buy Subscription */}
              <Link 
                href="/login"
                className="flex items-center gap-3 hover:text-[#B5111B] transition-colors group"
              >
                <div className="w-9 h-9 rounded-full bg-red-50 text-[#B5111B] flex items-center justify-center shrink-0 group-hover:bg-[#B5111B] group-hover:text-white transition-colors">
                  <CreditCard className="w-4 h-4" />
                </div>
                <div className="text-left">
                  <div className="font-bold text-slate-900 group-hover:text-[#B5111B] transition-colors">
                    Buy Subscription
                  </div>
                  <div className="text-[11px] text-slate-400">View pricing plans</div>
                </div>
              </Link>

            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-2">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full border border-slate-200 hover:border-red-200 hover:bg-red-50 text-slate-500 hover:text-[#B5111B] flex items-center justify-center transition-colors"
                aria-label="LinkedIn"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
                </svg>
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full border border-slate-200 hover:border-red-200 hover:bg-red-50 text-slate-500 hover:text-[#B5111B] flex items-center justify-center transition-colors"
                aria-label="Twitter"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              <a
                href="mailto:info@roseassociates.com"
                className="w-8 h-8 rounded-full border border-slate-200 hover:border-red-200 hover:bg-red-50 text-slate-500 hover:text-[#B5111B] flex items-center justify-center transition-colors"
                aria-label="Email"
              >
                <Mail className="w-3.5 h-3.5" />
              </a>
            </div>

          </div>

          {/* Bottom Copyright & Back-to-Top Row */}
          <div className="pt-6 border-t border-slate-200/90 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-500">
            <div>
              &copy; {new Date().getFullYear()} Rose Associates. All rights reserved. Davidson, NC.
            </div>

            <div className="flex items-center gap-6">
              <span className="text-xs text-slate-500 font-medium">
                Verified Public & Government Data Sources
              </span>

              {/* Scroll to Top Trigger */}
              <button
                onClick={scrollToTop}
                className="w-9 h-9 rounded-full border border-slate-200 bg-white hover:bg-slate-50 hover:border-red-200 text-[#B5111B] flex items-center justify-center transition-all shadow-2xs cursor-pointer group"
                title="Back to Top"
                aria-label="Back to Top"
              >
                <ArrowUp className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
              </button>
            </div>
          </div>

        </div>
      </footer>

      {/* FLOATING BACK TO TOP BUTTON */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 p-3.5 rounded-full bg-[#B5111B] text-white shadow-xl hover:bg-[#8F0D15] hover:scale-110 active:scale-95 transition-all cursor-pointer border border-white/20 group"
          title="Back to Top"
          aria-label="Back to Top"
        >
          <ArrowUp className="w-5 h-5 group-hover:-translate-y-0.5 transition-transform" />
        </button>
      )}
    </div>
  )
}
