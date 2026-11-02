"use client";

import React from "react";
import { Users, Award, ShieldCheck, Play, ArrowRight } from "lucide-react";
import { WaveDivider } from "./WaveDivider";

interface HeroSectionProps {
  onOpenBooking: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenBooking }) => {
  return (
    <section className="relative pt-24 sm:pt-28 md:pt-32 pb-16 md:pb-24 px-4 sm:px-6 overflow-hidden min-h-[90vh] flex flex-col justify-center items-center bg-[#faf7f2]">
      {/* Background Radial Glow like Aditi */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,_var(--color-wellness-200)_0%,_transparent_55%)] opacity-60 pointer-events-none" />
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-earth-200/40 rounded-full blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
        <div className="space-y-4 sm:space-y-5 flex flex-col items-center animate-fade-in-up w-full">
          {/* Main Headline */}
          <h1 className="font-heading text-2xl min-[360px]:text-3xl sm:text-5xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight text-balance">
            <span className="block text-wellness-900 leading-tight">
              Taking your thyroid medicine every day…
            </span>
            <span className="block mt-2 font-extrabold text-wellness-950 leading-tight">
              So why do you{" "}
              <span className="text-shine-red inline-block">
                still feel exhausted?
              </span>
            </span>
          </h1>

          {/* Subheadline */}
          <p className="mt-3 text-sm sm:text-base md:text-lg text-slate-700 max-w-2xl sm:max-w-3xl mx-auto leading-relaxed font-normal">
            Discover how <strong className="font-bold text-wellness-950">Aishwarya Jat</strong>, a{" "}
            <span className="text-wellness-700 font-semibold underline decoration-wellness-400 decoration-2 underline-offset-2">
              Thyroid-Focused Nutritionist
            </span>
            , helps women manage thyroid symptoms, boost their energy, and work towards healthy weight management through personalised nutrition — so they can feel like themselves again.
          </p>

          {/* VSL Video Container */}
          <div className="w-full max-w-3xl relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white aspect-video bg-black mx-auto group mt-4 md:mt-6">
            <div
              className="absolute inset-0 w-full h-full cursor-pointer z-10 flex flex-col items-center justify-center p-4 sm:p-8 bg-gradient-to-br from-wellness-900 via-wellness-800 to-wellness-950 text-white select-none"
              onClick={onOpenBooking}
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--color-wellness-500)_0%,_transparent_70%)] opacity-20 pointer-events-none" />

              <div className="mb-4 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs sm:text-sm font-semibold text-wellness-100">
                <span className="w-2 h-2 rounded-full bg-red-500 animate-ping" />
                <span>[ VSL VIDEO HERE ]</span>
              </div>

              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-wellness-600/90 hover:bg-wellness-500 rounded-full flex items-center justify-center backdrop-blur-sm shadow-xl shadow-wellness-900/40 transition-transform group-hover:scale-110 mb-4">
                <Play className="w-7 h-7 sm:w-8 sm:h-8 text-white ml-1 fill-white" />
              </div>

              <p className="text-xs sm:text-sm text-wellness-200/90 font-medium">
                Click to book consultation
              </p>
            </div>
          </div>

          {/* CTA Button: Book Your Free Consultation */}
          <div className="pt-6 sm:pt-8 pb-3">
            <button
              onClick={onOpenBooking}
              className="group relative inline-flex items-center justify-center overflow-hidden rounded-full p-[4px] shadow-2xl shadow-red-800/40 transition-all hover:scale-[1.02] hover:shadow-red-800/60 animate-bounce bg-white cursor-pointer"
            >
              <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,transparent_0%,transparent_85%,#ef4444_100%)]" />
              <span className="relative flex items-center justify-center gap-2 rounded-full bg-red-800 hover:bg-red-900 px-8 sm:px-12 py-3.5 sm:py-5 font-bold text-white transition-all w-full h-full text-base sm:text-lg md:text-xl whitespace-nowrap">
                <span>Book Your Free Consultation</span>
                <ArrowRight className="w-5 h-5 ml-1" />
                <div className="absolute inset-0 bg-white/20 translate-x-[-150%] group-hover:translate-x-[150%] transition-transform duration-1000 skew-x-[-20deg] rounded-full overflow-hidden pointer-events-none" />
              </span>
            </button>
          </div>

          {/* Exact Badges: 1300+ women guided | 5+ years of experience | Certified nutritionist/Thyroid-Focused Nutritionist */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 max-w-4xl mx-auto mt-4 text-xs sm:text-sm font-semibold text-wellness-900">
            <div className="inline-flex items-center gap-2 px-3.5 py-2 rounded-full bg-white/95 backdrop-blur-md shadow-sm border border-wellness-200/80">
              <Users className="w-4 h-4 text-wellness-700" />
              <span>1300+ women guided</span>
            </div>
            <span className="hidden sm:inline text-wellness-300">•</span>
            <div className="inline-flex items-center gap-2 px-3.5 py-2 rounded-full bg-white/95 backdrop-blur-md shadow-sm border border-wellness-200/80">
              <Award className="w-4 h-4 text-wellness-700" />
              <span>5+ years of experience</span>
            </div>
            <span className="hidden sm:inline text-wellness-300">•</span>
            <div className="inline-flex items-center gap-2 px-3.5 py-2 rounded-full bg-white/95 backdrop-blur-md shadow-sm border border-wellness-200/80">
              <ShieldCheck className="w-4 h-4 text-wellness-700" />
              <span>Certified nutritionist/Thyroid-Focused Nutritionist</span>
            </div>
          </div>
        </div>
      </div>

      {/* Wave Section Divider */}
      <WaveDivider fillClass="fill-white" />
    </section>
  );
};
