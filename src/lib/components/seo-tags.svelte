<script lang="ts">
  import type { MetaInfo } from "$lib/types"
  import config from "$lib/config"

  let meta: MetaInfo = $props()

  function buildKeywordsString(keywords?: string[]) {
    if (!keywords) return ""
    return keywords.join(", ")
  }

  function shorten(content: string, max: number = 160) {
    if (content.length <= max) return content
    return `${content.slice(0, max - 3).trim()}...`
  }
</script>

{#if meta.title}
  <title>{meta.title}</title>
{/if}
{#if meta.description}
  <meta name="description" content={shorten(meta.description)} />
{/if}
{#if meta.keywords && meta.keywords.length > 0}
  <meta name="keywords" content={buildKeywordsString(meta.keywords)} />
{/if}
{#if meta.author}
  <meta name="author" content={config.author} />
{/if}
{#if meta.title}
  <meta property="og:title" content={meta.title} />
{/if}
{#if meta.description}
  <meta property="og:description" content={shorten(meta.description)} />
{/if}
{#if config.url}
  <meta property="og:url" content={`${config.url}${meta.url ? meta.url : ""}`} />
{/if}
{#if meta.image}
  <meta property="og:image" content={meta.image} />
{/if}
{#if config.title}
  <meta property="og:site_name" content={config.title} />
{/if}
