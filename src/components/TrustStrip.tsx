"use client";

import React from "react";
import { Users, Award, ShieldCheck, Check } from "lucide-react";

export const TrustStrip: React.FC = () => {
  const points = [
    { text: "1300+ women guided", icon: Users },
    { text: "5+ years of experience", icon: Award },
    { text: "Certified nutritionist/Thyroid-Focused Nutritionist", icon: ShieldCheck },
  ];

  // Repeat for continuous marquee
  const repeatedPoints = [...points, ...points, ...points, ...points];

  return (
    <div className="bg-[#064e3b] text-white py-5 sm:py-7 overflow-hidden relative flex border-y border-emerald-900/40">
      {/* Fading Edges for elegant look */}
      <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-32 bg-gradient-to-r from-[#064e3b] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-32 bg-gradient-to-l from-[#064e3b] to-transparent z-10 pointer-events-none" />

      <div className="flex whitespace-nowrap animate-marquee">
        {repeatedPoints.map((item, index) => {
          const Icon = item.icon;
          return (
            <div
              key={index}
              className="flex items-center gap-3 bg-white/5 border border-white/10 px-4 py-2.5 sm:py-3 rounded-2xl w-max mx-2 sm:mx-3 hover:bg-white/10 transition-colors cursor-default"
            >
              <div className="flex h-7 w-7 sm:h-8 sm:w-8 shrink-0 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-300">
                <Icon className="h-4 w-4 sm:h-4.5 sm:w-4.5" />
              </div>
              <span className="font-semibold text-xs sm:text-sm leading-tight text-white/95">
                {item.text}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

