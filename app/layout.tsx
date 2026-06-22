import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
  title: "Panagiota Grosdouli | Robotics & AI Portfolio",
  description:
    "Research portfolio focused on robotics, autonomous navigation, trajectory prediction, machine learning, and intelligent systems.",
  keywords: [
    "Panagiota Grosdouli",
    "Robotics",
    "Artificial Intelligence",
    "Autonomous Navigation",
    "Machine Learning",
    "Trajectory Prediction",
  ],
  authors: [{ name: "Panagiota Grosdouli" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
