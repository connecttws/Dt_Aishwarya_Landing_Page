"use client";

import React from "react";
import { ArrowRight, HeartHandshake, Users, Award, ShieldCheck } from "lucide-react";
import { VslPlayer } from "./VslPlayer";

interface HeroSectionProps {
  onOpenBooking: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenBooking }) => {
  return (
    <section className="relative overflow-hidden bg-[#fdfbf7] pt-12 pb-10 sm:pt-16 sm:pb-16">
      {/* Meenakshi Background Design Decor */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Subtle Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]" />

        {/* Top Left Green Gradient */}
        <div className="absolute top-0 left-0 w-full h-[600px] bg-gradient-to-br from-emerald-100/50 via-transparent to-transparent opacity-80 blur-3xl" />

        {/* Top Right Amber/Gold Gradient */}
        <div className="absolute top-20 right-0 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-amber-100/40 rounded-full blur-3xl" />

        {/* Floating Abstract Shapes */}
        <div className="absolute top-36 left-[8%] w-24 h-24 rounded-full border-2 border-emerald-500/10 bg-gradient-to-br from-emerald-50 to-transparent animate-float-slow" />
        <div className="absolute bottom-16 right-[10%] w-32 h-32 rounded-3xl border border-amber-500/10 bg-gradient-to-bl from-amber-50 to-transparent transform rotate-12 animate-float-reverse" />
      </div>

      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8 relative z-10">
        <div className="mx-auto max-w-4xl text-center">
          {/* Eyebrow Pill */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-100/70 border border-emerald-200/80 text-xs sm:text-sm font-semibold text-[#064e3b] mb-6 shadow-2xs">
            <HeartHandshake className="w-4 h-4 text-[#064e3b]" />
            <span>Women's Endocrine & Thyroid Wellness</span>
          </div>

          {/* Exact Headline */}
          <h1 className="text-2xl font-extrabold tracking-tight text-[#064e3b] sm:text-5xl lg:text-[3.25rem] mb-4 sm:mb-6 leading-snug sm:leading-[1.2]">
            <span>Taking your thyroid medicine every day…</span>{" "}
            <span className="block text-[#0D5C46] mt-1 sm:mt-2">
              So why do you still feel exhausted?
            </span>
          </h1>

          {/* Exact Subheadline */}
          <p className="mt-3 sm:mt-4 text-sm sm:text-lg leading-relaxed sm:leading-8 text-[#022c22]/80 font-medium max-w-3xl mx-auto">
            Discover how{" "}
            <strong className="font-bold text-[#022c22]">Aishwarya Jat</strong>, a{" "}
            <span className="text-[#064e3b] font-semibold">Thyroid-Focused Nutritionist</span>,
            helps women manage thyroid symptoms, boost their energy, and work towards healthy weight management through personalised nutrition — so they can feel like themselves again.
          </p>

          {/* Rotating Conic Gradient Badges (Meenakshi Hero Style) */}
          <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-center justify-center gap-2.5 sm:gap-4 text-xs sm:text-sm font-semibold text-[#064e3b] w-full max-w-3xl mx-auto">
            <div className="relative flex flex-1 w-full sm:w-auto overflow-hidden rounded-xl sm:rounded-full p-[1.5px] shadow-sm">
              <div className="absolute left-1/2 top-1/2 aspect-square w-[250%] -translate-x-1/2 -translate-y-1/2 animate-[spin_4s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,transparent_0%,#10b981_50%,transparent_100%)] opacity-80" />
              <div className="relative flex flex-1 flex-row items-center justify-center gap-2 bg-white/95 backdrop-blur px-4 py-2 sm:py-2.5 rounded-[10px] sm:rounded-full text-center leading-tight h-full w-full">
                <Users className="w-4 h-4 text-[#0D5C46]" />
                <span>1300+ women guided</span>
              </div>
            </div>

            <div className="relative flex flex-1 w-full sm:w-auto overflow-hidden rounded-xl sm:rounded-full p-[1.5px] shadow-sm">
              <div className="absolute left-1/2 top-1/2 aspect-square w-[250%] -translate-x-1/2 -translate-y-1/2 animate-[spin_4s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,transparent_0%,#10b981_50%,transparent_100%)] opacity-80" />
              <div className="relative flex flex-1 flex-row items-center justify-center gap-2 bg-white/95 backdrop-blur px-4 py-2 sm:py-2.5 rounded-[10px] sm:rounded-full text-center leading-tight h-full w-full">
                <Award className="w-4 h-4 text-[#0D5C46]" />
                <span>5+ years of experience</span>
              </div>
            </div>

            <div className="relative flex flex-1 w-full sm:w-auto overflow-hidden rounded-xl sm:rounded-full p-[1.5px] shadow-sm">
              <div className="absolute left-1/2 top-1/2 aspect-square w-[250%] -translate-x-1/2 -translate-y-1/2 animate-[spin_4s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,transparent_0%,#10b981_50%,transparent_100%)] opacity-80" />
              <div className="relative flex flex-1 flex-row items-center justify-center gap-2 bg-white/95 backdrop-blur px-4 py-2 sm:py-2.5 rounded-[10px] sm:rounded-full text-center leading-tight h-full w-full">
                <ShieldCheck className="w-4 h-4 text-[#0D5C46]" />
                <span className="truncate">Certified Nutritionist</span>
              </div>
            </div>
          </div>

          {/* VSL Video */}
          <div className="mt-8 sm:mt-12">
            <VslPlayer onOpenBooking={onOpenBooking} />
          </div>

          {/* Hero CTA Button (Meenakshi style rounded-full with ring hover) */}
          <div className="mt-8 sm:mt-10 flex flex-col items-center justify-center gap-3">
            <button
              onClick={onOpenBooking}
              className="group relative inline-flex w-full sm:w-auto items-center justify-center gap-3 rounded-full bg-[#0D5C46] hover:bg-[#064e3b] px-9 py-4 sm:py-4.5 text-lg font-bold text-white shadow-xl shadow-[#0D5C46]/25 transition-all duration-200 hover:-translate-y-1 hover:shadow-2xl hover:shadow-[#0D5C46]/35 active:translate-y-0 cursor-pointer"
            >
              <span>Book Your Free Consultation</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              <div className="absolute inset-0 rounded-full ring-2 ring-[#0D5C46] ring-offset-2 ring-offset-[#fdfbf7] opacity-0 transition-opacity group-hover:opacity-100" />
            </button>

            <p className="text-xs sm:text-sm text-[#022c22]/60 font-medium">
              Certified nutritionist / Thyroid-Focused Nutritionist • Free Consultation
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
