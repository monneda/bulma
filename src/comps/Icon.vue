<template>

<span v-if="label" class="icon-text">
  <span v-if="before">{{ label }}</span>
  <span class="icon">
    <font-awesome-icon :icon="icon" :color="color" />
  </span>
  <span v-if="!before">{{ label }}</span>
</span>

<span v-else class="icon">
  <font-awesome-icon :icon="icon" :color="color" />
</span>

</template>

<script>
export default {
  name: 'Icon',
  props: {
    icon: {
      type: String,
      required: true
    },
    label: {
      type: String,
      default: ''
    },
    before: {
      type: Boolean,
      default: false
    },
    color: {
      type: String,
      required: false
    }
  }
}
</script>
