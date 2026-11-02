"use client";

import React from "react";
import { Compass, UserCheck } from "lucide-react";
import { WaveDivider } from "./WaveDivider";

export const MeetAishwaryaSection: React.FC = () => {
  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 bg-earth-50 relative overflow-hidden">
      {/* Decorative ambient background glows from Aditi Vision section */}
      <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-wellness-200 rounded-full filter blur-[128px] opacity-50 pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-96 h-96 bg-earth-300 rounded-full filter blur-[128px] opacity-40 pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-14 items-center">
          {/* Photo Frame Column */}
          <div className="w-full lg:w-5/12 flex justify-center">
            <div className="relative w-full max-w-sm aspect-[4/5] rounded-[2.5rem] bg-gradient-to-b from-white to-wellness-50 border-4 border-white shadow-2xl overflow-hidden flex flex-col items-center justify-center p-6 text-center group">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--color-wellness-200)_0%,_transparent_70%)] opacity-40 pointer-events-none" />

              <div className="relative z-10 flex flex-col items-center">
                <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-full bg-wellness-100 border-4 border-white flex items-center justify-center mb-4 shadow-md text-wellness-800">
                  <UserCheck className="w-14 h-14" />
                </div>

                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-wellness-200/70 text-xs font-bold text-wellness-900 mb-2 border border-wellness-300/60">
                  <span>[Photo]</span>
                </div>

                <h3 className="font-heading text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                  Aishwarya
                </h3>
                <p className="text-xs sm:text-sm text-earth-500 font-semibold mt-0.5">
                  Thyroid focused Nutritionist
                </p>
              </div>
            </div>
          </div>

          {/* Text & Mission Column */}
          <div className="w-full lg:w-7/12 text-center lg:text-left">
            <span className="inline-block px-4 py-1 rounded-full bg-wellness-100 text-wellness-800 font-bold text-xs uppercase tracking-wider border border-wellness-200 mb-3">
              THYROID FOCUSED NUTRITIONIST
            </span>

            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight mb-2">
              Meet Aishwarya
            </h2>

            <p className="text-sm sm:text-base font-semibold text-wellness-700 uppercase tracking-wider mb-6">
              Aishwarya | Thyroid focused Nutritionist
            </p>

            <div className="space-y-4 text-slate-700 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0 font-normal">
              <p>
                With 5+ years of experience, Aishwarya has helped women with thyroid, PCOS and many hormonal issues understand what their body has been trying to tell them.
              </p>
              <p>
                She does not believe in crash diets or one-size-fits-all charts. She looks at your reports, your gut, your stress and your daily routine, then builds a plan that fits your life and your kitchen help you progress.
              </p>
            </div>

            {/* Mission Box */}
            <div className="mt-8">
              <div className="bg-white/80 backdrop-blur-md border border-wellness-200 p-6 sm:p-7 rounded-3xl shadow-md relative text-left">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-2xl bg-wellness-100 text-wellness-700 flex items-center justify-center shrink-0 mt-1 shadow-xs">
                    <Compass className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-earth-500 mb-1">
                      My mission
                    </h4>
                    <p className="font-heading text-lg sm:text-xl font-bold text-slate-900 leading-snug">
                      To help every woman with thyroid feel energetic, confident and in control of her health again.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <WaveDivider fillClass="fill-white" />
    </section>
  );
};
