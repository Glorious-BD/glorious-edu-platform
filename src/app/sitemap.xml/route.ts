import { NextResponse } from "next/server";

const BASE_URL = "https://gloriousedubd.com";

const STATIC_ROUTES = [
  "",
  "/about",
  "/programs",
  "/results",
  "/faculty",
  "/resources",
  "/admission",
  "/contact",
];

export async function GET() {
  try {
    // Dynamic courses to crawl can optionally be fetched from NestJS/DB layers here.
    // e.g., const courses = await apiService.courses.getAll();
    const dynamicCourseSlugs = ["medical-admission", "engineering-admission", "hsc-academic"];

    const sitemapContent = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${STATIC_ROUTES.map((route) => `
        <url>
          <loc>${BASE_URL}${route}</loc>
          <lastmod>${new Date().toISOString().split("T")[0]}</lastmod>
          <changefreq>weekly</changefreq>
          <priority>${route === "" ? "1.0" : "0.8"}</priority>
        </url>
      `).join("")}
      ${dynamicCourseSlugs.map((slug) => `
        <url>
          <loc>${BASE_URL}/programs/${slug}</loc>
          <lastmod>${new Date().toISOString().split("T")[0]}</lastmod>
          <changefreq>monthly</changefreq>
          <priority>0.7</priority>
        </url>
      `).join("")}
    </urlset>`;

    return new NextResponse(sitemapContent, {
      status: 200,
      headers: {
        "Content-Type": "application/xml",
        "Cache-Control": "public, max-age=86400, s-maxage=86400, stale-while-revalidate",
      },
    });
  } catch {
    return new NextResponse("Error generating sitemap", { status: 500 });
  }
}