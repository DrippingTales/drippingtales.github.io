<script lang="ts">
  import type { Snippet } from "svelte"
  import { onMount } from "svelte"
  import { fade } from "svelte/transition"

  type Props = {
    children: Snippet
    url: string
  }

  let { children, url }: Props = $props()
  let mounted = $state(false)
  let reducedMotion = $state(false)

  onMount(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)")
    const updateMotionPreference = () => {
      reducedMotion = mediaQuery.matches
      mounted = true
    }

    updateMotionPreference()
    mediaQuery.addEventListener("change", updateMotionPreference)

    return () => mediaQuery.removeEventListener("change", updateMotionPreference)
  })
</script>

{#key url}
  <div class="h-full" in:fade={{ duration: mounted && !reducedMotion ? 650 : 0 }}>
    {@render children?.()}
  </div>
{/key}
