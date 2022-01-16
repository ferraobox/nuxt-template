<template>
  <div class="app">
    <header class="app-header">
      <div class="app-logo">
        <img src="/images/logo.svg" />
      </div>
      <div class="app-search">
        <search-input />
        <input type="text" class="datepicker" placeholder="Check in" />
        <input type="text" class="datepicker" placeholder="Check out" />
        <button>
          <img src="/images/icons/search.svg" />
        </button>
      </div>
      <div class="app-user-menu">
        <template v-if="isLoggedIn">
          <nuxt-link to="/">
            <img src="/images/icons/house.svg" />
          </nuxt-link>
          <div class="name">{{ user.fullName }}</div>
          <img :src="user.profileUrl" class="avatar" />
        </template>
        <div v-show="!isLoggedIn" id="googleButton" class="ml8"></div>
      </div>
    </header>
    <!-- nuxt label for the main content -->
    <nuxt />
  </div>
</template>
<script>
export default {
  computed: {
    user() {
      return this.$store.state.auth.user
    },
    isLoggedIn() {
      return this.$store.state.auth.isLoggedIn
    },
  },
}
</script>
