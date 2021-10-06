<template>
<Navbar class="has-shadow" />

<div class="container">
  <!-- The class `mx-0` is here to avoid some horizontal scrolling on mobile -->
  <div class="columns is-centered mx-0">
    <div class="column is-one-quarter-fullhd is-hidden-widescreen-only-only is-hidden-desktop-only is-hidden-touch"></div>
    <div class="column is-half-fullhd is-three-fifths-widescreen is-three-fifths-desktop is-full-touch">
      <br>
      <PostForm class="box" />
      <FeedItem v-for="i of items" :key="i.id" :item="i" class="box" />
    </div>
    <div class="column is-one-quarter-fullhd is-two-fifths-widescreen is-two-fifths-desktop is-hidden-touch">
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
