import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ variable: "--font-inter", subsets: ["latin"], display: "swap" });
const cormorant = Cormorant_Garamond({ variable: "--font-cormorant", subsets: ["latin"], weight: ["400", "500", "600", "700"], display: "swap" });

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://panagiotagrosdouli.github.io/personalportfolio";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: "Panagiota Grosdouli — Robotics Research Portfolio", template: "%s | Panagiota Grosdouli" },
  description: "Academic research portfolio focused on robust autonomy, visual-inertial odometry, adaptive SLAM, uncertainty-aware sensor fusion, risk-aware navigation, UAV autonomy, computer vision, and AI for robotics.",
  applicationName: "Panagiota Grosdouli Academic Homepage",
  authors: [{ name: "Panagiota Grosdouli" }],
  creator: "Panagiota Grosdouli",
  keywords: ["Panagiota Grosdouli", "robotics", "SLAM", "visual-inertial odometry", "sensor fusion", "risk-aware robotics", "UAV autonomy", "computer vision", "AI for robotics", "autonomous systems"],
  alternates: { canonical: "/" },
  openGraph: { title: "Panagiota Grosdouli — Robotics Research Portfolio", description: "Research portfolio focused on robust autonomy, VIO, adaptive SLAM, uncertainty-aware sensor fusion, risk-aware navigation, and AI for robotics.", url: "/", siteName: "Panagiota Grosdouli Academic Homepage", images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "Panagiota Grosdouli robotics research portfolio" }], type: "website" },
  twitter: { card: "summary_large_image", title: "Panagiota Grosdouli — Robotics Research Portfolio", description: "Robust autonomy, VIO, SLAM, sensor fusion, risk-aware navigation, and AI for robotics.", images: ["/opengraph-image"] },
  robots: { index: true, follow: true },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Panagiota Grosdouli",
  email: "mailto:p.g2a15@gmail.com",
  url: siteUrl,
  sameAs: ["https://github.com/panagiotagrosdouli"],
  knowsAbout: ["Robotics", "SLAM", "Visual-Inertial Odometry", "Sensor Fusion", "Risk-Aware Navigation", "Computer Vision", "AI for Robotics"],
  affiliation: { "@type": "CollegeOrUniversity", name: "Democritus University of Thrace" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${cormorant.variable} h-full scroll-smooth antialiased`} suppressHydrationWarning>
      <body className="min-h-full flex flex-col">
        <script type="application/ld+json" suppressHydrationWarning dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        {children}
      </body>
    </html>
  );
}
