<template>
<Navbar class="has-shadow" />
<div class="columns mx-0 my-1" style="background-color: #E5E5E5; height: 100rem">
  <!-- Left -->
  <div class="column is-2 is-hidden-mobile"></div>

  <!-- Center -->
  <div class="column is-8">
    <Profile />
    nice
    <ProfileBanner />
    <PortfolioCard />
  </div>

  <!-- Right -->
  <div class="column is-2 is-hidden-mobile"></div>
</div>
</template>

<script>
import Navbar from '@/comps/Navbar'
import Profile from '@/comps/Profile'
import ProfileBanner from '@/comps/ProfileBanner'
import PortfolioCard from '@/comps/PortfolioCard'

export default {
  components: {
    Navbar,
    Profile,
    ProfileBanner,
    PortfolioCard
  },

  props: {
    id: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>
.card {
  border: 1px solid #E9E9E9;
}
</style>
