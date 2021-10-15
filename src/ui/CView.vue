<template>
<div style="visibility: hidden" />
</template>

<script>
export default {
  name: 'CInfinite',

  data: () => ({
    showing: false
  }),

  render () {
    return null
  },

  methods: {
    scroll (e) {
      const rect = this.$el.getBoundingClientRect()

      // Is hidden and appears
      if (this.showing === false && rect.bottom <= window.innerHeight) {
        this.showing = true
        return this.$emit('show', this.rect)
      }

      // Is shown and hides
      if (this.showing === true && rect.bottom >= window.innerHeight) {
        this.showing = false
        return this.$emit('hide', this.rect)
      }
    }
  },

  mounted () {
    window.addEventListener('scroll', this.scroll)
  },

  unmounted () {
    window.removeEventListener('scroll', this.scroll)
  }
}
</script>
