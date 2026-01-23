<script lang="ts">
  import { onMount } from "svelte"
  import { glitch } from "$lib/actions/glitch"
  import { getLanguage, defaultLanguage } from "$lib/languages"
  import Image from "$lib/components/image.svelte"
  import SocialLinks from "$lib/components/social-links.svelte"
  import SeoTags from "$lib/components/seo-tags.svelte"

  let { data } = $props()
  let imageUrl = `/assets/artists/${data.meta.slug}.avif`
  let language = $state(defaultLanguage)

  let seoTags = {
    title: `Artist: ${data.meta.name}`,
    description: data.meta.description.en,
    keywords: [data.meta.name, "dripping tales", "artist"],
    url: `/artists/${data.meta.slug}`,
    image: imageUrl
  }

  onMount(() => {
    language = getLanguage()
  })
</script>

<svelte:head>
  <SeoTags {...seoTags} />
</svelte:head>

<section class="flex flex-col space-y-8">
  <div>
    <div class="mx-auto bg-black/70 aspect-square max-w-64 rounded-full border-2 border-gray-400">
      <Image
        class="w-64 rounded-full"
        src={imageUrl}
        alt=""
      />
    </div>

    <hgroup class="relative z-1">
      <h1 class="highlight text-center text-4xl -mt-8">
        <mark>{data.meta.name}</mark>
      </h1>
    </hgroup>
  </div>

  {#if data.meta.social}
    <div>
      <SocialLinks {...data.meta.social} />
    </div>
  {/if}

  <div class="space-y-3 text-center">
    {#each data.meta.description[language].split(/[\r\n]+/) as paragraph}
      <p>{paragraph}</p>
    {/each}
  </div>
</section>
