// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  css: ['~/assets/main.css'],
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/icon'
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
  }
})
