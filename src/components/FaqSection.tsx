"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { WaveDivider } from "./WaveDivider";

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "Do I have to stop my medicine?",
      answer: "No. Any change in medication is decided only with your doctor.",
    },
    {
      question: "How soon will I see results?",
      answer:
        "Most women notice better energy in 3 to 6 weeks. Results vary from person to person.",
    },
    {
      question: "Is the consultation really free?",
      answer: "Yes. Your first consultation is free, with no obligation.",
    },
  ];

  const toggleOpen = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 relative bg-wellness-50 overflow-hidden">
      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-slate-900 mb-3">
            FAQs
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-wellness-400 to-earth-400 mx-auto rounded-full my-4" />
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={i}
                className={`rounded-2xl overflow-hidden transition-all duration-300 ${
                  isOpen
                    ? "bg-white shadow-[0_10px_35px_rgba(0,0,0,0.06)] border border-wellness-200/80 scale-[1.01]"
                    : "bg-white/70 shadow-xs border border-wellness-100 hover:bg-white hover:shadow-md"
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleOpen(i)}
                  className="w-full text-left px-5 py-5 sm:px-8 sm:py-6 flex items-start gap-4 sm:gap-5 cursor-pointer focus:outline-hidden"
                  aria-expanded={isOpen}
                >
                  {/* Numbering like Aditi */}
                  <span
                    className={`font-heading text-xl sm:text-2xl md:text-3xl font-extrabold transition-colors duration-300 shrink-0 pt-0.5 ${
                      isOpen ? "text-wellness-600" : "text-wellness-300"
                    }`}
                  >
                    {(i + 1).toString().padStart(2, "0")}
                  </span>

                  <h3
                    className={`flex-1 text-base sm:text-lg md:text-xl font-heading font-bold transition-colors duration-300 pt-0.5 sm:pt-0 ${
                      isOpen ? "text-slate-900" : "text-slate-700"
                    }`}
                  >
                    {faq.question}
                  </h3>

                  <div
                    className={`shrink-0 w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
                      isOpen
                        ? "bg-wellness-600 text-white shadow-md rotate-180"
                        : "bg-wellness-50 text-wellness-600"
                    }`}
                  >
                    <ChevronDown className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                </button>

                {isOpen && (
                  <div className="pr-5 pb-6 pl-14 sm:pr-8 sm:pb-8 sm:pl-18 pt-0">
                    <div className="bg-gradient-to-r from-wellness-50/90 to-transparent border-l-4 border-wellness-500 p-4 sm:p-5 rounded-r-2xl shadow-2xs">
                      <p className="text-slate-700 leading-relaxed text-sm sm:text-base font-medium">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      <WaveDivider fillClass="fill-white" />
    </section>
  );
};
