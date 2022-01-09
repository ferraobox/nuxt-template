<template>
  <div>
    <h1>{{ home.title }}</h1>
    <div style="display: flex">
      <img
        v-for="image in home.images"
        :key="image"
        :src="image"
        width="200"
        height="150"
      />
    </div>
    <h2>Description:</h2>
    ${{ home.pricePerNight }} - nigth <br />

    <img src="/images/marker.svg" alt="" width="20" height="20" />
    {{ home.location.city }} - {{ home.location.address }} -
    {{ home.location.state }}<br />

    <img src="/images/star.svg" alt="" width="20" height="20" />
    {{ home.reviewValue }} <br />

    * Guests - {{ home.guests }}<br />
    * Rooms - {{ home.bedrooms }}<br />
    * Beds - {{ home.beds }}<br />
    * Baths - {{ home.bathrooms }}<br />
    {{ home.description }}
    <div style="height: 800px; width: 800px" ref="map"></div>
    <br />
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
  mounted() {
    this.$maps.showMap(this.$refs.map, {
      lat: this.home._geoloc.lat,
      lng: this.home._geoloc.lng,
    })
  },

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
    if (badResponse)
      return error({
        statusCode: badResponse.status,
        message: badResponse.statusText,
      })

    //Return Data
    return {
      home: responses[0].json,
      reviews: responses[1].json,
      user: responses[2].json[0],
    }
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
