<template>
<Navbar/>
<br>
<div class="container">
  <div class="columns is-centered mx-0">
    <div class="column is-three-fifths">
      <PostForm class="box" />
      <div class="field box">
        <input
          id="switchTrending"
          type="checkbox"
          class="switch is-rounded is-rtl is-success"
          @click="toggleGlobalFeed">
        <label for="switchTrending">Trending</label>
      </div>
      <div v-for="(val, key) of events" :key="key" :item="val">
        <FeedItem
          class="box my-5"
          :key="key"
          :item="val"
        />
        <FeedSuggestions horizontal v-if="key % 4 === 1"/>
      </div>

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
  FEED_FETCH_EVENTS_NEXT_PAGE,
  FEED_TOGGLE_GLOBAL
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
    },
    checked () {
      return this.$store.state.feed.global
    }
  },

  methods: {
    nextPage () {
      this.$store.dispatch(FEED_FETCH_EVENTS_NEXT_PAGE)
    },
    toggleGlobalFeed () {
      this.$store.dispatch(FEED_TOGGLE_GLOBAL)
    }
  },

  created () {
    this.$store.dispatch(FEED_FETCH_EVENTS)
  }
}
</script>
