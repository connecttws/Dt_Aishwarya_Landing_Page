"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "Do I have to stop my medicine?",
      answer: "No. Any change in medication is decided only with your doctor.",
    },
    {
      question: "How soon will I see results?",
      answer: "Most women notice better energy in 3 to 6 weeks. Results vary from person to person.",
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
    <section className="py-12 md:py-20 bg-[#fdfbf7] relative">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-10 sm:mb-14">
          <span className="inline-block px-4 py-1 rounded-full bg-emerald-100/70 text-[#064e3b] font-semibold text-xs sm:text-sm mb-3 border border-emerald-200/60">
            Frequently Asked Questions
          </span>
          <h2 className="text-3xl font-bold tracking-tight text-[#064e3b] sm:text-4xl mb-3">
            FAQs
          </h2>
          <div className="h-1 w-20 bg-[#0D5C46] rounded-full mx-auto" />
        </div>

        <div className="mx-auto max-w-3xl space-y-3.5">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="border border-black/10 rounded-2xl overflow-hidden bg-white shadow-xs transition-all duration-200"
              >
                <button
                  type="button"
                  onClick={() => toggleOpen(index)}
                  className="w-full px-6 py-5 text-left flex items-center justify-between cursor-pointer focus:outline-hidden hover:bg-gray-50/50"
                  aria-expanded={isOpen}
                >
                  <span className="font-semibold text-base sm:text-lg text-[#022c22] pr-4">
                    {faq.question}
                  </span>
                  <div
                    className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all ${
                      isOpen
                        ? "bg-[#0D5C46] text-white rotate-180"
                        : "bg-gray-100 text-gray-500"
                    }`}
                  >
                    <ChevronDown className="w-5 h-5" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 text-[#022c22]/80 leading-relaxed pt-2 border-t border-black/5 text-sm sm:text-base">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
