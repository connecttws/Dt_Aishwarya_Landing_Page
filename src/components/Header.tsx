"use client";

import React from "react";
import { ArrowRight, ShieldCheck } from "lucide-react";

interface HeaderProps {
  onOpenBooking: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenBooking }) => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-wellness-50/90 backdrop-blur-md border-b border-wellness-200/50 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-2.5 sm:py-3.5 flex justify-between items-center gap-2">
        {/* Brand / Logo */}
        <div className="flex items-center gap-2 sm:gap-3">
          <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-wellness-800 text-white flex items-center justify-center font-heading font-extrabold text-sm sm:text-base shadow-sm shrink-0 border border-wellness-600/30">
            AJ
          </div>
          <div>
            <div className="flex items-center gap-1.5 sm:gap-2">
              <span className="font-heading font-bold text-base sm:text-xl md:text-2xl tracking-tight text-wellness-900">
                Aishwarya <span className="text-earth-500">Jat</span>
              </span>
              <span className="hidden min-[480px]:inline-flex items-center gap-1 text-[10px] font-bold text-wellness-800 bg-wellness-200/60 px-2 py-0.5 rounded-full border border-wellness-300/50">
                <ShieldCheck className="w-3 h-3 text-wellness-700" />
                Certified
              </span>
            </div>
            <p className="text-[11px] sm:text-xs text-wellness-700/80 font-medium tracking-wide">
              Thyroid-Focused Nutritionist
            </p>
          </div>
        </div>

        {/* Right CTA */}
        <div className="flex items-center gap-2 sm:gap-3">
          <button
            onClick={onOpenBooking}
            className="inline-flex items-center justify-center text-center whitespace-nowrap bg-wellness-800 hover:bg-wellness-900 text-white px-3 sm:px-5 py-1.5 sm:py-2.5 text-xs sm:text-sm rounded-full font-semibold transition-transform hover:scale-105 active:scale-95 shadow-md shadow-wellness-800/30 cursor-pointer"
          >
            <span>Book Free Consultation</span>
            <ArrowRight className="w-3.5 h-3.5 ml-1.5 hidden sm:inline-block" />
          </button>
        </div>
      </div>
    </header>
  );
};
