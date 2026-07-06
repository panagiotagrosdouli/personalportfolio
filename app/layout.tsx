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
    default: "Panagiota Grosdouli — Robotics Research Profile",
    template: "%s | Panagiota Grosdouli",
  },
  description:
    "Academic robotics research profile of Panagiota Grosdouli, focused on human-aware robotics, trajectory prediction, robotic perception, robot learning, planning under uncertainty, and safe autonomous systems.",
  applicationName: "Panagiota Grosdouli Academic Homepage",
  authors: [{ name: "Panagiota Grosdouli" }],
  creator: "Panagiota Grosdouli",
  keywords: [
    "Panagiota Grosdouli",
    "robotics",
    "robot learning",
    "human-aware robotics",
    "trajectory prediction",
    "human motion prediction",
    "robotic perception",
    "motion planning",
    "reinforcement learning",
    "computer vision",
    "safe autonomous systems",
    "SLAM",
    "ROS 2",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Panagiota Grosdouli — Robotics Research Profile",
    description:
      "Academic research profile focused on human-aware robotics, robot learning, trajectory prediction, robotic perception, planning under uncertainty, and safe autonomy.",
    url: "/",
    siteName: "Panagiota Grosdouli Academic Homepage",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Panagiota Grosdouli robotics research profile",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Panagiota Grosdouli — Robotics Research Profile",
    description:
      "Human-aware robotics, robot learning, trajectory prediction, robotic perception, planning under uncertainty, and safe autonomy.",
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
