<script lang="ts">
  import config from "$lib/config"
  import ReleaseCard from "$lib/components/release-card.svelte"
  import SeoTags from "$lib/components/seo-tags.svelte"
  import { getLanguage } from "$lib/languages"

  let { data } = $props()

  let seoTags = {
    title: `Music ~ ${config.title}`,
    description: "Music from Dripping Tales Records.",
    keywords: ["dripping tales", "music"],
    url: "/music",
    image: "/assets/main/logo-plain.avif"
  }

  const language = getLanguage()
</script>

<svelte:head>
  <SeoTags {...seoTags} />
</svelte:head>

<section class="space-y-2 sm:space-y-4">
  <hgroup class="select-none">
    <div class="highlight text-center text-3xl bg-black/80 px-2 py-1 w-fit mx-auto">
      Music
    </div>
  </hgroup>
  <div class="mx-auto grid size-fit grid-flow-row grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
    {#each data.releases as release}
      <a class="size-fit" href={`/music/${release.slug}`}>
        <div class="h-full w-full">
          <ReleaseCard {release} />
        </div>
      </a>
    {/each}
  </div>
</section>
