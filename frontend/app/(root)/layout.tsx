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
        <main className="flex flex-col">
          <LeftSideBar />
            <div className="pt-16 lg:pl-64 flex w-full">
              {children}
            </div>
        </main>
        <BottomBar />
      </body>
    </html>
  );
}
