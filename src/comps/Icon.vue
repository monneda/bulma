<template>

<template v-if="label">
  <span class="icon-text">
    <span v-if="!before">{{ label }}</span>
    <span class="icon">
      <font-awesome-icon :icon="icon" />
    </span>
    <span v-if="before">{{ label }}</span>
  </span>
</template>

<template v-else>
  <span class="icon">
    <font-awesome-icon :icon="icon" />
  </span>
</template>

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
    }
  }
}
</script>
