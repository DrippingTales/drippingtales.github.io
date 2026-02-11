<script lang="ts">
  type Props = {
    src: string
    alt: string
    class?: string
    glitch?: boolean
  }

  let { src, alt, class: clazz, glitch = true }: Props = $props()

  // Glob import all content images
  const imageModules = import.meta.glob<string>(
    "/src/content/**/assets/*.{avif,gif,heif,jpeg,jpg,png,tiff,webp,svg}",
    { eager: true, import: "default", query: "?url" }
  )

  // Extract filename from src path (e.g., "/assets/posts/image.avif" -> "image.avif")
  const filename = $derived(src.split("/").pop() ?? "")

  // Find matching image module
  const matchingPath = $derived(Object.keys(imageModules).find((path) => path.endsWith(filename)))
  const image = $derived(matchingPath ? imageModules[matchingPath] : src)

  let loaded = $state(false)

  // Randomly select a glitch variant (1-5)
  const glitchVariant = Math.floor(Math.random() * 5) + 1

  function handleLoad() {
    loaded = true
  }

  function checkComplete(img: HTMLImageElement) {
    // If image is already cached, mark as loaded immediately
    if (img.complete && img.naturalHeight !== 0) {
      loaded = true
    }
  }
</script>

<!-- SVG Filters -->
<svg class="svg-filters">
  <defs>
    <filter id="pixelate">
      <feFlood x="4" y="4" height="2" width="2"/>
      <feComposite width="8" height="8"/>
      <feTile result="a"/>
      <feComposite in="SourceGraphic" in2="a" operator="in"/>
      <feMorphology operator="dilate" radius="4"/>
    </filter>
    <filter id="chroma">
      <feColorMatrix type="matrix" result="red_" values="1 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0"/>
      <feOffset in="red_" dx="2" dy="0" result="red"/>
      <feColorMatrix type="matrix" in="SourceGraphic" result="blue_" values="0 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0"/>
      <feOffset in="blue_" dx="-2" dy="0" result="blue"/>
      <feBlend mode="screen" in="red" in2="blue"/>
    </filter>
  </defs>
</svg>

<div
  class="image-wrapper"
  class:loaded
  class:glitch={glitch && loaded}
  class:glitch-1={glitch && glitchVariant === 1}
  class:glitch-2={glitch && glitchVariant === 2}
  class:glitch-3={glitch && glitchVariant === 3}
  class:glitch-4={glitch && glitchVariant === 4}
  class:glitch-5={glitch && glitchVariant === 5}
>
  <div class="glitch-container" style:--bg-image="url({image})">
    <img
      draggable={false}
      src={image}
      {alt}
      class={clazz}
      loading="lazy"
      onload={handleLoad}
      use:checkComplete
    />
  </div>
</div>

