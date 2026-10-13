<script lang="ts">
  import { browser } from "$app/env"
  import type { Snippet } from "svelte"
  import { onMount } from "svelte"
  import { fade } from "svelte/transition"

  type Props = {
    children: Snippet
    url: string
  }

  let { children, url }: Props = $props()
  let reducedMotion = $state(
    browser && window.matchMedia("(prefers-reduced-motion: reduce)").matches
  )

  onMount(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)")
    const updateMotionPreference = () => {
      reducedMotion = mediaQuery.matches
    }

    updateMotionPreference()
    mediaQuery.addEventListener("change", updateMotionPreference)

    return () => mediaQuery.removeEventListener("change", updateMotionPreference)
  })
</script>

{#key url}
  <div class="h-full" in:fade={{ duration: reducedMotion ? 0 : 650 }}>
    {@render children?.()}
  </div>
{/key}
