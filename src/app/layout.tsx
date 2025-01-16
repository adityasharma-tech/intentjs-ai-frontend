import type { Metadata } from "next";
import { Geist, Geist_Mono, Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const poppinsFont = Poppins({
  weight: "500",
  subsets: ["latin"]
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Your AI-Powered Guide to Mastering IntentJS",
  description: "Discover the power of IntentJS with AI assistance. Whether you're exploring its transformers, providers, or helpers, our intelligent assistant provides concise, accurate, and context-aware answers. Navigate the framework with ease and master IntentJS like a pro!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppinsFont.className} min-h-screen dark`}
      >
        <Header/>
        {children}
      </body>
    </html>
  );
}
