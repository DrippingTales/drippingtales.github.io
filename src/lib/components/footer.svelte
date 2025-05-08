<script lang="ts">
  import config from "$lib/config"
</script>

<footer>
  <span>&copy; {config.author}</span>
</footer>

<style>
  footer {
    margin-top: 1em;
    font-size: 0.8em;
    padding-block: 0.7em;
    display: flex;
    justify-content: center;

    span {
      color: var(--secondary-color);
      font-size: 0.875em;
    }
  }
</style>
