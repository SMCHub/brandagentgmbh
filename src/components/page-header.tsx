"use client";

import { Suspense, lazy, useState } from "react";
import { motion } from "framer-motion";

const Dithering = lazy(() =>
  import("@paper-design/shaders-react").then((mod) => ({
    default: mod.Dithering,
  }))
);

export function PageHeader({
  badge,
  title,
  description,
}: {
  badge: string;
  title: string;
  description: string;
}) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section
      className="relative pt-20 pb-12 sm:pt-28 sm:pb-16 md:pt-36 md:pb-24 bg-blue-50 overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Suspense fallback={<div className="absolute inset-0 bg-blue-50" />}>
        <div className="absolute inset-0 z-0 pointer-events-none opacity-25 mix-blend-multiply">
          <Dithering
            colorBack="#00000000"
            colorFront="#3b82f6"
            shape="warp"
            type="4x4"
            speed={isHovered ? 0.5 : 0.15}
            className="size-full"
            minPixelRatio={1}
          />
        </div>
      </Suspense>

      <div className="relative z-10 container mx-auto px-4 md:px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white/70 backdrop-blur-sm px-4 py-1.5 text-sm font-medium text-blue-700 mb-6 shadow-sm"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-500 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500" />
          </span>
          {badge}
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4 sm:mb-6 text-gray-900"
        >
          {title}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-sm sm:text-base md:text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed"
        >
          {description}
        </motion.p>
      </div>
    </section>
  );
}
