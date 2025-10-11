import en from './locales/en.json'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  ssr: true,
  css: ['~/assets/main.css'],
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/icon',
    '@nuxtjs/i18n'
  ],
  app: {
    head: {
      title: 'Diego Imbriani',
      meta: [
      ],
      link: [
        { rel: 'stylesheet', href: 'https://assets.calendly.com/assets/external/widget.css' }
      ],
      script: [
        { src: 'https://assets.calendly.com/assets/external/widget.js', async: true }
      ]
    }
  },
  i18n: {
    locales: ['en', 'it'], // used in URL path prefix
    defaultLocale: 'en',
    vueI18n: './i18n.config.ts',
  }
})