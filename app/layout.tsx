import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "BozemanPV | Sport Performance & Executive Function Coaching",
  description:
    "BozemanPV provides executive function coaching, sport and performance consultation, and executive coaching for professionals, athletes, students, and high performers.",
  keywords: [
    "Executive Function Coaching",
    "Executive Coaching",
    "Sport Performance Consultation",
    "Sport Psychology",
    "BozemanPV",
    "Performance Coaching",
    "Austin Executive Coach",
    "Houston Executive Coach",
  ],
  openGraph: {
    title: "BozemanPV | Sport Performance & Executive Function Coaching",
    description:
      "BozemanPV provides executive function coaching, sport and performance consultation, and executive coaching for professionals, athletes, students, and high performers.",
    url: "https://www.bozemanpv.com",
    siteName: "BozemanPV",
    images: [
      {
        url: "/logoheaderVECTOR.svg",
        width: 1200,
        height: 630,
        alt: "BozemanPV",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  icons: {
    icon: "/BP_VECTOR.svg",
    shortcut: "/BP_VECTOR.svg",
    apple: "/BP_VECTOR.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}