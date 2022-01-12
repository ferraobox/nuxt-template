<template>
  <div class="app">
    <div class="app-container">
      <div class="app-hero">
        <h2>- Settle in somewhere new. Discover stays to live, work, or just relax.</h2>
      </div>
    </div>
    <section-premium-listings />
    <section-recently-added class="app-background-grey" :homes="homes" />
    <section-more />
  </div>
</template>

<script>
//By default the vue-loader will look for a file named index.js
export default {
  async asyncData({ $dataApi, error }) {
    const homesResponse = await $dataApi.getHomes()
    if (!homesResponse.ok) {
      return error({
        statusCode: homesResponse.status,
        message: homesResponse.statusText,
      })
    }
    return { homes: homesResponse.json }
  },

  head() {
    return {
      title: 'Homepage',
      meta: [
        {
          name: 'description',
          content: 'App that uses Nuxt, Cloudinary, Stripe, Google Maps and Algolia',
          hid: 'description',
        },
      ],
    }
  },
}
</script>
