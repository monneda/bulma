<template>
<div v-if="active" class="notification">
  <button class="delete" @click="$emit('close')" />
  <slot />
</div>
</template>

<script>
export default {
  name: 'CNotification',

  props: {
    active: { type: Boolean, default: false },
    time: { type: Number, default: 3 }
  },

  data: () => ({
    id: null
  }),

  watch: {
    active (newVal) {
      if (newVal === true) {
        this.id = setTimeout(() => this.$emit('close'), this.time * 1_000)
      } else {
        clearTimeout(this.id)
      }
    }
  }
}
</script>

<style scoped>
.notification {
  right: 1rem;
  bottom: 1rem;
  position: fixed;
}
</style>
