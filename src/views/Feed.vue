<template>
<Navbar class="has-shadow" />

<br>

<div class="container">
  <div class="columns is-centered mx-0">
    <div class="column is-three-fifths">
      <PostForm class="box" />

      <FeedItem
        class="box"
        v-for="(val, key) of events"
        :key="key"
        :item="val"
      />
    </div>

    <div class="column is-two-fifths is-hidden-touch">
      <FeedSuggestions />
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
      return Object.values(this.$store.state.feed.events)
        .sort((a, b) => a.timestamp.localeCompare(b.timestamp))
        .reverse()
    }
  },

  created () {
    this.$store.dispatch(FEED_FETCH_EVENTS)
  }
}
</script>
