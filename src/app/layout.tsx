import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
  display: "swap",
  weight: ["500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Aishwarya Jat · Thyroid-Focused Nutritionist",
  description:
    "Discover how Aishwarya Jat, a Thyroid-Focused Nutritionist, helps women manage thyroid symptoms, boost their energy, and work towards healthy weight management through personalised nutrition.",
  openGraph: {
    title: "Aishwarya Jat · Thyroid-Focused Nutritionist",
    description:
      "Discover how Aishwarya Jat helps women manage thyroid symptoms, boost their energy, and work towards healthy weight management through personalised nutrition.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aishwarya Jat · Thyroid-Focused Nutritionist",
    description:
      "Personalised nutrition for thyroid symptom management and energy restoration.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${plusJakartaSans.variable} scroll-smooth antialiased`}
    >
      <body className="bg-white text-[#415850] font-sans antialiased selection:bg-[#E8F5EF] selection:text-[#0D5C46] min-h-[100dvh] overflow-x-hidden">
        {children}
        <Script
          src="/crm-lead-tracker.js"
          data-crm-key="bcl_pub_dt_aishwarya_landing_page"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}

