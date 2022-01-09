<template>
  <div class="app-wrapper">
    <div class="app-double-column app-property-details">
      <div>
        <h3><img src="/images/icons/quote.svg" class="icon" /></h3>
        <p class="app-summary">{{ home.description }}</p>
      </div>
      <div>
        <div ref="map" style="height: 100%; width: 100%" />
      </div>
    </div>
    <br />
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
  mounted() {
    this.$maps.showMap(this.$refs.map, {
      lat: this.home._geoloc.lat,
      lng: this.home._geoloc.lng,
    })
  },
}
</script>
