<script lang="ts">
  import { glitch } from "$lib/actions/glitch"
  import config from "$lib/config"
  import Banner from "$lib/components/banner.svelte"
  import NavBar from "$lib/components/nav-bar.svelte"
</script>

<header class="sticky top-[calc(-4.5rem)] sm:top-[calc(-6rem)] z-50 shadow-black shadow-xl flex flex-col">
  <div class="overflow-hidden border-gray-700 bg-black">
    <Banner />
  </div>

  <div class="z-1 sticky top-0 border-t-1 border-b-1 text-gray-400 border-gray-700 bg-black/85">
    <div class="mx-auto text-center max-w-4xl mx-2">
      <NavBar />
    </div>
  </div>
</header>
