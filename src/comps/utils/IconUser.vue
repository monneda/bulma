<template>
  <figure v-if="found" class="image">
    <img class="is-rounded" :src="src" @error="found = false">
  </figure>
  <font-awesome-icon v-else icon="user" :size="size" />
</template>

<script>
export default {
  name: 'IconUser',

  props: {
    src: {
      type: String,
      required: true
    },
    size: {
      type: String,
      required: false,
      default: '3x'
    }
  },

  data: () => ({
    found: true
  })
}
</script>
