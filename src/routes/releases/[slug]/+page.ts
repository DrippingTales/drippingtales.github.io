import { error } from "@sveltejs/kit"

export async function load({ params }) {
  try {
    // NOTE: absolute /src/content should be better, but does no work
    const release = await import(`./../../../content/releases/${params.slug}.md`)

    return {
      content: release.default,
      meta: { ...release.frontmatter, slug: params.slug }
    }
  } catch (_error) {
    error(404, "Nothing here 🤔")
  }
}
