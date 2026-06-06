import { Metadata } from "next";

interface SEOConfig {
  title: string;
  description: string;
  path: string;
  ogImage?: string;
}

const DEFAULT_BASE_URL = "https://gloriousedubd.com";

export function generateMetadataHelper({
  title,
  description,
  path,
  ogImage = "/assets/og-image.png",
}: SEOConfig): Metadata {
  const url = `${DEFAULT_BASE_URL}${path}`;

  return {
    title,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: "Glorious Edu BD",
      locale: "en_US",
      type: "website",
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}