import { error } from "@sveltejs/kit"

export async function load({ params }) {
  try {
    // NOTE: absolute /src/content should be better, but does no work as expected
    const artist = await import(`./../../../content/artists/${params.slug}.md`)

    return {
      content: artist.default,
      meta: artist.metadata
    }
  } catch (_error) {
    error(404, "Nothing here 🤔")
  }
}
