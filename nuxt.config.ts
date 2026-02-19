// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  telemetry: false,
  css: [
    '~/assets/css/normalize.css',
    '~/assets/css/reusable.css',
    '~/assets/css/global.css'
  ],
})
