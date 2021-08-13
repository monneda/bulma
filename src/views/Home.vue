<template>
<Navbar class="has-shadow" />
<div class="columns pt-5 has-background-light">
  <!-- Left -->
  <div class="column is-2 is-hidden-mobile">
    <Menu />
  </div>

  <!-- Center -->
  <div class="column is-7">
    <div class="card p-3 is-shadowless">
      <PostCreate />
    </div>

    <template v-for="i in [1, 2, 3]" :key="i">
      <div class="card mt-4 is-shadowless p-3">
        <Post />
      </div>
    </template>
  </div>

  <!-- Right -->
  <div class="column is-3 is-hidden-mobile">
    <div class="card mr-3 p-3 is-shadowless">
      <UserIcon />
      <hr>
      <span class="level">
        <strong class="level-left">Sugestão de investidores</strong>
        <span class="level-right">ver todos</span>
      </span>
      <UserIcon />
      <UserIcon />
      <UserIcon />
      <UserIcon />
    </div>
  </div>
</div>
</template>

<script>
import Menu from '@/comps/Menu'
import Post from '@/comps/Post'
import Navbar from '@/comps/Navbar'
import UserIcon from '@/comps/UserIcon'
import PostCreate from '@/comps/PostCreate'

export default {
  components: {
    Menu,
    Post,
    Navbar,
    UserIcon,
    PostCreate
  }
}
</script>

<style scoped>
.card {
  border: 1px solid #E9E9E9;
}
</style>
