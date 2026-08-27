# Prosperity Builder Scorecard — Next.js Frontend Web Application

> **Rose Associates Advisory Firm** — Strategic Real Estate & Economic Development Decision Platform

The **Prosperity Builder Scorecard** is an executive-grade web application built for **Rose Associates** (Kathleen Rose, CCIM, CRE). It transforms **90+ community data points** across 12 core development sections into actionable, measurable quality-of-life insights, action-vs-inaction projections, and certified scorecard PDF reports.

---

## 🌟 Key Features

* **Public Executive Landing Page (`/`)**:
  * Strategic advisory overview & interactive 6-sector faceted polygonal photo wheel with white accent rims.
  * Interactive 12-category scorecard audit explorer.
  * Real-time billing plan calculator displaying **Single Report Plan ($1,000)** & **Total All-In-One Plan ($1,800)** with explicit calculation breakdown (`$1,000 Report + $800 Subscription = $1,800 / Year`) and updated report capabilities.
* **Projects Control Center (`/projects`)**:
  * Full project lifecycle tracking with interactive stepper audit creation.
  * **"Load Sample Data" Engine**: Instant seeding of sample master plans (*Apex Tower Assessment*, *Hudson Yards District Vision 2026*, etc.).
* **Dynamic Matrix Scorecard Editor (`/projects/[id]`)**:
  * Multi-level hierarchy (Sections → Categories → Groups → Columns).
  * Real-time formula evaluator, conditional rule engine, and score calculation.
  * Executive PDF report generation with cryptographic timestamp & advisory verification seal.
* **Executive Analytics & Benchmarking (`/analytics`)**:
  * Interactive radar/spider charts, radial gauges, and multi-axis regional comparisons.
* **Platform Administration & Billing Settings (`/settings` & `/payments`)**:
  * Configurable scoring bands, custom section schemas, HubSpot / Stripe Standalone payment integration, and transaction audit tracking.

---

## 🚀 Tech Stack

* **Framework**: Next.js 15 (App Router, React 19, TypeScript)
* **Styling**: Tailwind CSS v4, Vanilla CSS utilities, Lucide React Icons
* **Data Visualization**: Recharts (Radar, Gauge, Area & Bar Charts)
* **State Management**: Zustand (`useAppStore`)
* **PDF Engine**: `html2canvas` + `jspdf`
* **Notifications**: `sonner` / Toast notifications

---

## 📁 Project Directory Structure

```
Rose Associates FE/
├── src/
│   ├── app/
│   │   ├── layout.tsx            # Root HTML & font layout
│   │   ├── page.tsx              # Public Executive Landing Page & Pricing
│   │   ├── login/                # Auth portal login
│   │   ├── dashboard/            # Executive overview dashboard
│   │   ├── projects/             # Projects list & stepper modal
│   │   │   └── [id]/             # Interactive Matrix Scorecard Editor
│   │   ├── analytics/            # Sector benchmarking & radar charts
│   │   ├── settings/             # System settings & admin pricing rates
│   │   └── payments/             # Payment transactions & invoice logs
│   ├── components/               # Reusable UI & Modal components
│   └── store/                    # Zustand global application state
├── public/                       # Assets, partner logos, sector imagery
└── README.md                     # Frontend documentation
```

---

## 🛠️ Getting Started

### 1. Prerequisites
- **Node.js**: v18.x or v20.x
- **npm**: v9.x or v10.x

### 2. Installation
```bash
# Navigate into the FE directory
cd "Rose Associates FE"

# Install dependencies
npm install
```

### 3. Running Development Server
Run the Next.js development server:
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser to view the frontend application.

---

## 📄 License & Attribution

Designed and developed for **Rose Associates Development & Advisory Firm** — Davidson, NC.
