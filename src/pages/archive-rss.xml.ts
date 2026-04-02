import rss from "@astrojs/rss";
import archiveData from "../content/archive.json";
import { name, url } from "../../consts";
import type { APIContext } from "astro";

export async function GET(context: APIContext) {
  // Sort data descending by date
  const sortedData = [...archiveData].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );

  return rss({
    title: `${name}'s Archive`,
    description: "An archive of PDFs and resources.",
    site: context.site || url,
    items: sortedData.map((item) => ({
      title: item.title,
      pubDate: new Date(item.date),
      description: item.description || "Archived resource",
      link: item.url,
    })),
    customData: `<language>en-GB</language>`,
  });
}
