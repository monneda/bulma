<template>
<div class="modal" :class="{ 'is-active': active }">
  <div class="modal-background" @click="$emit('close')"></div>
  <div class="modal-card">
    <div class="modal-card-head">
      <div class="modal-card-title">
        <slot name="title" />
      </div>
      <slot name="header" />
    </div>
    <div class="modal-card-body" :class="{ 'is-clipped': clipped }">
      <slot />
    </div>
    <div class="modal-card-foot">
      <slot name="footer" />
    </div>
  </div>
  <div class="modal-close" @click="$emit('close')"></div>
</div>
</template>

<script>
export default {
  name: 'CModalCard',
  props: {
    active: { type: Boolean, default: false },
    clipped: { type: Boolean, default: false }
  }
}
</script>
