"use client"

import * as React from "react"
import { use } from "react"
import { AnalyticsDashboard } from "@/components/AnalyticsDashboard"

export default function ProjectAnalyticsPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params)
  
  return <AnalyticsDashboard projectId={id} />
}
