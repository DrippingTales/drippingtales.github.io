<script lang="ts">
  import type { Release } from "$lib/types"
  import Image from "$lib/components/image.svelte"

  type Props = {
    release: Release
  }

  let props: Props = $props()
  let imageUrl = `/assets/releases/${props.release.slug}.avif`
</script>

<div
  class="flex w-full flex-col overflow-hidden border-1 border-gray-700 bg-black/70 shadow-lg"
>
  <div>
    <Image
      class="aspect-square w-100"
      src={imageUrl}
      alt=""
    />
  </div>
  <div class="border-t-1 border-gray-700 py-4">
    <div class="text-center text-xl font-bold">{props.release.name}</div>
    <div class="flex flex-row flex-wrap justify-center space-y-2 space-x-2">
      {#if props.release.kind == "album"}
        <span>Album by {props.release.artist}</span>
      {:else if props.release.kind == "compilation"}
        <span>Compilation</span>
      {/if}
    </div>
  </div>
</div>
