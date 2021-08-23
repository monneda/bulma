<template>
<Navbar class="has-shadow" />
<div class="columns mx-0 my-1" style="background-color: #E5E5E5; height: 100rem">
  <!-- Left -->
  <div class="column is-2 is-hidden-mobile">
  </div>

  <!-- Center -->
  <div class="column is-8">
    <Profile/>
  </div>

  <!-- Right -->
  <div class="column is-2 is-hidden-mobile">
  </div>
</div>
</template>

<script>
import Profile from '@/comps/Profile'
import Navbar from '@/comps/Navbar'

export default {
  components: {
    Navbar,
    Profile
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
