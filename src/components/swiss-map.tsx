"use client";

import { motion } from "framer-motion";

const switzerlandPath =
  "M 397.4,54.0 L 401.5,77.6 L 385.0,110.2 L 434.0,134.4 L 489.2,138.1 L 480.6,192.6 L 432.9,215.1 L 352.8,198.4 L 329.4,252.1 L 277.8,256.3 L 259.1,235.2 L 198.4,280.4 L 146.2,286.7 L 99.7,258.2 L 62.5,199.8 L 10.8,220.7 L 12.4,160.4 L 91.6,85.6 L 88.1,51.8 L 137.4,64.0 L 167.1,41.3 L 259.2,42.2 L 281.4,13.3 L 397.4,54.0 Z";

const cantons = [
  { name: "Zug", x: 281, y: 101, delay: 0.3 },
  { name: "Zürich", x: 284, y: 75, delay: 1.0 },
  { name: "Glarus", x: 341, y: 119, delay: 1.7 },
];

export function SwissMap() {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <svg viewBox="-10 -10 520 320" className="w-full h-full max-w-[460px]">
        <defs>
          <radialGradient id="mapGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="rgba(234, 88, 12, 0.08)" />
            <stop offset="100%" stopColor="rgba(234, 88, 12, 0)" />
          </radialGradient>
        </defs>

        {/* Glow behind map */}
        <circle cx="250" cy="150" r="160" fill="url(#mapGlow)" />

        {/* Switzerland outline */}
        <motion.path
          d={switzerlandPath}
          fill="rgba(234, 88, 12, 0.05)"
          stroke="rgba(234, 88, 12, 0.3)"
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
