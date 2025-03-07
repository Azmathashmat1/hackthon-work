import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Topbar from "./components/Topbar/topbar";
import Navbar from "./components/Navbar/navbar";
import Header from "./components/Header/header";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Hackathon Q2",
  description: "Generated by create next app",
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
        <Topbar />
        <div className="sticky top-0 z-50"><Navbar /></div>
        <div className="sticky top-16 z-50 bg-white"><Header /></div>
        <main>
        {children}
        </main>
      </body>
    </html>
  );
}
