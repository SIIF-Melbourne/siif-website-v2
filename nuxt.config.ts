// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  routeRules: {
    '/committee': {
      redirect: '/committee/2026%20Sem%201'
    },
    '/contact': {
      redirect: '/contact/club-membership'
    },
    '/publications': {
      redirect: '/publications/articles'
    }
  },

  app: {
    head: {
      link: [
        {
          rel: 'stylesheet',
          href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css'
        }
      ]
    }
  },

  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  telemetry: false,

  css: [
    '~/assets/css/normalize.css',
    '~/assets/css/reusable.css',
    '~/assets/css/global.css'
  ],

  modules: ['@nuxt/image'],

  image: {
    quality: 80,
    format: ['avif', 'webp'],
    provider: 'cloudinary',
    cloudinary: {
      baseURL: 'https://res.cloudinary.com/dugjyatvx/image/upload'
    } 
  }
})
