"use client"

import { redirect } from "next/navigation"
import * as React from "react"

export default function ServicesPage() {
  React.useEffect(() => {
    redirect("/#services")
  }, [])

  return null
}
