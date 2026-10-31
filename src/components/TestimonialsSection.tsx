"use client";

import React from "react";
import { Play, CheckCircle2, Star, Sparkles } from "lucide-react";

export const TestimonialsSection: React.FC = () => {
  const testimonials = [
    {
      id: 1,
      title: "Testimonial video or screenshot 1",
      badge: "Real Change",
      tag: "Energy Restoration",
    },
    {
      id: 2,
      title: "Testimonial video or screenshot 2",
      badge: "Real Change",
      tag: "Healthy Weight Management",
    },
    {
      id: 3,
      title: "Testimonial video or screenshot 3",
      badge: "Real Change",
      tag: "Hormonal Balance",
    },
  ];

  return (
    <section className="py-12 md:py-20 bg-white overflow-hidden relative">
      {/* Background Decor */}
      <div className="absolute top-1/2 right-0 w-80 h-80 bg-emerald-50/50 rounded-full blur-3xl -translate-y-1/2 pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8 relative z-10">
        <div className="mx-auto max-w-2xl text-center mb-12 sm:mb-16">
          <span className="inline-block px-4 py-1 rounded-full bg-emerald-100/70 text-[#064e3b] font-semibold text-xs sm:text-sm mb-3 border border-emerald-200/60">
            Real Transformations
          </span>
          <h2 className="text-3xl font-bold tracking-tight text-[#064e3b] sm:text-4xl">
            Real Women, Real Change
          </h2>
          <div className="h-1 w-20 bg-[#0D5C46] rounded-full mx-auto mt-4 mb-4" />
          <p className="mt-2 text-base sm:text-lg text-[#022c22]/70 font-medium">
            [Testimonial video or screenshot 1 / 2 / 3]
          </p>
        </div>

        {/* 3 Testimonials Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 max-w-5xl mx-auto">
          {testimonials.map((item) => (
            <div
              key={item.id}
              className="group relative bg-white rounded-3xl overflow-hidden shadow-xl shadow-emerald-950/5 border border-black/5 hover:border-emerald-300 transition-all duration-300 flex flex-col cursor-pointer hover:-translate-y-1"
            >
              {/* Media Container */}
              <div className="relative aspect-[4/3] w-full bg-gradient-to-br from-[#064e3b] via-[#0D5C46] to-[#043326] flex flex-col items-center justify-center p-4 text-center overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white/10 via-transparent to-black/40 pointer-events-none" />

                {/* Play / Media Indicator */}
                <div className="w-14 h-14 rounded-full bg-[#E0624D] text-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-200 mb-3 z-10">
                  <Play className="w-6 h-6 fill-white translate-x-0.5" />
                </div>

                <div className="z-10 px-3">
                  <span className="inline-block text-xs font-semibold text-white/95 bg-white/15 backdrop-blur-sm px-3 py-1 rounded-full border border-white/20 mb-2">
                    {item.title}
                  </span>
                </div>

                {/* Rating stars */}
                <div className="absolute top-3 right-3 flex items-center gap-0.5 bg-black/40 backdrop-blur-xs px-2.5 py-1 rounded-full text-amber-400 z-10">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 fill-current" />
                  ))}
                </div>
              </div>

              {/* Card Bottom */}
              <div className="p-6 flex-1 flex flex-col justify-between bg-white">
                <div>
                  <div className="flex items-center gap-1.5 text-xs font-bold text-[#064e3b] uppercase tracking-wider mb-1.5">
                    <CheckCircle2 className="w-4 h-4 text-[#0D5C46]" />
                    <span>{item.badge}</span>
                  </div>
                  <h4 className="text-base font-bold text-[#022c22] leading-tight">
                    {item.title}
                  </h4>
                  <p className="text-xs text-[#022c22]/60 mt-1 font-medium">
                    {item.tag}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-gray-100 flex items-center justify-between text-xs text-[#064e3b] font-semibold">
                  <span>Verified Result</span>
                  <span className="text-[#E0624D]">Watch Story →</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
