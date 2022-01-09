require('dotenv').config()
export default {
  components: true,
  head: {
    titleTemplate: '%s - ' + process.env.npm_package_name,
    htmlAttrs: {
      Lang: 'en',
    },
    bodyAttrs: {
      class: ['my-style'],
    },
    meta: [
      {
        name: 'description',
        content: 'The home page of our %s app.',
        hid: 'description',
      },
    ],
  },
  router: {
    prefetchLinks: false,
  },
  plugins: ['~/plugins/map.client.js', '~/plugins/dataApi.js'],
  modules: [],
  buildModules: [
    '@nuxtjs/tailwindcss',
    ['@nuxtjs/dotenv', { systemvars: true }],
    [
      '@nuxtjs/eslint-module',
      {
        eslintPath: './.eslintrc.js',
      },
    ],
  ],
}
