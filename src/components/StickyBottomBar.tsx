"use client";

import React, { useState, useEffect } from "react";
import { ArrowRight, Sparkles } from "lucide-react";

interface StickyBottomBarProps {
  onOpenBooking: () => void;
}

export const StickyBottomBar: React.FC<StickyBottomBarProps> = ({ onOpenBooking }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 inset-x-0 z-40 bg-white/95 backdrop-blur-md border-t border-black/10 py-3 px-4 shadow-2xl transition-all duration-300 md:hidden">
      <div className="flex items-center justify-between gap-3 max-w-md mx-auto">
        <div className="flex-1">
          <p className="text-xs font-bold text-[#064e3b] leading-tight flex items-center gap-1">
            <Sparkles className="w-3.5 h-3.5 text-[#E0624D]" />
            Free Consultation
          </p>
          <p className="text-[11px] text-[#022c22]/60 truncate">
            Limited slots every week
          </p>
        </div>

        <button
          onClick={onOpenBooking}
          className="inline-flex items-center justify-center gap-1.5 px-5 py-2.5 bg-[#0D5C46] hover:bg-[#064e3b] text-white font-bold text-xs rounded-full shadow-md cursor-pointer shrink-0 active:scale-95 transition-transform"
        >
          <span>Book Free Consultation</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
};
