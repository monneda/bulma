<template>
<Navbar/>
<br>
<div class="container">
  <div class="columns is-centered mx-0">
    <div class="column is-three-fifths">
      <PostForm class="box" />

      <div v-for="(val, key) of events" :key="val.id">
        <FeedItem class="box my-5" :item="val" @remove="remove" />
        <FeedSuggestions horizontal v-if="key % 4 === 1"/>
      </div>

      <c-view v-if="events.length > 0" @show="next" />
    </div>

    <div class="column is-two-fifths is-hidden-touch">
      <FeedSuggestions />
    </div>
  </div>
</div>
<NavbarBottom />
</template>

<script>
import client from '@/commons/client.api'

import PostForm from '@/comps/forms/PostForm'
import FeedItem from '@/comps/feed/FeedItem'
import FeedSuggestions from '@/comps/feed/FeedSuggestions'

import Navbar from '@/comps/navbar/Navbar'
import NavbarBottom from '@/comps/navbar/NavbarBottom'

export default {
  name: 'Feed',

  components: {
    NavbarBottom,
    Navbar,
    FeedItem,
    PostForm,
    FeedSuggestions
  },

  data: () => ({
    events: []
  }),

  methods: {
    async next () {
      const last = this.events[this.events.length - 1]
      const events = await client.feed.fetchEvents(5, last.id)
      this.events.push(...events)
    },

    async remove (item) {
      this.events = this.events.filter(i => i.id !== item.id)
    }
  },

  async created () {
    this.events = await client.feed.fetchEvents(10)
  }
}
</script>
