"use client";

import { motion } from "framer-motion";

const switzerlandPath =
  "M 75,220 C 80,200 90,185 110,170 C 125,155 140,140 155,125 C 165,110 170,90 178,78 C 190,65 215,55 240,52 C 265,49 290,47 310,48 C 330,50 350,57 368,67 C 385,77 398,88 412,100 C 430,115 448,133 462,155 C 472,170 475,185 468,200 C 458,215 442,225 422,232 C 400,242 378,252 355,262 C 338,272 322,278 305,275 C 285,270 268,265 250,262 C 232,260 215,265 195,262 C 175,255 155,245 135,238 C 112,232 88,228 75,220 Z";

const cantons = [
  { name: "Zug", x: 260, y: 148, delay: 0.3 },
  { name: "Zürich", x: 288, y: 100, delay: 1.0 },
  { name: "Glarus", x: 335, y: 135, delay: 1.7 },
];

export function SwissMap() {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <svg viewBox="30 20 490 290" className="w-full h-full max-w-[460px]">
        <defs>
          <radialGradient id="mapGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="rgba(234, 88, 12, 0.08)" />
            <stop offset="100%" stopColor="rgba(234, 88, 12, 0)" />
          </radialGradient>
        </defs>

        {/* Glow behind map */}
        <circle cx="275" cy="160" r="140" fill="url(#mapGlow)" />

        {/* Switzerland outline */}
        <motion.path
          d={switzerlandPath}
          fill="rgba(234, 88, 12, 0.04)"
          stroke="rgba(234, 88, 12, 0.25)"
          strokeWidth="1.5"
          strokeLinejoin="round"
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 2, ease: "easeInOut" }}
        />

        {/* Connecting lines Zug → Zürich */}
        <motion.line
          x1={cantons[0].x}
          y1={cantons[0].y}
          x2={cantons[1].x}
          y2={cantons[1].y}
          stroke="rgba(234, 88, 12, 0.35)"
          strokeWidth="1.5"
          strokeDasharray="4 4"
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
        />

        {/* Connecting lines Zürich → Glarus */}
        <motion.line
          x1={cantons[1].x}
          y1={cantons[1].y}
          x2={cantons[2].x}
          y2={cantons[2].y}
          stroke="rgba(234, 88, 12, 0.35)"
          strokeWidth="1.5"
          strokeDasharray="4 4"
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 1.5 }}
        />

        {/* Canton dots and labels */}
        {cantons.map((canton) => (
          <g key={canton.name}>
            {/* Pulse ring */}
            <motion.circle
              cx={canton.x}
              cy={canton.y}
              r="10"
              fill="none"
              stroke="rgba(234, 88, 12, 0.25)"
              strokeWidth="1"
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{
                scale: [1, 1.8, 1],
                opacity: [0.6, 0, 0.6],
              }}
              viewport={{ once: true }}
              transition={{
                delay: canton.delay + 0.5,
                duration: 2.5,
                repeat: Infinity,
                ease: "easeOut",
              }}
            />

            {/* Main dot */}
            <motion.circle
              cx={canton.x}
              cy={canton.y}
              r="5"
              fill="rgba(234, 88, 12, 0.85)"
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{
                delay: canton.delay,
                duration: 0.4,
                type: "spring",
                stiffness: 200,
              }}
            />

            {/* Label */}
            <motion.text
              x={canton.x}
              y={canton.y + 20}
              textAnchor="middle"
              fontSize="11"
              fontWeight="500"
              fill="#9ca3af"
              initial={{ opacity: 0, y: canton.y + 15 }}
              whileInView={{ opacity: 1, y: canton.y + 20 }}
              viewport={{ once: true }}
              transition={{ delay: canton.delay + 0.3, duration: 0.4 }}
            >
              {canton.name}
            </motion.text>
          </g>
        ))}
      </svg>
    </div>
  );
}
