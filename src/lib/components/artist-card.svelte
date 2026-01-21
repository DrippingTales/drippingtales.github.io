<script lang="ts">
  import type { Artist } from "$lib/types"
  import Image from "$lib/components/image.svelte"

  type Props = {
    artist: Artist
  }

  let props: Props = $props()
  let imageUrl = `/assets/artists/${props.artist.slug}.avif`
</script>

<div>
  <div class="relative w-full overflow-hidden border-1 border-gray-400 rounded-xl bg-black/70">
    <Image class="aspect-square w-100 border-gray-400" src={imageUrl} alt="" />
    <div
      class="absolute right-6 bottom-6 bg-black/80 px-2 py-1 text-center text-3xl font-bold text-gray-300"
    >
      {props.artist.name}
    </div>
  </div>
</div>
