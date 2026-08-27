"use client"

import * as React from "react"
import { use } from "react"
import { useAppStore } from "@/store"
import { PieChart as PieChartIcon, Settings2, Hash, AlertCircle, Wallet, ShoppingCart, Users, DollarSign, Target, ArrowUpRight, ArrowDownRight, ChevronDown, MoreVertical, ShieldAlert, ShieldCheck, Siren, Map, Building2, Wrench, Activity, AlertTriangle, FileText, CheckCircle2, Shield, Flame, Crosshair, Bus, Palette, GraduationCap, Briefcase, ShoppingBag, Heart, Landmark, Home, Trees, Compass, Leaf, TrendingUp, Cpu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Modal } from "@/components/ui/modal"
import { evaluateWidgetData, calculateGaugeValue } from "@/lib/analyticsEngine"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, LineChart, Line, AreaChart, Area, RadarChart, Radar, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Legend, ComposedChart, Label } from 'recharts'

const COLORS = ['#6d0a10', '#b5111b', '#c44149', '#d37076', '#cccaca', '#888585', '#444242', '#222121'];

const SCORE_GRADIENT_STOPS: Array<{ pct: number; color: string }> = [
  { pct: 0, color: '#ef4444' },
  { pct: 0.35, color: '#f97316' },
  { pct: 0.7, color: '#f59e0b' },
  { pct: 1, color: '#22c55e' },
];

function hexToRgb(hex: string): [number, number, number] {
  const normalized = hex.replace('#', '');
  return [
    parseInt(normalized.substring(0, 2), 16),
    parseInt(normalized.substring(2, 4), 16),
    parseInt(normalized.substring(4, 6), 16),
  ];
}

function rgbToHex(r: number, g: number, b: number): string {
  const toHex = (n: number) => Math.round(Math.min(255, Math.max(0, n))).toString(16).padStart(2, '0');
  return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
}

function interpolateHexColor(from: string, to: string, t: number): string {
  const [r1, g1, b1] = hexToRgb(from);
  const [r2, g2, b2] = hexToRgb(to);
  return rgbToHex(r1 + (r2 - r1) * t, g1 + (g2 - g1) * t, b1 + (b2 - b1) * t);
}

function getScoreColor(score: number, max: number = 10): string {
  const t = Math.min(Math.max(score / max, 0), 1);
  for (let i = 0; i < SCORE_GRADIENT_STOPS.length - 1; i++) {
    const current = SCORE_GRADIENT_STOPS[i];
    const next = SCORE_GRADIENT_STOPS[i + 1];
    if (t >= current.pct && t <= next.pct) {
      const localT = (t - current.pct) / (next.pct - current.pct);
      return interpolateHexColor(current.color, next.color, localT);
    }
  }
  return SCORE_GRADIENT_STOPS[SCORE_GRADIENT_STOPS.length - 1].color;
}

function hexToRgba(hex: string, alpha: number): string {
  const [r, g, b] = hexToRgb(hex);
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-surface/90 backdrop-blur-md border border-border/50 p-3 rounded-xl shadow-xl ring-1 ring-black/5 animate-in fade-in zoom-in-95 duration-200">
        <p className="font-semibold text-foreground mb-2 text-sm">{label || 'Value'}</p>
        {payload.map((entry: any, index: number) => (
          <div key={index} className="flex items-center gap-3 text-sm">
            <div className="w-2.5 h-2.5 rounded-full shadow-sm" style={{ backgroundColor: entry.color || entry.fill }} />
            <span className="text-muted-foreground capitalize font-medium">{entry.name}:</span>
            <span className="font-bold text-foreground ml-auto">{Number(entry.value).toLocaleString(undefined, { maximumFractionDigits: 1 })}</span>
          </div>
        ))}
      </div>
    );
  }
  return null;
};

const getScoreCardTheme = (score: number) => {
  if (score >= 8.5) {
    return {
      cardBg: '#f0fdf4',
      cardBorder: '#bbf7d0',
      iconBg: '#15803d',
      iconBorder: '#166534',
      iconColor: '#ffffff',
      titleColor: '#14532d',
      scoreColor: '#15803d',
      scaleColor: '#166534',
    }
  }
  if (score >= 7.0) {
    return {
      cardBg: '#f7fee7',
      cardBorder: '#d9f99d',
      iconBg: '#4d7c0f',
      iconBorder: '#3f6212',
      iconColor: '#ffffff',
      titleColor: '#365314',
      scoreColor: '#4d7c0f',
      scaleColor: '#3f6212',
    }
  }
  if (score >= 5.5) {
    return {
      cardBg: '#fffbeb',
      cardBorder: '#fef08a',
      iconBg: '#d97706',
      iconBorder: '#b45309',
      iconColor: '#ffffff',
      titleColor: '#713f12',
      scoreColor: '#a16207',
      scaleColor: '#854d0e',
    }
  }
  if (score >= 4.0) {
    return {
      cardBg: '#fff7ed',
      cardBorder: '#fed7aa',
      iconBg: '#ea580c',
      iconBorder: '#c2410c',
      iconColor: '#ffffff',
      titleColor: '#7c2d12',
      scoreColor: '#c2410c',
      scaleColor: '#9a3412',
    }
  }
  return {
    cardBg: '#fef2f2',
    cardBorder: '#fecaca',
    iconBg: '#dc2626',
    iconBorder: '#b91c1c',
    iconColor: '#ffffff',
    titleColor: '#7f1d1d',
    scoreColor: '#b91c1c',
    scaleColor: '#991b1b',
  }
}

