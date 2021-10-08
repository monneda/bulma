<template>
<div>
  <span v-if="error || !src" class="icon has-background-white">
    <font-awesome-icon :icon="icon" size="xs" />
  </span>
  <figure v-else class="image">
    <img :src="src" :class="{ 'is-rounded': round }" @error="error = true" />
  </figure>
</div>
</template>

<script>
export default {
  name: 'CAvatar',

  props: {
    src: { type: String, default: '' },
    round: { type: Boolean, default: true },
    icon: { type: String, default: 'user' },
    size: { type: String, default: '3rem' }
  },

  data: () => ({
    error: false
  })
}
</script>

<style scoped>
img {
  width: v-bind(size);
  height: v-bind(size);
  min-width: v-bind(size);
  min-height: v-bind(size);
}

.icon {
  width: v-bind(size);
  height: v-bind(size);
  font-size: calc(v-bind(size) * 0.7);
  border-radius: 9999px;
}
</style>
