<template>
<Navbar/>
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

      <c-view @show="nextPage" />
    </div>

    <div class="column is-two-fifths is-hidden-touch">
      <FeedSuggestions />
    </div>
  </div>
</div>
<NavbarBottom />
</template>

<script>
import {
  FEED_FETCH_EVENTS,
  FEED_FETCH_EVENTS_NEXT_PAGE
} from '@/store/type.actions'

import Navbar from '@/comps/navbar/Navbar'
import FeedItem from '@/comps/feed/FeedItem'
import FeedSuggestions from '@/comps/feed/FeedSuggestions'
import PostForm from '@/comps/forms/PostForm'
import NavbarBottom from '../comps/navbar/NavbarBottom'

export default {
  name: 'Feed',

  components: {
    NavbarBottom,
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

  methods: {
    nextPage () {
      this.$store.dispatch(FEED_FETCH_EVENTS_NEXT_PAGE)
    }
  },

  created () {
    this.$store.dispatch(FEED_FETCH_EVENTS)
  }
}
</script>
