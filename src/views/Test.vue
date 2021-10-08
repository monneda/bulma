<template>
<Navbar />
</template>

<script>
import Navbar from '@/comps/navbar/Navbar.vue'

export default {
  components: {
    Navbar
  },

  data: () => ({
    current: 0
  })
}
</script>