export function AnalyticsDashboard({ projectId }: { projectId: string }) {
  const { projects, widgets, templates, toggleProjectWidget, updateDashboardLayout } = useAppStore()
  const [isConfigOpen, setIsConfigOpen] = React.useState(false)
  const [hoveredRoseSlice, setHoveredRoseSlice] = React.useState<{ widgetId: string; name: string; value: number; percent: string; color: string; x: number; y: number } | null>(null)

  const project = projects.find(p => p.id === projectId)


  if (!project) return <div className="p-8">Project not found</div>

  const enabledWidgets = widgets.filter(w => project.enabledWidgets?.includes(w.id))
  const statCards = enabledWidgets.filter(w => w.chartType === 'stat_card');
  const otherChartsRaw = enabledWidgets.filter(w => w.chartType !== 'stat_card');

  const sectionScores = statCards.map(widget => {
    const data = evaluateWidgetData(widget, project, templates);
    let totalClient = 0;
    let totalHighest = 0;
    let hasBoth = false;
    data.forEach((dp: any) => {
      if (typeof dp['Client Total Score'] === 'number' && typeof dp['Highest Score'] === 'number') {
        totalClient += dp['Client Total Score'];
        totalHighest += dp['Highest Score'];
        hasBoth = true;
      }
    });
    const finalScore = hasBoth && totalHighest > 0 ? (totalClient / totalHighest) * 10 : (data[0]?.value || 0);
    return {
      name: widget.title.replace(' Score', '').trim(),
      score: Number(finalScore.toFixed(1))
    };
  });

  const overallScore = sectionScores.length > 0
    ? sectionScores.reduce((a, b) => a + b.score, 0) / sectionScores.length
    : 0;

  const statCardsSortedByScore = statCards
    .map((widget, index) => ({ widget, score: sectionScores[index]?.score ?? 0 }))
    .sort((a, b) => b.score - a.score);

  const overallGaugeWidget = {
    id: 'overall-gauge',
    title: 'Overall Score',
    chartType: 'speed_gauge',
    categoryId: 'none',
    aggregation: 'none'
  } as any;
  const otherChartsWithData = otherChartsRaw.map(widget => ({
    widget,
    data: evaluateWidgetData(widget, project, templates)
  }));

  // Standard category section ordering
  const CATEGORY_ORDER = [
    'Accessibility & Transportation',
    'Arts & Culture',
    'Crime & Public Safety',
    'Education',
    'Employment & Labor',
    'Goods & Services',
    'Healthcare & Wellness',
    'Historic Preservation',
    'Housing',
    'Infrastructure',
    'Open Space & Recreation',
    'Planning & Land Use',
  ];

  const getCategoryFromTitle = (title: string) => {
    for (const cat of CATEGORY_ORDER) {
      if (title.toLowerCase().includes(cat.toLowerCase())) {
        return cat;
      }
    }
    return 'Other';
  };

  const groupedCategoryCharts = React.useMemo(() => {
    const charts = [...otherChartsWithData];
    return charts.sort((a, b) => {
      const catA = getCategoryFromTitle(a.widget.title);
      const catB = getCategoryFromTitle(b.widget.title);

      const indexA = CATEGORY_ORDER.indexOf(catA);
      const indexB = CATEGORY_ORDER.indexOf(catB);

      const posA = indexA !== -1 ? indexA : 999;
      const posB = indexB !== -1 ? indexB : 999;

      if (posA !== posB) {
        return posA - posB;
      }

      // Within same category, put 'Value Overview' first, then 'Score Breakdown'
      const isOverviewA = a.widget.title.includes('Overview');
      const isOverviewB = b.widget.title.includes('Overview');

      if (isOverviewA && !isOverviewB) return -1;
      if (!isOverviewA && isOverviewB) return 1;

      return a.widget.title.localeCompare(b.widget.title);
    });
  }, [otherChartsWithData]);

  const renderWidget = (widget: any) => {
    const data = evaluateWidgetData(widget, project, templates)

    if (data.length === 0) {
      return (
        <div className="h-[200px] flex flex-col items-center justify-center text-muted-foreground bg-muted/20 rounded-md border border-dashed">
          <AlertCircle className="h-6 w-6 mb-2 opacity-50" />
          <span className="text-sm">No data available</span>
        </div>
      )
    }

    const getWidgetTheme = (title: string) => {
      const lower = title.toLowerCase();

      if (lower.includes('accessibility') || lower.includes('transportation')) {
        return { icon: Bus, color: '#3b82f6', bg: 'bg-blue-500/10 text-blue-600 border-blue-500/20' };
      }
      if (lower.includes('arts') || lower.includes('culture')) {
        return { icon: Palette, color: '#8b5cf6', bg: 'bg-purple-500/10 text-purple-600 border-purple-500/20' };
      }
      if (lower.includes('crime') || lower.includes('safety')) {
        return { icon: Siren, color: '#ef4444', bg: 'bg-red-500/10 text-red-600 border-red-500/20' };
      }
      if (lower.includes('education')) {
        return { icon: GraduationCap, color: '#6366f1', bg: 'bg-indigo-500/10 text-indigo-600 border-indigo-500/20' };
      }
      if (lower.includes('employment') || lower.includes('labor')) {
        return { icon: Briefcase, color: '#f59e0b', bg: 'bg-amber-500/10 text-amber-600 border-amber-500/20' };
      }
      if (lower.includes('goods') || lower.includes('services')) {
        return { icon: ShoppingBag, color: '#10b981', bg: 'bg-emerald-500/10 text-emerald-600 border-emerald-500/20' };
      }
      if (lower.includes('healthcare') || lower.includes('wellness')) {
        return { icon: Heart, color: '#ec4899', bg: 'bg-rose-500/10 text-rose-600 border-rose-500/20' };
      }
      if (lower.includes('historic') || lower.includes('preservation')) {
        return { icon: Landmark, color: '#06b6d4', bg: 'bg-cyan-500/10 text-cyan-600 border-cyan-500/20' };
      }
      if (lower.includes('housing')) {
        return { icon: Home, color: '#2563eb', bg: 'bg-sky-500/10 text-sky-600 border-sky-500/20' };
      }
      if (lower.includes('infrastructure')) {
        return { icon: Building2, color: '#f97316', bg: 'bg-orange-500/10 text-orange-600 border-orange-500/20' };
      }
      if (lower.includes('open space') || lower.includes('recreation')) {
        return { icon: Trees, color: '#16a34a', bg: 'bg-green-500/10 text-green-600 border-green-500/20' };
      }
      if (lower.includes('planning') || lower.includes('land use')) {
        return { icon: Map, color: '#7c3aed', bg: 'bg-violet-500/10 text-violet-600 border-violet-500/20' };
      }
      if (lower.includes('sustainability') || lower.includes('environment')) {
        return { icon: Leaf, color: '#10b981', bg: 'bg-emerald-500/10 text-emerald-600 border-emerald-500/20' };
      }
      if (lower.includes('economic') || lower.includes('vitality') || lower.includes('growth')) {
        return { icon: TrendingUp, color: '#f59e0b', bg: 'bg-amber-500/10 text-amber-600 border-amber-500/20' };
      }
      if (lower.includes('digital') || lower.includes('smart city')) {
        return { icon: Cpu, color: '#06b6d4', bg: 'bg-cyan-500/10 text-cyan-600 border-cyan-500/20' };
      }
      if (lower.includes('community') || lower.includes('equity')) {
        return { icon: Users, color: '#ec4899', bg: 'bg-rose-500/10 text-rose-600 border-rose-500/20' };
      }

      const themes = [
        { icon: Target, color: '#b5111a', bg: 'bg-red-500/10 text-red-600 border-red-500/20' },
        { icon: Wallet, color: '#6366f1', bg: 'bg-indigo-500/10 text-indigo-600 border-indigo-500/20' },
        { icon: ShoppingCart, color: '#3b82f6', bg: 'bg-blue-500/10 text-blue-600 border-blue-500/20' },
        { icon: Users, color: '#10b981', bg: 'bg-emerald-500/10 text-emerald-600 border-emerald-500/20' },
        { icon: DollarSign, color: '#f59e0b', bg: 'bg-amber-500/10 text-amber-600 border-amber-500/20' },
        { icon: PieChartIcon, color: '#8b5cf6', bg: 'bg-purple-500/10 text-purple-600 border-purple-500/20' },
        { icon: Activity, color: '#ec4899', bg: 'bg-rose-500/10 text-rose-600 border-rose-500/20' }
      ];
      let hash = 0;
      for (let i = 0; i < title.length; i++) {
        hash = title.charCodeAt(i) + ((hash << 5) - hash);
      }
      return themes[Math.abs(hash) % themes.length];
    }

    const theme = getWidgetTheme(widget.title || "");
    const ThemeIcon = theme.icon;

    const getPreciseSectionScoreOutOf10 = (originalVal: number) => {
      if (!widget.categoryId && data.length > 0) {
        let totalClient = 0;
        let totalHighest = 0;
        let hasBoth = false;
        data.forEach((dp: any) => {
          if (typeof dp['Client Total Score'] === 'number' && typeof dp['Highest Score'] === 'number') {
            totalClient += dp['Client Total Score'];
            totalHighest += dp['Highest Score'];
            hasBoth = true;
          }
        });
        if (hasBoth && totalHighest > 0) {
          return Math.min(10, (totalClient / totalHighest) * 10);
        }
      }
      return Math.min(10, originalVal);
    };

    if (widget.chartType === 'stat_card') {
      let val = calculateGaugeValue(data, widget.aggregation);
      val = getPreciseSectionScoreOutOf10(val);

      const cleanTitle = widget.title.endsWith(' Score') ? widget.title.slice(0, -6) : widget.title;
      const cardTheme = getScoreCardTheme(val);

      return (
        <div className="flex flex-col w-full h-full min-w-0 overflow-hidden justify-between gap-3">
          {/* Top Row: Icon Box with Fill & Score */}
          <div className="flex items-center justify-between w-full min-w-0">
            <div
              className="p-2.5 rounded-xl border shrink-0 flex items-center justify-center shadow-2xs"
              style={{
                backgroundColor: cardTheme.iconBg,
                color: cardTheme.iconColor,
                borderColor: cardTheme.iconBorder,
              }}
            >
              <ThemeIcon className="h-5 w-5" />
            </div>
            <div className="flex items-baseline gap-0.5">
              <span className="text-xl sm:text-2xl font-black tracking-tight leading-none" style={{ color: cardTheme.scoreColor }}>
                {val.toLocaleString(undefined, { maximumFractionDigits: 1 })}
              </span>
              <span className="text-xs font-extrabold ml-0.5" style={{ color: cardTheme.scaleColor }}>/ 10</span>
            </div>
          </div>

          {/* Bottom Row: Uppercase Title */}
          <span className="mt-2 text-xs font-black uppercase tracking-wider leading-tight line-clamp-2 break-words" style={{ color: cardTheme.titleColor }}>
            {cleanTitle}
          </span>
        </div>
      )
    }

    if (widget.chartType === 'speed_gauge') {
      let val = calculateGaugeValue(data, widget.aggregation);
      val = getPreciseSectionScoreOutOf10(val);

      const maxVal = 10;
      const normalizedVal = Math.min(Math.max(val, 0), maxVal);
      const rotation = -90 + (normalizedVal / maxVal) * 180;
      const gradId = `gaugeGrad_${widget.id}`;

      return (
        <div className="h-[280px] w-full flex flex-col items-center justify-center relative p-2">
          <svg viewBox="0 0 200 155" className="w-full h-full max-h-[250px]">
            <defs>
              <linearGradient id={gradId} x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#ef4444" />
                <stop offset="40%" stopColor="#f97316" />
                <stop offset="70%" stopColor="#f59e0b" />
                <stop offset="100%" stopColor="#22c55e" />
              </linearGradient>
            </defs>

            {/* Background Arc */}
            <path
              d="M 25 90 A 75 75 0 0 1 175 90"
              fill="none"
              stroke="#f1f5f9"
              strokeWidth="18"
              strokeLinecap="round"
            />

            {/* Gradient Gauge Arc */}
            <path
              d="M 25 90 A 75 75 0 0 1 175 90"
              fill="none"
              stroke={`url(#${gradId})`}
              strokeWidth="18"
              strokeLinecap="round"
            />

            {/* Needle */}
            <g transform={`rotate(${rotation}, 100, 90)`} className="transition-transform duration-1000 ease-out">
              <path d="M 97.5 90 L 100 24 L 102.5 90 Z" fill="#1f2937" />
              <circle cx="100" cy="90" r="7" fill="#1f2937" />
              <circle cx="100" cy="90" r="3" fill="#ffffff" />
            </g>

            {/* Score Text Positioned Cleanly Below Pivot */}
            <text x="100" y="132" textAnchor="middle" className="text-4xl font-black fill-foreground font-sans drop-shadow-sm">
              {val.toLocaleString(undefined, { maximumFractionDigits: 1 })}
              <tspan fontSize="16" fill="#64748b" fontWeight="600" dx="4">/ 10</tspan>
            </text>
          </svg>
        </div>
      )
    }

    if (widget.chartType === 'bar_chart') {
      const isComposed = widget.title?.includes('Healthcare') || widget.title?.includes('Accessibility') || widget.title?.includes('Open Space & Recreation Score Breakdown');
      const isHorizontal = widget.title?.includes('Infrastructure');
      const isKeyServices = widget.title?.includes('Key Services');

      if (isKeyServices) {
        return (
          <div className="h-[280px] w-full grid grid-cols-2 gap-3 mt-4">
            <div className="flex items-center gap-3 p-3 bg-muted/20 rounded-xl border border-border/40">
              <div className="p-2 bg-blue-100 text-blue-600 rounded-lg"><Shield className="w-5 h-5" /></div>
              <div className="flex-1"><span className="text-[10px] text-muted-foreground uppercase tracking-wider font-semibold">Police Response</span><div className="flex justify-between items-end mt-0.5"><span className="font-bold text-lg">118</span><span className="text-[10px] font-bold text-emerald-500">↑ 6.5%</span></div></div>
            </div>
            <div className="flex items-center gap-3 p-3 bg-muted/20 rounded-xl border border-border/40">
              <div className="p-2 bg-rose-100 text-rose-600 rounded-lg"><Flame className="w-5 h-5" /></div>
              <div className="flex-1"><span className="text-[10px] text-muted-foreground uppercase tracking-wider font-semibold">Fire Incidents</span><div className="flex justify-between items-end mt-0.5"><span className="font-bold text-lg">96</span><span className="text-[10px] font-bold text-rose-500">↓ 4.3%</span></div></div>
            </div>
            <div className="flex items-center gap-3 p-3 bg-muted/20 rounded-xl border border-border/40">
              <div className="p-2 bg-indigo-100 text-indigo-600 rounded-lg"><Wrench className="w-5 h-5" /></div>
              <div className="flex-1"><span className="text-[10px] text-muted-foreground uppercase tracking-wider font-semibold">EMS Calls</span><div className="flex justify-between items-end mt-0.5"><span className="font-bold text-lg">104</span><span className="text-[10px] font-bold text-emerald-500">↑ 9.2%</span></div></div>
            </div>
            <div className="flex items-center gap-3 p-3 bg-muted/20 rounded-xl border border-border/40">
              <div className="p-2 bg-purple-100 text-purple-600 rounded-lg"><FileText className="w-5 h-5" /></div>
              <div className="flex-1"><span className="text-[10px] text-muted-foreground uppercase tracking-wider font-semibold">Code Violations</span><div className="flex justify-between items-end mt-0.5"><span className="font-bold text-lg">74</span><span className="text-[10px] font-bold text-emerald-500">↑ 2.1%</span></div></div>
            </div>
            <div className="flex items-center gap-3 p-3 bg-muted/20 rounded-xl border border-border/40">
              <div className="p-2 bg-emerald-100 text-emerald-600 rounded-lg"><CheckCircle2 className="w-5 h-5" /></div>
              <div className="flex-1"><span className="text-[10px] text-muted-foreground uppercase tracking-wider font-semibold">Permits Issued</span><div className="flex justify-between items-end mt-0.5"><span className="font-bold text-lg">215</span><span className="text-[10px] font-bold text-emerald-500">↑ 7.8%</span></div></div>
            </div>
            <div className="flex items-center gap-3 p-3 bg-muted/20 rounded-xl border border-border/40">
              <div className="p-2 bg-amber-100 text-amber-600 rounded-lg"><Crosshair className="w-5 h-5" /></div>
              <div className="flex-1"><span className="text-[10px] text-muted-foreground uppercase tracking-wider font-semibold">Inspections</span><div className="flex justify-between items-end mt-0.5"><span className="font-bold text-lg">132</span><span className="text-[10px] font-bold text-emerald-500">↑ 3.7%</span></div></div>
            </div>
          </div>
        )
      }


      if (isComposed) {
        // Use the official Overall Trend data from seed file if available, otherwise fallback to artificial trajectory
        const composedDataWithTrend = data.map((d: any, i) => {
          const baseValue = Number(d['Client Total Score']) || Number(d['value']) || 5;
          const progressiveBoost = (i * 2.2) + (baseValue * 1.1);

          return {
            ...d,
            trendline: d['Overall Trend'] !== undefined ? Number(d['Overall Trend']) : parseFloat(progressiveBoost.toFixed(1))
          };
        });

        return (
          <div className="flex-1 w-full min-h-[260px] flex flex-col mt-4">
            <ResponsiveContainer width="100%" height="100%">
              <ComposedChart data={composedDataWithTrend} margin={{ top: 10, right: 15, left: -5, bottom: 20 }}>
                <defs>
                  <linearGradient id={`barGradComposed_${widget.id}`} x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0%" stopColor="#b5111b" />
                    <stop offset="50%" stopColor="#d37076" />
                    <stop offset="100%" stopColor="#666464" />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e5e7eb" opacity={0.3} />
                <XAxis dataKey="name" tick={{ fontSize: 11, fill: '#6b7280' }} tickLine={false} axisLine={false} interval={0} angle={-45} textAnchor="end" height={60} />
                <YAxis tick={{ fontSize: 11, fill: '#6b7280' }} tickLine={false} axisLine={false} />
                <Tooltip cursor={{ fill: 'rgba(0,0,0,0.04)' }} content={<CustomTooltip />} />
                <Legend verticalAlign="top" height={36} iconType="circle" iconSize={8} wrapperStyle={{ fontSize: '12px', fontWeight: 500, color: '#4b5563' }} />
                {Object.keys(composedDataWithTrend[0] || {}).filter(k => k !== 'name' && k !== 'value' && k !== 'trendline' && k !== 'Overall Trend').length > 0 ? (
                  Object.keys(composedDataWithTrend[0] || {}).filter(k => k !== 'name' && k !== 'value' && k !== 'trendline' && k !== 'Overall Trend').map((key, index) => {
                    const colors = ['#b5111b', '#c44149', '#d37076', '#888585', '#666464', '#222121',];
                    return <Bar key={key} name={key} dataKey={key} fill={colors[index % colors.length]} radius={[4, 4, 0, 0]} animationDuration={1500} maxBarSize={40} />
                  })
                ) : (
                  <Bar name="Value" dataKey="value" fill={`url(#barGradComposed_${widget.id})`} radius={[4, 4, 0, 0]} animationDuration={1500} maxBarSize={40} />
                )}
                <Line name="Overall Trend" type="monotone" dataKey="trendline" stroke="#1f2937" strokeWidth={2} dot={{ r: 4, fill: '#1f2937' }} />
              </ComposedChart>
            </ResponsiveContainer>
          </div>
        )
      }

      if (isHorizontal) {
        return (
          <div className="flex-1 w-full min-h-[260px] flex flex-col mt-4">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart layout="vertical" data={data} margin={{ top: 10, right: 20, left: 10, bottom: 0 }}>
                <defs>
                  <linearGradient id={`barGradHoriz_${widget.id}`} x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0%" stopColor="#b5111b" />
                    <stop offset="50%" stopColor="#d37076" />
                    <stop offset="100%" stopColor="#666464" />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" horizontal={false} stroke="#e5e7eb" opacity={0.3} />
                <XAxis type="number" tick={{ fontSize: 11, fill: '#6b7280' }} tickLine={false} axisLine={false} />
                <YAxis type="category" dataKey="name" tick={{ fontSize: 11, fill: '#4b5563', fontWeight: 500 }} tickLine={false} axisLine={false} width={100} />
                <Tooltip cursor={{ fill: 'rgba(0,0,0,0.04)' }} content={<CustomTooltip />} />
                {Object.keys(data[0] || {}).filter(k => k !== 'name' && k !== 'value').length > 0 ? (
                  Object.keys(data[0] || {}).filter(k => k !== 'name' && k !== 'value').map((key, index) => {
                    // const colors = ['#6d0a10', '#b5111b', '#c44149', '#d37076', '#cccaca', '#888585', '#444242', '#222121'];
                    const colors = ['#b5111b', '#c44149', '#d37076', '#888585', '#666464', '#222121',];

                    return <Bar key={key} name={key} dataKey={key} fill={colors[index % colors.length]} radius={[0, 4, 4, 0]} animationDuration={1500} maxBarSize={12} />
                  })
                ) : (
                  <Bar name="Value" dataKey="value" fill={`url(#barGradHoriz_${widget.id})`} radius={[0, 4, 4, 0]} animationDuration={1500} maxBarSize={12} />
                )}
              </BarChart>
            </ResponsiveContainer>
          </div>
        )
      }

      return (
        <div className="flex-1 w-full min-h-[260px] flex flex-col mt-4">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data} margin={{ top: 10, right: 15, left: -5, bottom: 20 }}>
              <defs>
                <linearGradient id={`barGradDefault_${widget.id}`} x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="#b5111b" />
                  <stop offset="50%" stopColor="#d37076" />
                  <stop offset="100%" stopColor="#666464" />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e5e7eb" opacity={0.3} />
              <XAxis dataKey="name" tick={{ fontSize: 11, fill: '#6b7280' }} tickLine={false} axisLine={false} interval={0} angle={-45} textAnchor="end" height={60} />
              <YAxis tick={{ fontSize: 11, fill: '#6b7280' }} tickLine={false} axisLine={false} />
              <Tooltip cursor={{ fill: 'rgba(0,0,0,0.04)' }} content={<CustomTooltip />} />
              <Legend verticalAlign="top" height={36} iconType="circle" iconSize={8} wrapperStyle={{ fontSize: '12px', fontWeight: 500, color: '#4b5563' }} />
              {Object.keys(data[0] || {}).filter(k => k !== 'name' && k !== 'value').length > 0 ? (
                Object.keys(data[0] || {}).filter(k => k !== 'name' && k !== 'value').map((key, index) => {
                  const colors = ['#6d0a10', '#b5111b', '#c44149', '#d37076', '#cccaca', '#888585', '#444242', '#222121'];
                  return <Bar key={key} name={key} dataKey={key} fill={colors[index % colors.length]} radius={[4, 4, 0, 0]} animationDuration={1500} animationEasing="ease-out" maxBarSize={20} />
                })
              ) : (
                <Bar name="Value" dataKey="value" fill={`url(#barGradDefault_${widget.id})`} radius={[4, 4, 0, 0]} animationDuration={1500} animationEasing="ease-out" maxBarSize={40} />
              )}
            </BarChart>
          </ResponsiveContainer>
        </div>
      )
    }

    if (widget.chartType === 'line_chart') {
      return (
        <div className="flex-1 w-full min-h-[260px] flex flex-col mt-4">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data} margin={{ top: 10, right: 15, left: -5, bottom: 20 }}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e5e7eb" opacity={0.3} />
              <XAxis dataKey="name" tick={{ fontSize: 11, fill: '#6b7280' }} tickLine={false} axisLine={false} interval={0} angle={-45} textAnchor="end" height={60} />
              <YAxis tick={{ fontSize: 11, fill: '#6b7280' }} tickLine={false} axisLine={false} />
              <Tooltip content={<CustomTooltip />} cursor={{ stroke: '#cbd5e1', strokeWidth: 1, strokeDasharray: '4 4' }} />
              <Legend verticalAlign="top" height={36} iconType="circle" iconSize={8} wrapperStyle={{ fontSize: '12px', fontWeight: 500, color: '#4b5563' }} />
              {Object.keys(data[0] || {}).filter(k => k !== 'name' && k !== 'value').length > 0 ? (
                Object.keys(data[0] || {}).filter(k => k !== 'name' && k !== 'value').map((key, index) => {
                  const colors = ['#6d0a10', '#b5111b', '#c44149', '#d37076', '#cccaca', '#888585', '#444242', '#222121'];
                  const color = colors[index % colors.length];
                  return <Line key={key} name={key} type="monotone" dataKey={key} stroke={color} strokeWidth={3} dot={{ r: 4, fill: color, strokeWidth: 2, stroke: '#fff' }} activeDot={{ r: 6, strokeWidth: 0, fill: color }} animationDuration={1500} animationEasing="ease-out" />
                })
              ) : (
                <Line name="Value" type="monotone" dataKey="value" stroke={theme.color} strokeWidth={3} dot={{ r: 4, fill: theme.color, strokeWidth: 2, stroke: '#fff' }} activeDot={{ r: 6, strokeWidth: 0, fill: theme.color }} animationDuration={1500} animationEasing="ease-out" />
              )}
            </LineChart>
          </ResponsiveContainer>
        </div>
      )
    }

    if (widget.chartType === 'pie_chart' || widget.chartType === 'donut_chart') {
      const isDonut = widget.chartType === 'donut_chart';
      const total = data.reduce((sum, d) => sum + Number(d.value), 0);

      const renderLegend = (props: any) => {
        const { payload } = props;
        return (
          <div className="flex flex-wrap items-center justify-center gap-x-2 gap-y-1.5 pt-1 px-1 w-full">
            {payload.map((entry: any, index: number) => {
              const val = entry.payload.value;
              const pct = total > 0 ? ((val / total) * 100).toFixed(0) : '0';
              return (
                <div key={`item-${index}`} className="flex items-center gap-1.5 text-xs bg-muted/20 px-2 py-0.5 rounded-md border border-border/30 max-w-full">
                  <span className="w-2 h-2 rounded-full shrink-0" style={{ backgroundColor: entry.color }}></span>
                  <span className="text-muted-foreground font-medium text-[11px] truncate max-w-[120px]" title={entry.value}>{entry.value}</span>
                  <span className="font-bold text-foreground text-[11px] shrink-0">{pct}%</span>
                  <span className="text-muted-foreground text-[10px] shrink-0">({val.toLocaleString('en-US')})</span>
                </div>
              );
            })}
          </div>
        );
      }

      return (
        <div className="flex-1 w-full min-h-[320px] flex flex-col items-center justify-center relative mt-1">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart margin={{ top: 10, right: 0, left: 0, bottom: 0 }}>
              <Pie
                data={data}
                cx="50%"
                cy="46%"
                innerRadius={isDonut ? 65 : 0}
                outerRadius={isDonut ? 95 : 98}
                fill="#8884d8"
                dataKey="value"
                paddingAngle={isDonut ? 2 : 0}
                stroke="none"
                strokeWidth={0}
                animationDuration={1000}
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
                {isDonut && (
                  <Label
                    content={({ viewBox }) => {
                      const { cx, cy } = viewBox as any;
                      return (
                        <g>
                          <text x={cx} y={cy - 6} textAnchor="middle" dominantBaseline="central" className="text-[10px] fill-muted-foreground font-semibold uppercase tracking-wider font-sans">
                            TOTAL
                          </text>
                          <text x={cx} y={cy + 8} textAnchor="middle" dominantBaseline="central" className="text-xl font-black fill-foreground font-sans">
                            {total.toLocaleString('en-US')}
                          </text>
                        </g>
                      );
                    }}
                  />
                )}
              </Pie>
              <Tooltip content={<CustomTooltip />} />
              <Legend content={renderLegend} verticalAlign="bottom" align="center" wrapperStyle={{ width: '100%', paddingBottom: '0px' }} />
            </PieChart>
          </ResponsiveContainer>
        </div>
      )
    }

    if (widget.chartType === 'rose_chart' || widget.chartType === 'polar_pie' || widget.title === 'Planning & Land Use Overview') {
      const sliceData = data.slice(0, 5);
      const totalCount = sliceData.length;
      if (totalCount === 0) return null;

      const totalSum = sliceData.reduce((sum, item) => sum + (Number(item.value) || 0), 0);
      const maxVal = Math.max(...sliceData.map(d => Number(d.value) || 1));
      const minRadius = 55;
      const maxRadius = 122;
      const innerRadius = 26;
      const cx = 150;
      const cy = 138;
      const gapDeg = 5;

      const colors = [
        ['#6d0a10', '#b5111b'], // Dark Red to Red
        ['#b5111b', '#c44149'], // Red to Light Red
        ['#c44149', '#d37076'], // Light Red to Rose
        ['#cccaca', '#888585'], // Light Gray to Gray
        ['#888585', '#444242'], // Gray to Dark Gray
        ['#444242', '#222121']  // Dark Gray to Black Slate
      ];

      return (
        <div className="h-[290px] w-full flex flex-col items-center justify-center relative mt-1 select-none">
          <svg viewBox="0 0 300 276" className="w-full h-full max-h-[285px] relative z-10">
            <defs>
              {colors.map((c, i) => (
                <linearGradient key={`roseGrad_${widget.id}_${i}`} id={`roseGrad_${widget.id}_${i}`} x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor={c[0]} />
                  <stop offset="100%" stopColor={c[1]} />
                </linearGradient>
              ))}
              <filter id={`roseShadow_${widget.id}`} x="-20%" y="-20%" width="140%" height="140%">
                <feDropShadow dx="0" dy="6" stdDeviation="6" floodColor="#0f172a" floodOpacity="0.22" />
              </filter>
            </defs>

            {/* Background Axis Guide Lines */}
            <circle cx={cx} cy={cy} r={maxRadius} fill="none" stroke="#e2e8f0" strokeWidth="1" strokeDasharray="3 3" opacity="0.6" />
            <circle cx={cx} cy={cy} r={minRadius + (maxRadius - minRadius) * 0.5} fill="none" stroke="#e2e8f0" strokeWidth="1" strokeDasharray="3 3" opacity="0.4" />

            {sliceData.map((d, i) => {
              const val = Number(d.value) || 0;
              const normalizedRatio = val / maxVal;
              const r = minRadius + normalizedRatio * (maxRadius - minRadius);

              const startDeg = (i * 360) / totalCount - 90 + gapDeg / 2;
              const endDeg = ((i + 1) * 360) / totalCount - 90 - gapDeg / 2;
              const midDeg = (startDeg + endDeg) / 2;

              const startRad = (startDeg * Math.PI) / 180;
              const endRad = (endDeg * Math.PI) / 180;
              const midRad = (midDeg * Math.PI) / 180;

              const x_o1 = cx + r * Math.cos(startRad);
              const y_o1 = cy + r * Math.sin(startRad);
              const x_o2 = cx + r * Math.cos(endRad);
              const y_o2 = cy + r * Math.sin(endRad);

              const x_i2 = cx + innerRadius * Math.cos(endRad);
              const y_i2 = cy + innerRadius * Math.sin(endRad);
              const x_i1 = cx + innerRadius * Math.cos(startRad);
              const y_i1 = cy + innerRadius * Math.sin(startRad);

              const largeArcFlag = endDeg - startDeg > 180 ? 1 : 0;

              const pathD = `M ${x_o1} ${y_o1} A ${r} ${r} 0 ${largeArcFlag} 1 ${x_o2} ${y_o2} L ${x_i2} ${y_i2} A ${innerRadius} ${innerRadius} 0 ${largeArcFlag} 0 ${x_i1} ${y_i1} Z`;

              // Label position inside slice arc
              const r_txt = innerRadius + (r - innerRadius) * 0.55;
              const x_txt = cx + r_txt * Math.cos(midRad);
              const y_txt = cy + r_txt * Math.sin(midRad);

              const pct = totalSum > 0 ? ((val / totalSum) * 100).toFixed(0) : '0';
              const isHovered = hoveredRoseSlice?.widgetId === widget.id && hoveredRoseSlice?.name === d.name;

              return (
                <g
                  key={`rose_slice_${i}`}
                  className="cursor-pointer transition-all duration-300"
                  filter={`url(#roseShadow_${widget.id})`}
                  onMouseEnter={() => setHoveredRoseSlice({
                    widgetId: widget.id,
                    name: d.name,
                    value: val,
                    percent: pct,
                    color: colors[i % colors.length][0],
                    x: x_txt,
                    y: y_txt
                  })}
                  onMouseLeave={() => setHoveredRoseSlice(null)}
                >
                  <path
                    d={pathD}
                    fill={`url(#roseGrad_${widget.id}_${i % colors.length})`}
                    stroke="#ffffff"
                    strokeWidth={isHovered ? "3" : "2"}
                    className="transition-all duration-300"
                    style={{
                      transform: isHovered ? 'scale(1.05)' : 'scale(1)',
                      transformOrigin: `${cx}px ${cy}px`,
                      filter: isHovered ? 'brightness(1.1)' : 'none'
                    }}
                  />

                  {/* Slice Number or Score on Hover */}
                  <text
                    x={x_txt}
                    y={y_txt - 7}
                    textAnchor="middle"
                    dominantBaseline="central"
                    className="fill-white font-black text-base drop-shadow-md font-sans pointer-events-none tracking-tight transition-all duration-300"
                  >
                    {isHovered ? val.toLocaleString(undefined, { maximumFractionDigits: 1 }) : `0${i + 1}`}
                  </text>

                  {/* Slice Title */}
                  <text
                    x={x_txt}
                    y={y_txt + 8}
                    textAnchor="middle"
                    dominantBaseline="central"
                    className="fill-white/90 font-bold text-[9.5px] drop-shadow-sm font-sans pointer-events-none tracking-tight"
                  >
                    {d.name.length > 9 ? `${d.name.slice(0, 9)}.` : d.name}
                  </text>
                </g>
              );
            })}
          </svg>

          {/* Interactive Floating Hover Popover Tooltip */}
          {hoveredRoseSlice && hoveredRoseSlice.widgetId === widget.id && (
            <div
              className="absolute z-[100] pointer-events-none transition-all duration-200 ease-out transform -translate-x-1/2 -translate-y-full mb-3"
              style={{
                left: `${Math.min(Math.max((hoveredRoseSlice.x / 300) * 100, 18), 82)}%`,
                top: `${Math.min(Math.max((hoveredRoseSlice.y / 276) * 100, 20), 85)}%`
              }}
            >
              <div className="bg-white text-slate-900 border border-border/80 shadow-2xl rounded-xl p-3 flex flex-col gap-1 min-w-[130px] animate-in fade-in zoom-in-95 duration-150">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full shrink-0 shadow-sm" style={{ backgroundColor: hoveredRoseSlice.color }} />
                  <span className="font-bold text-xs tracking-tight truncate">{hoveredRoseSlice.name}</span>
                </div>
                <div className="flex items-baseline justify-between gap-3 text-xs pt-1 border-t border-border/40 mt-0.5">
                  <span className="text-muted-foreground text-[10px] uppercase tracking-wider font-medium">Score</span>
                  <span className="font-black text-foreground">{hoveredRoseSlice.value.toLocaleString(undefined, { maximumFractionDigits: 1 })}</span>
                </div>
                <div className="flex items-baseline justify-between gap-3 text-xs">
                  <span className="text-muted-foreground text-[10px] uppercase tracking-wider font-medium">Share</span>
                  <span className="font-bold text-primary">{hoveredRoseSlice.percent}%</span>
                </div>
              </div>
            </div>
          )}
        </div>
      )
    }

    if (widget.chartType === 'heat_chart' || widget.title === 'Crime & Public Safety Overview') {
      const getVioletColor = (val: number) => {
        if (val < 10) return { bg: 'bg-[#f5f3ff] dark:bg-violet-950/20', text: 'text-[#c4b5fd] dark:text-[#6d28d9]' };
        if (val < 25) return { bg: 'bg-[#ede9fe] dark:bg-violet-950/40', text: 'text-[#a78bfa] dark:text-[#7c3aed]' };
        if (val < 45) return { bg: 'bg-[#ddd6fe] dark:bg-violet-900/60', text: 'text-white' };
        if (val < 65) return { bg: 'bg-[#c4b5fd] dark:bg-violet-800/80', text: 'text-white' };
        if (val < 85) return { bg: 'bg-[#a78bfa] dark:bg-violet-600', text: 'text-white' };
        if (val < 100) return { bg: 'bg-[#8b5cf6] dark:bg-violet-500', text: 'text-white' };
        return { bg: 'bg-[#7c3aed] dark:bg-violet-400', text: 'text-white' };
      };

      const heatMapItems = [
        { name: 'Zone A', val: 66 }, { name: 'Zone B', val: 83 }, { name: 'Zone C', val: 96 }, { name: 'Zone D', val: 99 }, { name: 'Zone E', val: 98 }, { name: 'Zone F', val: 92 }, { name: 'Zone G', val: 99 }, { name: 'Zone H', val: 105 }, { name: 'Zone I', val: 97 }, { name: 'Zone 10', val: 32 },
        { name: 'Zone 11', val: 55 }, { name: 'Zone 12', val: 61 }, { name: 'Zone 13', val: 15 }, { name: 'Zone 14', val: 90 }, { name: 'Zone 15', val: 47 }, { name: 'Zone 16', val: 0 }, { name: 'Zone 17', val: 19 }, { name: 'Zone 18', val: 8 }, { name: 'Zone 19', val: 37 }, { name: 'Zone 20', val: 38 },
        { name: 'Zone 21', val: 95 }, { name: 'Zone 22', val: 18 }, { name: 'Zone 23', val: 25 }, { name: 'Zone 24', val: 98 }, { name: 'Zone 25', val: 58 }, { name: 'Zone 26', val: 1 }, { name: 'Zone 27', val: 19 }, { name: 'Zone 28', val: 41 }, { name: 'Zone 29', val: 93 }, { name: 'Zone 30', val: 62 },
        { name: 'Zone 31', val: 91 }, { name: 'Zone 32', val: 93 }, { name: 'Zone 33', val: 63 }, { name: 'Zone 34', val: 91 }, { name: 'Zone 35', val: 38 }, { name: 'Zone 36', val: 97 }, { name: 'Zone 37', val: 69 }, { name: 'Zone 38', val: 92 }, { name: 'Zone 39', val: 81 }, { name: 'Zone 40', val: 59 },
        { name: 'Zone 41', val: 94 }, { name: 'Zone 42', val: 63 }, { name: 'Zone 43', val: 80 }, { name: 'Zone 44', val: 60 }, { name: 'Zone 45', val: 20 }, { name: 'Zone 46', val: 13 }, { name: 'Zone 47', val: 34 }, { name: 'Zone 48', val: 62 }, { name: 'Zone 49', val: 55 }, { name: 'Zone 50', val: 99 }
      ];

      return (
        <div className="h-[280px] w-full pt-2">
          <div className="grid grid-cols-10 gap-2 h-full content-start overflow-x-auto custom-scrollbar pr-2 pb-2">
            {heatMapItems.map((item, idx) => {
              const style = getVioletColor(item.val);
              return (
                <div
                  key={idx}
                  className={`flex flex-col items-center justify-center py-2.5 rounded-lg transition-all duration-200 hover:scale-105 hover:shadow-md cursor-default min-w-[50px] ${style.bg}`}
                  title={`${item.name} Safety Index: ${item.val}`}
                >
                  <span className={`text-[9px] font-semibold tracking-tight ${style.text} opacity-90 leading-tight`}>{item.name}</span>
                  <span className={`text-sm font-bold tracking-tighter ${style.text} leading-tight`}>{item.val}</span>
                </div>
              );
            })}
          </div>
        </div>
      );
    }

    if (widget.chartType === 'area_chart') {
      return (
        <div className="flex-1 w-full min-h-[260px] flex flex-col mt-4">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={data} margin={{ top: 10, right: 15, left: -5, bottom: 20 }}>
              <defs>
                {Object.keys(data[0] || {}).filter(k => k !== 'name' && k !== 'value').length > 0 ? (
                  Object.keys(data[0] || {}).filter(k => k !== 'name' && k !== 'value').map((key, index) => {
                    const colors = ['#6d0a10', '#b5111b', '#c44149', '#d37076', '#cccaca', '#888585', '#444242', '#222121'];
                    const color = colors[index % colors.length];
                    return (
                      <linearGradient key={key} id={`colorValue_${widget.id}_${index}`} x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor={color} stopOpacity={0.28} />
                        <stop offset="95%" stopColor={color} stopOpacity={0.02} />
                      </linearGradient>
                    )
                  })
                ) : (
                  <linearGradient id={`colorValue_${widget.id}`} x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor={theme.color} stopOpacity={0.28} />
                    <stop offset="95%" stopColor={theme.color} stopOpacity={0.02} />
                  </linearGradient>
                )}
              </defs>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e5e7eb" opacity={0.3} />
              <XAxis dataKey="name" tick={{ fontSize: 11, fill: '#6b7280' }} tickLine={false} axisLine={false} interval={0} angle={-45} textAnchor="end" height={60} />
              <YAxis tick={{ fontSize: 11, fill: '#6b7280' }} tickLine={false} axisLine={false} />
              <Tooltip content={<CustomTooltip />} cursor={{ stroke: '#cbd5e1', strokeWidth: 1, strokeDasharray: '4 4' }} />
              <Legend verticalAlign="top" height={36} iconType="circle" iconSize={8} wrapperStyle={{ fontSize: '12px', fontWeight: 500, color: '#4b5563' }} />
              {Object.keys(data[0] || {}).filter(k => k !== 'name' && k !== 'value').length > 0 ? (
                Object.keys(data[0] || {}).filter(k => k !== 'name' && k !== 'value').map((key, index) => {
                  const colors = ['#6d0a10', '#b5111b', '#c44149', '#d37076', '#cccaca', '#888585', '#444242', '#222121'];
                  const color = colors[index % colors.length];
                  return (
                    <Area
                      key={key}
                      name={key}
                      type="monotone"
                      dataKey={key}
                      stroke={color}
                      strokeWidth={2.5}
                      fillOpacity={1}
                      fill={`url(#colorValue_${widget.id}_${index})`}
                      dot={{ r: 3, fill: color, strokeWidth: 1.5, stroke: '#ffffff' }}
                      activeDot={{ r: 5, strokeWidth: 0, fill: color }}
                      animationDuration={1500}
                      animationEasing="ease-out"
                    />
                  )
                })
              ) : (
                <Area
                  name="Value"
                  type="monotone"
                  dataKey="value"
                  stroke={theme.color}
                  strokeWidth={2.5}
                  fillOpacity={1}
                  fill={`url(#colorValue_${widget.id})`}
                  dot={{ r: 3, fill: theme.color, strokeWidth: 1.5, stroke: '#ffffff' }}
                  activeDot={{ r: 5, strokeWidth: 0, fill: theme.color }}
                  animationDuration={1500}
                  animationEasing="ease-out"
                />
              )}
            </AreaChart>
          </ResponsiveContainer>
        </div>
      )
    }

    if (widget.chartType === 'radar_chart') {
      return (
        <div className="flex-1 w-full min-h-[260px] flex flex-col">
          <ResponsiveContainer width="100%" height="100%">
            <RadarChart cx="50%" cy="50%" outerRadius="65%" data={data}>
              <PolarGrid stroke="#e5e7eb" />
              <PolarAngleAxis dataKey="name" tick={{ fontSize: 10, fill: '#4b5563', fontWeight: 500 }} />
              <PolarRadiusAxis angle={30} tick={{ fontSize: 10, fill: '#9ca3af' }} />
              {Object.keys(data[0] || {}).filter(k => k !== 'name' && k !== 'value').length > 0 ? (
                Object.keys(data[0] || {}).filter(k => k !== 'name' && k !== 'value').map((key, index) => {
                  const colors = ['#6d0a10', '#b5111b', '#c44149', '#d37076', '#cccaca', '#888585', '#444242', '#222121'];
                  const color = colors[index % colors.length];
                  return <Radar key={key} name={key} dataKey={key} stroke={color} strokeWidth={2} fill={color} fillOpacity={0.25} animationDuration={1500} />
                })
              ) : (
                <Radar name="Value" dataKey="value" stroke={theme.color} strokeWidth={2} fill={theme.color} fillOpacity={0.25} animationDuration={1500} />
              )}
              <Tooltip content={<CustomTooltip />} />
              <Legend verticalAlign="bottom" height={36} iconType="circle" iconSize={8} wrapperStyle={{ fontSize: '12px', fontWeight: 500, color: '#4b5563' }} />
            </RadarChart>
          </ResponsiveContainer>
        </div>
      )
    }

    if (widget.chartType === 'heat_chart') {
      let displayData = [...data];
      if (displayData.length < 50) {
        for (let i = displayData.length + 1; i <= 50; i++) {
          displayData.push({
            name: `Zone ${i}`,
            value: Math.floor(Math.random() * 100)
          });
        }
      }

      const maxVal = Math.max(...displayData.map(d => d.value)) || 1;
      return (
        <div className="h-[280px] w-full mt-4 flex flex-col justify-center">
          <div className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-7 lg:grid-cols-8 xl:grid-cols-10 gap-1.5 p-1">
            {displayData.map((dp, i) => {
              const intensity = Math.max(0.1, dp.value / maxVal);
              return (
                <div
                  key={i}
                  className="group/block relative rounded flex flex-col items-center justify-center py-2 px-1 text-center shadow-sm transition-all duration-300 hover:scale-[1.1] hover:shadow-md hover:z-10 cursor-default"
                  style={{
                    backgroundColor: `rgba(181, 17, 27, ${intensity * 0.85 + 0.1})`, // Match Boy Red palette
                  }}
                >
                  <span className="text-[9px] font-medium text-white/90 drop-shadow-sm line-clamp-1 leading-tight">{dp.name}</span>
                  <span className="text-xs font-bold text-white mt-0.5 drop-shadow-md leading-tight">{dp.value.toLocaleString(undefined, { maximumFractionDigits: 1 })}</span>
                </div>
              )
            })}
          </div>
        </div>
      )
    }

    return <div>Unknown Widget Type</div>
  }

  return (
    <div className="space-y-8 animate-in fade-in duration-700">


      {enabledWidgets.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-32 text-center border border-dashed border-border/60 rounded-3xl bg-surface/30 backdrop-blur-sm">
          <div className="p-4 bg-muted/30 rounded-full mb-4">
            <PieChartIcon className="h-10 w-10 text-muted-foreground opacity-50" />
          </div>
          <h3 className="text-xl font-bold text-foreground">Dashboard is Empty</h3>
          <p className="text-sm text-muted-foreground max-w-sm mt-2 mb-8 leading-relaxed">
            You haven't enabled any widgets for this project yet. Click below to select widgets created in the Analytics Maker.
          </p>
          <Button onClick={() => setIsConfigOpen(true)} variant="outline" className="rounded-full px-8 hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all">
            <Settings2 className="h-4 w-4 mr-2" />
            Select Widgets
          </Button>
        </div>
      ) : (
        <div className="w-full flex flex-col gap-6">
          {/* ROW 1: Overall Project Score Gauge (Left) + Rating Cards Grid (Right) */}
          <div className="grid grid-cols-12 gap-6 items-stretch">
            {/* Overall Project Score Card */}
            <div className="col-span-12 xl:col-span-3 bg-background rounded-2xl shadow-sm flex flex-col justify-center items-center p-6 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-b from-white/40 to-transparent pointer-events-none z-10" />
              <div className="relative z-20 w-full max-w-sm mx-auto flex flex-col justify-center items-center gap-4">
                <div className="text-center">
                  <h2 className="text-xl font-bold text-center mb-1">Overall Project Score</h2>
                  <p className="text-xs text-center text-muted-foreground">Aggregated performance across all core metrics</p>
                </div>
                {(() => {
                  const val = overallScore;
                  const maxVal = 10;
                  const normalizedVal = Math.min(Math.max(val, 0), maxVal);
                  const rotation = -90 + (normalizedVal / maxVal) * 180;

                  return (
                    <div className="h-[200px] w-full flex flex-col items-center justify-center relative p-2">
                      <svg viewBox="0 0 200 155" className="w-full h-full max-h-[190px]">
                        <defs>
                          <linearGradient id="overallGaugeGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#ef4444" />
                            <stop offset="35%" stopColor="#f97316" />
                            <stop offset="70%" stopColor="#f59e0b" />
                            <stop offset="100%" stopColor="#22c55e" />
                          </linearGradient>
                        </defs>
                        <path d="M 25 90 A 75 75 0 0 1 175 90" fill="none" stroke="#f1f5f9" strokeWidth="18" strokeLinecap="round" />
                        <path d="M 25 90 A 75 75 0 0 1 175 90" fill="none" stroke="url(#overallGaugeGrad)" strokeWidth="18" strokeLinecap="round" />
                        <g transform={`rotate(${rotation}, 100, 90)`} className="transition-transform duration-1000 ease-out">
                          <path d="M 97.5 90 L 100 24 L 102.5 90 Z" fill="#1f2937" />
                          <circle cx="100" cy="90" r="7" fill="#1f2937" />
                          <circle cx="100" cy="90" r="3" fill="#ffffff" />
                        </g>
                        <text x="100" y="132" textAnchor="middle" className="text-4xl font-black fill-foreground font-sans drop-shadow-sm">
                          {val.toLocaleString(undefined, { maximumFractionDigits: 1 })}
                          <tspan fontSize="16" fill="#64748b" fontWeight="600" dx="4">/ 10</tspan>
                        </text>
                      </svg>
                    </div>
                  )
                })()}
              </div>
            </div>

            {/* Rating Cards Grid (Expanded to fill row 1) */}
            <div className="col-span-12 xl:col-span-9 bg-background rounded-2xl shadow-sm p-5 flex flex-col justify-center">
              {statCards.length > 0 && (
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-4 gap-3.5">
                  {statCardsSortedByScore.map(({ widget, score }) => {
                    const cardTheme = getScoreCardTheme(score);
                    return (
                      <div
                        key={widget.id}
                        className="group rounded-2xl transition-all duration-300 hover:-translate-y-0.5 flex flex-col overflow-hidden relative cursor-default border p-3.5 shadow-2xs"
                        style={{
                          backgroundColor: cardTheme.cardBg,
                          borderColor: cardTheme.cardBorder,
                        }}
                      >
                        <div className="relative z-20 flex flex-col h-full justify-between">
                          {renderWidget(widget)}
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          </div>

          {/* ROW 2: Section Analysis (Radar) + Top Modules (Rose Chart) */}
          <div className="grid grid-cols-12 gap-6 items-stretch">
            {/* Section Analysis Radar Card */}
            <div className="col-span-12 lg:col-span-6 bg-background rounded-2xl shadow-sm flex flex-col p-6 relative overflow-hidden min-h-[340px]">
              <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-transparent pointer-events-none z-10" />
              <div className="relative z-20 w-full h-full flex flex-col gap-2">
                <div>
                  <h2 className="text-[15px] font-bold tracking-tight">Section Analysis</h2>
                  <p className="text-xs text-muted-foreground leading-tight mt-0.5">Performance index per module</p>
                </div>
                <div className="flex-1 w-full min-h-[260px] -ml-2">
                  <ResponsiveContainer width="100%" height="100%">
                    <RadarChart cx="50%" cy="50%" outerRadius="68%" data={sectionScores}>
                      <PolarGrid stroke="#e2e8f0" />
                      <PolarAngleAxis dataKey="name" tick={{ fontSize: 10, fill: '#64748b', fontWeight: 600 }} />
                      <PolarRadiusAxis angle={90} domain={[0, 10]} tick={false} axisLine={false} />
                      <Radar name="Score / 10" dataKey="score" stroke="#1C1C1C" strokeWidth={2} fill="#b5111b" fillOpacity={0.3} animationDuration={1500} />
                      <Tooltip content={<CustomTooltip />} />
                    </RadarChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>

            {/* Top Modules Rose Chart Card */}
            <div className="col-span-12 lg:col-span-6 bg-background rounded-2xl shadow-sm flex flex-col p-6 relative overflow-hidden min-h-[340px]">
              <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-transparent pointer-events-none z-10" />
              <div className="relative z-20 w-full h-full flex flex-col gap-2">
                <div>
                  <h2 className="text-[15px] font-bold tracking-tight">Top Modules</h2>
                  <p className="text-xs text-muted-foreground leading-tight mt-0.5">Highest scoring sections</p>
                </div>
                <div className="flex-1 w-full min-h-[260px] flex items-center justify-center select-none pt-2">
                  {(() => {
                    const sliceData = [...sectionScores].sort((a, b) => b.score - a.score).slice(0, 5);
                    const totalCount = sliceData.length;
                    if (totalCount === 0) return null;

                    const maxVal = Math.max(...sliceData.map(d => Number(d.score) || 1));
                    const minRadius = 40;
                    const maxRadius = 105;
                    const innerRadius = 20;
                    const cx = 120;
                    const cy = 110;
                    const gapDeg = 8;

                    const colors = [
                      ['#6d0a10', '#b5111b'],
                      ['#b5111b', '#d37076'],
                      ['#eeeded', '#d37076'],
                      ['#cccaca', '#eeeded'],
                      ['#cccaca', '#888585'],
                    ];

                    const totalSum = sliceData.reduce((sum, item) => sum + (Number(item.score) || 0), 0);

                    return (
                      <div className="w-full h-full relative flex flex-col items-center justify-center">
                        <svg viewBox="0 0 240 220" className="w-full h-full max-h-[240px] relative z-10">
                          <defs>
                            {colors.map((c, i) => (
                              <linearGradient key={`topRoseGrad_${i}`} id={`topRoseGrad_${i}`} x1="0%" y1="0%" x2="100%" y2="100%">
                                <stop offset="0%" stopColor={c[0]} />
                                <stop offset="100%" stopColor={c[1]} />
                              </linearGradient>
                            ))}
                            <filter id="topRoseShadow" x="-20%" y="-20%" width="140%" height="140%">
                              <feDropShadow dx="0" dy="4" stdDeviation="4" floodColor="#0f172a" floodOpacity="0.25" />
                            </filter>
                          </defs>

                          <circle cx={cx} cy={cy} r={maxRadius} fill="none" stroke="#e2e8f0" strokeWidth="1" strokeDasharray="3 3" opacity="0.6" />
                          <circle cx={cx} cy={cy} r={minRadius + (maxRadius - minRadius) * 0.5} fill="none" stroke="#e2e8f0" strokeWidth="1" strokeDasharray="3 3" opacity="0.4" />

                          {sliceData.map((d, i) => {
                            const val = Number(d.score) || 0;
                            const normalizedRatio = val / maxVal;
                            const r = minRadius + normalizedRatio * (maxRadius - minRadius);

                            const startDeg = (i * 360) / totalCount - 90 + gapDeg / 2;
                            const endDeg = ((i + 1) * 360) / totalCount - 90 - gapDeg / 2;
                            const midDeg = (startDeg + endDeg) / 2;

                            const startRad = (startDeg * Math.PI) / 180;
                            const endRad = (endDeg * Math.PI) / 180;
                            const midRad = (midDeg * Math.PI) / 180;

                            const x_o1 = cx + r * Math.cos(startRad);
                            const y_o1 = cy + r * Math.sin(startRad);
                            const x_o2 = cx + r * Math.cos(endRad);
                            const y_o2 = cy + r * Math.sin(endRad);

                            const x_i2 = cx + innerRadius * Math.cos(endRad);
                            const y_i2 = cy + innerRadius * Math.sin(endRad);
                            const x_i1 = cx + innerRadius * Math.cos(startRad);
                            const y_i1 = cy + innerRadius * Math.sin(startRad);

                            const largeArcFlag = endDeg - startDeg > 180 ? 1 : 0;
                            const pathD = `M ${x_o1} ${y_o1} A ${r} ${r} 0 ${largeArcFlag} 1 ${x_o2} ${y_o2} L ${x_i2} ${y_i2} A ${innerRadius} ${innerRadius} 0 ${largeArcFlag} 0 ${x_i1} ${y_i1} Z`;

                            const r_txt = innerRadius + (r - innerRadius) * 0.55;
                            const x_txt = cx + r_txt * Math.cos(midRad);
                            const y_txt = cy + r_txt * Math.sin(midRad);

                            const pct = totalSum > 0 ? ((val / totalSum) * 100).toFixed(0) : '0';
                            const isHovered = hoveredRoseSlice?.widgetId === 'top_modules' && hoveredRoseSlice?.name === d.name;

                            return (
                              <g
                                key={`top_rose_slice_${i}`}
                                className="transition-all duration-300 cursor-pointer"
                                filter="url(#topRoseShadow)"
                                onMouseEnter={() => setHoveredRoseSlice({
                                  widgetId: 'top_modules',
                                  name: d.name,
                                  value: val,
                                  percent: pct,
                                  color: colors[i % colors.length][0],
                                  x: x_txt,
                                  y: y_txt
                                })}
                                onMouseLeave={() => setHoveredRoseSlice(null)}
                              >
                                <path
                                  d={pathD}
                                  fill={`url(#topRoseGrad_${i % colors.length})`}
                                  stroke="#ffffff"
                                  strokeWidth={isHovered ? "2.5" : "1.5"}
                                  style={{
                                    transform: isHovered ? 'scale(1.05)' : 'scale(1)',
                                    transformOrigin: `${cx}px ${cy}px`,
                                    filter: isHovered ? 'brightness(1.1)' : 'none'
                                  }}
                                  className="transition-all duration-300"
                                />
                                <text x={x_txt} y={y_txt - 6} textAnchor="middle" dominantBaseline="central" className="fill-white font-black text-xs drop-shadow-md font-sans pointer-events-none transition-all duration-300">
                                  {isHovered ? val.toLocaleString(undefined, { maximumFractionDigits: 1 }) : `0${i + 1}`}
                                </text>
                                <text x={x_txt} y={y_txt + 6} textAnchor="middle" dominantBaseline="central" className="fill-white/90 font-bold text-[8px] drop-shadow-sm font-sans pointer-events-none">
                                  {d.name.length > 8 ? `${d.name.slice(0, 8)}.` : d.name}
                                </text>
                              </g>
                            );
                          })}
                        </svg>

                        {hoveredRoseSlice && hoveredRoseSlice.widgetId === 'top_modules' && (
                          <div
                            className="absolute z-[100] pointer-events-none transition-all duration-200 ease-out transform -translate-x-1/2 -translate-y-full mb-3"
                            style={{
                              left: `${Math.min(Math.max((hoveredRoseSlice.x / 240) * 100, 18), 82)}%`,
                              top: `${Math.min(Math.max((hoveredRoseSlice.y / 220) * 100, 20), 85)}%`
                            }}
                          >
                            <div className="bg-white text-slate-900 border border-border/80 shadow-2xl rounded-xl p-3 flex flex-col gap-1 min-w-[130px] animate-in fade-in zoom-in-95 duration-150">
                              <div className="flex items-center gap-2">
                                <span className="w-2.5 h-2.5 rounded-full shrink-0 shadow-sm" style={{ backgroundColor: hoveredRoseSlice.color }} />
                                <span className="font-bold text-xs tracking-tight truncate">{hoveredRoseSlice.name}</span>
                              </div>
                              <div className="flex items-baseline justify-between gap-3 text-xs pt-1 border-t border-border/40 mt-0.5">
                                <span className="text-muted-foreground text-[10px] uppercase tracking-wider font-medium">Score</span>
                                <span className="font-black text-foreground">{hoveredRoseSlice.value.toLocaleString(undefined, { maximumFractionDigits: 1 })}</span>
                              </div>
                              <div className="flex items-baseline justify-between gap-3 text-xs">
                                <span className="text-muted-foreground text-[10px] uppercase tracking-wider font-medium">Share</span>
                                <span className="font-bold text-primary">{hoveredRoseSlice.percent}%</span>
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    );
                  })()}
                </div>
              </div>
            </div>
          </div>

          {/* ROW 3+: Category Section Charts Grid (Grouped by Category: Value Overview then Score Breakdown) */}
          {groupedCategoryCharts.length > 0 && (
            <div className="grid grid-cols-12 gap-6 mt-2">
              {groupedCategoryCharts.map(({ widget, data }) => {
                return (
                  <div
                    key={widget.id}
                    className="col-span-12 lg:col-span-6 group bg-background rounded-2xl shadow-sm transition-all duration-300 flex flex-col min-h-[460px] overflow-hidden relative cursor-default"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-transparent pointer-events-none z-10" />
                    <div className="relative z-20 flex flex-col h-full p-6">
                      <div className="mb-6 pr-4 flex justify-between items-center">
                        <div>
                          <h3 className="font-bold text-foreground text-base tracking-tight line-clamp-1">{widget.title}</h3>
                          {widget.description && <p className="text-xs text-muted-foreground mt-1 leading-relaxed">{widget.description}</p>}
                        </div>
                      </div>
                      <div className="flex-1 flex flex-col justify-center min-h-0">
                        {renderWidget(widget)}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      )}

      <Modal isOpen={isConfigOpen} onClose={() => setIsConfigOpen(false)} title="Configure Project Dashboard">
        <div className="space-y-4 max-h-[60vh] overflow-y-auto px-1 pb-4">
          <p className="text-sm text-muted-foreground mb-4">
            Select which global widgets you want to display on this project's dashboard.
          </p>

          {widgets.length === 0 ? (
            <div className="text-sm text-center py-8 text-muted-foreground">
              No global widgets available. Create them in the Analytics Maker first.
            </div>
          ) : (
            <div className="space-y-3">
              {widgets.map(widget => (
                <label key={widget.id} className="flex items-start gap-3 p-3 border rounded-lg hover:bg-muted/30 cursor-pointer transition-colors">
                  <input
                    type="checkbox"
                    className="mt-1 accent-primary w-4 h-4"
                    checked={project.enabledWidgets?.includes(widget.id)}
                    onChange={(e) => toggleProjectWidget(project.id, widget.id, e.target.checked)}
                  />
                  <div>
                    <h4 className="font-medium text-sm">{widget.title}</h4>
                    <p className="text-xs text-muted-foreground mt-0.5">Type: {widget.chartType.replace('_', ' ')}</p>
                  </div>
                </label>
              ))}
            </div>
          )}

          <div className="pt-4 flex justify-end">
            <Button onClick={() => setIsConfigOpen(false)}>Done</Button>
          </div>
        </div>
      </Modal>
    </div>
  )
}
