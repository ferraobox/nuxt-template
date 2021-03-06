require('dotenv').config()
import constants from './data/constants'
const cloudinaryConfig = constants.cloudinaryConfig
const rootUrl = process.env.NODE_ENV === 'production' ? constants.productionUrl : constants.devUrl
//Application config
const config = {
  rootUrl,
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
  plugins: [
    '~/plugins/map.client.js',
    '~/plugins/dataApi.js',
    '~/plugins/auth.client.js',
    '~/plugins/vCalendar.client.js',
    '~/plugins/stripe.client',
  ],
  modules: [
    '~/modules/auth',
    '~/modules/algolia',
    '~/modules/cloudinary',
    '~/modules/stripe',
    '@nuxtjs/cloudinary',
  ],
  buildModules: [
    '@nuxt/image',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/eslint-module',
    ['@nuxtjs/dotenv', { systemvars: true }],
  ],
  //Cloudinary
  cloudinary: {
    cloudName: cloudinaryConfig.cloudName,
    url: cloudinaryConfig.url,
  },
  image: {
    cloudinary: {
      baseURL: `${cloudinaryConfig.url}/${cloudinaryConfig.cloudName}/image/upload/`,
    },
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
    basicUrl: rootUrl,
    auth: {
      cookieName: 'idToken',
      google: {
        apiKey: process.env.GOOGLE_API_KEY,
        clientId: process.env.GOOGLE_CLIENT_ID,
      },
    },
    algolia: {
      appId: process.env.ALGOLIA_APP_ID,
      key: process.env.ALGOLIA_API_TOKEN,
      adminKey: process.env.ALGOLIA_API_ADMIN_TOKEN,
    },
    cloudinary: {
      apiKey: process.env.CLOUDINARY_API_KEY,
    },
    stripe: {
      key: process.env.STRIPE_API_KEY,
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
    stripe: {
      secretKey: process.env.STRIPE_API_SECRET_KEY,
    },
  },
}

export default config
