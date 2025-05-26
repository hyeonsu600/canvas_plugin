import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
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
  title: "Canvas LMS Plugins",
  description: "Integrated Canvas LMS Plugin Environment",
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
        <header className="bg-gray-800 text-white p-4">
          <nav className="container mx-auto flex gap-4">
            <Link href="/" className="hover:text-gray-300">
              Home
            </Link>
            <Link href="/video-edit" className="hover:text-gray-300">
              Video Edit
            </Link>
            <Link href="/text-recognition" className="hover:text-gray-300">
              Text Recognition
            </Link>
            <Link href="/feedback" className="hover:text-gray-300">
              Feedback
            </Link>
            <Link href="/pdf-log" className="hover:text-gray-300">
              PDF Log
            </Link>
          </nav>
        </header>
        <main className="p-4">{children}</main>
      </body>
    </html>
  );
}
