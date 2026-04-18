import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.bozemanpv.com"),
  title: "Bozeman Performance",
  description: "Executive coaching and performance psychology for high-level professionals.",
  openGraph: {
    title: "Bozeman Performance",
    description: "Executive coaching and performance psychology for high-level professionals.",
    url: "https://www.bozemanpv.com",
    siteName: "Bozeman Performance",
    images: [
      {
        url: "/bplogo.png",
        width: 1200,
        height: 630,
        alt: "Bozeman Performance",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bozeman Performance",
    description: "Executive coaching and performance psychology for high-level professionals.",
    images: ["/bplogo.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}