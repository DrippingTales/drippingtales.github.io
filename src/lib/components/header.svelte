<script lang="ts">
  import { glitch } from "$lib/actions/glitch"
  import config from "$lib/config"
  import Banner from "$lib/components/banner.svelte"
  import NavBar from "$lib/components/nav-bar.svelte"
</script>

<header class="sticky top-[calc(-4.5rem-1px)] sm:top-[calc(-6rem-1px)] z-50 shadow-black/50 shadow-xl/60 flex flex-col">
  <div class="overflow-hidden border-gray-700 bg-black">
    <Banner />
  </div>

  <div class="z-1 sticky top-0 border-t-1 border-b-1 text-gray-400 border-gray-700 bg-black/80">
    <div class="mx-auto text-center max-w-4xl mx-2">
      <NavBar />
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
