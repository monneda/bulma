<template>
<Navbar class="has-shadow" />

<br>

<div class="container">
  <div class="columns is-centered mx-0">
    <!-- Feed -->
    <div class="column is-three-fifths">
      <FeedList trending form suggestions/>
    </div>

    <!-- Suggestions -->
    <div class="column is-two-fifths is-hidden-touch">
      <FeedSuggestions />
    </div>
  </div>
</div>

<NavbarBottom />
</template>

<script>
import FeedList from '@/comps/feed/FeedList'
import FeedSuggestions from '@/comps/feed/FeedSuggestions'

import Navbar from '@/comps/navbar/Navbar'
import NavbarBottom from '@/comps/navbar/NavbarBottom'

export default {
  name: 'Feed',

  components: {
    FeedList,
    FeedSuggestions,
    Navbar,
    NavbarBottom
  }
}
</script>
