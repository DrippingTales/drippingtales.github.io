<script lang="ts">
  import config from "$lib/config"
  import ArtistCard from "$lib/components/artist-card.svelte"
  import SeoTags from "$lib/components/seo-tags.svelte"

  let { data } = $props()

  let seoTags = {
    title: `Artists ~ ${config.title}`,
    description: "Artists from Dripping Tales Records.",
    keywords: ["dripping tales", "artists"],
    url: "/artists",
    image: "/assets/main/logo-plain.avif"
  }
</script>

<svelte:head>
  <SeoTags {...seoTags} />
</svelte:head>

<section class="space-y-4 sm:space-y-7">
  <hgroup>
    <div class="highlight text-center text-4xl bg-black/80 px-2 py-1 w-fit mx-auto">
      Artists
    </div>
  </hgroup>
  <div class="mx-auto grid size-fit grid-flow-row grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
    {#each data.artists as artist}
      <a class="size-fit" href={`/artists/${artist.slug}`}>
        <div class="h-full w-full">
          <ArtistCard {artist} />
        </div>
      </a>
    {/each}
  </div>
</section>
