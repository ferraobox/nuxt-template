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
        <nuxt-link to="/">
          <img src="/images/icons/house.svg" />
        </nuxt-link>
        <img src="/images/user.jpg" class="avatar" />
      </div>
    </header>
    <!-- nuxt label for the main content -->
    <nuxt />
  </div>
</template>
