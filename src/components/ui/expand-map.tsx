"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, X } from "lucide-react";

interface LocationMapProps {
  location?: string;
  coordinates?: string;
  mapSrc?: string;
}

export function LocationMap({
  location = "Steinhausen, Kanton Zug",
  coordinates = "47.1942° N, 8.4868° E",
  mapSrc = "https://www.openstreetmap.org/export/embed.html?bbox=8.45,47.17,8.55,47.22&layer=mapnik&marker=47.1942,8.4868",
}: LocationMapProps) {
  const [expanded, setExpanded] = useState(false);

  return (
    <>
      {/* Expanded overlay */}
      <AnimatePresence>
        {expanded && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-6"
            onClick={() => setExpanded(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative w-full max-w-2xl aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <iframe
                src={mapSrc}
                className="w-full h-full border-0"
                loading="lazy"
                title="Standort"
              />
              <button
                onClick={() => setExpanded(false)}
                className="absolute top-3 right-3 w-9 h-9 rounded-full bg-white/90 backdrop-blur-sm shadow-md flex items-center justify-center hover:bg-white transition-colors"
              >
                <X className="h-4 w-4 text-gray-700" />
              </button>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-5">
                <p className="text-white font-semibold text-sm">{location}</p>
                <p className="text-white/70 text-xs mt-0.5">{coordinates}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Compact card */}
      <motion.div
        onClick={() => setExpanded(true)}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="relative w-full max-w-[460px] aspect-square rounded-2xl overflow-hidden cursor-pointer group shadow-sm"
      >
        {/* Map background */}
        <iframe
          src={mapSrc}
          className="w-full h-full border-0 pointer-events-none"
          loading="lazy"
          title="Standort"
          tabIndex={-1}
        />

        {/* Orange tint overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-orange-950/40 via-orange-900/10 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300" />

        {/* Hover expand indicator */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="w-12 h-12 rounded-full bg-white/90 backdrop-blur-sm shadow-lg flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-gray-700"
            >
              <path d="M15 3h6v6" />
              <path d="M9 21H3v-6" />
              <path d="M21 3l-7 7" />
              <path d="M3 21l7-7" />
            </svg>
          </div>
        </div>

        {/* Location label */}
        <div className="absolute bottom-0 left-0 right-0 p-4">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-full bg-orange-500 flex items-center justify-center shadow-md">
              <MapPin className="h-3.5 w-3.5 text-white" strokeWidth={2.5} />
            </div>
            <div>
              <p className="text-white font-semibold text-sm drop-shadow-md">
                {location}
              </p>
              <p className="text-white/70 text-[11px] drop-shadow-md">
                {coordinates}
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
}
