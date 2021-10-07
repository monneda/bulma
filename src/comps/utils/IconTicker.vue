<template>
  <figure v-if="found" class="image">
    <img :src="url" @error="found = false" style="border-radius: 5px">
  </figure>
  <font-awesome-icon v-else icon="wallet" :size="size" />
</template>

<script>
const BASE = 'https://cdn.jsdelivr.net/gh/monneda/B3-Assets-Images/imgs'

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
    },
    size: {
      type: String,
      default: '3x'
    }
  },

  data: () => ({
    found: true
  }),

  computed: {
    url () {
      const ticker = this.ticker.toUpperCase()
      return `${BASE}/${ticker}.png`
    }
  }
}
</script>
