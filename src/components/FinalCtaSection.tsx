"use client";

import React from "react";
import { ArrowRight, ShieldCheck, Clock, Sparkles } from "lucide-react";

interface FinalCtaSectionProps {
  onOpenBooking: () => void;
}

export const FinalCtaSection: React.FC<FinalCtaSectionProps> = ({ onOpenBooking }) => {
  return (
    <section className="py-12 md:py-20 bg-white relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-[2.5rem] bg-gradient-to-br from-[#064e3b] via-[#0D5C46] to-[#043326] text-white p-8 sm:p-14 md:p-16 text-center shadow-2xl overflow-hidden border border-emerald-800/40">
          {/* Background Ambient Glows from Meenakshi style */}
          <div className="absolute top-0 right-0 -translate-y-12 translate-x-12 w-96 h-96 bg-amber-400/15 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 translate-y-12 -translate-x-12 w-96 h-96 bg-emerald-400/15 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-white/10 via-transparent to-transparent pointer-events-none" />

          <div className="relative max-w-3xl mx-auto flex flex-col items-center z-10">
            {/* Pill */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/15 backdrop-blur-md border border-white/20 text-xs sm:text-sm font-semibold text-emerald-100 mb-6">
              <Sparkles className="w-3.5 h-3.5 text-amber-300" />
              <span>Take Control Of Your Health</span>
            </div>

            {/* Exact Headline */}
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-6 leading-tight">
              How many more years will you live tired and frustrated?
            </h2>

            {/* Exact Subheadline */}
            <p className="text-base sm:text-lg md:text-xl text-emerald-100/90 leading-relaxed max-w-2xl mx-auto mb-10 font-normal">
              Take the first step today and find out what your thyroid is really telling you.
            </p>

            {/* Exact CTA Button (Meenakshi rounded-full style) */}
            <button
              onClick={onOpenBooking}
              className="group relative inline-flex w-full sm:w-auto items-center justify-center gap-3 rounded-full bg-[#E0624D] hover:bg-[#c84f3b] px-9 sm:px-12 py-4 sm:py-5 text-lg sm:text-xl font-bold text-white shadow-xl shadow-black/30 transition-all duration-200 hover:-translate-y-1 hover:shadow-2xl active:translate-y-0 cursor-pointer"
            >
              <span>Book My Free Consultation</span>
              <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
              <div className="absolute inset-0 rounded-full ring-2 ring-[#E0624D] ring-offset-2 ring-offset-[#064e3b] opacity-0 transition-opacity group-hover:opacity-100" />
            </button>

            {/* Exact Trust Reassurance */}
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-xs sm:text-sm text-emerald-200/90 font-medium">
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-300" />
                Your details are 100% safe.
              </span>
              <span className="hidden sm:inline opacity-60">•</span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-amber-300" />
                Limited slots every week.
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
