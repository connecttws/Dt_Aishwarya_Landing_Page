"use client";

import React from "react";
import { Moon, TrendingUp, AlertCircle, Sparkles, Heart } from "lucide-react";
import { WaveDivider } from "./WaveDivider";

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
    <section className="py-16 md:py-24 px-4 sm:px-6 relative bg-white overflow-hidden">
      <div className="max-w-5xl mx-auto relative z-10">
        <div className="bg-wellness-50 rounded-[2.5rem] p-6 sm:p-10 md:p-14 lg:p-16 shadow-xl border border-wellness-100 text-center relative overflow-hidden">
          {/* Decorative Background Accents like Aditi */}
          <div className="absolute top-0 right-0 w-72 h-72 bg-wellness-200/40 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-72 h-72 bg-earth-200/40 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3 pointer-events-none" />

          <div className="relative z-10 space-y-4 md:space-y-6">
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 tracking-tight">
              Sound Familiar?
            </h2>

            <div className="w-24 h-1.5 bg-gradient-to-r from-wellness-400 to-earth-400 mx-auto rounded-full my-6" />

            {/* 4 Symptoms Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 pt-2 text-left">
              {symptoms.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div
                    key={idx}
                    className="flex items-center gap-4 bg-white p-5 sm:p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md hover:border-wellness-200 transition-all duration-300"
                  >
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-wellness-100 flex items-center justify-center text-wellness-700">
                      <Icon className="w-6 h-6" />
                    </div>
                    <p className="text-base sm:text-lg text-slate-800 font-semibold leading-snug">
                      {item.text}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Exact Empathy Statement */}
            <div className="mt-8 pt-4">
              <div className="bg-white/90 backdrop-blur-sm border border-wellness-200/80 p-6 sm:p-8 rounded-2xl shadow-sm max-w-3xl mx-auto text-center relative overflow-hidden">
                <div className="w-10 h-10 rounded-full bg-wellness-100 text-wellness-700 flex items-center justify-center mx-auto mb-3">
                  <Heart className="w-5 h-5 fill-current" />
                </div>
                <p className="text-lg sm:text-xl md:text-2xl font-bold text-wellness-950 leading-relaxed">
                  “You are not lazy. Your body is asking for help, and a tablet alone was never meant to answer all of it.”
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <WaveDivider fillClass="fill-wellness-50" />
    </section>
  );
};
