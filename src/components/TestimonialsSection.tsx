"use client";

import React from "react";
import { Play, Star } from "lucide-react";
import { WaveDivider } from "./WaveDivider";

export const TestimonialsSection: React.FC = () => {
  const testimonials = [
    {
      id: 1,
      title: "Testimonial video or screenshot 1",
    },
    {
      id: 2,
      title: "Testimonial video or screenshot 2",
    },
    {
      id: 3,
      title: "Testimonial video or screenshot 3",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-white relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-slate-900 mb-3">
            Real Women, Real Change
          </h2>

          <div className="w-24 h-1.5 bg-gradient-to-r from-wellness-400 to-earth-400 mx-auto rounded-full my-4" />

          <p className="text-base sm:text-lg text-slate-600 font-medium">
            [Testimonial video or screenshot 1 / 2 / 3]
          </p>
        </div>

        {/* 3 Testimonial Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 max-w-5xl mx-auto">
          {testimonials.map((item) => (
            <div
              key={item.id}
              className="bg-wellness-50/50 rounded-3xl overflow-hidden shadow-md border border-wellness-100 hover:shadow-xl hover:border-wellness-300 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
            >
              {/* Media Preview Box with Play Indicator */}
              <div className="relative aspect-video w-full bg-gradient-to-br from-wellness-900 to-wellness-800 flex flex-col items-center justify-center p-4 text-center overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--color-wellness-400)_0%,_transparent_75%)] opacity-20 pointer-events-none" />

                {/* Rating 5.0 Pill */}
                <div className="absolute top-3 right-3 flex items-center gap-1 bg-black/40 backdrop-blur-xs px-2.5 py-1 rounded-full text-amber-300 text-xs font-bold">
                  <Star className="w-3 h-3 fill-current" />
                  <span>5.0</span>
                </div>

                <div className="w-12 h-12 rounded-full bg-wellness-600 text-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform mb-2">
                  <Play className="w-5 h-5 fill-white ml-0.5" />
                </div>

                <span className="text-xs font-semibold text-wellness-100 bg-white/10 backdrop-blur-xs px-3 py-1 rounded-full border border-white/20">
                  {item.title}
                </span>
              </div>

              {/* Text Card Bottom */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <h3 className="font-heading font-bold text-lg text-slate-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-xs text-wellness-700 font-semibold uppercase tracking-wider">
                  Verified Result
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <WaveDivider fillClass="fill-wellness-50" />
    </section>
  );
};
