<template>
<Navbar class="has-shadow" />

<div class="container">
  <!-- The class `mx-0` is here to avoid some horizontall scrolling on mobile -->
  <div class="columns is-centered mx-0">
    <div class="column is-three-quarters">
      <br>

      <ProfileBanner :username="username" />

      <br>
      <br>

      <ProfilePortfolios :username="username" class="box" />

      <br>

      <h4 class="title is-4"> Publicações </h4>

      <FeedItem v-for="i of items" :key="i.id" :item="i" class="box" />
    </div>
  </div>
</div>
</template>

<script>
import { FEED_FETCH_EVENTS_FOR_USER } from '@/store/type.actions'

import Navbar from '@/comps/navbar/Navbar'
import FeedItem from '@/comps/feed/FeedItem'
import ProfileBanner from '@/comps/profile/ProfileBanner'
import ProfilePortfolios from '@/comps/profile/ProfilePortfolios'

export default {
  components: {
    Navbar,
    FeedItem,
    ProfilePortfolios,
    ProfileBanner
  },

  props: {
    username: {
      type: String,
      required: true
    }
  },

  computed: {
    items () {
      return this.$store.state.feed.events
    }
  },

  created () {
    this.$store.dispatch(FEED_FETCH_EVENTS_FOR_USER, this.username)
  }
}
</script>
