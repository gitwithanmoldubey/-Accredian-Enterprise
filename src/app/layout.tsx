import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-display",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Accredian Enterprise | Next-Gen Expertise For Your Enterprise",
  description: "Empower your enterprise with Accredian's world-class professional training and certification programs in Product Management, AI, and Leadership.",
  keywords: ["Enterprise Training", "Product Management", "AI Certification", "Leadership Programs", "Accredian"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body className={`${inter.variable} ${outfit.variable} min-h-full flex flex-col antialiased`}>
        {children}
      </body>
    </html>
  );
}
