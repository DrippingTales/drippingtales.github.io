<script lang="ts">
  import { page } from "$app/state"
  import { resolve } from "$app/paths"
  import { glitch } from "$lib/actions/glitch"
</script>

<div class="select-none">
  <nav class="align-center mx-auto flex max-w-5xl flex-col justify-between sm:py-1">
    <div class="flex flex-row justify-center space-x-2 sm:space-x-3">
      <a href={resolve("/")} class={[page.url.pathname === "/" && "active"]}>
        <span use:glitch={{ playMode: "click" }}>home</span>
      </a>
      <span>·</span>
      <a href={resolve("/artists")} class={[page.url.pathname.startsWith("/artists") && "active"]}>
        <span use:glitch={{ playMode: "click" }}>artists</span>
      </a>
      <span>·</span>
      <a href={resolve("/music")} class={[page.url.pathname.startsWith("/music") && "active"]}>
        <span use:glitch={{ playMode: "click" }}>music</span>
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
