"use client";

import React, { useState } from "react";
import { Play, Volume2, Sparkles, CheckCircle2 } from "lucide-react";

interface VslPlayerProps {
  onOpenBooking: () => void;
}

export const VslPlayer: React.FC<VslPlayerProps> = ({ onOpenBooking }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="relative w-full max-w-3xl mx-auto rounded-2xl overflow-hidden shadow-2xl border-4 border-white aspect-video bg-black group mt-4 md:mt-6">
      {!isPlaying ? (
        <div
          className="absolute inset-0 w-full h-full cursor-pointer z-10 flex flex-col items-center justify-center p-4 sm:p-8 bg-gradient-to-br from-wellness-900 via-wellness-800 to-wellness-950 text-white select-none"
          onClick={() => setIsPlaying(true)}
        >
          {/* Subtle Ambient Radial Glow */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--color-wellness-500)_0%,_transparent_70%)] opacity-20 pointer-events-none" />

          {/* VSL Badge */}
          <div className="mb-4 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs sm:text-sm font-semibold text-wellness-100">
            <span className="w-2 h-2 rounded-full bg-red-500 animate-ping" />
            <span>[ VSL VIDEO HERE ]</span>
          </div>

          {/* Play Button */}
          <div className="w-16 h-16 sm:w-20 sm:h-20 bg-wellness-600/90 hover:bg-wellness-500 rounded-full flex items-center justify-center backdrop-blur-sm shadow-xl shadow-wellness-900/40 transition-transform group-hover:scale-110 mb-4">
            <Play className="w-7 h-7 sm:w-8 sm:h-8 text-white ml-1 fill-white" />
          </div>

          <p className="max-w-xl text-base sm:text-lg md:text-xl font-bold text-white/95 leading-snug drop-shadow-sm text-center">
            Watch: Why Daily Thyroid Medicine Leaves You Fatigued & How Personalised Nutrition Changes It
          </p>

          <div className="mt-4 flex items-center gap-3 text-xs sm:text-sm text-wellness-200/90 font-medium">
            <span className="inline-flex items-center gap-1">
              <Volume2 className="w-3.5 h-3.5" /> Audio On
            </span>
            <span>•</span>
            <span>Click to watch presentation</span>
          </div>
        </div>
      ) : (
        <div className="absolute inset-0 w-full h-full flex flex-col items-center justify-center p-6 text-center bg-wellness-950 text-white z-10">
          <div className="max-w-md bg-wellness-900/90 p-6 rounded-2xl border border-wellness-700 shadow-xl">
            <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-wellness-500/20 text-wellness-300 flex items-center justify-center">
              <CheckCircle2 className="w-6 h-6 text-wellness-400" />
            </div>
            <h4 className="text-white font-heading font-bold text-lg mb-2">
              Video Player Ready
            </h4>
            <p className="text-wellness-100/80 text-sm mb-5 leading-relaxed">
              Embed your Wistia, YouTube, Vimeo, or MP4 video here. Ready to play your exact video presentation seamlessly.
            </p>
            <button
              onClick={(e) => {
                e.stopPropagation();
                onOpenBooking();
              }}
              className="w-full py-3 bg-red-700 hover:bg-red-800 text-white font-bold text-sm rounded-xl transition cursor-pointer shadow-lg"
            >
              Book Your Free Consultation Now
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
