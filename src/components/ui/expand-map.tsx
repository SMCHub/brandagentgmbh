"use client";

import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

interface LocationMapProps {
  location?: string;
  coordinates?: string;
}

const locations = [
  { name: "Zug", x: 32, y: 52, delay: 0.2, primary: true },
  { name: "Zürich", x: 55, y: 28, delay: 0.9 },
  { name: "Glarus", x: 78, y: 58, delay: 1.6 },
];

export function LocationMap({
  location = "Steinhausen, Kanton Zug",
  coordinates = "47.1942° N, 8.4868° E",
}: LocationMapProps) {
  return (
    <div className="relative w-full max-w-[460px] aspect-[4/3] rounded-2xl overflow-hidden bg-white/70 border border-blue-200/40 shadow-sm">
      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(59,130,246,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(59,130,246,0.08) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      {/* Radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full bg-blue-500/[0.06] blur-3xl" />

      {/* SVG connections and dots */}
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 75">
        {/* Connection: Zug → Zürich */}
        <motion.path
          d={`M ${locations[0].x},${locations[0].y} Q ${(locations[0].x + locations[1].x) / 2},${Math.min(locations[0].y, locations[1].y) - 8} ${locations[1].x},${locations[1].y}`}
          fill="none"
          stroke="rgba(59, 130, 246, 0.3)"
          strokeWidth="0.4"
          strokeDasharray="1.5 1.5"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
        />

        {/* Connection: Zürich → Glarus */}
        <motion.path
          d={`M ${locations[1].x},${locations[1].y} Q ${(locations[1].x + locations[2].x) / 2},${Math.min(locations[1].y, locations[2].y) - 6} ${locations[2].x},${locations[2].y}`}
          fill="none"
          stroke="rgba(59, 130, 246, 0.3)"
          strokeWidth="0.4"
          strokeDasharray="1.5 1.5"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 1.3 }}
        />

        {/* Connection: Zug → Glarus (subtle) */}
        <motion.path
          d={`M ${locations[0].x},${locations[0].y} Q ${(locations[0].x + locations[2].x) / 2},${Math.max(locations[0].y, locations[2].y) + 6} ${locations[2].x},${locations[2].y}`}
          fill="none"
          stroke="rgba(59, 130, 246, 0.12)"
          strokeWidth="0.3"
          strokeDasharray="1 2"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 2 }}
        />

        {/* Location dots */}
        {locations.map((loc) => (
          <g key={loc.name}>
            {/* Outer pulse */}
            <motion.circle
              cx={loc.x}
              cy={loc.y}
              r={loc.primary ? 3 : 2.2}
              fill="none"
              stroke="rgba(59, 130, 246, 0.3)"
              strokeWidth="0.3"
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{
                scale: [1, 2.5, 1],
                opacity: [0.5, 0, 0.5],
              }}
              viewport={{ once: true }}
              transition={{
                delay: loc.delay + 0.5,
                duration: 3,
                repeat: Infinity,
                ease: "easeOut",
              }}
            />

            {/* Main dot */}
            <motion.circle
              cx={loc.x}
              cy={loc.y}
              r={loc.primary ? 1.8 : 1.3}
              fill={loc.primary ? "rgb(59, 130, 246)" : "rgb(96, 165, 250)"}
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{
                delay: loc.delay,
                type: "spring",
                stiffness: 300,
              }}
            />

            {/* Inner glow */}
            <motion.circle
              cx={loc.x}
              cy={loc.y}
              r={loc.primary ? 3.5 : 2.5}
              fill={`rgba(59, 130, 246, ${loc.primary ? 0.15 : 0.08})`}
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: loc.delay, duration: 0.5 }}
            />

            {/* Label */}
            <motion.text
              x={loc.x}
              y={loc.y - (loc.primary ? 5 : 4)}
              textAnchor="middle"
              fontSize={loc.primary ? "3.2" : "2.8"}
              fontWeight={loc.primary ? "600" : "500"}
              fill={loc.primary ? "rgba(23,23,23,0.9)" : "rgba(100,100,100,0.7)"}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: loc.delay + 0.3 }}
            >
              {loc.name}
            </motion.text>
          </g>
        ))}
      </svg>

      {/* Bottom info bar */}
      <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-white/80 via-white/40 to-transparent">
        <div className="flex items-center gap-2.5">
          <div className="w-7 h-7 rounded-full bg-blue-500/15 ring-1 ring-blue-500/25 flex items-center justify-center">
            <MapPin className="h-3.5 w-3.5 text-blue-600" strokeWidth={2} />
          </div>
          <div>
            <p className="text-gray-900 font-medium text-xs">{location}</p>
            <p className="text-gray-400 text-[10px] font-mono">{coordinates}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
