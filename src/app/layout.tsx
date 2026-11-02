import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  title: "Aishwarya Jat · Thyroid-Focused Nutritionist & Hormone Wellness",
  description:
    "Discover how Aishwarya Jat, a Thyroid-Focused Nutritionist, helps women manage thyroid symptoms, boost energy, and achieve healthy weight management through personalised nutrition.",
  openGraph: {
    title: "Aishwarya Jat · Thyroid-Focused Nutritionist",
    description:
      "Discover how Aishwarya Jat helps women manage thyroid symptoms, boost energy, and achieve sustainable weight management through personalised nutrition.",
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
    <html lang="en" className="scroll-smooth antialiased">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Outfit:wght@400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen bg-background text-foreground font-sans antialiased selection:bg-wellness-100 selection:text-wellness-900 overflow-x-hidden">
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
