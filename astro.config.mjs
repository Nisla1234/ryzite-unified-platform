// @ts-check
import { defineConfig } from "astro/config";
import cloudflare from "@astrojs/cloudflare";

export default defineConfig({
  site: "https://www.ryzite.lk",
  output: "server",

  adapter: cloudflare(),

  session: {
    driver: "memory",
  },
});
