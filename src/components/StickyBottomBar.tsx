"use client";

import React, { useState, useEffect } from "react";
import { ArrowRight, Sparkles } from "lucide-react";

interface StickyBottomBarProps {
  onOpenBooking: () => void;
}

export const StickyBottomBar: React.FC<StickyBottomBarProps> = ({
  onOpenBooking,
}) => {
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
    <div className="fixed bottom-0 inset-x-0 z-40 bg-wellness-50/95 backdrop-blur-md border-t border-wellness-200/80 py-2.5 px-4 shadow-[0_-5px_20px_rgba(0,0,0,0.08)] transition-all duration-300 md:hidden">
      <div className="flex items-center justify-between gap-3 max-w-md mx-auto">
        <div className="flex-1">
          <p className="text-xs font-bold text-wellness-900 leading-tight flex items-center gap-1 font-heading">
            <Sparkles className="w-3.5 h-3.5 text-amber-500" />
            <span>1-on-1 Consultation</span>
          </p>
          <p className="text-[11px] text-wellness-700/80 truncate">
            <span className="line-through opacity-70">₹2,499</span>{" "}
            <strong className="text-red-700">100% FREE Today</strong>
          </p>
        </div>

        <button
          onClick={onOpenBooking}
          className="inline-flex items-center justify-center gap-1.5 px-5 py-2.5 bg-gradient-to-r from-red-800 to-rose-700 text-white font-bold text-xs rounded-full shadow-md shadow-red-900/30 cursor-pointer shrink-0 active:scale-95 transition-transform"
        >
          <span>Book Free Call</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
};
