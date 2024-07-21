import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import GTM from './components/gtm';

import NavBar from "./components/navbar/navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Thomas Ravetto",
  description: "Thomas Ravetto portfolio website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <GTM/>
      <body className={inter.className + 'tracking-tighter'}>
        <NavBar/>
        <div>
          {children}
        </div>
        </body>
    </html>
  );
}