<style>
  .svg-filters {
    position: absolute;
    width: 0;
    height: 0;
    overflow: hidden;
  }

  .image-wrapper {
    position: relative;
    width: fit-content;
    margin-inline: auto;
    background: center no-repeat;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='4' viewBox='0 14 32 4' fill='%23374151'%3E%3Cpath opacity='0.8' transform='translate(0 0)' d='M2 14 V18 H6 V14z'%3E%3CanimateTransform attributeName='transform' type='translate' values='0 0; 24 0; 0 0' dur='2s' begin='0' repeatCount='indefinite' keySplines='0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8' calcMode='spline'/%3E%3C/path%3E%3Cpath opacity='0.5' transform='translate(0 0)' d='M0 14 V18 H8 V14z'%3E%3CanimateTransform attributeName='transform' type='translate' values='0 0; 24 0; 0 0' dur='2s' begin='0.1s' repeatCount='indefinite' keySplines='0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8' calcMode='spline'/%3E%3C/path%3E%3Cpath opacity='0.25' transform='translate(0 0)' d='M0 14 V18 H8 V14z'%3E%3CanimateTransform attributeName='transform' type='translate' values='0 0; 24 0; 0 0' dur='2s' begin='0.2s' repeatCount='indefinite' keySplines='0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8' calcMode='spline'/%3E%3C/path%3E%3C/svg%3E");
    background-size: 32px 4px;
    overflow: hidden;
  }

  .glitch-container {
    position: relative;
    overflow: hidden;
  }

  .image-wrapper img {
    display: block;
    max-width: 100%;
    margin-inline: auto;
    opacity: 0;
    transition: opacity 0.15s ease-in;
  }

  /* Glitch grid overlay - positioned absolutely over the image */
  .image-wrapper.glitch .glitch-container::before,
  .image-wrapper.glitch .glitch-container::after {
    content: "";
    position: absolute;
    inset: 0;
    display: grid;
    grid-template-columns: repeat(8, 1fr);
    grid-template-rows: repeat(16, 1fr);
    z-index: 1;
    background: var(--bg-image) center / 100% 100% no-repeat;
    filter: contrast(1.1) url(#pixelate);
    pointer-events: none;
  }

  .image-wrapper.loaded img {
    opacity: 1;
  }

  /* Glitch variant 1 */
  .image-wrapper.glitch-1 .glitch-container::before {
    clip-path: polygon(
      calc(var(--col-start, 0) * 12.5%) calc(var(--row-start, 0) * 6.25%),
      calc(var(--col-end, 0) * 12.5%) calc(var(--row-start, 0) * 6.25%),
      calc(var(--col-end, 0) * 12.5%) calc(var(--row-end, 0) * 6.25%),
      calc(var(--col-start, 0) * 12.5%) calc(var(--row-end, 0) * 6.25%)
    );
    animation: glitch-1a 275ms steps(24);
  }
  .image-wrapper.glitch-1 .glitch-container::after {
    clip-path: polygon(
      calc(var(--col-start2, 0) * 12.5%) calc(var(--row-start2, 0) * 6.25%),
      calc(var(--col-end2, 0) * 12.5%) calc(var(--row-start2, 0) * 6.25%),
      calc(var(--col-end2, 0) * 12.5%) calc(var(--row-end2, 0) * 6.25%),
      calc(var(--col-start2, 0) * 12.5%) calc(var(--row-end2, 0) * 6.25%)
    );
    animation: glitch-1b 685ms steps(24);
  }

  /* Glitch variant 2 */
  .image-wrapper.glitch-2 .glitch-container::before {
    clip-path: polygon(
      calc(var(--col-start, 0) * 12.5%) calc(var(--row-start, 0) * 6.25%),
      calc(var(--col-end, 0) * 12.5%) calc(var(--row-start, 0) * 6.25%),
      calc(var(--col-end, 0) * 12.5%) calc(var(--row-end, 0) * 6.25%),
      calc(var(--col-start, 0) * 12.5%) calc(var(--row-end, 0) * 6.25%)
    );
    animation: glitch-2a 225ms steps(18);
  }
  .image-wrapper.glitch-2 .glitch-container::after {
    clip-path: polygon(
      calc(var(--col-start2, 0) * 12.5%) calc(var(--row-start2, 0) * 6.25%),
      calc(var(--col-end2, 0) * 12.5%) calc(var(--row-start2, 0) * 6.25%),
      calc(var(--col-end2, 0) * 12.5%) calc(var(--row-end2, 0) * 6.25%),
      calc(var(--col-start2, 0) * 12.5%) calc(var(--row-end2, 0) * 6.25%)
    );
    animation: glitch-2b 525ms steps(20);
  }

  /* Glitch variant 3 */
  .image-wrapper.glitch-3 .glitch-container::before {
    clip-path: polygon(
      calc(var(--col-start, 0) * 12.5%) calc(var(--row-start, 0) * 6.25%),
      calc(var(--col-end, 0) * 12.5%) calc(var(--row-start, 0) * 6.25%),
      calc(var(--col-end, 0) * 12.5%) calc(var(--row-end, 0) * 6.25%),
      calc(var(--col-start, 0) * 12.5%) calc(var(--row-end, 0) * 6.25%)
    );
    animation: glitch-3a 350ms steps(28);
  }
  .image-wrapper.glitch-3 .glitch-container::after {
    clip-path: polygon(
      calc(var(--col-start2, 0) * 12.5%) calc(var(--row-start2, 0) * 6.25%),
      calc(var(--col-end2, 0) * 12.5%) calc(var(--row-start2, 0) * 6.25%),
      calc(var(--col-end2, 0) * 12.5%) calc(var(--row-end2, 0) * 6.25%),
      calc(var(--col-start2, 0) * 12.5%) calc(var(--row-end2, 0) * 6.25%)
    );
    animation: glitch-3b 800ms steps(32);
  }

  /* Glitch variant 4 */
  .image-wrapper.glitch-4 .glitch-container::before {
    clip-path: polygon(
      calc(var(--col-start, 0) * 12.5%) calc(var(--row-start, 0) * 6.25%),
      calc(var(--col-end, 0) * 12.5%) calc(var(--row-start, 0) * 6.25%),
      calc(var(--col-end, 0) * 12.5%) calc(var(--row-end, 0) * 6.25%),
      calc(var(--col-start, 0) * 12.5%) calc(var(--row-end, 0) * 6.25%)
    );
    animation: glitch-4a 200ms steps(16);
  }
  .image-wrapper.glitch-4 .glitch-container::after {
    clip-path: polygon(
      calc(var(--col-start2, 0) * 12.5%) calc(var(--row-start2, 0) * 6.25%),
      calc(var(--col-end2, 0) * 12.5%) calc(var(--row-start2, 0) * 6.25%),
      calc(var(--col-end2, 0) * 12.5%) calc(var(--row-end2, 0) * 6.25%),
      calc(var(--col-start2, 0) * 12.5%) calc(var(--row-end2, 0) * 6.25%)
    );
    animation: glitch-4b 450ms steps(22);
  }

  /* Glitch variant 5 */
  .image-wrapper.glitch-5 .glitch-container::before {
    clip-path: polygon(
      calc(var(--col-start, 0) * 12.5%) calc(var(--row-start, 0) * 6.25%),
      calc(var(--col-end, 0) * 12.5%) calc(var(--row-start, 0) * 6.25%),
      calc(var(--col-end, 0) * 12.5%) calc(var(--row-end, 0) * 6.25%),
      calc(var(--col-start, 0) * 12.5%) calc(var(--row-end, 0) * 6.25%)
    );
    animation: glitch-5a 325ms steps(26);
  }
  .image-wrapper.glitch-5 .glitch-container::after {
    clip-path: polygon(
      calc(var(--col-start2, 0) * 12.5%) calc(var(--row-start2, 0) * 6.25%),
      calc(var(--col-end2, 0) * 12.5%) calc(var(--row-start2, 0) * 6.25%),
      calc(var(--col-end2, 0) * 12.5%) calc(var(--row-end2, 0) * 6.25%),
      calc(var(--col-start2, 0) * 12.5%) calc(var(--row-end2, 0) * 6.25%)
    );
    animation: glitch-5b 600ms steps(30);
  }

  /* Keyframes for variant 1 */
  @keyframes glitch-1a {
    0% { --col-start: 1; --col-end: 9; --row-start: 12; --row-end: 17; }
    10% { --col-start: 5; --col-end: 9; --row-start: 3; --row-end: 12; }
    20% { --row-start: 8; --row-end: 10; }
    30%, 60% { --col-start: 9; --col-end: 9; --row-start: 9; --row-end: 9; }
    40% { --row-start: 1; --row-end: 3; --col-start: 2; --col-end: 8; }
    50% { --row-start: 10; --row-end: 14; --col-start: 1; --col-end: 9; }
  }

  @keyframes glitch-1b {
    0% { --col-start2: 5; --col-end2: 9; --row-start2: 2; --row-end2: 12; }
    10% { --col-start2: 1; --col-end2: 9; }
    20% { --row-start2: 8; --row-end2: 18; }
    30%, 60% { --col-start2: 9; --col-end2: 9; --row-start2: 9; --row-end2: 9; }
    40% { --row-start2: 1; --row-end2: 3; --col-start2: 2; --col-end2: 8; }
    50% { --row-start2: 10; --row-end2: 14; --col-start2: 1; --col-end2: 5; }
  }

  /* Keyframes for variant 2 - horizontal sweep */
  @keyframes glitch-2a {
    0% { --col-start: 0; --col-end: 2; --row-start: 0; --row-end: 16; }
    20% { --col-start: 2; --col-end: 4; }
    40% { --col-start: 4; --col-end: 6; }
    60% { --col-start: 6; --col-end: 8; }
    80%, 100% { --col-start: 8; --col-end: 8; --row-start: 8; --row-end: 8; }
  }
  @keyframes glitch-2b {
    0% { --col-start2: 6; --col-end2: 8; --row-start2: 4; --row-end2: 12; }
    25% { --col-start2: 4; --col-end2: 6; --row-start2: 0; --row-end2: 8; }
    50% { --col-start2: 2; --col-end2: 4; --row-start2: 8; --row-end2: 16; }
    75% { --col-start2: 0; --col-end2: 2; --row-start2: 2; --row-end2: 14; }
    100% { --col-start2: 8; --col-end2: 8; --row-start2: 8; --row-end2: 8; }
  }

  /* Keyframes for variant 3 - vertical bands */
  @keyframes glitch-3a {
    0% { --col-start: 0; --col-end: 8; --row-start: 0; --row-end: 4; }
    15% { --row-start: 4; --row-end: 8; }
    30% { --row-start: 8; --row-end: 12; }
    45% { --row-start: 12; --row-end: 16; }
    60%, 100% { --col-start: 4; --col-end: 4; --row-start: 8; --row-end: 8; }
  }
  @keyframes glitch-3b {
    0% { --col-start2: 0; --col-end2: 4; --row-start2: 6; --row-end2: 10; }
    20% { --col-start2: 4; --col-end2: 8; --row-start2: 2; --row-end2: 6; }
    40% { --col-start2: 2; --col-end2: 6; --row-start2: 10; --row-end2: 14; }
    60% { --col-start2: 0; --col-end2: 8; --row-start2: 14; --row-end2: 16; }
    80%, 100% { --col-start2: 4; --col-end2: 4; --row-start2: 8; --row-end2: 8; }
  }

  /* Keyframes for variant 4 - corner glitches */
  @keyframes glitch-4a {
    0% { --col-start: 0; --col-end: 3; --row-start: 0; --row-end: 5; }
    25% { --col-start: 5; --col-end: 8; --row-start: 0; --row-end: 5; }
    50% { --col-start: 5; --col-end: 8; --row-start: 11; --row-end: 16; }
    75% { --col-start: 0; --col-end: 3; --row-start: 11; --row-end: 16; }
    100% { --col-start: 4; --col-end: 4; --row-start: 8; --row-end: 8; }
  }
  @keyframes glitch-4b {
    0% { --col-start2: 2; --col-end2: 6; --row-start2: 5; --row-end2: 11; }
    33% { --col-start2: 0; --col-end2: 4; --row-start2: 3; --row-end2: 13; }
    66% { --col-start2: 4; --col-end2: 8; --row-start2: 3; --row-end2: 13; }
    100% { --col-start2: 4; --col-end2: 4; --row-start2: 8; --row-end2: 8; }
  }

  /* Keyframes for variant 5 - random scatter */
  @keyframes glitch-5a {
    0% { --col-start: 1; --col-end: 4; --row-start: 2; --row-end: 6; }
    12% { --col-start: 5; --col-end: 8; --row-start: 8; --row-end: 12; }
    24% { --col-start: 0; --col-end: 3; --row-start: 12; --row-end: 15; }
    36% { --col-start: 3; --col-end: 7; --row-start: 0; --row-end: 4; }
    48% { --col-start: 6; --col-end: 8; --row-start: 4; --row-end: 10; }
    60%, 100% { --col-start: 4; --col-end: 4; --row-start: 8; --row-end: 8; }
  }
  @keyframes glitch-5b {
    0% { --col-start2: 4; --col-end2: 7; --row-start2: 10; --row-end2: 14; }
    15% { --col-start2: 0; --col-end2: 2; --row-start2: 4; --row-end2: 8; }
    30% { --col-start2: 6; --col-end2: 8; --row-start2: 0; --row-end2: 6; }
    45% { --col-start2: 2; --col-end2: 5; --row-start2: 6; --row-end2: 10; }
    60% { --col-start2: 0; --col-end2: 8; --row-start2: 14; --row-end2: 16; }
    75%, 100% { --col-start2: 4; --col-end2: 4; --row-start2: 8; --row-end2: 8; }
  }
</style>
