<template>
<div>
  <span v-if="error || !src" class="icon">
    <font-awesome-icon :icon="icon" size="xs" />
  </span>
  <figure v-else class="image">
    <img :src="src" @error="error = true" />
  </figure>
</div>
</template>

<script>
const BASE = 'https://cdn.jsdelivr.net/gh/monneda/B3-Assets-Images/imgs'

export default {
  name: 'CTicker',

  props: {
    ticker: { type: String, default: '' },
    icon: { type: String, default: 'wallet' },
    size: { type: String, default: '3rem' },
    radius: { type: String, default: '5px' }
  },

  data: () => ({
    error: false
  }),

  computed: {
    src () {
      const ticker = this.ticker.toUpperCase()
      return `${BASE}/${ticker}.png`
    }
  }
}
</script>

<style scoped>
img {
  width: v-bind(size);
  height: v-bind(size);
  min-width: v-bind(size);
  min-height: v-bind(size);
  border-radius: v-bind(radius);
}

.icon {
  width: v-bind(size);
  height: v-bind(size);
  font-size: calc(v-bind(size) * 0.7);
  border-radius: v-bind(radius);
}
</style>
