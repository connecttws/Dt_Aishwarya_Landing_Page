"use client";

import React from "react";
import { ArrowRight, HeartHandshake, Users, Award, ShieldCheck } from "lucide-react";
import { VslPlayer } from "./VslPlayer";

interface HeroSectionProps {
  onOpenBooking: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenBooking }) => {
  return (
    <section className="relative overflow-hidden bg-[#fdfbf7] pt-3 sm:pt-6 md:pt-10 pb-10 sm:pb-16 md:pb-20">
      {/* Meenakshi Background Design Decor */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Subtle Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]" />

        {/* Top Left Green Gradient */}
        <div className="absolute top-0 left-0 w-full h-[500px] sm:h-[600px] bg-gradient-to-br from-emerald-100/50 via-transparent to-transparent opacity-80 blur-3xl" />

        {/* Top Right Amber/Gold Gradient */}
        <div className="absolute top-10 sm:top-20 right-0 w-[260px] sm:w-[400px] md:w-[500px] h-[260px] sm:h-[400px] md:h-[500px] bg-amber-100/40 rounded-full blur-3xl" />

        {/* Floating Abstract Shapes */}
        <div className="absolute top-28 left-[6%] w-20 h-20 sm:w-24 sm:h-24 rounded-full border-2 border-emerald-500/10 bg-gradient-to-br from-emerald-50 to-transparent animate-float-slow hidden sm:block" />
        <div className="absolute bottom-16 right-[8%] w-24 h-24 sm:w-32 sm:h-32 rounded-3xl border border-amber-500/10 bg-gradient-to-bl from-amber-50 to-transparent transform rotate-12 animate-float-reverse hidden sm:block" />
      </div>

      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8 relative z-10">
        <div className="mx-auto max-w-4xl text-center">
          {/* Eyebrow Pill with minimal top gap */}
          <div className="inline-flex items-center gap-1.5 px-3 sm:px-4 py-1 sm:py-1.5 rounded-full bg-emerald-100/80 border border-emerald-200/80 text-[11px] sm:text-xs font-semibold text-[#064e3b] mb-2.5 sm:mb-4 shadow-2xs">
            <HeartHandshake className="w-3.5 h-3.5 text-[#064e3b]" />
            <span>Women's Endocrine & Thyroid Wellness</span>
          </div>

          {/* Exact Headline Styled for Mobile & Desktop Impact */}
          <h1 className="text-center mx-auto max-w-4xl mb-4 sm:mb-6 font-extrabold tracking-tight">
            {/* Part 1: Taking your thyroid */}
            <span className="block text-2xl min-[360px]:text-[1.85rem] min-[400px]:text-[2.1rem] sm:text-4xl md:text-5xl lg:text-[3.25rem] text-[#022c22] leading-tight">
              Taking your thyroid
            </span>

            {/* Part 2: medicine every day... together */}
            <span className="inline-block mt-1 sm:mt-2">
              <span className="inline-flex items-center text-2xl min-[360px]:text-[1.85rem] min-[400px]:text-[2.1rem] sm:text-4xl md:text-5xl lg:text-[3.25rem] font-extrabold text-[#064e3b] px-3.5 sm:px-4 py-0.5 rounded-2xl bg-emerald-100/70 border border-emerald-200/80 shadow-2xs leading-tight">
                medicine every day…
              </span>
            </span>

            {/* Part 3: So why do you still feel exhausted? */}
            <span className="block text-[1.85rem] min-[360px]:text-[2.05rem] min-[400px]:text-[2.3rem] sm:text-4xl md:text-5xl lg:text-[3.4rem] font-black text-[#022c22] mt-2.5 sm:mt-4 leading-[1.2] sm:leading-[1.15]">
              So why do you{" "}
              <span className="relative inline-block text-[#0D5C46]">
                still feel exhausted?
                {/* Hand-drawn accent swoop underline in warm coral */}
                <svg
                  className="absolute -bottom-1 sm:-bottom-2 left-0 w-full h-2.5 sm:h-3.5 text-[#E0624D] overflow-visible pointer-events-none"
                  viewBox="0 0 240 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3 11C60 3 180 3 237 11"
                    stroke="currentColor"
                    strokeWidth="3.5"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </span>
          </h1>

          {/* Exact Subheadline */}
          <p className="mt-3 sm:mt-5 text-[13px] min-[360px]:text-sm sm:text-base md:text-lg leading-relaxed sm:leading-8 text-[#022c22]/80 font-normal sm:font-medium max-w-2xl sm:max-w-3xl mx-auto px-1 sm:px-0">
            Discover how{" "}
            <strong className="font-bold text-[#022c22]">Aishwarya Jat</strong>, a{" "}
            <span className="text-[#064e3b] font-semibold underline decoration-emerald-300 decoration-2 underline-offset-2">Thyroid-Focused Nutritionist</span>,
            helps women manage thyroid symptoms, boost their energy, and work towards healthy weight management through personalised nutrition — so they can feel like themselves again.
          </p>

          {/* 1. VSL Video (Moved Up) */}
          <div className="mt-6 sm:mt-8">
            <VslPlayer onOpenBooking={onOpenBooking} />
          </div>

          {/* 2. Hero CTA Button (Moved Up) */}
          <div className="mt-6 sm:mt-8 flex flex-col items-center justify-center gap-3">
            <button
              onClick={onOpenBooking}
              className="group relative inline-flex w-full sm:w-auto items-center justify-center gap-3 rounded-full bg-[#0D5C46] hover:bg-[#064e3b] px-8 sm:px-10 py-3.5 sm:py-4.5 text-base sm:text-lg font-bold text-white shadow-xl shadow-[#0D5C46]/25 transition-all duration-200 hover:-translate-y-1 hover:shadow-2xl hover:shadow-[#0D5C46]/35 active:translate-y-0 cursor-pointer active:scale-95"
            >
              <span>Book Your Free Consultation</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              <div className="absolute inset-0 rounded-full ring-2 ring-[#0D5C46] ring-offset-2 ring-offset-[#fdfbf7] opacity-0 transition-opacity group-hover:opacity-100" />
            </button>
          </div>

          {/* 3. 1300+ women guided | 5+ years of experience | Certified nutritionist/Thyroid-Focused Nutritionist (Below CTA) */}
          <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-center justify-center gap-2.5 sm:gap-4 text-xs sm:text-sm font-semibold text-[#064e3b] w-full max-w-4xl mx-auto">
            <div className="relative flex flex-1 w-full sm:w-auto overflow-hidden rounded-xl sm:rounded-full p-[1.5px] shadow-sm">
              <div className="absolute left-1/2 top-1/2 aspect-square w-[250%] -translate-x-1/2 -translate-y-1/2 animate-[spin_4s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,transparent_0%,#10b981_50%,transparent_100%)] opacity-80" />
              <div className="relative flex flex-1 flex-row items-center justify-center gap-2 bg-white/95 backdrop-blur px-4 py-2 sm:py-2.5 rounded-[10px] sm:rounded-full text-center leading-tight h-full w-full">
                <Users className="w-4 h-4 text-[#0D5C46] shrink-0" />
                <span>1300+ women guided</span>
              </div>
            </div>

            <div className="relative flex flex-1 w-full sm:w-auto overflow-hidden rounded-xl sm:rounded-full p-[1.5px] shadow-sm">
              <div className="absolute left-1/2 top-1/2 aspect-square w-[250%] -translate-x-1/2 -translate-y-1/2 animate-[spin_4s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,transparent_0%,#10b981_50%,transparent_100%)] opacity-80" />
              <div className="relative flex flex-1 flex-row items-center justify-center gap-2 bg-white/95 backdrop-blur px-4 py-2 sm:py-2.5 rounded-[10px] sm:rounded-full text-center leading-tight h-full w-full">
                <Award className="w-4 h-4 text-[#0D5C46] shrink-0" />
                <span>5+ years of experience</span>
              </div>
            </div>

            <div className="relative flex flex-1 w-full sm:w-auto overflow-hidden rounded-xl sm:rounded-full p-[1.5px] shadow-sm">
              <div className="absolute left-1/2 top-1/2 aspect-square w-[250%] -translate-x-1/2 -translate-y-1/2 animate-[spin_4s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,transparent_0%,#10b981_50%,transparent_100%)] opacity-80" />
              <div className="relative flex flex-1 flex-row items-center justify-center gap-2 bg-white/95 backdrop-blur px-4 py-2 sm:py-2.5 rounded-[10px] sm:rounded-full text-center leading-tight h-full w-full">
                <ShieldCheck className="w-4 h-4 text-[#0D5C46] shrink-0" />
                <span>Certified nutritionist/Thyroid-Focused Nutritionist</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
