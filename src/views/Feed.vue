<template>
<Navbar class="has-shadow" />

<div class="container">
  <!-- The class `mx-0` is here to avoid some horizontal scrolling on mobile -->
  <div class="columns is-centered mx-0">
    <div class="column is-three-fifths">
      <br>
      <PostForm class="box" />
      <FeedItem class="box" v-for="i of events" :key="i.id" :item="i" />
    </div>
    <div class="column is-two-fifths is-hidden-touch">
      <br>
      <FeedSuggestions/>
    </div>
  </div>
</div>
</template>

<script>
import { FEED_FETCH_EVENTS } from '@/store/type.actions'

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

  computed: {
    events () {
      return this.$store.getters.events
    }
  },

  created () {
    this.$store.dispatch(FEED_FETCH_EVENTS)
  }
}
</script>
