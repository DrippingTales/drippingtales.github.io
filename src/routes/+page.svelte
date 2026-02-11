<script lang="ts">
  import { onMount } from "svelte"
  import config from "$lib/config"
  import SocialLinks from "$lib/components/social-links.svelte"
  import ReleaseCard from "$lib/components/release-card.svelte"
  import { glitch } from "$lib/actions/glitch"
  import { getLanguage, defaultLanguage } from "$lib/languages"
  import SeoTags from "$lib/components/seo-tags.svelte"

  let seoTags = {
    title: `About ~ ${config.title}`,
    description: "Dripping Tales Records website",
    keywords: ["dripping tales", "records", "psytrance", "psychedelic"],
    url: "",
    image: "/assets/main/logo-plain.avif"
  }

  let language = $state(defaultLanguage)

  onMount(() => {
    language = getLanguage()
  })

  let { data } = $props()
  let lastRelease = $derived(data.releases[0])
</script>

<svelte:head>
  <SeoTags {...seoTags} />
</svelte:head>

<div class="flex min-h-full flex-col justify-center space-y-4 sm:space-y-8">
  <div>
    <SocialLinks
      soundcloud="https://soundcloud.com/drippingtales"
      bandcamp="https://drippingtalesrecords.bandcamp.com/music"
      instagram="https://instagram.com/drippingtalesrecords"
      facebook="https://facebook.com/DrippingTalesRecords/"
      email="drippingtalesrecords@gmail.com"
    />
  </div>

  <div class="space-y-4">
    {#if language == "en"}
      <p class="text-center">
        Dripping Tales Records is a collective of friends passionate about the dark and twisted
        sides of psychedelic music. With a view to promote and share the creations of talented
        artists, the emphasis is put on deep atmospheres, swarming sounds and textured storytelling
        without specific restrictions.
      </p>
      <p class="text-center">
        By referring to organic and lively sounds, the vibe we share is strongly communicative and
        ensures total immersion on the dance floor. The Dripping Tales association revolves around
        two main pillars: the label and events. While the label focuses on the phonographic
        production of musical works, the events aim to bring to life this psychedelic, mystical, and
        dreamlike universe that resonates with each soul.
      </p>
      <p class="text-center">
        Above all, Dripping Tales seeks to be a space of freedom, sharing, and respect, where
        friendship and kindness are the guiding principles.
      </p>
    {:else if language == "fr"}
      <p class="text-center">
        Dripping Tales Records est un collectif d’amis passionnés par les dimensions sombres et
        tordues de la musique psychédélique. Avec l'objectif de promouvoir et de partager les
        créations d'artistes talentueux, l'accent est mis sur les atmosphères profondes, les
        sonorités grouillantes et les récits musicaux texturés sans restrictions particulières de
        style.
      </p>
      <p class="text-center">
        En se référant à des sonorités organiques et vivantes, l’énergie transmise se veut fortement
        communicative et assure une immersion totale sur la piste de danse.
      </p>
      <p class="text-center">
        L’association Dripping Tales évolue autour de deux axes principaux qui sont le label et les
        événements. Tandis que le label se concentre sur la production phonographique d'œuvres
        musicales, les événements tendent à rendre vivant cet univers psychédélique, mystique et
        propice à la rêverie qui fait vibrer l’âme de chacun.
      </p>
      <p class="text-center">
        Avant tout, Dripping Tales se veut un espace de liberté, de partage et de respect, où amitié
        et bienveillance sont maîtres-mots.
      </p>
    {/if}
  </div>

  <div class="mx-auto space-y-4">
    <hgroup>
      <div class="highlight text-center text-4xl bg-black/80 px-2 py-1 w-fit mx-auto">
        last release
      </div>
    </hgroup>

    <a class="size-fit" href={`/releases/${lastRelease.slug}`}>
      <div class="h-full w-full">
        <ReleaseCard release={lastRelease} />
      </div>
    </a>
  </div>
</div>
