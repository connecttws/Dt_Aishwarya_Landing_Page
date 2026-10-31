"use client";

import React from "react";
import { ArrowRight, ShieldCheck } from "lucide-react";

interface HeaderProps {
  onOpenBooking: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenBooking }) => {
  return (
    <header className="sticky top-0 z-40 bg-[#fdfbf7]/90 backdrop-blur-md border-b border-black/5 transition-all">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-18 sm:h-20 flex items-center justify-between">
        {/* Brand / Logo */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-gradient-to-br from-[#064e3b] to-[#0D5C46] text-white flex items-center justify-center font-bold text-lg shadow-sm border border-emerald-400/20">
            AJ
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-bold text-lg sm:text-xl text-[#022c22] tracking-tight">
                Aishwarya Jat
              </span>
              <span className="hidden sm:inline-flex items-center gap-1 text-[11px] font-semibold text-[#064e3b] bg-emerald-100/60 px-2.5 py-0.5 rounded-full border border-emerald-200">
                <ShieldCheck className="w-3 h-3 text-[#064e3b]" />
                Certified
              </span>
            </div>
            <p className="text-xs text-[#022c22]/70 font-medium tracking-wide">
              Thyroid-Focused Nutritionist
            </p>
          </div>
        </div>

        {/* Header Right Action */}
        <div className="flex items-center gap-3">
          <button
            onClick={onOpenBooking}
            className="inline-flex items-center gap-1.5 sm:gap-2 px-4 sm:px-5 py-2 sm:py-2.5 bg-[#064e3b] hover:bg-[#022c22] text-white font-semibold text-xs sm:text-sm rounded-full transition-all duration-200 shadow-sm hover:shadow cursor-pointer active:scale-98"
          >
            <span>Book Free Consultation</span>
            <ArrowRight className="w-3.5 h-3.5 hidden sm:inline-block" />
          </button>
        </div>
      </div>
    </header>
  );
};
