<template>
<Navbar class="has-shadow" />

<div class="container">
  <!-- The class `mx-0` is here to avoid some horizontall scrolling on mobile -->
  <div class="columns is-centered mx-0">
    <div class="column is-three-quarters">
      <br>

      <ProfileBannerDesktop class="is-hidden-touch" :username="username" />
      <ProfileBannerMobile class="is-hidden-desktop" :username="username" />

      <br>

      <ProfilePortfolios :username="username" class="box" />

      <br>

      <h4 class="title is-4"> Publicações </h4>

      <FeedItem v-for="i of items" :key="i.id" :item="i" class="box" />
    </div>
  </div>
</div>

<NavbarBottom/>
</template>

<script>
import { FEED_FETCH_EVENTS_FOR_USER } from '@/store/type.actions'

import Navbar from '@/comps/navbar/Navbar'
import NavbarBottom from '@/comps/navbar/NavbarBottom'
import FeedItem from '@/comps/feed/FeedItem'
import ProfileBannerDesktop from '@/comps/profile/ProfileBannerDesktop'
import ProfileBannerMobile from '@/comps/profile/ProfileBannerMobile'
import ProfilePortfolios from '@/comps/profile/ProfilePortfolios'

export default {
  components: {
    Navbar,
    FeedItem,
    ProfilePortfolios,
    ProfileBannerDesktop,
    ProfileBannerMobile,
    NavbarBottom
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

  watch: {
    username () {
      this.$store.dispatch(FEED_FETCH_EVENTS_FOR_USER, this.username)
    }
  },

  created () {
    this.$store.dispatch(FEED_FETCH_EVENTS_FOR_USER, this.username)
  }
}
</script>
