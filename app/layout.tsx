import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Bozeman Performance",
  description:
    "Executive function coaching and performance psychology for high-level individuals.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}