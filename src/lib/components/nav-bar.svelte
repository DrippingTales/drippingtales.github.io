<script lang="ts">
  import { page } from "$app/stores"
  import { glitch } from "$lib/actions/glitch"
</script>

<div class="select-none">
  <nav class="align-center flex flex-col justify-between py-1 mx-auto max-w-5xl">
    <div class="flex flex-row justify-center space-x-2 sm:space-x-3 [&>*]:my-auto">
      <a href="/" class={[$page.url.pathname === "/" && "active"]}>
        <span use:glitch={{ playMode: "click" }}>home</span>
      </a>
      <span>·</span>
      <a href="/artists" class={[$page.url.pathname.startsWith("/artists") && "active"]}>
        <span use:glitch={{ playMode: "click" }}>artists</span>
      </a>
      <span>·</span>
      <a href="/releases" class={[$page.url.pathname.startsWith("/releases") && "active"]}>
        <span use:glitch={{ playMode: "click" }}>releases</span>
      </a>
    </div>
  </nav>
</div>

<style>
  a.active {
    color: white !important;
  }
</style>
