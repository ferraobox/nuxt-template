<template>
  <div>
    <div class="app-container">
      <property-gallery :images="home.images" />
      <property-details :home="home" />
      <property-description :home="home" />
    </div>

    <h3>Reviews</h3>
    <div v-for="review in reviews" :key="review.objectID">
      <img :src="review.reviewer.image" alt="Profile image" /><br />
      {{ review.reviewer.name }} <br />
      {{ formDate(review.date) }}<br />
      <short-text :text="review.comment" :target="150" /><br />
    </div>
    <h3>- Home user -</h3>
    <img :src="user.image" alt="Home user image" />
    <h4>{{ user.name }}</h4>
    <ul class="list">
      <li>Joined - {{ formDate(user.joined) }}</li>
      <li>Reviews - {{ user.reviewCount }}</li>
      <li>{{ user.description }}</li>
    </ul>
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

  methods: {
    formDate(dateSrt) {
      const date = new Date(dateSrt)
      return date.toLocaleDateString(undefined, {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
      })
    },
  },
}
</script>
<style scoped>
ul.list {
  list-style: none; /* Remove default bullets */
}

ul.list li:before {
  content: '\2022';
  padding-right: 0.5em;
  color: darkcyan;
}
</style>
