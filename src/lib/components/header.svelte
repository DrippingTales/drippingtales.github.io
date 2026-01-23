<script lang="ts">
  import { glitch } from "$lib/actions/glitch"
  import config from "$lib/config"
  import Banner from "$lib/components/banner.svelte"
  import PageTitle from "$lib/components/page-title.svelte"
</script>

<header class="sticky top-[calc(-6rem-1px)] sm:top-[calc(-9rem-1px)] z-50 shadow-white/10 shadow-xl/60 flex flex-col">
  <div class="order-2 h-24 sm:h-36 overflow-hidden border-gray-400 bg-black">
    <Banner />
  </div>

  <div class="order-1 sticky top-0 z-1 w-full bg-black border-b-1 border-gray-400 bg-black">
    <nav class="align-center flex flex-col sm:justify-between py-2 sm:flex-row sm:space-y-0 mx-auto max-w-5xl px-8">
      <a class="text-primary my-auto mx-auto sm:ml-0">
        <img
          class="h-8"
          src="/assets/main/title.avif"
          alt=""
        />
      </a>

      <div class="pt-2 sm:pt-0 flex flex-row justify-center sm:justify-end space-x-1 [&>*]:my-auto">
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

  <div class="order-3 z-1 sticky top-[52px] sm:top-[44px] border-t-1 border-b-1 text-gray-400 border-gray-400 bg-black">
    <div class="mx-auto text-center max-w-4xl mx-2">
      <PageTitle/>
    </div>
  </div>
</header>

<style>
  img {
    animation: fade-in 0.5s ease-out;
  }

  @keyframes fade-in {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
</style>
