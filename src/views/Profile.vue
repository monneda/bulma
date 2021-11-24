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

      <FeedList :form="false" :username="username" />
    </div>
  </div>
</div>

<NavbarBottom/>
</template>

<script>
import Navbar from '@/comps/navbar/Navbar'
import NavbarBottom from '@/comps/navbar/NavbarBottom'

import FeedList from '@/comps/feed/FeedList'

import ProfilePortfolios from '@/comps/profile/ProfilePortfolios'
import ProfileBannerMobile from '@/comps/profile/ProfileBannerMobile'
import ProfileBannerDesktop from '@/comps/profile/ProfileBannerDesktop'

export default {
  components: {
    Navbar,
    NavbarBottom,

    FeedList,

    ProfilePortfolios,
    ProfileBannerMobile,
    ProfileBannerDesktop
  },

  props: {
    username: {
      type: String,
      required: true
    }
  }
}
</script>
