<script lang="ts">
  import { glitch } from "$lib/actions/glitch"
  import config from "$lib/config"
</script>

<div class="crt sticky w-full top-0 z-50 bg-black/96 border-b-1 border-gray-400 shadow-white/10 shadow-xl/50">
  <nav class="align-center flex flex-col sm:justify-between py-2 sm:flex-row sm:space-y-0 mx-auto max-w-3xl px-8">
    <a class="text-primary my-auto mx-auto sm:ml-0" href="/" use:glitch={{ playMode: "click" }}>
      <img
        class="h-8"
        src="/assets/main/title.avif"
        alt=""
      />
    </a>

    <div class="flex flex-row justify-center sm:justify-end space-x-1 [&>*]:my-auto">
      <span class="link hover:text-white" use:glitch={{ playMode: "click" }}>
        <a href="/">about</a>
      </span>
      <span>/</span>
      <span class="link hover:text-white" use:glitch={{ playMode: "click" }}>
        <a href="/artists">artists</a>
      </span>
      <span>/</span>
      <span class="link hover:text-white" use:glitch={{ playMode: "click" }}>
        <a href="/releases">releases</a>
      </span>
    </div>
  </nav>
</div>
