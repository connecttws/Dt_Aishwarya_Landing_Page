"use client";

import React, { useState } from "react";
import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { TrustStrip } from "@/components/TrustStrip";
import { SoundFamiliarSection } from "@/components/SoundFamiliarSection";
import { HowItWorksSection } from "@/components/HowItWorksSection";
import { MeetAishwaryaSection } from "@/components/MeetAishwaryaSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { FaqSection } from "@/components/FaqSection";
import { FinalCtaSection } from "@/components/FinalCtaSection";
import { Footer } from "@/components/Footer";
import { BookingModal } from "@/components/BookingModal";
import { StickyBottomBar } from "@/components/StickyBottomBar";

export default function Home() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  const handleOpenBooking = () => {
    setIsBookingOpen(true);
  };

  const handleCloseBooking = () => {
    setIsBookingOpen(false);
  };

  return (
    <main className="min-h-[100dvh] bg-[#fdfbf7] text-[#022c22] font-sans antialiased selection:bg-emerald-100 selection:text-[#064e3b] flex flex-col overflow-x-hidden pb-16 md:pb-0">
      {/* 1. Header with branding & CTA */}
      <Header onOpenBooking={handleOpenBooking} />

      <div className="flex-1">
        {/* 2. Hero Section: Headline, Subheadline, Rotating Conic Gradient Badges, [ VSL VIDEO HERE ], Book Your Free Consultation */}
        <HeroSection onOpenBooking={handleOpenBooking} />

        {/* 3. Meenakshi Style Infinite Trust Strip Marquee */}
        <TrustStrip />

        {/* 4. Sound Familiar: Symptoms with Organic Decor & Empathy Validation Box */}
        <SoundFamiliarSection />

        {/* 5. How It Works: 01 Identify, 02 PERSONALISE, 03 Sustain + CTA */}
        <HowItWorksSection onOpenBooking={handleOpenBooking} />

        {/* 6. Meet Aishwarya: Dark Emerald Aesthetic, Photo Frame, 5+ Yrs Bio & Mission */}
        <MeetAishwaryaSection />

        {/* 7. Real Women, Real Change: [Testimonial video or screenshot 1 / 2 / 3] */}
        <TestimonialsSection />

        {/* 8. FAQs: Accordion for 3 exact FAQs */}
        <FaqSection />

        {/* 9. Final Urgency Callout & CTA */}
        <FinalCtaSection onOpenBooking={handleOpenBooking} />
      </div>

      {/* 10. Footer */}
      <Footer />

      {/* 11. Sticky Bottom Bar on Mobile */}
      <StickyBottomBar onOpenBooking={handleOpenBooking} />

      {/* 12. Interactive Consultation Booking Modal */}
      <BookingModal isOpen={isBookingOpen} onClose={handleCloseBooking} />
    </main>
  );
}
