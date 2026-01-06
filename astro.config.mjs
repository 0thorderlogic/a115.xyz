// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";
import cloudflare from "@astrojs/cloudflare";

export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
  site: "https://a115.xyz",
  output: "static",
  adapter: cloudflare(),
  integrations: [sitemap()],
});

