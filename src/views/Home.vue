<template>
<Navbar />
<div class="columns">
  <div class="column is-2 is-hidden-mobile">
    <Menu/>
  </div>
  <div class="column is-7">
    <Post />
  </div>
  <div class="column is-3 is-hidden-mobile">
    Right
  </div>
</div>
</template>

<script>
import Menu from '@/comps/Menu'
import Post from '@/comps/Post'
import Navbar from '@/comps/Navbar'

export default {
  components: {
    Menu,
    Post,
    Navbar
  }
}
</script>
