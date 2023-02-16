import colors from 'vuetify/es5/util/colors'

const meu_tema = {
  background: '#D08C60',
  primary: '#FFCB69',
  accent: '#D9AE94',
  secondary: '#9B9B7A',
  info: '#FFE8D6',
  warning: '#D08C60',
  error: '#997B66',
  success: '#797D62',
}

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '%s',
    title: 'Portfolio',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    link: [
      {
        rel: 'stylesheet',
        href: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css',
      },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page:
  // https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended):
  // https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ['@nuxt/http'],

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    // customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: false,
      options: {
        customProperties: true,
      },
      themes: {
        // dark: {
        //   primary: '#CB997E',
        //   accent: '#DDBEA9',
        //   secondary: '#6B705C',
        //   info: '#FFE8D6',
        //   warning: colors.amber.base,
        //   error: colors.deepOrange.accent4,
        //   success: colors.green.accent3,
        //   base: '#CB997E',
        // },
        light: {
          background: meu_tema.background,
          primary: meu_tema.primary,
          accent: meu_tema.accent,
          secondary: meu_tema.secondary,
          info: meu_tema.info,
          warning: meu_tema.warning,
          error: meu_tema.error,
          success: meu_tema.success,
        },
      },
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  loading: '~/components/LoadingPage.vue',

  target: 'static',
}
