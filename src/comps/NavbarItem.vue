<template>
  <span v-if="label" class="icon-text is-flex-direction-column is-align-items-center">
    <span class="icon is-medium">
      <font-awesome-icon class="fas fa-lg" :icon="icon" />
    </span>
    <span>{{ label }}</span>
  </span>
</template>

<script>
export default {
  name: 'NavbarItem',
  props: {
    icon: {
      type: String,
      required: true
    },
    label: {
      type: String,
      default: ''
    }
  }
}
</script>
