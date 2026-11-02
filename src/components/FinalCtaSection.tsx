"use client";

import React from "react";
import { ShieldCheck, Clock, ArrowRight } from "lucide-react";
import { WaveDivider } from "./WaveDivider";

interface FinalCtaSectionProps {
  onOpenBooking: () => void;
}

export const FinalCtaSection: React.FC<FinalCtaSectionProps> = ({
  onOpenBooking,
}) => {
  return (
    <section className="relative py-16 md:py-28 px-4 sm:px-6 w-full flex flex-col items-center justify-center min-h-[50vh] overflow-hidden">
      {/* Background Wellness 900 Gradient from Aditi */}
      <div className="absolute inset-0 bg-wellness-900 text-background">
        <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-wellness-800 to-transparent opacity-80" />
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-wellness-700/30 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-earth-500/20 rounded-full blur-3xl pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center space-y-6 sm:space-y-8 w-full">
        {/* Exact Headline */}
        <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white drop-shadow-md leading-tight">
          How many more years will you live tired and frustrated?
        </h2>

        {/* Exact Subheadline */}
        <p className="text-base sm:text-lg md:text-xl text-wellness-100/90 font-medium max-w-2xl mx-auto leading-relaxed drop-shadow">
          Take the first step today and find out what your thyroid is really telling you.
        </p>

        {/* Spinning Conic CTA Button from Aditi: Book My Free Consultation */}
        <div className="pt-4 sm:pt-6 pb-4">
          <button
            onClick={onOpenBooking}
            className="group relative inline-flex items-center justify-center overflow-hidden rounded-full p-[4px] shadow-2xl shadow-red-800/50 transition-all hover:scale-[1.02] hover:shadow-red-800/70 animate-bounce bg-white cursor-pointer"
          >
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,transparent_0%,transparent_85%,#ef4444_100%)]" />
            <span className="relative flex items-center justify-center gap-2 rounded-full bg-red-800 hover:bg-red-900 px-8 sm:px-14 py-4 sm:py-5 font-bold text-white transition-all w-full h-full text-base sm:text-lg md:text-xl whitespace-nowrap">
              <span>Book My Free Consultation</span>
              <ArrowRight className="w-5 h-5 ml-1" />
              <div className="absolute inset-0 bg-white/20 translate-x-[-150%] group-hover:translate-x-[150%] transition-transform duration-1000 skew-x-[-20deg] rounded-full overflow-hidden pointer-events-none" />
            </span>
          </button>
        </div>

        {/* Exact Trust Note: Your details are 100% safe. Limited slots every week. */}
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-xs sm:text-sm text-wellness-200/90 font-medium">
          <span className="flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-wellness-300" />
            Your details are 100% safe.
          </span>
          <span className="hidden sm:inline opacity-60">•</span>
          <span className="flex items-center gap-1.5">
            <Clock className="w-4 h-4 text-amber-300" />
            Limited slots every week.
          </span>
        </div>
      </div>

      {/* WaveDivider to Footer */}
      <WaveDivider fillClass="fill-footer-bg" />
    </section>
  );
};
