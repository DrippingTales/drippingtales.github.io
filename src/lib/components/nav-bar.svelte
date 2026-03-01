<script lang="ts">
  import { page } from "$app/stores"
  import { glitch } from "$lib/actions/glitch"
</script>

<div class="select-none">
  <nav class="align-center flex flex-col justify-between sm:py-1 mx-auto max-w-5xl">
    <div class="flex flex-row justify-center space-x-2 sm:space-x-3">
      <a href="/" class={[$page.url.pathname === "/" && "active"]}>
        <span use:glitch={{ playMode: "click" }}>Home</span>
      </a>
      <span>·</span>
      <a href="/artists" class={[$page.url.pathname.startsWith("/artists") && "active"]}>
        <span use:glitch={{ playMode: "click" }}>Artists</span>
      </a>
      <span>·</span>
      <a href="/releases" class={[$page.url.pathname.startsWith("/releases") && "active"]}>
        <span use:glitch={{ playMode: "click" }}>Releases</span>
      </a>
    </div>
  </nav>
</div>

<style>
  a {
    font-weight: bold;
  }

  a.active {
    color: white !important;
  }
</style>
