<div class="relative">
  <img
    class="image-fade h-14 sm:h-18 m-auto object-cover select-none pointer-events-auto"
    draggable="false"
    src="/assets/main/banner.avif"
    alt=""
  />
  <a href="/" class="absolute inset-0 m-auto flex items-center justify-center">
    <img
      class="logo h-12 py-1 sm:py-4 sm:h-20 select-none pointer-events-auto"
      src="/assets/main/title.avif"
      alt="Dripping Tales"
    />
  </a>
</div>

<style>
  .image-fade {
    animation: fade-in 0.5s ease-out, idle-glitch 3s steps(3, end) 0.5s infinite;
    mask-image: linear-gradient(to right, transparent, black 20%, black 80%, transparent);
  }

  @keyframes fade-in {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @keyframes idle-glitch {
    0%, 100% {
      transform: none;
      filter: none;
      opacity: 1;
    }
    3% {
      transform: translate(2px, 0);
      filter: brightness(1.1);
      opacity: 0.95;
    }
    4% {
      transform: translate(-1px, 0);
      filter: none;
      opacity: 1;
    }
    5% {
      transform: none;
      filter: none;
      opacity: 1;
    }
    48% {
      transform: none;
      filter: none;
      opacity: 1;
    }
    50% {
      transform: translate(-2px, 1px);
      filter: saturate(1.3);
      opacity: 0.9;
    }
    51% {
      transform: translate(1px, 0);
      filter: none;
      opacity: 1;
    }
    52% {
      transform: none;
      filter: none;
      opacity: 1;
    }
    78% {
      transform: none;
      filter: none;
      opacity: 1;
    }
    79% {
      transform: translate(1px, -1px);
      filter: brightness(0.95);
      opacity: 0.93;
    }
    80% {
      transform: translate(-1px, 0);
      filter: none;
      opacity: 1;
    }
    81% {
      transform: none;
      filter: none;
      opacity: 1;
    }
  }
</style>
