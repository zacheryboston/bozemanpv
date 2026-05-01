import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.bozemanpv.com"),
  title: "Bozeman Performance",
  description:
    "Executive function coaching and performance psychology for driven professionals.",
  openGraph: {
    title: "Bozeman Performance",
    description:
      "Executive function coaching and performance psychology for driven professionals.",
    url: "https://www.bozemanpv.com",
    siteName: "Bozeman Performance",
    images: [
      {
        url: "/BSPP-Logo/BPV-V2/WEB/BP-BOZEMAN-PERFORMANCE-PNG-V2.png",
        width: 1200,
        height: 630,
        alt: "Bozeman Performance",
      },
    ],
    type: "website",
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