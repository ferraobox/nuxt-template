<template>
  <div class="app-container">
    <div>
      <property-gallery :images="home.images" />
      <property-details :home="home" />
      <property-description :home="home" />
    </div>

    <div class="app-property-details">
      <h3>Home user</h3>
      <user-card :user="user" />

      <h3>Reviews</h3>
      <review-list :reviews="reviews" />
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
    }
  },
}
</script>
