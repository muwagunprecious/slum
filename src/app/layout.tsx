import type { Metadata, Viewport } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import { headers } from "next/headers";
import ClientComponent from "@/components/layouts/ClientComponents";
import BackToTop from "@/components/ui/BackToTopButton";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

// Viewport & Theme Color
export const viewport: Viewport = {
  themeColor: "#211812",
  width: "device-width",
  initialScale: 1,
};

// Metadata
export const metadata: Metadata = {
  metadataBase: new URL("https://www.adetunwase.com"),

  title: {
    default: "Slum Art Foundation — Building PET Bottle Schools Across Africa Through Art",
    template: "%s | Slum Art Foundation",
  },
  description:
    "Slum Art Foundation empowers children in African slums through creative art education and builds sustainable PET bottle schools across Africa. Support our My Freedom Day 147 CNN Reporter collection.",
  keywords: [
    "Slum Art Foundation",
    "Slum Art",
    "PET Bottle Schools Africa",
    "CNN My Freedom Day",
    "147 CNN Reporter Portraits",
    "Adetunwase Adenle",
    "art donations Africa",
    "Guinness World Records",
    "Ijora Badia Lagos",
    "circular economy architecture",
  ],
  authors: [{ name: "Slum Art Foundation", url: "https://slumart.org" }],
  creator: "Slum Art Foundation",
  publisher: "Slum Art Foundation",

  alternates: {
    canonical: "/",
  },

  // Open Graph
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://slumart.org",
    siteName: "Slum Art Foundation",
    title: "Slum Art Foundation — Building PET Bottle Schools Across Africa",
    description:
      "Transforming plastic waste into sustainable PET bottle schools and empowering slum children across Africa through art.",
    images: [
      {
        url: "/og-image.jpg", // 1200x630px image in /public
        width: 1200,
        height: 630,
        alt: "Adetunwase Adenle — Artist, Educator & Social Entrepreneur",
      },
    ],
  },

  // Twitter / X
  twitter: {
    card: "summary_large_image",
    title: "Adetunwase Adenle — Artist | Educator | Social Entrepreneur",
    description:
      "Artist, educator, and social entrepreneur using creativity and learning to support underserved communities.",
    images: ["/og-image.jpg"],
    creator: "@adetunwase360",
  },

  // Icons
  icons: {
    icon: [
      { url: "/favicon.ico" },
    ],
    shortcut: "/favicon.ico",
  },

  // PWA Manifest
  manifest: "/manifest.json",

  // Robots
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

// JSON-LD Structured Data
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Adetunwase Adenle",
  url: "https://www.adetunwase.com",
  image: "https://www.gocycle.ng/_next/image?q=75&url=%2Fimages%2Fadetunwase-adenle.jpg&w=384",
  jobTitle: "Artist, Art Educator & Social Entrepreneur",
  description:
    "Nigerian art educator, visual artist, and social entrepreneur working in community art education and environmental innovation.",
  sameAs: [
    "https://x.com/adetunwase360",
    "https://linkedin.com/in/adetunwase-adenle-7359791b",
    "https://instagram.com/adetunwase360",
  ],
};

// Root Layout
export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const headersList = await headers();
  const host = headersList.get("host") || "";
  const hostname = host.split(":")[0];
  const rootDomain = process.env.NEXT_PUBLIC_ROOT_DOMAIN || "localhost";

  let subdomain: string | undefined;
  if (hostname === "gwr.localhost" || hostname === `gwr.${rootDomain}`) {
    subdomain = "gwr";
  }

  return (
    <html lang="en" className={`${dmSans.variable} antialiased`}>
      <head>
        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen flex flex-col" cz-shortcut-listen="true">
        <ClientComponent subdomain={subdomain}>
          {children}
          {subdomain !== "gwr" && <BackToTop />}
        </ClientComponent>
      </body>
    </html>
  );
}
