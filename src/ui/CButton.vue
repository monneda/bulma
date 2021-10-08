<template>
<button class="button" :class="{ 'is-loading': loading }">
  <span class="icon-text">
    <!-- Left -->
    <span v-if="left && icon" class="icon">
      <font-awesome-icon :icon="icon" />
    </span>

    <!-- Center -->
    <span>
      <slot></slot>
    </span>

    <!-- Right -->
    <span v-if="right && icon" class="icon">
      <font-awesome-icon :icon="icon" />
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
    right: { type: Boolean, default: false },
    loading: { type: Boolean, default: false }
  }
}
</script>
