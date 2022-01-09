<template>
  <div style="text-align: center">
    <img
      src="https://www.elegantthemes.com/blog/wp-content/uploads/2016/03/500-internal-server-error-featured-image-1.png"
    /><br />
    <h1>Sorry... An error has ocurred</h1>
    <h3>- Description -</h3>
    <h4>{{ error.message }}</h4>
    <h3>* Status Code: {{ error.statusCode }}</h3>
  </div>
</template>
<script>
export default {
  props: {
    error: {
      type: Object,
      required: true,
    },
  },
  head() {
    return {
      title: 'Error',
    }
  },
}
</script>
