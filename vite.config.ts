import { sveltekit } from "@sveltejs/kit/vite"
import { defineConfig } from "vite"
import tailwindcss from "@tailwindcss/vite"
import yaml from "@modyfi/vite-plugin-yaml"

export default defineConfig({
  plugins: [
    sveltekit(),
    tailwindcss(),
    yaml()
  ]
})
