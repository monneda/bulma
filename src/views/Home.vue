<template>
<Navbar class="has-shadow is-dark" />
<div class="columns mt-3">
  <!-- Left -->
  <div class="column is-2 is-hidden-mobile">
    <Menu />
  </div>

  <!-- Center -->
  <div class="column is-7">
    <div class="box">
      <PostCreate />
    </div>

    <template v-for="i in [1, 2, 3]" :key="i">
      <div class="box">
        <Post />
      </div>
    </template>
  </div>

  <!-- Right -->
  <div class="column is-3 is-hidden-mobile">
    <div class="box mr-3">
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
