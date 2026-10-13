<script lang="ts">
  import type { Snippet } from "svelte"

  type Props = {
    children: Snippet
    url: string
  }

  let { children, url }: Props = $props()
</script>

{#key url}
  <div class="fade-in h-full">
    {@render children?.()}
  </div>
{/key}
