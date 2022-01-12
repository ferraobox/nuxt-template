<template>
  <div class="app-masonry">
    <div v-for="image in images" :key="image" :style="`background-image: url(${image})`"></div>
  </div>
</template>
<script>
export default {
  props: {
    images: {
      type: Array,
      requierd: true,
      default: () => [],
    },
  },
}
</script>
