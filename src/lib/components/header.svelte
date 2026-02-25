<script lang="ts">
  import Banner from "$lib/components/banner.svelte"
  import NavBar from "$lib/components/nav-bar.svelte"
</script>

<header class="sticky top-0 z-50 shadow-black shadow-xl flex flex-col">
  <div class="overflow-hidden border-gray-700 bg-black">
    <Banner />
  </div>

  <div class="border-t-1 border-b-1 text-gray-400 border-gray-700 bg-black/90">
    <div class="mx-auto text-center max-w-4xl mx-2">
      <NavBar />
    </div>
  </div>
</header>
