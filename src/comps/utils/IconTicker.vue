<template>
<span class="icon">
  <figure v-if="found" class="image">
    <img :src="url" @error="found = false">
  </figure>
  <font-awesome-icon v-else icon="wallet" size="3x" />
</span>
</template>

<script>
const BASE = 'https://raw.githubusercontent.com/monneda/B3-Assets-Images/main/imgs'

export default {
  name: 'IconTicker',

  props: {
    ticker: {
      type: String,
      required: true
    },
    radius: {
      type: String,
      default: '5px'
    }
  },

  data: () => ({
    found: true
  }),

  computed: {
    url () {
      return `${BASE}/${this.ticker}.png`
    }
  }
}
</script>

<style scoped>
img {
  border-radius: v-bind(radius);
}
</style>
