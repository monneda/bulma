<template>
<div v-if="isVisible">
  <slot></slot>
</div>
</template>

<script>
const BREAKPOINTS = {
  mobile: [Number.NEGATIVE_INFINITY, 768],
  tablet: [769, 1023],
  desktop: [1024, 1215],
  widescreen: [1216, 1407],
  fullhd: [1480, Number.POSITIVE_INFINITY]
}

export default {
  name: 'Breakpoint',

  props: {
    br: {
      type: String,
      default: 'mobile'
    },
    hide: {
      type: Boolean,
      default: false
    }
  },

  data: () => ({
    width: window.innerWidth
  }),

  computed: {
    isVisible () {
      const [wMin, wMax] = BREAKPOINTS[this.br]

      if (this.hide === true) {
        return !(this.width > wMin && this.width <= wMax)
      }

      return (this.width > wMin && this.width <= wMax)
    }
  },

  methods: {
    update () {
      this.width = window.innerWidth
    }
  },

  created () {
    window.addEventListener('resize', this.update)
  }
}
</script>
