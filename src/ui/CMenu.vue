<template>
<div class="p-3 has-background-white">
  <div class="container">
    <div class="is-flex is-justify-content-space-between is-align-items-center">
      <!-- Left -->
      <div v-if="$slots.left"><slot name="left"></slot></div>

      <!-- Center -->
      <div><slot></slot></div>

      <!-- Right -->
      <div v-if="$slots.right"><slot name="right"></slot></div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'CMenu'
}
</script>
