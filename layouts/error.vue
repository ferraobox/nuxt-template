<template>
  <div>
    <error-view :error="error" />
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
