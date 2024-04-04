import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../../styles/globals.css"
import { TopBar, LeftSideBar, BottomBar } from "@/components/shared";
import { Fragment } from 'react';


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
        <TopBar />
        <main className="flex flex-col h-full">
          <LeftSideBar />
          <section className="main-container">
            <div className="max-w-screen-2xl w-full mx-auto">
              {children}
            </div>
          </section>
          <BottomBar />
        </main>
      </body>
    </html>
  );
}
