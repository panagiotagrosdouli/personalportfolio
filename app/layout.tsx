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

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://portfoliopanagiotas.base44.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Panagiota Grosdouli | Robotics Research",
    template: "%s | Panagiota Grosdouli",
  },
  description:
    "Research homepage of Panagiota Grosdouli, focused on robotics, trajectory prediction, autonomous systems, uncertainty-aware navigation, and intelligent transportation.",
  applicationName: "Panagiota Grosdouli Research Portfolio",
  authors: [{ name: "Panagiota Grosdouli" }],
  creator: "Panagiota Grosdouli",
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
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Panagiota Grosdouli | Robotics Research",
    description:
      "Robotics research homepage focused on trajectory prediction, autonomous systems, and decision making under uncertainty.",
    url: "/",
    siteName: "Panagiota Grosdouli Research Portfolio",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Panagiota Grosdouli robotics research portfolio",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Panagiota Grosdouli | Robotics Research",
    description:
      "Trajectory prediction, uncertainty-aware navigation, and safer autonomous systems.",
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
