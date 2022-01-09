<template>
  <span>
    {{ displayText }} <br />
    <button
      v-if="isTooLong && !isExpanded"
      class="comment"
      type="button"
      @click="isExpanded = true"
    >
      show
    </button>

    <button
      v-if="isTooLong && isExpanded"
      class="comment"
      type="button"
      @click="isExpanded = false"
    >
      hide
    </button>
  </span>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      required: true,
    },
    target: {
      type: Number,
      required: true,
    },
  },

  data() {
    return {
      isExpanded: false,
      chunks: [],
    }
  },

  computed: {
    isTooLong() {
      return this.chunks.length === 2
    },
    displayText() {
      if (!this.isTooLong || this.isExpanded) {
        return this.chunks.join(' ')
      } else {
        return this.chunks[0] + '...'
      }
    },
  },

  created() {
    this.chunks = this.getChunks()
  },

  methods: {
    getChunks() {
      const position = this.text.indexOf(' ', this.target)
      if (this.text.length <= this.target || position === -1) {
        return [this.text]
      } else {
        return [this.text.substring(0, position), this.text.substring(position)]
      }
    },
  },
}
</script>
