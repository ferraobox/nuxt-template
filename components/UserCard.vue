<template>
  <div class="app-user-info">
    <div class="user-card">
      <div>
        <img :src="user.image" alt="Home user image" />
      </div>
      <div class="user-data">
        <b>{{ user.name }}</b
        ><br />
        <img src="/images/icons/group.svg" class="icon" /> Joined
        {{ formatDate(user.joined) }} <br />
        <img src="/images/icons/heart.svg" class="icon" />
        {{ user.reviewCount }} reviews <br />
        <img src="/images/icons/quote.svg" class="icon" />
        {{ user.description }} <br />
      </div>
    </div>
  </div>
</template>

<script>
import formatDate from '~/utils/formatDate'

export default {
  props: {
    user: {
      type: Object,
      required: true,
    },
  },
  methods: {
    formatDate,
  },
}
</script>
