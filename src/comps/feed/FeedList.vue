<template>
<div v-if="page">
  <PostForm v-if="form" class="box" @create="create" />

  <!-- Feed toggle -->
  <div v-if="trending" class="tabs is-toggle is-fullwidth">
    <ul>
      <!-- User feed -->
      <li>
        <a
          @click=toggle
          :class="global
            ? 'has-background-white'
            : 'has-background-white-ter has-text-weight-bold'"
          >
          Seguindo
        </a>
      </li>

      <!-- Global feed -->
      <li>
        <a
          @click=toggle
          :class="!global
            ? 'has-background-white'
            : 'has-background-white-ter has-text-weight-bold'"
          >
          Comunidade
        </a>
      </li>
    </ul>
  </div>

  <div v-for="(val, key) of page.data" :key="val.id">
    <FeedItem class="box my-5" :id="val.id" @remove="remove" />
    <FeedSuggestions horizontal v-if="suggestions && key % 4 === 1"/>
  </div>

  <c-view v-if="page.data.length > 0" @show="next" />
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
    username: { type: String, default: null },
    suggestions: { type: Boolean, default: false },
    trending: { type: Boolean, default: false }
  },

  data: () => ({
    page: null,
    global: false
  }),

  methods: {
    async next () {
      const last = this.page.data[this.page.data.length - 1]

      let page
      if (this.username) {
        page = await client.feed.fetchUserEvents(this.username, 5, last.id)
      } else if (this.global) {
        page = await client.feed.fetchGlobalEvents(5, last.id)
      } else {
        page = await client.feed.fetchEvents(5, last.id)
      }

      page.data.unshift(...this.page.data)
      this.page = page
    },

    async create (item) {
      const post = await client.feed.createEvent(item)
      this.page.data.unshift(post)
    },

    async remove (item) {
      this.page.data = this.page.data.filter(i => i.id !== item.id)
    },

    async fetch () {
      if (this.username) {
        this.page = await client.feed.fetchUserEvents(this.username, 10)
      } else if (this.global) {
        this.page = await client.feed.fetchGlobalEvents(10)
      } else {
        this.page = await client.feed.fetchEvents(10)
      }
    },

    async toggle () {
      this.items = []
      this.global = !this.global
      await this.fetch()
    }
  },

  watch: {
    async username () {
      await this.fetch()
    }
  },

  async created () {
    await this.fetch()
  }
}
</script>
