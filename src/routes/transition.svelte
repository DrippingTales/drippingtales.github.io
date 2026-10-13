<script lang="ts">
  import type { Snippet } from "svelte"

  type Props = {
    children: Snippet
    url: string
  }

  let { children, url }: Props = $props()
</script>

{#key url}
  <div class="page-fade h-full">
    {@render children?.()}
  </div>
{/key}

<style>
  .page-fade {
    animation: page-fade-in 650ms ease-in-out both;
  }

  @keyframes page-fade-in {
    from {
      opacity: 0;
    }

    to {
      opacity: 1;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    .page-fade {
      animation: none;
    }
  }
</style>
