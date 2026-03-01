<script lang="ts">
  import Image from "$lib/components/image.svelte"
  import SocialLinks from "$lib/components/social-links.svelte"
  import SeoTags from "$lib/components/seo-tags.svelte"

  let { data } = $props()
  let imageUrl = $derived(`/assets/releases/${data.meta.slug}.avif`)

  function slugify(name: string) {
    return name
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "")
  }

  let seoTags = $derived({
    title: `Release: ${data.meta.name} (${data.meta.date.slice(0, 4)})`,
    description: data.meta.storytelling,
    keywords: [data.meta.name, "dripping tales", "release"],
    url: `/releases/${data.meta.slug}`,
    image: imageUrl
  })

  function asParagraphs(content: string) {
    return content.split(/[\r\n]+/).filter((p: string) => p.trim())
  }
</script>

<svelte:head>
  <SeoTags {...seoTags} />
</svelte:head>

<section class="flex flex-col space-y-8">
  <div class="space-y-4">
    <div class="mx-auto bg-black/70 aspect-square max-w-128 border-1 border-gray-700 rounded-md">
      <Image
        class="w-128 rounded-md"
        src={imageUrl}
        alt=""
      />
    </div>

    <hgroup>
      <div class="highlight text-center text-4xl bg-black/80 px-2 py-1 w-fit mx-auto">
        {data.meta.name}
      </div>
    </hgroup>

    <div class="text-center font-bold">
      {data.meta.date.toString().slice(0, 4)} -
      {#if data.meta.kind == "ep"}
        <span>EP by <a class="font-bold" href={`/artists/${slugify(data.meta.artist)}`}>{data.meta.artist}</a></span>
      {:else if data.meta.kind == "album"}
        <span>Album by <a class="font-bold" href={`/artists/${slugify(data.meta.artist)}`}>{data.meta.artist}</a></span>
      {:else if data.meta.kind == "compilation"}
        Compilation
      {/if}
    </div>
  </div>

  {#if data.meta.social}
    <div>
      <SocialLinks {...data.meta.social} />
    </div>
  {/if}

  <div class="space-y-3 text-center">
    {#each asParagraphs(data.meta.storytelling) as paragraph}
      <p>{paragraph}</p>
    {/each}
  </div>

  <div class="flex flex-col text-center">
    <div>
      {#if data.meta.artwork_by.link}
        <span>Artwork by <a class="font-bold" href={data.meta.artwork_by.link} target="_blank">{data.meta.artwork_by.name}</a></span>
      {:else}
        <span>Artwork by {data.meta.artwork_by.name}</span>
      {/if}
    </div>

    <div>
      {#if data.meta.master_by.link}
        <span>Master by <a class="font-bold" href={data.meta.master_by.link} target="_blank">{data.meta.master_by.name}</a></span>
      {:else}
        <span>Master by {data.meta.master_by.name}</span>
      {/if}
    </div>
  </div>

  {#if data.meta.social.soundcloud_embed}
    <div>
      <iframe title="player" width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="{data.meta.social.soundcloud_embed}"></iframe>
    </div>
  {/if}
</section>
