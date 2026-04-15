import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "BozemanPV | Executive Function Coaching",
  description:
    "Executive function coaching for professionals, founders, and high performers who need sharper focus, stronger execution, and sustainable performance.",
  keywords: [
    "Executive Function Coaching",
    "Executive Coaching",
    "Performance Coaching",
    "BozemanPV",
    "Leadership Coaching",
    "Austin Executive Coach",
    "Houston Executive Coach",
  ],
  openGraph: {
    title: "BozemanPV | Executive Function Coaching",
    description:
      "Executive function coaching for professionals, founders, and high performers who need sharper focus, stronger execution, and sustainable performance.",
    url: "https://www.bozemanpv.com",
    siteName: "BozemanPV",
    images: [
      {
        url: "/bplogo.png",
        width: 1200,
        height: 630,
        alt: "BozemanPV",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  icons: {
    icon: "/bplogo.png",
    shortcut: "/bplogo.png",
    apple: "/bplogo.png",
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