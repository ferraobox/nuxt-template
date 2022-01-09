<template>
  <div class="app-reviews">
    <div v-for="review in reviews" :key="review.objectID" class="review-card">
      <div class="image-container">
        <img :src="review.reviewer.image" alt="Profile image" />
      </div>
      <div>
        <b> {{ review.reviewer.name }} </b> - {{ formatDate(review.date)
        }}<br />
        <short-text :text="review.comment" :target="150" /><br />
      </div>
    </div>
  </div>
</template>

<script>
import formatDate from '~/utils/formatDate'

export default {
  props: {
    reviews: {
      type: Array,
      required: true,
    },
  },

  methods: {
    formatDate,
  },
}
</script>
