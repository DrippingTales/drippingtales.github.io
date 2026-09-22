<script lang="ts">
  import Banner from "$lib/components/banner.svelte"
  import NavBar from "$lib/components/nav-bar.svelte"
</script>

<header class="sticky top-0 z-50 flex flex-col shadow-xl shadow-black">
  <div class="overflow-hidden border-gray-700 bg-black">
    <Banner />
  </div>

  <div class="border-t-1 border-b-1 border-gray-700 bg-black/90 text-gray-400">
    <div class="mx-2 mx-auto max-w-4xl text-center">
      <NavBar />
    </div>
  </div>
</header>
