<template>
  <figure v-if="found" class="image">
    <img class="is-rounded" :src="src" @error="found = false">
  </figure>
  <font-awesome-icon v-else icon="user" size="3x" />
</template>

<script>
export default {
  name: 'IconUser',

  props: {
    src: {
      type: String,
      required: true
    }
  },

  data: () => ({
    found: true
  })
}
</script>
