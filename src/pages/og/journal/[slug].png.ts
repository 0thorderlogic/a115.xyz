import type { APIContext } from "astro";
import { getCollection } from "astro:content";
import { generateOgImage } from "../../../lib/og";

export async function getStaticPaths() {
  const entries = await getCollection("journal");
  return entries.map((entry) => ({
    params: { slug: entry.slug },
    props: { entry },
  }));
}

export async function GET({ props }: APIContext) {
  const { entry } = props;

  const date = entry.data.date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const png = await generateOgImage({
    title: entry.data.title,
    subtitle: entry.data.description,
    bottomLeft: date,
    label: "Journal · Sanket's Website",
  });

  return new Response(png, {
    headers: { "Content-Type": "image/png" },
  });
}
