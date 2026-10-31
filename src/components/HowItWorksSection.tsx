"use client";

import React from "react";
import { Search, Utensils, Repeat, ArrowRight, CheckCircle2 } from "lucide-react";

interface HowItWorksSectionProps {
  onOpenBooking: () => void;
}

export const HowItWorksSection: React.FC<HowItWorksSectionProps> = ({ onOpenBooking }) => {
  const steps = [
    {
      num: "01",
      icon: Search,
      tag: "Step 01",
      title: "Identify",
      description: "Identify- what might be affecting you",
    },
    {
      num: "02",
      icon: Utensils,
      tag: "Step 02",
      title: "PERSONALISE",
      description: "A personalised food and lifestyle planThat fits your life.",
    },
    {
      num: "03",
      icon: Repeat,
      tag: "Step 03",
      title: "Sustain",
      description: "Regular follow-ups so you are never alone.",
    },
  ];

  return (
    <section className="py-12 md:py-20 bg-[#fdfbf7] relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]" />
        <div className="absolute top-1/2 left-0 w-72 h-72 bg-emerald-100/40 rounded-full blur-3xl -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-amber-100/30 rounded-full blur-3xl" />
      </div>

      <div className="mx-auto max-w-5xl px-4 md:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <span className="inline-block px-4 py-1 rounded-full bg-emerald-100/70 text-[#064e3b] font-semibold text-xs sm:text-sm mb-3 border border-emerald-200/60">
            Process & Framework
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#064e3b] mb-3">
            How It Works
          </h2>
          <div className="h-1 w-20 bg-[#0D5C46] rounded-full mx-auto mb-4" />
          <p className="text-base sm:text-lg text-[#022c22]/70 font-medium">
            your struggles, your story
          </p>
        </div>

        {/* 3 Step Process Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-12">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-3xl p-7 sm:p-8 shadow-xl shadow-emerald-950/5 border border-black/5 hover:border-emerald-300 transition-all duration-300 flex flex-col justify-between hover:-translate-y-1 group"
              >
                <div>
                  {/* Step Top Bar */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#064e3b] bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
                      {step.tag}
                    </span>
                    <span className="text-2xl font-black text-emerald-200 group-hover:text-[#0D5C46] transition-colors">
                      {step.num}
                    </span>
                  </div>

                  {/* Icon */}
                  <div className="w-14 h-14 rounded-2xl bg-gray-50 text-[#0D5C46] flex items-center justify-center mb-5 border border-gray-100 group-hover:bg-[#0D5C46] group-hover:text-white transition-colors duration-300 shadow-2xs">
                    <Icon className="w-7 h-7" />
                  </div>

                  {/* Step Title */}
                  <h3 className="text-xl font-bold text-[#022c22] mb-3">
                    {step.title}
                  </h3>

                  {/* Step Description */}
                  <p className="text-sm sm:text-base text-[#022c22]/70 leading-relaxed font-normal">
                    {step.description}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-gray-100 flex items-center gap-2 text-xs font-semibold text-[#064e3b]">
                  <CheckCircle2 className="w-4 h-4 text-[#0D5C46]" />
                  <span>Personalised Support</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Button (Meenakshi style rounded-full) */}
        <div className="text-center">
          <button
            onClick={onOpenBooking}
            className="group relative inline-flex w-full sm:w-auto items-center justify-center gap-3 rounded-full bg-[#064e3b] hover:bg-[#022c22] px-8 sm:px-10 py-4 text-base sm:text-lg font-bold text-white shadow-xl shadow-[#064e3b]/20 transition-all duration-200 hover:-translate-y-1 hover:shadow-2xl cursor-pointer"
          >
            <span>Book Your Free Thyroid Consultation</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            <div className="absolute inset-0 rounded-full ring-2 ring-[#064e3b] ring-offset-2 ring-offset-[#fdfbf7] opacity-0 transition-opacity group-hover:opacity-100" />
          </button>
        </div>
      </div>
    </section>
  );
};
