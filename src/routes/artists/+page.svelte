<script lang="ts">
  import { glitch } from "$lib/actions/glitch"
  import config from "$lib/config"
  import ArtistCard from "$lib/components/artist-card.svelte"

  let { data } = $props()
</script>

<svelte:head>
  <title>Artists ~ {config.title}</title>
  <meta name="author" content={config.author} />
  <meta name="description" content="Artists from Dripping Tales Records" />
</svelte:head>

<section class="space-y-7">
  <h1 class="page-title highlight text-center text-4xl" use:glitch>
    <mark>_artists</mark>
  </h1>

  <div class="mx-auto grid size-fit grid-flow-row grid-cols-1 gap-6 sm:grid-cols-2">
    {#each data.artists as artist}
      <a class="size-fit" href={`/artists/${artist.slug}`}>
        <div class="h-full w-full" use:glitch>
          <ArtistCard {artist} />
        </div>
      </a>
    {/each}
  </div>
</section>
