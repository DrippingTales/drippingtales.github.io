<script lang="ts">
  import { PowerGlitch } from "powerglitch"

  type Props = {
    src: string
    alt: string
    class?: string
  }

  let { src, alt, class: clazz }: Props = $props()

  // Glob import all content images with enhanced processing
  const imageModules = import.meta.glob(
    "/src/content/**/assets/*.{avif,gif,heif,jpeg,jpg,png,tiff,webp,svg}",
    {
      eager: true,
      query: { enhanced: true }
    }
  ) as Record<string, { default: string }>

  // Extract filename from src path (e.g., "/assets/posts/image.avif" -> "image.avif")
  const filename = $derived(src.split("/").pop() ?? "")

  // Find matching image module
  const matchingPath = $derived(Object.keys(imageModules).find((path) => path.endsWith(filename)))
  const image = $derived(matchingPath ? imageModules[matchingPath].default : undefined)

  let wrapper: HTMLElement | undefined = $state()
  let loaded = $state(false)

  $effect(() => {
    if (!wrapper) return

    const img = wrapper.querySelector("img")

    if (!img) return

    const onLoad = () => {
      loaded = true
      PowerGlitch.glitch(img, {
        playMode: "always",
        timing: { duration: 7_000, iterations: 1 },
        glitchTimeSpan: { start: 0.0, end: 0.04 }
      })
    }

    if (img.complete && img.naturalHeight !== 0) {
      onLoad()
    } else {
      img.addEventListener("load", onLoad)
      return () => img.removeEventListener("load", onLoad)
    }
  })
</script>

<div class="image-wrapper" class:loaded bind:this={wrapper}>
  <enhanced:img src={image} {alt} class={clazz} />
</div>
  
<style>
  .image-wrapper {
    width: fit-content;
    margin-inline: auto;
    background: center no-repeat;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='4' viewBox='0 14 32 4' fill='%23fff'%3E%3Cpath opacity='0.8' transform='translate(0 0)' d='M2 14 V18 H6 V14z'%3E%3CanimateTransform attributeName='transform' type='translate' values='0 0; 24 0; 0 0' dur='2s' begin='0' repeatCount='indefinite' keySplines='0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8' calcMode='spline'/%3E%3C/path%3E%3Cpath opacity='0.5' transform='translate(0 0)' d='M0 14 V18 H8 V14z'%3E%3CanimateTransform attributeName='transform' type='translate' values='0 0; 24 0; 0 0' dur='2s' begin='0.1s' repeatCount='indefinite' keySplines='0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8' calcMode='spline'/%3E%3C/path%3E%3Cpath opacity='0.25' transform='translate(0 0)' d='M0 14 V18 H8 V14z'%3E%3CanimateTransform attributeName='transform' type='translate' values='0 0; 24 0; 0 0' dur='2s' begin='0.2s' repeatCount='indefinite' keySplines='0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8' calcMode='spline'/%3E%3C/path%3E%3C/svg%3E");
    background-size: 32px 4px;
  }

  .image-wrapper img {
    display: block;
    max-width: 100%;
    margin-inline: auto;
    opacity: 0;
    transition: opacity 0.15s ease-in;
  }

  .image-wrapper.loaded img {
    opacity: 1;
  }
</style>
