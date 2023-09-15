// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  pages: true,
  modules: [
    "nuxt-icon",
    "nuxt-lodash",
    "@pinia/nuxt",
    // "@pinia-plugin-persistedstate/nuxt",
    "@nuxtjs/tailwindcss",
    // "@nuxtjs/supabase",
  ],
  runtimeConfig: {
    public: {
      // stripeURL: process.env.STRAPI_URL || 'http://localhost:1337',
    }
  },
  app: {
    head: {
      script: [
        {
          src: 'https://js.stripe.com/v3/', defer: true
        }
      ]
    }
  }
})
