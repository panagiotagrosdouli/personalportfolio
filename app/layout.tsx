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

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://panagiotagrosdouli.github.io/personalportfolio";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Panagiota Grosdouli — PhD Robotics Research Portfolio",
    template: "%s | Panagiota Grosdouli",
  },
  description:
    "PhD-oriented robotics research portfolio of Panagiota Grosdouli, focused on robust autonomy, visual-inertial odometry, adaptive SLAM, uncertainty-aware sensor fusion, risk-aware navigation, and intelligent mobility safety.",
  applicationName: "Panagiota Grosdouli Academic Homepage",
  authors: [{ name: "Panagiota Grosdouli" }],
  creator: "Panagiota Grosdouli",
  keywords: [
    "Panagiota Grosdouli",
    "robotics PhD portfolio",
    "robust autonomy",
    "visual-inertial odometry",
    "VIO",
    "SLAM",
    "adaptive SLAM",
    "sensor fusion",
    "uncertainty-aware autonomy",
    "risk-aware navigation",
    "trajectory prediction",
    "vulnerable road user safety",
    "intelligent mobility",
    "safe autonomous systems",
    "ROS 2",
    "computer vision",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Panagiota Grosdouli — PhD Robotics Research Portfolio",
    description:
      "Research portfolio focused on robust autonomy, VIO, adaptive SLAM, uncertainty-aware sensor fusion, risk-aware navigation, and intelligent mobility safety.",
    url: "/",
    siteName: "Panagiota Grosdouli Academic Homepage",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Panagiota Grosdouli PhD robotics research portfolio",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Panagiota Grosdouli — PhD Robotics Research Portfolio",
    description:
      "Robust autonomy, VIO, adaptive SLAM, uncertainty-aware sensor fusion, risk-aware navigation, and intelligent mobility safety.",
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
