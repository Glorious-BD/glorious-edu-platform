import type { Metadata, Viewport } from "next";
import { Inter, Plus_Jakarta_Sans, Hind_Siliguri } from "next/font/google";
import Navbar from "@/components/layout/Navbar";
import { generateOrgSchema } from "@/utils/schema";
import "@/styles/globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
  display: "swap",
});

const hindSiliguri = Hind_Siliguri({
  subsets: ["bengali"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-hind-siliguri",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#0F172A",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://gloriousedubd.com"),
  title: {
    default: "Glorious Edu BD | Premium Academic & Admission Care",
    template: "%s | Glorious Edu BD",
  },
  description: "Unlock outstanding learning opportunities. Glorious Edu BD delivers elite preparation guides, experienced educators, and custom learning tools for Academic, Admission, and Skill Development journeys.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Glorious Edu BD | Premium Academic & Admission Care",
    description: "Unlock outstanding learning opportunities. Glorious Edu BD delivers elite preparation guides, experienced educators, and custom learning tools.",
    url: "https://gloriousedubd.com",
    siteName: "Glorious Edu BD",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/assets/og-image.png",
        width: 1200,
        height: 630,
        alt: "Glorious Edu BD",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Glorious Edu BD | Premium Academic & Admission Care",
    description: "Unlock outstanding learning opportunities with top-tier educators.",
    images: ["/assets/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const orgSchema = generateOrgSchema();

  return (
    <html lang="en" className={`${inter.variable} ${plusJakarta.variable} ${hindSiliguri.variable} scroll-smooth`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
        />
      </head>
      <body className="flex min-h-screen flex-col">
        <Navbar />
        <main className="flex-grow pt-[80px]">{children}</main>
        {/* Footer component added here */}
      </body>
    </html>
  );
}