import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../../styles/globals.css"
import { TopBar, LeftSideBar } from "@/components/shared";


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
        <main className="flex flex-row h-screen">
          <LeftSideBar />
          <div className="flex-grow overflow-y-auto">
            {children}
          </div>
        </main>
      </body>
    </html>
  );
}
