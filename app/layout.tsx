import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Just_Beard | Modern Lumber Beard Oil",
  description:
    "Conversion-focused product page for Just_Beard Modern Lumber beard oil with updated product photography, a Rs. 399 offer price, responsive mobile and desktop layouts, and direct WhatsApp checkout.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#d2b48a",
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
