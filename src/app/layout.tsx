import type { Metadata } from "next";
import { Red_Hat_Display } from "next/font/google";
import "./globals.css";
import { SmoothScrollProvider } from "@/providers/SmoothScrollProvider";
import { MobileProvider } from "@/contexts/MobileContext";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const redHatDisplay = Red_Hat_Display({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
});

const siteUrl = "https://www.vmedei.dev";
const description =
  "Desenvolvedor Full Stack especializado em modernização de sistemas e arquiteturas escaláveis com React, Node.js e TypeScript.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Vinicius Medeiros | Desenvolvedor Full Stack",
    template: "%s | Vinicius Medeiros",
  },
  description,
  keywords: [
    "Desenvolvedor Full Stack",
    "React",
    "Next.js",
    "Node.js",
    "TypeScript",
    "NestJS",
    "Portfólio",
    "Natal",
  ],
  authors: [{ name: "Vinicius Alves Medeiros", url: siteUrl }],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: siteUrl,
    siteName: "Vinicius Medeiros",
    title: "Vinicius Medeiros | Desenvolvedor Full Stack",
    description,
    images: [{ url: "/sobre/vinicius.png", width: 500, height: 587, alt: "Vinicius Medeiros" }],
  },
  twitter: {
    card: "summary",
    title: "Vinicius Medeiros | Desenvolvedor Full Stack",
    description,
    images: ["/sobre/vinicius.png"],
  },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Vinicius Alves Medeiros",
  jobTitle: "Desenvolvedor Full Stack",
  url: siteUrl,
  image: `${siteUrl}/sobre/vinicius.png`,
  address: { "@type": "PostalAddress", addressLocality: "Natal", addressRegion: "RN", addressCountry: "BR" },
  sameAs: ["https://github.com/vmedei", "https://linkedin.com/in/vmedei"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" data-theme="vmedei">
      <body
        className={` ${redHatDisplay.className} antialiased`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <SmoothScrollProvider>
          <MobileProvider>
            {children}
          </MobileProvider>
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
