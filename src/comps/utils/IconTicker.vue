<template>
  <figure v-if="found" class="image">
    <img :src="url" @error="found = false" style="border-radius: 5px">
  </figure>
  <font-awesome-icon v-else icon="wallet" :size="size" />
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
      return `${BASE}/${this.ticker}.png`
    }
  }
}
</script>
