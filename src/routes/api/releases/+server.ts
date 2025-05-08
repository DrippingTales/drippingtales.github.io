import { json } from "@sveltejs/kit"
import type { Release } from "$lib/types"

export const prerender = true

async function getReleases() {
  let releases: Release[] = []

  const paths = import.meta.glob("/src/content/releases/*.md", { eager: true })

  for (const path in paths) {
    const file = paths[path]
    const slug = path.split("/").at(-1)?.replace(".md", "")

    if (file && typeof file === "object" && "metadata" in file && slug) {
      const metadata = file.metadata as Omit<Release, "slug">
      const release = { ...metadata, slug } satisfies Release
      releases.push(release)
    }
  }

  releases = releases.sort((first, second) => {
    return new Date(second.date).getTime() - new Date(first.date).getTime()
  })

  return releases
}

export async function GET() {
  const releases = await getReleases()
  return json(releases)
}
