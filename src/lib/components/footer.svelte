<script lang="ts">
  import config from "$lib/config"
</script>

<footer class="border-t-1 text-gray-400 border-gray-400 bg-black/70 shadow-[0_-10px_15px_-3px_rgba(0,0,0,0.3)]">
  <span>&copy; {config.author}</span>
</footer>

<style>
  footer {
    /* margin-top: 1em; */
    font-size: 0.8em;
    padding-bottom: 0.2em;
    padding-top: 0.2em;
    display: flex;
    justify-content: center;

    span {
      color: var(--secondary-color);
      font-size: 0.875em;
    }
  }
</style>
