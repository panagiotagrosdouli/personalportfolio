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
  title: "Panagiota Grosdouli | Robotics, AI & Autonomous Systems",
  description:
    "Research portfolio of Panagiota Grosdouli, Electrical & Computer Engineering student working on robotics, autonomous navigation, vulnerable road user trajectory prediction, ROS2, reinforcement learning, and computer vision.",
  keywords: [
    "Panagiota Grosdouli",
    "Robotics",
    "Artificial Intelligence",
    "Autonomous Systems",
    "ROS2",
    "Reinforcement Learning",
    "Trajectory Prediction",
    "Computer Vision",
    "Autonomous Driving",
    "Electrical and Computer Engineering",
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
