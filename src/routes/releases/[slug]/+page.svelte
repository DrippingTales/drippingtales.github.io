<script lang="ts">
  import { glitch } from "$lib/actions/glitch"
  import SocialLinks from "$lib/components/social-links.svelte"

  let { data } = $props()
  let imageUrl = `/assets/releases/${data.meta.slug}.avif`
</script>

<section class="flex flex-col space-y-8" use:glitch>
  <hgroup>
    <h1 class="highlight text-center text-4xl">
      <mark>{data.meta.name}</mark>
    </h1>
  </hgroup>

  <div>
    <img
      class="mx-auto aspect-square w-128 border-1 border-gray-400 rounded-xl"
      src={imageUrl}
      alt=""
    />
  </div>

  <div class="text-center">
    {#if data.meta.kind == "album"}
      <span>Album by {data.meta.artist}</span>
    {:else if data.meta.kind == "compilation"}
      <span>Compilation</span>
    {/if}
  </div>

  {#if data.meta.social}
    <SocialLinks {...data.meta.social} />
  {/if}
</section>
