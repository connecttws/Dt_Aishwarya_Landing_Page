"use client";

import React from "react";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-footer-bg text-footer-text/80 py-10 px-4 sm:px-6 text-center text-xs sm:text-sm border-t border-wellness-200/50">
      <div className="max-w-4xl mx-auto space-y-4">
        <p className="text-footer-text/60 text-[11px] sm:text-xs leading-relaxed max-w-2xl mx-auto">
          <strong>Medical Disclaimer:</strong> The dietary and lifestyle guidance shared by Aishwarya Jat is intended for nutritional education and wellness support. It is not a substitute for clinical diagnosis, medical treatment, or prescription medicine. Always consult your qualified physician or endocrinologist before making any changes to your medication.
        </p>
        <p className="font-heading font-medium text-footer-text/80">
          &copy; {new Date().getFullYear()} Aishwarya Jat · Thyroid-Focused Nutritionist. All rights reserved.
        </p>
      </div>
    </footer>
  );
};
