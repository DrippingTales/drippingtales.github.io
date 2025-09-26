<script lang="ts">
  import { onMount } from "svelte"
  import { glitch } from "$lib/actions/glitch"
  import { getLanguage, defaultLanguage } from "$lib/languages"
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
    <img
      class="mx-auto aspect-square w-64 rounded-full border-2 border-gray-400"
      src={imageUrl}
      alt=""
      use:glitch
    />

    <hgroup use:glitch>
      <h1 class="highlight text-center text-4xl">
        <mark>{data.meta.name}</mark>
      </h1>
    </hgroup>
  </div>

  {#if data.meta.social}
    <div use:glitch>
      <SocialLinks {...data.meta.social} />
    </div>
  {/if}

  <div class="space-y-3 text-center" use:glitch>
    {#each data.meta.description[language].split(/[\r\n]+/) as paragraph}
      <p>{paragraph}</p>
    {/each}
  </div>
</section>
