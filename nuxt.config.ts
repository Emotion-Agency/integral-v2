export default defineNuxtConfig({
  css: ['@/assets/styles/index.scss'],

  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
  },

  typescript: {
    strict: false,
  },

  runtimeConfig: {
    public: {
      ENVIROMENT: process.env.NODE_ENV,
    },
  },

  modules: ['@nuxt/image-edge'],

  image: {
    screens: {
      xs: 460,
      lg: 1060,
      xl: 1280,
    },
    provider: 'ipx',
  },
})
