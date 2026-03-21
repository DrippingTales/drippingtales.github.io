<script lang="ts">
  import { page } from "$app/stores"
  import { glitch } from "$lib/actions/glitch"
  import { getLanguage } from "$lib/languages"

  const language = getLanguage()
</script>

<div class="select-none">
  <nav class="align-center flex flex-col justify-between sm:py-1 mx-auto max-w-5xl">
    <div class="flex flex-row justify-center space-x-2 sm:space-x-3">
      <a href="/" class={[$page.url.pathname === "/" && "active"]}>
        <span use:glitch={{ playMode: "click" }}>
          {#if language == "fr"}
            accueil
          {:else}
            home
          {/if}
        </span>
      </a>
      <span>·</span>
      <a href="/artists" class={[$page.url.pathname.startsWith("/artists") && "active"]}>
        <span use:glitch={{ playMode: "click" }}>
          {#if language == "fr"}
            artistes
          {:else}
            artists
          {/if}
        </span>
      </a>
      <span>·</span>
      <a href="/music" class={[$page.url.pathname.startsWith("/music") && "active"]}>
        <span use:glitch={{ playMode: "click" }}>
          {#if language == "fr"}
            musique
          {:else}
            music
          {/if}
        </span>
      </a>
    </div>
  </nav>
</div>

<style>
  a {
    font-weight: bold;
    font-size: 1.15em;
  }

  a.active {
    color: white !important;
  }
</style>
