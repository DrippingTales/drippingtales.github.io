<script lang="ts">
  import { resolve } from "$app/paths"
</script>

<div class="relative">
  <img
    class="image-fade pointer-events-auto m-auto h-14 object-cover select-none sm:h-18"
    src="/assets/main/banner.avif"
    alt=""
    draggable="false"
  />
  <a href={resolve("/")} class="absolute inset-0 m-auto flex items-center justify-center">
    <img
      class="logo pointer-events-auto h-12 py-1 select-none sm:h-20 sm:py-4"
      src="/assets/main/title.avif"
      alt="Dripping Tales"
      draggable="false"
    />
  </a>
</div>

<style>
  .image-fade {
    animation: idle-glitch 3s steps(3, end) infinite;
    mask-image: linear-gradient(to right, transparent, black 20%, black 80%, transparent);
  }

  @media (prefers-reduced-motion: reduce) {
    .image-fade {
      animation: none;
    }
  }

  @keyframes idle-glitch {
    0%,
    100% {
      transform: none;
      opacity: 1;
    }
    3% {
      transform: translate(2px, 0);
      opacity: 0.95;
    }
    4% {
      transform: translate(-1px, 0);
      opacity: 1;
    }
    5% {
      transform: none;
      opacity: 1;
    }
    48% {
      transform: none;
      opacity: 1;
    }
    50% {
      transform: translate(-2px, 1px);
      opacity: 0.9;
    }
    51% {
      transform: translate(1px, 0);
      opacity: 1;
    }
    52% {
      transform: none;
      opacity: 1;
    }
    78% {
      transform: none;
      opacity: 1;
    }
    79% {
      transform: translate(1px, -1px);
      opacity: 0.93;
    }
    80% {
      transform: translate(-1px, 0);
      opacity: 1;
    }
    81% {
      transform: none;
      opacity: 1;
    }
  }
</style>
