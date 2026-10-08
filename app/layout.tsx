import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://madina-batoshova-portfolio.jamshidzayniyev19082.chatgpt.site"),
  title: {
    default: "Madina Batoshova — Frontend Software Engineer",
    template: "%s — Madina Batoshova",
  },
  description: "Frontend software engineer building polished React and Next.js products, multilingual platforms, operational CRMs, and accessible interfaces.",
  authors: [{ name: "Madina Batoshova" }],
  keywords: ["Frontend Software Engineer", "React Developer", "Next.js Developer", "TypeScript", "Product Engineer", "Uzbekistan"],
  openGraph: {
    type: "website",
    title: "Madina Batoshova — Frontend Software Engineer",
    description: "Thoughtful React and Next.js products, multilingual platforms, operational CRMs, and accessible interfaces.",
    url: "https://madina-batoshova-portfolio.jamshidzayniyev19082.chatgpt.site",
    siteName: "Madina Batoshova",
    images: [{ url: "/og.png", width: 1672, height: 941, alt: "Madina Batoshova — Frontend Software Engineer" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Madina Batoshova — Frontend Software Engineer",
    description: "Thoughtful React and Next.js products, multilingual platforms, operational CRMs, and accessible interfaces.",
    images: ["/og.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
