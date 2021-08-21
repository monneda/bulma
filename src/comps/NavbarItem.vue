<template>
  <span class="icon-text is-flex-direction-column is-align-items-center">
    <span v-if="icon" class="icon is-medium">
      <font-awesome-icon class="fas fa-lg" :icon="icon" />
    </span>
    <figure v-else class="image is-30x30">
      <img class="is-rounded" :src="src">
    </figure>
    <span>{{ label }}</span>
  </span>
</template>

<script>
export default {
  name: 'NavbarItem',
  props: {
    icon: {
      type: String,
      required: false
    },
    src: {
      type: String,
      required: false
    },
    label: {
      type: String,
      required: true
    },
    isActive: {
      type: Boolean,
      default: false
    }
  }
}
</script>
