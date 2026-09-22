<script lang="ts">
  import { getLanguage } from "$lib/languages"
  import Image from "$lib/components/image.svelte"
  import SocialLinks from "$lib/components/social-links.svelte"
  import SeoTags from "$lib/components/seo-tags.svelte"

  let { data } = $props()
  let imageUrl = $derived(`/assets/artists/${data.meta.slug}.avif`)
  const language = getLanguage()

  let seoTags = $derived({
    title: `Artist: ${data.meta.name}`,
    description: data.meta.description.en,
    keywords: [data.meta.name, "dripping tales", "artist"],
    url: `/artists/${data.meta.slug}`,
    image: imageUrl
  })
</script>

<svelte:head>
  <SeoTags {...seoTags} />
</svelte:head>

<section class="flex flex-col space-y-8">
  <div class="relative">
    <div
      class="mx-auto aspect-square max-w-92 rounded-full rounded-md border-2 border-gray-700 bg-black/70 select-none"
    >
      <Image class="rounded-md" src={imageUrl} alt="" />
    </div>

    <hgroup class="relative z-1">
      <div class="highlight mx-auto -mt-6 w-fit bg-black/80 px-2 py-1 text-center text-3xl">
        {data.meta.name}
      </div>
    </hgroup>
  </div>

  <div>
    {#if data.meta.social}
      <SocialLinks {...data.meta.social} />
    {/if}
  </div>

  <div>
    <div class="text-center">
      {#if data.meta.genre}
        <span class="font-bold">Genre:</span> <span>{data.meta.genre}</span>
      {/if}
    </div>

    <div class="text-center">
      {#if data.meta.performance}
        <span class="font-bold">Performance:</span> <span>{data.meta.performance}</span>
      {/if}
    </div>
  </div>

  <div class="space-y-3 text-center">
    {#each data.meta.description[language].split(/[\r\n]+/) as paragraph, _id (_id)}
      <p>{paragraph}</p>
    {/each}
  </div>
</section>
