<script lang="ts">
  import { onMount } from "svelte"
  
  type Props = {
    src: string
    alt: string
    loading: string | undefined
  }

  let { src, alt, loading }: Props = $props()
  
</script>

<img {src} {alt} loading={loading | "lazy"} />
