import type { RouterConfig } from '@nuxt/schema'

export default <RouterConfig>{
  scrollBehavior: async (to, from) => {
    const keepScrollPrefixes = ['/committee/', '/contact/']

    const shouldKeepScroll = keepScrollPrefixes.some(
      (prefix) => to.path.startsWith(prefix) && from.path.startsWith(prefix)
    )

    if (shouldKeepScroll) {
      return false
    }

    return 
  }
}
