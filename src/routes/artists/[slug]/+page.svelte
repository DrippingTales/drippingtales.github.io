<script lang="ts">
  import { onMount } from "svelte"
  import { glitch } from "$lib/actions/glitch"
  import { getLanguage, defaultLanguage } from "$lib/languages"
  import SocialLinks from "$lib/components/social-links.svelte"  
  
  let { data } = $props()
  let imageUrl = `/assets/artists/${data.meta.slug}.avif`
  let language = $state(defaultLanguage)

  onMount(() => {
    language = getLanguage()
  })
</script>

<section class="flex flex-col space-y-8">
  <div>
    <img class="aspect-square mx-auto border-gray-400 border-2 w-64 rounded-full" src={imageUrl} alt="" use:glitch />
    
    <hgroup use:glitch>
      <h1 class="highlight text-4xl text-center">
        <mark>{data.meta.name}</mark>
      </h1>
    </hgroup>
  </div>

  {#if data.meta.social}
    <div use:glitch>
      <SocialLinks {...data.meta.social} />
    </div>
  {/if}
    
  <div class="text-center space-y-3" use:glitch>
    {#each data.meta.description[language].split(/[\r\n]+/) as paragraph}
      <p>{paragraph}</p>
    {/each}
  </div>
</section>
