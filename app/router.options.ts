import type { RouterConfig } from '@nuxt/schema'

export default <RouterConfig>{
  scrollBehavior: async (to, from, savedPosition) => {
    if (savedPosition) {
      return {
        left: savedPosition.left || 0,
        top: 0, 
        behavior: 'smooth'
      }
    }

    const keepScrollPrefixes = ['/committee/', '/contact/']

    const shouldKeepScroll = keepScrollPrefixes.some(
      (prefix) => to.path.startsWith(prefix) && from.path.startsWith(prefix)
    )

    if (shouldKeepScroll) {
      return false
    }

    return { left: 0, top: 0, behavior: 'smooth' }
  }
}
