<template>
  <div class="app-double-column">
    <div class="app-padded-vertical">
      <h2><img src="/images/icons/quote.svg" class="icon" /></h2>
      <p class="app-summary">{{ home.description }}</p>
    </div>
    <div class="app-padded-vertical">
      <div v-for="(feature, index) in home.features" :key="index" class="app-tag">
        {{ feature }}
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    home: {
      type: Object,
      required: true,
    },
  },
}
</script>
