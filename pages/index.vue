<template>
  <div>
    List of Homes:
    <div
      v-for="home in homes"
      :key="home.objectID"
      style="float: Left; margin: 10px"
    >
      <nuxt-link :to="`/home/${home.objectID}`">
        <home-card :home="home" />
      </nuxt-link>
    </div>
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
          content: 'The home page of our NUXTBNB app.',
          hid: 'description',
        },
      ],
    }
  },
}
</script>
