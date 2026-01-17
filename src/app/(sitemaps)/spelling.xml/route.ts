import { NextResponse } from "next/server";
import { baseUrl } from "@/lib/constant";
import { supabase } from "@/lib/supabase";

export async function GET() {
	try {
		// Fetch all published spelling entries from the database
		const { data: spellingEntries, error } = await supabase
			.from("spelling_entries")
			.select("slug, updated_at")
			.eq("is_published", true)
			.order("updated_at", { ascending: false });

		if (error) {
			console.error("Error fetching spelling entries:", error);
			// Return empty sitemap on error
			const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n</urlset>`;
			return new NextResponse(xml, {
				headers: {
					"Content-Type": "application/xml",
				},
			});
		}

		// Generate URLs from database entries
		const urls =
			spellingEntries
				?.map((entry) => {
					// Format the updated_at date for lastmod
					const lastmod = entry.updated_at
						? new Date(entry.updated_at).toISOString()
						: new Date().toISOString();

					return `  <url>\n    <loc>${baseUrl}spelling/${entry.slug}</loc>\n    <lastmod>${lastmod}</lastmod>\n    <changefreq>weekly</changefreq>\n    <priority>0.9</priority>\n  </url>`;
				})
				.join("\n") || "";

		const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>`;

		return new NextResponse(xml, {
			headers: {
				"Content-Type": "application/xml",
			},
		});
	} catch (error) {
		console.error("Error generating spelling sitemap:", error);
		// Return empty sitemap on error
		const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n</urlset>`;
		return new NextResponse(xml, {
			headers: {
				"Content-Type": "application/xml",
			},
		});
	}
}
