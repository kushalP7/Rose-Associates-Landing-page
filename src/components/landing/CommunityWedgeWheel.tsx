"use client"

import * as React from "react"

export function CommunityWedgeWheel() {
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

        {/* Solid Refined White Divider Spokes */}
        {vertices.map((v, idx) => (
          <line
            key={idx}
            x1={cx}
            y1={cy}
            x2={v.x}
            y2={v.y}
            stroke="#FFFFFF"
            strokeWidth="5"
            strokeLinecap="round"
          />
        ))}

        {/* Center Hub */}
        <circle cx={cx} cy={cy} r="4.5" fill="#FFFFFF" />

        {/* Outer Faceted Polygonal White Rim */}
        <polygon
          points={polygonPointsString}
          fill="none"
          stroke="#FFFFFF"
          strokeWidth="6"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  )
}
