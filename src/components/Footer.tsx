"use client";

import React from "react";
import { ShieldCheck } from "lucide-react";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#043326] text-white/70 border-t border-emerald-900/60 py-12 px-4 sm:px-6 lg:px-8 text-center text-xs sm:text-sm">
      <div className="max-w-4xl mx-auto space-y-4">
        {/* Brand */}
        <div className="flex items-center justify-center gap-2 text-white font-bold text-base">
          <span>Aishwarya Jat</span>
          <span className="text-emerald-400">•</span>
          <span className="text-emerald-300 font-medium text-sm">
            Thyroid-Focused Nutritionist
          </span>
        </div>

        {/* Disclaimer */}
        <p className="text-xs text-white/50 leading-relaxed max-w-2xl mx-auto">
          Disclaimer: The nutrition and lifestyle guidance provided is designed to support healthy metabolic and hormonal function and works alongside medical care. Any changes to medication should always be discussed with and approved by your treating doctor.
        </p>

        {/* Copyright */}
        <div className="pt-4 border-t border-emerald-900/40 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/50">
          <p>© {new Date().getFullYear()} Aishwarya Jat. All rights reserved.</p>
          <div className="flex items-center gap-1.5 text-emerald-300/80">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
            <span>Your details are 100% safe.</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
