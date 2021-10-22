<template>
<Navbar />

<br>

<div class="container">
  <div class="columns is-centered mx-0">
    <div class="column is-three-fifths">
      <FeedItem class="box" v-if="post" :item="post" />
    </div>
  </div>
</div>

<NavbarBottom/>
</template>

<script>
import { FEED_FETCH_EVENT } from '@/store/type.actions'

import FeedItem from '@/comps/feed/FeedItem'
import Navbar from '@/comps/navbar/Navbar'
import NavbarBottom from '@/comps/navbar/NavbarBottom'

export default {
  name: 'Post',

  components: {
    FeedItem,
    NavbarBottom,
    Navbar
  },

  props: {
    id: {
      type: String,
      required: true
    }
  },

  computed: {
    post () {
      return this.$store.state.feed.events[this.id]
    }
  },

  async created () {
    this.$store.dispatch(FEED_FETCH_EVENT, this.id)
  }
}
</script>
