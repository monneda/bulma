<template>
<div class="modal" :class="{ 'is-active': active }">
  <div class="modal-background" @click="$emit('close')"></div>
  <div class="modal-content" :class="{ 'is-clipped': clipped }">
    <slot />
  </div>
  <div class="modal-close" @click="$emit('close')"></div>
</div>
</template>

<script>
export default {
  name: 'CModal',
  props: {
    active: { type: Boolean, default: false },
    clipped: { type: Boolean, default: false }
  }
}
</script>
