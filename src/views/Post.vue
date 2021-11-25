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
import client from '@/commons/client.api'
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

  data: () => ({
    post: null
  }),

  watch: {
    async id () {
      await this.fetch()
    }
  },

  methods: {
    async fetch () {
      this.post = await client.feed.fetchEvent(this.id)
    }
  },

  async created () {
    await this.fetch()
  }
}
</script>
