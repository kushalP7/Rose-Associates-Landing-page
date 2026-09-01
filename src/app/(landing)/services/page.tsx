"use client"

import * as React from "react"
import { LandingHeader } from "@/components/landing/LandingHeader"
import { AdvisoryServicesSection } from "@/components/landing/AdvisoryServicesSection"
import { LandingFooter } from "@/components/landing/LandingFooter"

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans flex flex-col">
      <LandingHeader />
      <main className="flex-1 py-6">
        <AdvisoryServicesSection />
      </main>
      <LandingFooter />
    </div>
  )
}
