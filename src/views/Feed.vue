<template>
<Navbar class="has-shadow" />

<div class="container">
  <!-- The class `mx-0` is here to avoid some horizontal scrolling on mobile -->
  <div class="columns is-centered mx-0">
    <div class="column is-three-fifths">
      <br>
      <PostForm class="box" />
      <FeedItem v-for="i of items" :key="i.id" :item="i" class="box" />
    </div>
    <div class="column is-two-fifths is-hidden-touch">
      <br>
      <FeedSuggestions/>
    </div>
  </div>
</div>
</template>

<script>
import client from '@/commons/client.api'

import Navbar from '@/comps/navbar/Navbar'
import FeedItem from '@/comps/feed/FeedItem'
import FeedSuggestions from '@/comps/feed/FeedSuggestions'
import PostForm from '@/comps/forms/PostForm'

export default {
  name: 'Feed',

  components: {
    Navbar,
    FeedItem,
    PostForm,
    FeedSuggestions
  },

  data: () => ({
    items: []
  }),

  async created () {
    this.items = await client.feed.get()
  }
}
</script>
