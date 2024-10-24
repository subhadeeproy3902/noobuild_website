import type { Metadata } from "next";
import { Bricolage_Grotesque } from "next/font/google";
import "./globals.css";
import Header from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import ClientThemeProvider from "./theme-provider";

const inter = Bricolage_Grotesque({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "NooBuild Community - Innovate, Collaborate, Elevate",
  description:
    "At NooBuild, we unite tech enthusiasts to innovate, collaborate, and grow. Join us to shape the future of tech!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>
          <Header />
          {children}
          <Analytics />
          <SpeedInsights />
          <Footer />
      </body>
    </html>
  );
}
