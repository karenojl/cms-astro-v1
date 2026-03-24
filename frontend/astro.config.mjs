import { defineConfig } from "astro/config";
import node from "@astrojs/node";
import react from "@astrojs/react";
import tailwindcss from "@tailwindcss/vite";
import apostrophe from "@apostrophecms/apostrophe-astro";

export default defineConfig({
  output: "server",
  adapter: node({
    mode: "standalone",
  }),
  integrations: [
    react(),
    apostrophe({
      aposHost: process.env.APOS_HOST ?? "http://localhost:3000",
      widgetsMapping: "./src/widgets",
      templatesMapping: "./src/templates",
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
    ssr: {
      // Apostrophe's Astro integration relies on Vite virtual modules at runtime.
      noExternal: ["@apostrophecms/apostrophe-astro"],
    },
  },
});
