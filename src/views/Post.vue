<template>
<Navbar />

<br>

<div class="container">
  <div class="columns is-centered mx-0">
    <div class="column is-three-fifths">
      <FeedItem class="box" v-if="id" :id="id" />
    </div>
  </div>
</div>

<NavbarBottom/>
</template>

<script>
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
  }
}
</script>
