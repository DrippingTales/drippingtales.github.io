<script lang="ts">
  import config from "$lib/config"

  let { data } = $props()
</script>

<svelte:head>
  <title>Home ~ {config.title}</title>
  <meta name="author" content={config.author} />
  <meta name="description" content="Dripping Tales Records" />
</svelte:head>

<data.content />
