<template>
<Navbar class="has-shadow" />
<div class="columns mx-0 my-1">
  <!-- Left -->
  <div class="column is-2 is-hidden-mobile">
  </div>

  <!-- Center -->
  <div class="column is-8">
    <Portfolio class="box" />
  </div>

  <!-- Right -->
  <div class="column is-2 is-hidden-mobile">
  </div>
</div>
</template>

<script>
import Portfolio from '@/comps/Portfolio'
import Navbar from '@/comps/Navbar'

export default {
  components: {
    Navbar,
    Portfolio
  },

  props: {
    id: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>
.card {
  border: 1px solid #E9E9E9;
}
</style>
