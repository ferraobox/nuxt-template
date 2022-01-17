<template>
  <div class="app-container">
    <div class="app-wrapper">
      <div class="app-property-details">
        <property-gallery :images="home.images" />
        <property-details :home="home" />
        <property-description :home="home" />
        <property-host :user="user" />
        <property-map :home="home" />
        <property-reviews :reviews="reviews" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ params, $dataApi, error }) {
    const responses = await Promise.all([
      //Get Home from the API
      $dataApi.getHomeByHomeId(params.id),
      //Get home reviews from the API
      $dataApi.getReviewsByHomeId(params.id),
      //Get home user from the API
      $dataApi.getUserByHomeId(params.id),
    ])

    const badResponse = responses.find((response) => !response.ok)
    if (badResponse) {
      return error({
        statusCode: badResponse.status,
        message: badResponse.statusText,
      })
    }

    //Return Data
    return {
      home: responses[0].json,
      reviews: responses[1].json,
      user: responses[2].json[0],
    }
  },

  head() {
    return {
      title: this.home.title,
      meta: [
        { hid: 'og-type', property: 'og:type', content: 'website' },
        { hid: 'og-title', property: 'og:title', content: this.home.title },
        { hid: 'og-desc', property: 'og:description', content: this.home.description },
        {
          hid: 'og-image',
          property: 'og:image',
          content: this.$img(this.home.images[0], { width: 1200 }, { provider: 'cloudinary' }),
        },
        {
          hid: 'og-url',
          property: 'og:url',
          content: `${this.$config.basicUrl}/home/${this.home.objectID}`,
        },
        { hid: 't-type', name: 'twitter:card', content: 'summary_large_image' },
      ],
    }
  },
}
</script>
