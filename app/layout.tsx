import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ variable: "--font-inter", subsets: ["latin"], display: "swap" });
const cormorant = Cormorant_Garamond({ variable: "--font-cormorant", subsets: ["latin"], weight: ["400", "500", "600", "700"], display: "swap" });

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://panagiotagrosdouli.github.io/personalportfolio";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Panagiota Grosdouli — Diploma Thesis",
  description: "Diploma thesis research on trajectory prediction of vulnerable road users at smart intersections.",
  applicationName: "Panagiota Grosdouli Diploma Thesis",
  authors: [{ name: "Panagiota Grosdouli" }],
  creator: "Panagiota Grosdouli",
  keywords: ["Panagiota Grosdouli", "trajectory prediction", "vulnerable road users", "smart intersections", "intelligent mobility"],
  alternates: { canonical: "/" },
  robots: { index: true, follow: true },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ScholarlyArticle",
  name: "Trajectory Prediction of Vulnerable Road Users at Smart Intersections",
  author: { "@type": "Person", name: "Panagiota Grosdouli" },
  about: ["Trajectory Prediction", "Vulnerable Road Users", "Smart Intersections"],
  affiliation: { "@type": "CollegeOrUniversity", name: "Democritus University of Thrace" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={inter.variable + " " + cormorant.variable + " h-full scroll-smooth antialiased"}>
      <body className="min-h-full">
        <script type="application/ld+json" suppressHydrationWarning dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        {children}
      </body>
    </html>
  );
}
