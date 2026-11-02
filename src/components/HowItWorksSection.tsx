"use client";

import React from "react";
import { ArrowRight } from "lucide-react";
import { WaveDivider } from "./WaveDivider";

interface HowItWorksSectionProps {
  onOpenBooking: () => void;
}

export const HowItWorksSection: React.FC<HowItWorksSectionProps> = ({
  onOpenBooking,
}) => {
  const steps = [
    {
      num: "1",
      title: "Identify",
      description: "Identify- what might be affecting you",
    },
    {
      num: "2",
      title: "PERSONALISE",
      description: "A personalised food and lifestyle planThat fits your life.",
    },
    {
      num: "3",
      title: "Sustain",
      description: "Regular follow-ups so you are never alone.",
    },
  ];

  return (
    <section className="pt-16 pb-24 md:pt-20 md:pb-32 px-4 sm:px-6 relative bg-wellness-50 overflow-hidden">
      <div className="max-w-5xl mx-auto text-center relative z-10">
        <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-2 text-slate-900">
          How It Works
        </h2>

        <p className="text-base sm:text-lg text-slate-600 max-w-xl mx-auto mb-14 capitalize font-medium">
          your struggles, your story
        </p>

        <div className="grid md:grid-cols-3 gap-8 sm:gap-10 relative">
          {/* Connector Line on Desktop like Aditi */}
          <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-1 bg-wellness-200 z-0" />

          {steps.map((item, i) => (
            <div
              key={i}
              className="relative z-10 flex flex-col items-center space-y-4 bg-white md:bg-transparent p-6 md:p-0 rounded-3xl shadow-sm md:shadow-none border md:border-none border-wellness-100"
            >
              {/* Number Circle like Aditi */}
              <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-white shadow-xl border-4 border-wellness-100 flex items-center justify-center text-3xl font-heading font-extrabold text-wellness-600 transition-transform hover:scale-110">
                {item.num}
              </div>

              <div>
                <h3 className="text-xl sm:text-2xl font-heading font-bold mb-2 text-slate-900">
                  {item.title}
                </h3>
                <p className="text-slate-700 text-sm sm:text-base leading-relaxed max-w-xs mx-auto font-medium">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button: Book Your Free Thyroid Consultation */}
        <div className="mt-14 sm:mt-16">
          <button
            onClick={onOpenBooking}
            className="group relative inline-flex items-center justify-center overflow-hidden rounded-full p-[4px] shadow-2xl shadow-red-800/40 transition-all hover:scale-[1.02] hover:shadow-red-800/60 animate-bounce bg-white cursor-pointer"
          >
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,transparent_0%,transparent_85%,#ef4444_100%)]" />
            <span className="relative flex items-center justify-center gap-2 rounded-full bg-red-800 hover:bg-red-900 px-8 sm:px-12 py-3.5 sm:py-5 font-bold text-white transition-all w-full h-full text-base sm:text-lg md:text-xl whitespace-nowrap">
              <span>Book Your Free Thyroid Consultation</span>
              <ArrowRight className="w-5 h-5 ml-1" />
              <div className="absolute inset-0 bg-white/20 translate-x-[-150%] group-hover:translate-x-[150%] transition-transform duration-1000 skew-x-[-20deg] rounded-full overflow-hidden pointer-events-none" />
            </span>
          </button>
        </div>
      </div>

      <WaveDivider fillClass="fill-white" />
    </section>
  );
};
