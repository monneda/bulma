<template>
<button>

</button>
</template>

<script>
export default {
  name: 'CButton',

  props: {
    secondary: {
      type: Boolean,
      default: false
    },
    inactive: {
      type: Boolean,
      default: false
    }
  },

  computed: {
    background () {
      if (this.secondary) {
        return 'white'
      }
    }
  }
}
</script>

<style scoped>
button {
  border-radius: 15px;
  background-color:
}
</style>
