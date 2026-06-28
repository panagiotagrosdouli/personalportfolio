import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Panagiota Grosdouli | Robotics Research",
  description:
    "Research homepage of Panagiota Grosdouli, focused on robotics, trajectory prediction, autonomous systems, uncertainty-aware navigation, and intelligent transportation.",
  authors: [{ name: "Panagiota Grosdouli" }],
  keywords: [
    "Panagiota Grosdouli",
    "robotics",
    "trajectory prediction",
    "autonomous systems",
    "risk-aware navigation",
    "visual-inertial navigation",
    "intelligent transportation",
    "machine learning",
  ],
  openGraph: {
    title: "Panagiota Grosdouli | Robotics Research",
    description:
      "Robotics research homepage focused on trajectory prediction, autonomous systems, and decision making under uncertainty.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${cormorant.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
