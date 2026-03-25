<script lang="ts">
  import config from "$lib/config"
  import SocialLinks from "$lib/components/social-links.svelte"
  import ReleaseCard from "$lib/components/release-card.svelte"
  import { getLanguage } from "$lib/languages"
  import SeoTags from "$lib/components/seo-tags.svelte"

  let seoTags = {
    title: `Home ~ ${config.title}`,
    description: "Dripping Tales Records website",
    keywords: ["dripping tales", "records", "psytrance", "psychedelic"],
    url: "",
    image: "/assets/main/logo-plain.avif"
  }

  let { data } = $props()
  let lastReleases = $derived([data.releases[0], data.releases[1], data.releases[2]])
  const language = getLanguage()
</script>

<svelte:head>
  <SeoTags {...seoTags} />
</svelte:head>

<div class="flex min-h-full flex-col justify-center space-y-7">
  <div class="pt-4 sm:pt-0">
    <SocialLinks
      soundcloud="https://soundcloud.com/drippingtales"
      bandcamp="https://drippingtalesrecords.bandcamp.com/music"
      instagram="https://instagram.com/drippingtalesrecords"
      facebook="https://facebook.com/DrippingTalesRecords/"
      email="drippingtalesrecords@gmail.com"
    />
  </div>
  <div class="mx-auto space-y-4">
    <hgroup>
      <div class="highlight text-center text-3xl bg-black/80 px-2 py-1 w-fit mx-auto">
        Latest releases
      </div>
    </hgroup>

    <div class="mx-auto grid size-fit grid-flow-row grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {#each lastReleases as release}
        <a class="size-fit" href={`/music/${release.slug}`}>
          <div class="h-full w-full">
            <ReleaseCard release={release} />
          </div>
        </a>
      {/each}
    </div>
  </div>

  <div class="space-y-4">
    <hgroup>
      <div class="highlight text-center text-3xl bg-black/80 px-2 py-1 w-fit mx-auto">
        About
      </div>
    </hgroup>

    {#if language == "fr"}
      <p class="text-center">
        Dripping Tales Records est un collectif d'amis passionnés par les univers sombres et envoûtants de la trance psychédélique.
        Sa mission est de partager le travail d'artistes talentueux, en privilégiant une expérience musicale immersive et narrative.
      </p>
      <p class="text-center">
        Le projet Dripping Tales s'articule autour de deux piliers principaux : le label et les événements.
        Tandis que le label se concentre sur la production phonographique, les événements offrent un espace psychédélique permettant aux gens de se connecter et de partager des expériences sensorielles et musicales uniques.
      </p>
      <p class="text-center">
        Avant tout, Dripping Tales se veut un espace de partage et de respect, où amitié et ouverture les sont maîtres-mots.
      </p>
    {:else}
      <p class="text-center">
        Dripping Tales Records is a collective of friends passionate about the dark and twisted realms of psychedelic trance.
        Its mission is to share the work of talented artists with a focus on immersive and narrative-driven musical experience.
      </p>
      <p class="text-center">
        The Dripping Tales project revolves around two main pillars: the label and the events.
        While the label focuses on phonographic production, the events provide a psychedelic platform for people to connect and share unique experiences of music and enjoyment.
      </p>
      <p class="text-center">
        Above all, Dripping Tales seeks to be a space sharing, and respect, where friendship and openness are the guiding principles.
      </p>
    {/if}
  </div>
</div>
