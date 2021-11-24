<template>
<div>
  <PostForm v-if="form" class="box" @create="create" />

  <div v-for="(val, key) of items" :key="val.id">
    <FeedItem class="box my-5" :item="val" @remove="remove" />
    <FeedSuggestions horizontal v-if="key % 4 === 1"/>
  </div>

  <c-view v-if="items.length > 0" @show="next" />
</div>
</template>

<script>
import client from '@/commons/client.api'

import PostForm from '@/comps/forms/PostForm'
import FeedItem from '@/comps/feed/FeedItem'
import FeedSuggestions from '@/comps/feed/FeedSuggestions'

export default {
  name: 'FeedList',

  components: {
    FeedItem,
    PostForm,
    FeedSuggestions
  },

  props: {
    form: { type: Boolean, default: false },
    username: { type: String, default: null }
  },

  data: () => ({
    items: []
  }),

  watch: {
    async username () {
      await this.fetch()
    }
  },

  methods: {
    async next () {
      const last = this.items[this.items.length - 1]

      let items
      if (this.username) {
        items = await client.feed.fetchUserEvents(this.username, 5, last.id)
      } else {
        items = await client.feed.fetchEvents(5, last.id)
      }

      this.items.push(...items)
    },

    async create (item) {
      const post = await client.feed.createEvent(item)
      this.items.unshift(post)
    },

    async remove (item) {
      this.items = this.items.filter(i => i.id !== item.id)
    },

    async fetch () {
      if (this.username) {
        this.items = await client.feed.fetchUserEvents(this.username, 10)
        return
      }
      this.items = await client.feed.fetchEvents(10)
    }
  },

  async created () {
    await this.fetch()
  }
}
</script>
