<template>
<span class="icon">
  <font-awesome-icon v-if="error || !src" :icon="icon"/>
  <figure v-else class="image">
    <img :src="src" :class="{ 'is-rounded': round }" @error="error = true" />
  </figure>
</span>
</template>

<script>
export default {
  name: 'CAvatar',

  props: {
    src: { type: String, default: '' },
    round: { type: Boolean, default: false },
    icon: { type: String, default: 'user' },
    size: { type: String, default: '3rem' }
  },

  data: () => ({
    error: false
  })
}
</script>

<style scoped>
/*
  causing bug on MeiliSearchUsers, where image gets distorted (size not working properly).
  Also, this class only works because it extends bulma's image class,
  meaning that if another name was used, it wouldn't work.
*/
.image {
  width: v-bind(size);
  height: v-bind(size);
  min-width: v-bind(size);
  min-height: v-bind(size);
  max-width: v-bind(size);
  max-height: v-bind(size);
}

.icon {
  font-size: v-bind(size);
  width: v-bind(size);
  height: v-bind(size);
  min-width: v-bind(size);
  min-height: v-bind(size);
  max-width: v-bind(size);
  max-height: v-bind(size);
}
</style>
