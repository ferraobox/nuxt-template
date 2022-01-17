import Vue from 'vue'
import { createImage} from '~image'
import NuxtImg from '~image/components/nuxt-img.vue'
import NuxtPicture from '~image/components/nuxt-picture.vue'

import * as staticRuntime$2428 from '/home/runner/work/nuxt-template/nuxt-template/node_modules/@nuxt/image/dist/runtime/providers/static.js'
import * as cloudinaryRuntime$ea3c from '/home/runner/work/nuxt-template/nuxt-template/node_modules/@nuxt/image/dist/runtime/providers/cloudinary.js'
import * as ipxRuntime$13d2 from '/home/runner/work/nuxt-template/nuxt-template/node_modules/@nuxt/image/dist/runtime/providers/ipx.js'

const imageOptions = {
  "screens": {
    "xs": 320,
    "sm": 640,
    "md": 768,
    "lg": 1024,
    "xl": 1280,
    "xxl": 1536,
    "2xl": 1536
  },
  "presets": {},
  "provider": "ipx",
  "domains": [],
  "alias": {}
}

imageOptions.providers = {
  ['static']: { provider: staticRuntime$2428, defaults: {} },
  ['cloudinary']: { provider: cloudinaryRuntime$ea3c, defaults: {"baseURL":"https://res.cloudinary.com/dngke1rir/image/upload/"} },
  ['ipx']: { provider: ipxRuntime$13d2, defaults: {} }
}

Vue.component(NuxtImg.name, NuxtImg)
Vue.component(NuxtPicture.name, NuxtPicture)
Vue.component('NImg', NuxtImg)
Vue.component('NPicture', NuxtPicture)

export default function (nuxtContext, inject) {
  const $img = createImage(imageOptions, nuxtContext)

  if (process.static && process.server) {
    nuxtContext.beforeNuxtRender(({ nuxtState }) => {
      const ssrData = nuxtState.data[0] || {}
      ssrData._img = nuxtState._img || {}
    })
  }

  inject('img', $img)
}
