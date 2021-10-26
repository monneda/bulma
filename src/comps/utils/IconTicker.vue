<template>
  <span class="icon">
    <font-awesome-icon v-if="error || !src" :icon="icon" />
    <figure v-else class="image">
      <img :src="src" @error="error = true" />
    </figure>
  </span>
</template>

<script>
const BASE_B3 = 'https://cdn.jsdelivr.net/gh/monneda/B3-Assets-Images/imgs'
const BASE_CRYPTO = 'https://raw.githubusercontent.com/monneda/crypto-logos/main/imgs'

export default {
  name: 'IconTicker',

  props: {
    ticker: { type: String, default: '' },
    type: { type: String, default: 'B3' },
    icon: { type: String, default: 'wallet' },
    size: { type: String, default: '3rem' },
    radius: { type: String, default: '5px' }
  },

  data: () => ({
    error: false
  }),

  computed: {
    src () {
      if (!this.ticker) {
        return null
      }
      let base = BASE_B3
      let fileType = 'png'
      if (this.type === 'CRYPTO') {
        base = BASE_CRYPTO
        fileType = 'svg'
      }
      const ticker = this.ticker.toUpperCase()
      return `${base}/${ticker}.${fileType}`
    }
  }
}
</script>

<style scoped>
.image {
  width: v-bind(size);
  height: v-bind(size);
  min-width: v-bind(size);
  min-height: v-bind(size);
}

img {
  border-radius: v-bind(radius);
}

.icon {
  width: v-bind(size);
  height: v-bind(size);
  font-size: v-bind(size);
  border-radius: v-bind(radius);
}
</style>
