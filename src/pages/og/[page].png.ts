import type { APIContext } from "astro";
import { generateOgImage } from "../../lib/og";

const pages = [
  {
    page: "index",
    title: "Homepage",
    subtitle: "Co-founder · Researcher · a115.xyz",
  },
  {
    page: "journal",
    title: "Journal",
    subtitle: "Notes, thoughts, and learning logs",
  },
  {
    page: "archive",
    title: "Archive",
    subtitle: "Papers, documents, and PDFs",
  },
  {
    page: "cv",
    title: "Curriculum Vitae",
    subtitle: "Engineer · Researcher · Calcutta, India",
  },
  {
    page: "calendar",
    title: "Calendar",
    subtitle: "Upcoming events and schedule",
  },
  {
    page: "r",
    title: "Redirect",
    subtitle: "Link shortener and GOTO page",
  },
  {
    page: "404",
    title: "404",
    subtitle: "Page not found",
  },
] as const;

export function getStaticPaths() {
  return pages.map((p) => ({ params: { page: p.page }, props: p }));
}

export async function GET({ props }: APIContext) {
  const png = await generateOgImage({
    title: props.title,
    subtitle: props.subtitle,
  });

  return new Response(png, {
    headers: { "Content-Type": "image/png" },
  });
}
