import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

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
      <body className={inter.className}>{children}</body>
    </html>
  );
}
