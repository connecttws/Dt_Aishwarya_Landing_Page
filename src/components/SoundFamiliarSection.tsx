"use client";

import React from "react";
import { Moon, TrendingUp, Sparkles, AlertCircle, Heart } from "lucide-react";

export const SoundFamiliarSection: React.FC = () => {
  const symptoms = [
    {
      icon: Moon,
      text: "Tired all day, even after a full night's sleep",
    },
    {
      icon: TrendingUp,
      text: "Weight keeps climbing, no matter how clean you eat",
    },
    {
      icon: AlertCircle,
      text: "Hair fall, dull skin and mood swings",
    },
    {
      icon: Sparkles,
      text: "your daily life seems like an impossible task",
    },
  ];

  return (
    <section className="py-12 md:py-20 bg-white relative overflow-hidden">
      {/* Meenakshi AboutSection Background Decor */}
      <div className="absolute top-0 right-0 w-full lg:w-1/2 h-full bg-emerald-50/40 rounded-l-[100px] -z-10 transform translate-x-1/4 lg:translate-x-1/3 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-amber-50/70 rounded-full blur-3xl -z-10 opacity-60 transform -translate-x-1/2 translate-y-1/2 pointer-events-none" />

      <div className="mx-auto max-w-5xl px-4 md:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <span className="inline-block px-4 py-1 rounded-full bg-emerald-100/70 text-[#064e3b] font-semibold text-xs sm:text-sm mb-3 border border-emerald-200/60">
            Daily Reality
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#064e3b] mb-4">
            Sound Familiar?
          </h2>
          <div className="h-1 w-20 bg-[#0D5C46] rounded-full mx-auto" />
        </div>

        {/* Symptoms 4-Card Grid with Meenakshi card styling */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6 mb-12">
          {symptoms.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-7 shadow-lg shadow-emerald-950/5 border border-gray-100/90 hover:border-emerald-300 transition-all duration-300 flex items-start gap-4.5 group hover:-translate-y-0.5"
              >
                <div className="w-12 h-12 rounded-2xl bg-gray-50 flex items-center justify-center shrink-0 group-hover:bg-[#0D5C46] group-hover:text-white transition-colors duration-300 text-[#0D5C46] shadow-2xs border border-gray-100 group-hover:border-[#0D5C46]">
                  <Icon className="w-6 h-6" />
                </div>
                <div className="flex-1 pt-1">
                  <p className="text-base sm:text-lg font-semibold text-[#022c22] leading-snug group-hover:text-[#064e3b] transition-colors">
                    {item.text}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Empathy Statement Callout Box */}
        <div className="relative rounded-[2rem] bg-gradient-to-r from-[#064e3b] to-[#0D5C46] p-7 sm:p-11 text-white text-center shadow-2xl overflow-hidden border border-emerald-800/40">
          {/* Dot matrix background pattern from Meenakshi */}
          <div className="absolute top-0 right-0 -mt-4 -mr-4 w-32 h-32 bg-[radial-gradient(rgba(255,255,255,0.15)_1.5px,transparent_1.5px)] [background-size:16px_16px] pointer-events-none" />
          <div className="absolute bottom-0 left-0 -mb-4 -ml-4 w-32 h-32 bg-[radial-gradient(rgba(255,255,255,0.15)_1.5px,transparent_1.5px)] [background-size:16px_16px] pointer-events-none" />

          <div className="relative max-w-3xl mx-auto flex flex-col items-center">
            <div className="w-12 h-12 rounded-2xl bg-white/10 backdrop-blur-md flex items-center justify-center mb-4 text-emerald-200 border border-white/20">
              <Heart className="w-6 h-6 fill-current" />
            </div>
            <p className="text-lg sm:text-xl md:text-2xl font-bold leading-relaxed tracking-tight text-white/95">
              “You are not lazy. Your body is asking for help, and a tablet alone was never meant to answer all of it.”
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
