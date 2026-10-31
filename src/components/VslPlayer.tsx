"use client";

import React, { useState } from "react";
import { Play, Volume2, Sparkles, CheckCircle2 } from "lucide-react";

interface VslPlayerProps {
  onOpenBooking: () => void;
}

export const VslPlayer: React.FC<VslPlayerProps> = ({ onOpenBooking }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="relative w-full max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-2xl border-2 sm:border-4 border-white/80 bg-[#0F2922] transition-all">
      {/* Decorative Glow */}
      <div className="absolute -inset-1 bg-gradient-to-r from-[#0D5C46]/20 via-[#E0624D]/20 to-[#0D5C46]/20 blur-xl opacity-50 -z-10" />

      {/* 16:9 Aspect Ratio Container */}
      <div className="relative aspect-video w-full flex items-center justify-center bg-gradient-to-br from-[#0F2922] via-[#143B31] to-[#0A1F19] text-white">
        {!isPlaying ? (
          <div className="relative w-full h-full flex flex-col items-center justify-center px-4 sm:px-8 text-center cursor-pointer group" onClick={() => setIsPlaying(true)}>
            {/* Background Texture & Ambient Lights */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white/5 via-transparent to-black/40 pointer-events-none" />

            {/* Video Badge / VSL Marker */}
            <div className="mb-4 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs sm:text-sm font-medium text-emerald-200">
              <span className="w-2 h-2 rounded-full bg-[#E0624D] animate-ping" />
              <span>[ VSL VIDEO HERE ]</span>
            </div>

            {/* Play Button with pulse animation */}
            <div className="relative mb-5 flex items-center justify-center">
              <div className="absolute w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-[#E0624D]/20 animate-ping" />
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-tr from-[#E0624D] to-[#F27863] text-white flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-300">
                <Play className="w-7 h-7 sm:w-9 sm:h-9 fill-white translate-x-0.5" />
              </div>
            </div>

            {/* Video Pitch Headline inside player */}
            <p className="max-w-xl text-base sm:text-lg md:text-xl font-semibold text-white/95 leading-snug drop-shadow-sm">
              Watch: Why Daily Thyroid Medicine Leaves You Fatigued & How Personalised Nutrition Changes It
            </p>

            <div className="mt-4 flex items-center gap-3 text-xs sm:text-sm text-emerald-200/80">
              <span className="inline-flex items-center gap-1">
                <Volume2 className="w-3.5 h-3.5" /> Audio On
              </span>
              <span>•</span>
              <span>Click to play presentation</span>
            </div>
          </div>
        ) : (
          <div className="relative w-full h-full flex flex-col items-center justify-center p-6 text-center bg-black">
            <div className="max-w-md bg-[#132A24] p-6 rounded-2xl border border-emerald-800/60 shadow-xl">
              <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-emerald-500/20 text-emerald-300 flex items-center justify-center">
                <CheckCircle2 className="w-6 h-6 text-emerald-400" />
              </div>
              <h4 className="text-white font-bold text-lg mb-2">VSL Video Ready</h4>
              <p className="text-emerald-100/80 text-sm mb-4">
                This container is prepared for your video embed (YouTube, Wistia, Vimeo, or MP4). Ready to link your direct video URL anytime.
              </p>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onOpenBooking();
                }}
                className="w-full py-3 bg-[#E0624D] hover:bg-[#C84F3B] text-white font-bold text-sm rounded-xl transition cursor-pointer"
              >
                Book Your Free Consultation Now
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Under-player trust strip */}
      <div className="bg-[#0A1F19] px-4 py-2.5 sm:py-3 flex items-center justify-between text-emerald-100/70 text-xs sm:text-sm border-t border-emerald-900/40">
        <span className="flex items-center gap-1.5">
          <Sparkles className="w-3.5 h-3.5 text-[#E0624D]" />
          Thyroid-Focused Clinical Insights
        </span>
        <span className="font-medium text-emerald-200/90">
          Personalised Nutrition Guidance
        </span>
      </div>
    </div>
  );
};

