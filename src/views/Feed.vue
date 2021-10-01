<template>
<Navbar class="has-shadow" />

<div class="container">
  <!--
    The class `mx-0` is here to avoid
    some horizontall scrolling on mobile
  -->
  <div class="columns is-centered mx-0">
    <div class="column is-half">
      <br class="is-hidden-touch">
      <post-form class="box" />
      <post class="box" />
    </div>
  </div>
</div>
</template>

<script>
import Post from '@/comps/feed/Post'
import Navbar from '@/comps/navbar/Navbar'
import PostForm from '@/comps/forms/PostForm'

export default {
  name: 'Feed',

  components: {
    Post,
    Navbar,
    PostForm
  }
}
</script>
