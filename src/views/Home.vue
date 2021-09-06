<template>
<Navbar />
<NavbarWallets class="has-shadow" />

<div class="columns mx-0 my-1">
  <!-- Left -->
  <div class="column is-3 is-hidden-mobile">
    <Top5/>
  </div>

  <!-- Center -->
  <div class="column is-6">
    <PostCreate class="box" />
    <Post v-for="i in [1, 2, 3, 4, 5, 6]" :key="i" class="box" />
  </div>

  <!-- Right -->
  <div class="column is-3 is-hidden-mobile">
    <div class="card p-3 is-shadowless">
      <UserIcon />

      <hr>

      <span class="level">
        <strong class="level-left">Sugestão de investidores</strong>
        <span class="level-right">ver todos</span>
      </span>

      <UserIcon v-for="i of [1, 2, 3, 4, 5]" :key="i" />
    </div>
  </div>
</div>
</template>

<script>
import Post from '@/comps/Post'
import Navbar from '@/comps/navbar/Navbar'
import NavbarWallets from '@/comps/navbar/NavbarWallets'
import UserIcon from '@/comps/UserIcon'
import PostCreate from '@/comps/PostCreate'
import Top5 from '../comps/Top5'

export default {
  components: {
    Top5,
    Post,
    Navbar,
    UserIcon,
    PostCreate,
    NavbarWallets
  }
}
</script>
