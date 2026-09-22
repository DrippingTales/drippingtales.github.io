export function fadeInWhenLoaded(node: HTMLImageElement) {
  node.style.opacity = "0"
  node.style.transition = "opacity 0.25s ease-in-out"

  const handleLoad = () => {
    node.style.opacity = "1"
  }

  if (node.complete) {
    handleLoad()
  } else {
    node.addEventListener("load", handleLoad)
  }

  return {
    destroy() {
      node.removeEventListener("load", handleLoad)
    }
  }
}
