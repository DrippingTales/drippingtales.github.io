import { browser } from "$app/env"

export const availableLanguage = ["en", "fr"]
export const defaultLanguage = "en"

export const getLanguage = () => {
  if (!browser) return defaultLanguage
  const lang = document.documentElement.getAttribute("data-lang") ?? defaultLanguage
  return availableLanguage.includes(lang) ? lang : defaultLanguage
}
