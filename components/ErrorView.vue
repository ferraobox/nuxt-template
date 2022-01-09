<template>
  <div class="app-error-page">
    <div class="error-page-content">
      <div>
        <img
          src="https://www.elegantthemes.com/blog/wp-content/uploads/2016/03/500-internal-server-error-featured-image-1.png"
        />
      </div>
      <div>
        <h1>Sorry... An error has ocurred</h1>
        <h4>- Description -</h4>
        <h3>
          <b>{{ error.message }}</b>
        </h3>
        <h3 class="statusCode">
          <b>{{ error.statusCode }}</b>
        </h3>
      </div>
    </div>
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
}
</script>
