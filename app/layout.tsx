import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Just_Beard | Modern Lumber Beard Oil",
  description:
    "Luxury minimal product page for Just_Beard Modern Lumber beard oil with mobile-first conversion copy, a warm editorial palette, and a faster WhatsApp order flow.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#dcc2a0",
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
