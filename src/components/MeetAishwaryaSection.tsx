"use client";

import React from "react";
import { Award, Compass, ShieldCheck, UserCheck } from "lucide-react";

export const MeetAishwaryaSection: React.FC = () => {
  return (
    <section className="py-12 md:py-20 bg-[#043326] relative overflow-hidden text-white">
      {/* Meenakshi CoachProfileSection Background Decor */}
      <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-emerald-800/30 via-transparent to-transparent opacity-80 z-0 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">
          {/* Photo Placeholder Area matching Meenakshi profile frame */}
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md aspect-[4/5] rounded-[2.5rem] bg-emerald-900/40 border border-emerald-700/40 overflow-hidden shadow-2xl flex flex-col items-center justify-center p-8 group text-center">
              {/* Photo Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent z-10 pointer-events-none" />

              {/* Decorative radial pattern */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-emerald-500/10 to-transparent pointer-events-none" />

              <div className="relative z-20 flex flex-col items-center">
                <div className="w-28 h-28 sm:w-36 sm:h-36 rounded-full bg-white/10 backdrop-blur-md border-2 border-emerald-400/30 flex items-center justify-center mb-5 shadow-xl">
                  <UserCheck className="w-16 h-16 text-emerald-200" />
                </div>

                <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-white/15 backdrop-blur-md text-xs font-semibold text-emerald-200 mb-3 border border-white/20">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>[Photo]</span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                  Aishwarya Jat
                </h3>
                <p className="text-sm text-emerald-300 font-medium mt-1">
                  Thyroid-Focused Nutritionist
                </p>
              </div>

              {/* Experience Ribbon */}
              <div className="absolute bottom-5 left-5 right-5 z-20 bg-emerald-950/80 backdrop-blur-md py-2.5 px-4 rounded-2xl border border-emerald-600/30 text-white text-xs sm:text-sm font-semibold flex items-center justify-center gap-2 shadow-lg">
                <Award className="w-4 h-4 text-emerald-400" />
                <span>5+ Years Experience | Personalised Clinical Care</span>
              </div>
            </div>
          </div>

          {/* Text Content Area */}
          <div className="w-full lg:w-1/2 text-center lg:text-left text-white">
            <div className="inline-block px-3.5 py-1 rounded-full bg-emerald-800/60 border border-emerald-600/40 text-emerald-300 text-xs sm:text-sm font-bold tracking-wider uppercase mb-4">
              THYROID FOCUSED NUTRITIONIST
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-2">
              Meet <span className="text-emerald-300">Aishwarya</span>
            </h2>

            <h3 className="text-xs sm:text-base font-semibold text-emerald-200/90 tracking-wide uppercase mb-6 mt-3">
              Aishwarya | Thyroid focused Nutritionist
            </h3>

            <div className="space-y-5 text-white/80 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0">
              <p>
                With 5+ years of experience, Aishwarya has helped women with thyroid, PCOS and many hormonal issues understand what their body has been trying to tell them.
              </p>
              <p>
                She does not believe in crash diets or one-size-fits-all charts. She looks at your reports, your gut, your stress and your daily routine, then builds a plan that fits your life and your kitchen help you progress.
              </p>
            </div>

            {/* Mission Statement Box */}
            <div className="mt-8 pt-8 border-t border-emerald-800/50">
              <div className="bg-white/5 rounded-2xl border border-white/10 p-5 sm:p-6 backdrop-blur-xs text-left">
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-emerald-500/20 text-emerald-300 flex items-center justify-center shrink-0 mt-0.5">
                    <Compass className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-emerald-300 uppercase tracking-wider mb-1">
                      My Mission
                    </h4>
                    <p className="text-base sm:text-lg font-bold text-white leading-snug">
                      To help every woman with thyroid feel energetic, confident and in control of her health again.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
