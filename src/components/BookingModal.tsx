"use client";

import React, { useState } from "react";
import { X, CheckCircle2, ShieldCheck, Clock, ArrowRight, User, Phone, Mail } from "lucide-react";

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const BookingModal: React.FC<BookingModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    condition: "Thyroid & Fatigue Management",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Allow CRM lead tracker to capture before closing
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 800);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setFormData({
      name: "",
      phone: "",
      email: "",
      condition: "Thyroid & Fatigue Management",
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm transition-opacity duration-200">
      <div
        className="relative w-full max-w-lg bg-background rounded-3xl shadow-2xl border border-wellness-200 overflow-hidden transition-all duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header in Wellness 900 */}
        <div className="bg-wellness-900 text-white p-6 sm:p-7 relative">
          <button
            onClick={onClose}
            className="absolute top-5 right-5 w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          <span className="inline-block text-xs font-bold uppercase tracking-wider text-wellness-200 bg-white/10 px-3 py-1 rounded-full border border-white/20 mb-2">
            100% Free Consultation
          </span>
          <h3 className="font-heading text-xl sm:text-2xl font-extrabold text-white">
            Book Your Free Consultation
          </h3>
          <p className="text-xs sm:text-sm text-wellness-100/90 mt-1">
            Personalised Thyroid & Fatigue Guidance with Aishwarya Jat
          </p>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 bg-white">
          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Full Name */}
              <div>
                <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-1.5 font-heading">
                  Full Name *
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                    <User className="w-4 h-4" />
                  </div>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    required
                    placeholder="Enter your full name"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="w-full pl-10 pr-4 py-3 bg-wellness-50/50 border border-wellness-200 focus:border-wellness-600 focus:bg-white focus:outline-hidden rounded-xl text-sm sm:text-base text-slate-900 transition"
                  />
                </div>
              </div>

              {/* Phone / WhatsApp */}
              <div>
                <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-1.5 font-heading">
                  WhatsApp Number *
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                    <Phone className="w-4 h-4" />
                  </div>
                  <input
                    type="tel"
                    name="phone"
                    id="phone"
                    required
                    placeholder="e.g. 9876543210"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    className="w-full pl-10 pr-4 py-3 bg-wellness-50/50 border border-wellness-200 focus:border-wellness-600 focus:bg-white focus:outline-hidden rounded-xl text-sm sm:text-base text-slate-900 transition"
                  />
                </div>
              </div>

              {/* Email Address */}
              <div>
                <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-1.5 font-heading">
                  Email Address *
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                    <Mail className="w-4 h-4" />
                  </div>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    required
                    placeholder="you@example.com"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="w-full pl-10 pr-4 py-3 bg-wellness-50/50 border border-wellness-200 focus:border-wellness-600 focus:bg-white focus:outline-hidden rounded-xl text-sm sm:text-base text-slate-900 transition"
                  />
                </div>
              </div>

              {/* Focus Area */}
              <div>
                <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-1.5 font-heading">
                  Primary Concern
                </label>
                <select
                  name="condition"
                  id="condition"
                  value={formData.condition}
                  onChange={(e) =>
                    setFormData({ ...formData, condition: e.target.value })
                  }
                  className="w-full px-4 py-3 bg-wellness-50/50 border border-wellness-200 focus:border-wellness-600 focus:bg-white focus:outline-hidden rounded-xl text-sm sm:text-base text-slate-900 transition"
                >
                  <option value="Thyroid Symptoms & Exhaustion">
                    Thyroid Symptoms & Exhaustion
                  </option>
                  <option value="Healthy Weight Management">
                    Stubborn Weight Management
                  </option>
                  <option value="Hair Fall, Dull Skin & Mood Swings">
                    Hair Fall, Dull Skin & Mood Swings
                  </option>
                  <option value="PCOS & Hormonal Imbalance">
                    PCOS & Hormonal Imbalance
                  </option>
                </select>
              </div>

              {/* Submit Button with high-contrast red-to-rose gradient */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 sm:py-4 bg-gradient-to-r from-red-800 to-rose-700 hover:from-red-900 hover:to-rose-800 disabled:opacity-70 text-white font-heading font-extrabold text-base sm:text-lg rounded-full shadow-lg shadow-red-900/30 transition-all duration-200 cursor-pointer flex items-center justify-center gap-2 active:scale-98"
                >
                  {isSubmitting ? (
                    <span>Reserving Slot...</span>
                  ) : (
                    <>
                      <span>Book Free Consultation</span>
                      <ArrowRight className="w-5 h-5" />
                    </>
                  )}
                </button>
              </div>

              {/* Trust Badges */}
              <div className="flex items-center justify-between text-[11px] sm:text-xs text-slate-500 pt-2 font-medium">
                <span className="flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-wellness-600" />
                  Your details are 100% confidential
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5 text-amber-500" />
                  Limited slots every week
                </span>
              </div>
            </form>
          ) : (
            <div className="text-center py-6">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-wellness-100 text-wellness-700 flex items-center justify-center shadow-inner">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h4 className="text-2xl font-heading font-bold text-slate-900 mb-2">
                Consultation Request Received!
              </h4>
              <p className="text-sm sm:text-base text-slate-600 max-w-sm mx-auto mb-6 leading-relaxed">
                Thank you, <strong className="text-slate-900">{formData.name}</strong>. Aishwarya&apos;s team will reach out via WhatsApp / Call to confirm your appointment.
              </p>
              <button
                type="button"
                onClick={handleReset}
                className="px-8 py-3 bg-wellness-800 text-white font-semibold text-sm rounded-full hover:bg-wellness-900 transition shadow-md"
              >
                Close
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
