<template>
<button class="button">
  <span class="icon-text">
    <!-- Left -->
    <span v-if="left && icon" class="icon">
      <font-awesome-icon v-if="icon" :icon="icon" />
    </span>

    <!-- Center -->
    <span>
      <slot></slot>
    </span>

    <!-- Right -->
    <span v-if="right && icon" class="icon">
      <font-awesome-icon v-if="icon" :icon="icon" />
    </span>
  </span>
</button>
</template>

<script>
export default {
  name: 'CButton',

  props: {
    icon: { type: String, default: '' },
    left: { type: Boolean, default: false },
    right: { type: Boolean, default: false }
  }
}
</script>
