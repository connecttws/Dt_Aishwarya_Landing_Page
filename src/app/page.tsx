"use client";

import React, { useState } from "react";
import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
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
    <main className="min-h-screen bg-background text-foreground font-sans antialiased flex flex-col overflow-x-hidden pb-16 md:pb-0">
      {/* 1. Header with branding & CTA */}
      <Header onOpenBooking={handleOpenBooking} />

      <div className="flex-1">
        {/* 2. Hero Section: Headline, Subheadline, [ VSL VIDEO HERE ], Book Your Free Consultation, Badges */}
        <HeroSection onOpenBooking={handleOpenBooking} />

        {/* 3. Sound Familiar: Symptoms & Empathy statement */}
        <SoundFamiliarSection />

        {/* 4. How It Works: your struggles, your story (01 Identify, 02 PERSONALISE, 03 Sustain) + CTA */}
        <HowItWorksSection onOpenBooking={handleOpenBooking} />

        {/* 5. Meet Aishwarya: THYROID FOCUSED NUTRITIONIST, [Photo], Bio, Mission */}
        <MeetAishwaryaSection />

        {/* 6. Real Women, Real Change: [Testimonial video or screenshot 1 / 2 / 3] */}
        <TestimonialsSection />

        {/* 7. FAQs: 3 Exact FAQs */}
        <FaqSection />

        {/* 8. Final Urgency CTA: How many more years will you live tired and frustrated? */}
        <FinalCtaSection onOpenBooking={handleOpenBooking} />
      </div>

      {/* 9. Footer */}
      <Footer />

      {/* 10. Sticky Bottom Bar on Mobile */}
      <StickyBottomBar onOpenBooking={handleOpenBooking} />

      {/* 11. Interactive Consultation Booking Modal with CRM Lead Tracker */}
      <BookingModal isOpen={isBookingOpen} onClose={handleCloseBooking} />
    </main>
  );
}
