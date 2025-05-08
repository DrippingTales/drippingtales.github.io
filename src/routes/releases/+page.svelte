<script lang="ts">
  import { glitch } from "$lib/actions/glitch"
  import config from "$lib/config"
  import ReleaseCard from "$lib/components/release-card.svelte"

  let { data } = $props()
</script>

<svelte:head>
  <title>Releases ~ {config.title}</title>
  <meta name="author" content={config.author} />
  <meta name="description" content="Releases from Dripping Tales Records" />
</svelte:head>

<section class="space-y-7" use:glitch={{ event: "load" }}>
  <h1 class="page-title highlight text-center text-4xl">
    <mark>_releases</mark>
  </h1>

  <div class="mx-auto grid size-fit grid-flow-row grid-cols-1 gap-6 sm:grid-cols-2">
    {#each data.releases as release}
      <a class="size-fit" href={`/releases/${release.slug}`}>
        <div class="h-full w-full">
          <ReleaseCard {release} />
        </div>
      </a>
    {/each}
  </div>
</section>
