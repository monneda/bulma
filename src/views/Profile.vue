<template>
<Navbar class="has-shadow" />

<div class="container">
  <section class="section">
    <ProfileBanner class="box" />
  </section>

  <section class="section">
    <ProfilePortfolios />
  </section>

  <section class="section">
    <div class="columns">
      <div class="column is-8">
        <ProfilePosts class="box" />
      </div>

      <div class="column">
        <ProfileSuggestions class="box" />
      </div>
    </div>
  </section>
</div>
</template>

<script>
import Navbar from '@/comps/navbar/Navbar'
import ProfilePosts from '@/comps/profile/ProfilePosts'
import ProfileBanner from '@/comps/profile/ProfileBanner'
import ProfilePortfolios from '@/comps/profile/ProfilePortfolios'
import ProfileSuggestions from '@/comps/profile/ProfileSuggestions'

export default {
  components: {
    Navbar,
    ProfilePosts,
    ProfileBanner,
    ProfilePortfolios,
    ProfileSuggestions
  }
}
</script>
