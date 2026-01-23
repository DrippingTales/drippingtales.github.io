<script lang="ts">
  import { glitch } from "$lib/actions/glitch"
  import config from "$lib/config"
  import ReleaseCard from "$lib/components/release-card.svelte"
  import SeoTags from "$lib/components/seo-tags.svelte"

  let { data } = $props()

  let seoTags = {
    title: `Releases ~ ${config.title}`,
    description: "Releases from Dripping Tales Records.",
    keywords: ["dripping tales", "releases"],
    url: "/releases",
    image: "/assets/main/logo-plain.avif"
  }
</script>

<svelte:head>
  <SeoTags {...seoTags} />
</svelte:head>

<section class="space-y-7">
  <div class="mx-auto grid size-fit grid-flow-row grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
    {#each data.releases as release}
      <a class="size-fit" href={`/releases/${release.slug}`}>
        <div class="h-full w-full">
          <ReleaseCard {release} />
        </div>
      </a>
    {/each}
  </div>
</section>
