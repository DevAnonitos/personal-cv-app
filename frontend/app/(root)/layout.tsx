import React from 'react';
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import ThemeProvider from './provider';
import { Toaster } from '@/components/ui/toaster';
import { SpeedInsights } from "@vercel/speed-insights/next";
import { TopBar, LeftSideBar, BottomBar, WebVitals } from "@/components/shared";

import "../../styles/globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  generator: "Next.js",
  applicationName: "PortfolioAppCV",
  title: "DevAnonitos Portfolio",
  keywords: ['Next.js', 'React', 'TypeScript'],
  description: "Build a project profile to CV",
  category: "Development",
  creator: "DevAnonitos",
  authors: [{ name: "BaoNguyen" }]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider attribute='class' defaultTheme='system'>
          <TopBar />
          <main className="flex flex-col h-full">
            <LeftSideBar />
            <section className="main-container dark:bg-[#161622]">
              <div className="main-container_content">
                {children}
              </div>
              <BottomBar />
            </section>
            <Toaster />
          </main>
          <SpeedInsights />
        </ThemeProvider>
      </body>
    </html>
  );
};
