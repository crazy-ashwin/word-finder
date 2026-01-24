// import { baseUrl } from "@/lib/constant";
// import { NextResponse } from "next/server";

// export async function GET() {
// 	const now = new Date().toISOString();

// 	const sitemaps = [
// 		"static.xml",
// 		"tools.xml",
// 		"words.xml",
// 		"blog.xml",
// 		"spelling.xml",
// 		"grammar.xml",
// 		"dictionary.xml",
// 		"games.xml",
// 	];

// 	const sitemapIndex = `<?xml version="1.0" encoding="UTF-8"?>
// <sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
// ${sitemaps
// 	.map(
// 		(sitemap) => `  <sitemap>
//     <loc>${baseUrl}${sitemap}</loc>
//     <lastmod>${now}</lastmod>
//   </sitemap>`
// 	)
// 	.join("\n")}
// </sitemapindex>`;

// 	return new NextResponse(sitemapIndex, {
// 		headers: {
// 			"Content-Type": "application/xml; charset=utf-8",
// 			"Cache-Control": "public, max-age=3600, s-maxage=3600",
// 		},
// 	});
// }
