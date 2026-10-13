import adapter from "@sveltejs/adapter-static"
import { sveltekit } from "@sveltejs/kit/vite"
import { vitePreprocess } from "@sveltejs/vite-plugin-svelte"
import { markdocPreprocess } from "markdoc-svelte"
import { defineConfig } from "vite"
import tailwindcss from "@tailwindcss/vite"

export default defineConfig({
  plugins: [
    sveltekit({
      extensions: [".svelte", ".md"],
      preprocess: [vitePreprocess(), markdocPreprocess({ components: "#lib/components" })],
      adapter: adapter({
        pages: "build",
        assets: "build",
        fallback: "404.html",
        precompress: false,
        strict: true
      })
    }),
    tailwindcss()
  ]
})
