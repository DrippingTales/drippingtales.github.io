import { PowerGlitch } from "powerglitch"
import type { GlitchPartialOptions } from "powerglitch"

type Options = GlitchPartialOptions & {
  event?: string
}

const defaultOptions: Options = {
  event: "load",
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

export function glitch(node: any, options: Options) {
  options = { ...defaultOptions, ...options }

  const handle = () => {
    return PowerGlitch.glitch(node, options)
  }

  // HACK: hacky conditional
  if (options.event == "load" || options.playMode == "always") {
    handle()
  } else {
    node.addEventListener(options.event, handle)
  }

  return {
    destroy() {
      node.removeEventListener(options.event, handle)
    }
  }
}
