<script lang="ts">
  import { glitch } from "$lib/actions/glitch"
  import Image from "$lib/components/image.svelte"
  import SocialLinks from "$lib/components/social-links.svelte"
  import SeoTags from "$lib/components/seo-tags.svelte"

  let { data } = $props()
  let imageUrl = `/assets/releases/${data.meta.slug}.avif`

  let seoTags = {
    title: `Release: ${data.meta.name} (${data.meta.date.slice(0, 4)})`,
    description: data.meta.storytelling,
    keywords: [data.meta.name, "dripping tales", "release"],
    url: `/releases/${data.meta.slug}`,
    image: imageUrl
  }
</script>

<svelte:head>
  <SeoTags {...seoTags} />
</svelte:head>

<section class="flex flex-col space-y-8">
  <div class="mx-auto bg-black/70 aspect-square max-w-128 border-1 border-gray-400 rounded-xl">
    <Image
      class="w-128 rounded-xl"
      src={imageUrl}
      alt=""
    />
  </div>

  <div class="space-y-4">
    <div>
      <h1 class="highlight text-center text-4xl">
        <mark>{data.meta.name}</mark>
      </h1>
    </div>

    <div class="text-center font-bold">
      {data.meta.date.toString().slice(0, 4)} -
      {#if data.meta.kind == "album"}
        Album by {data.meta.artist}
      {:else if data.meta.kind == "compilation"}
        Compilation
      {/if}
    </div>

    {#if data.meta.social}
      <div>
        <SocialLinks {...data.meta.social} />
      </div>
    {/if}
  </div>

  <div class="space-y-3 text-center">
    {#each data.meta.storytelling.split(/[\r\n]+/) as paragraph}
      <p>{paragraph}</p>
    {/each}
  </div>
</section>
