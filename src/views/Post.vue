<template>
<Navbar />
<FeedItem class="box" v-if="post" :item="post"/>
<NavbarBottom/>
</template>
<script>
import Navbar from '@/comps/navbar/Navbar.vue'
import NavbarBottom from '../comps/navbar/NavbarBottom'
import FeedItem from '@/comps/feed/FeedItem'

import client from '@/commons/client.api'

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

  data: () => ({
    post: null
  }),

  async created () {
    this.post = await client.feed.fetchEvent(this.id)
  }
}
</script>
