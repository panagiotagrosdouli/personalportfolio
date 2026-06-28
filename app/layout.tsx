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

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://panagiota-research-portfolio.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Panagiota Grosdouli — Trajectory Prediction & Autonomous Systems",
    template: "%s | Panagiota Grosdouli",
  },
  description:
    "Research homepage of Panagiota Grosdouli, focused on trajectory prediction, autonomous systems, risk-aware navigation, robotics, and intelligent transportation.",
  applicationName: "Panagiota Grosdouli Research Homepage",
  authors: [{ name: "Panagiota Grosdouli" }],
  creator: "Panagiota Grosdouli",
  keywords: [
    "Panagiota Grosdouli",
    "trajectory prediction",
    "autonomous systems",
    "human motion prediction",
    "risk-aware navigation",
    "robotics",
    "intelligent transportation",
    "machine learning",
    "autonomous driving",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Panagiota Grosdouli — Trajectory Prediction & Autonomous Systems",
    description:
      "Research homepage focused on human motion prediction, autonomous systems, risk-aware navigation, and safer intelligent transportation.",
    url: "/",
    siteName: "Panagiota Grosdouli Research Homepage",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Panagiota Grosdouli research homepage for trajectory prediction and autonomous systems",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Panagiota Grosdouli — Trajectory Prediction & Autonomous Systems",
    description:
      "Human motion prediction, risk-aware navigation, and safer autonomous systems.",
    images: ["/opengraph-image"],
  },
  robots: {
    index: true,
    follow: true,
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
