"use client"

import { redirect } from "next/navigation"
import * as React from "react"

export default function ReportShowcasePage() {
  React.useEffect(() => {
    redirect("/#report-showcase")
  }, [])

  return null
}
