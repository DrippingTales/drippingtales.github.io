<script lang="ts">
  import config from "$lib/config"
</script>

<footer class="border-gray-700">
  <span class="text-gray-700" >&copy; {config.author}</span>
</footer>

<style>
  footer {
    font-size: 0.8em;
    /* padding-top: 0.2em; */
    padding-bottom: 0.2em;
    display: flex;
    justify-content: center;

    span {
      font-size: 0.875em;
    }
  }
</style>
