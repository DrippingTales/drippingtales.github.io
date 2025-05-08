export const availableLanguage = ["en", "fr"]
export const defaultLanguage = "en"

export const getLanguage = () => {
  const language = navigator.language
  const shortenLanguage = language.substring(0, 2)

  if (availableLanguage.includes(shortenLanguage)) {
    return shortenLanguage
  } else {
    return defaultLanguage
  }
}
