import { PowerGlitch } from "powerglitch"
import type { GlitchPartialOptions } from "powerglitch"

type GlitchOpts = GlitchPartialOptions & {
  event?: string
}

const defaultOptions: GlitchPartialOptions = {
  playMode: "always",
  timing: {
    duration: 10_000,
    iterations: 1
  },
  glitchTimeSpan: {
    start: 0.0,
    end: 0.04
  }
}

export function glitch(
  node: HTMLElement,
  { event = "load", ...glitchOptions }: GlitchOpts
) {
  const options = { ...defaultOptions, ...glitchOptions }
  let result: ReturnType<typeof PowerGlitch.glitch> | undefined

  const handle = () => {
    result = PowerGlitch.glitch(node, options)
  }

  if (event === "load") {
    handle()
  } else {
    node.addEventListener(event, handle)
  }

  return {
    destroy() {
      node.removeEventListener(event, handle)
      result?.stopGlitch()
    }
  }
}
