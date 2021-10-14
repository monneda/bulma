<template>
<Navbar />
<NavbarBottom/>
</template>
<script>
import Navbar from '@/comps/navbar/Navbar.vue'
import NavbarBottom from '../comps/navbar/NavbarBottom'

export default {
  components: {
    NavbarBottom,
    Navbar
  }
}
</script>
