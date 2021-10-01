<template>
<Navbar class="has-shadow" />

<div class="container">
  <div class="columns is-centered mx-0">
    <div class="column is-three-quarters">
      <br>

      <profile-banner />

      <br>
      <br>

      <profile-portfolios class="box" />

      <br>

      <h4 class="title is-4"> Publicações </h4>

      <div class="columns">
        <div class="column is-7">
          <post class="box" />
          <post class="box" />
        </div>
        <div class="column is-5 is-hidden-touch">
          <profile-suggestions class="box" />
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import Post from '@/comps/feed/Post'
import Navbar from '@/comps/navbar/Navbar'
import ProfileBanner from '@/comps/profile/ProfileBanner'
import ProfilePortfolios from '@/comps/profile/ProfilePortfolios'
import ProfileSuggestions from '@/comps/profile/ProfileSuggestions'

export default {
  components: {
    Post,
    Navbar,
    ProfilePortfolios,
    ProfileSuggestions,
    ProfileBanner
  }
}
</script>
