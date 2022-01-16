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
  plugins: ['~/plugins/map.client.js', '~/plugins/dataApi.js', '~/plugins/auth.client.js'],
  modules: ['~/modules/auth', '~/modules/algolia', '~/modules/cloudinary', '@nuxtjs/cloudinary'],
  buildModules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/eslint-module',
    ['@nuxtjs/dotenv', { systemvars: true }],
  ],
  cloudinary: {
    cloudName: 'ferraobox',
  },
  // Tailwind config
  css: ['~/assets/sass/app.scss'],
  build: {
    extractCSS: true,
    loaders: {
      limit: 0,
    },
  },
  //Env config
  publicRuntimeConfig: {
    auth: {
      cookieName: 'idToken',
      clientId: process.env.GOOGLE_CLIENT_ID,
    },
    algolia: {
      appId: process.env.ALGOLIA_APP_ID,
      key: process.env.ALGOLIA_API_TOKEN,
      adminKey: process.env.ALGOLIA_API_ADMIN_TOKEN,
    },
    cloudinary: {
      apiKey: process.env.CLOUDINARY_API_KEY,
    },
  },
  privateRuntimeConfig: {
    algolia: {
      appId: process.env.ALGOLIA_APP_ID,
      key: process.env.ALGOLIA_API_TOKEN,
      adminKey: process.env.ALGOLIA_API_ADMIN_TOKEN,
    },
    cloudinary: {
      apiSecret: process.env.CLOUDINARY_API_SECRET,
    },
  },
}
