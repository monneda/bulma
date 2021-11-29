<template>
<div v-if="page">
  <ItemCommentForm @create="add" />

  <!-- Comments -->
  <template v-for="c of paged" :key="c.id">
    <ItemComment class="py-0" :id="c.id" @remove="remove" />
  </template>

  <!-- See more link -->
  <p v-if="hasMore" class="p-2" >
    <a @click="show += 10"> ver mais ({{ remaining }}) </a>
  </p>
</div>
</template>

<script>
import client from '@/commons/client.api'

import ItemComment from './ItemComment'
import ItemCommentForm from './ItemCommentForm'

export default {
  name: 'ItemCommentList',

  components: {
    ItemComment,
    ItemCommentForm
  },

  props: {
    id: {
      type: String,
      required: true
    }
  },

  data: () => ({
    show: 2,
    page: null
  }),

  computed: {
    paged () {
      const total = Math.min(this.show, this.page.total)
      return this.page.data.slice(0, total)
    },

    hasMore () {
      return this.show < this.page.total
    },

    remaining () {
      return Math.abs(this.page.total - this.show)
    }
  },

  methods: {
    async remove (comment) {
      await client.feed.deleteComment(this.id, comment.id)
      this.page.data = this.page.data.filter(i => i.id !== comment.id)
      this.page.total--
      this.$emit('removed', comment)
    },

    async add (comment) {
      const { id } = await client.feed.createComment(this.id, comment)
      this.page.data.unshift({ id })
      this.page.total++
      this.$emit('created', comment)
    },

    async fetch () {
      this.page = await client.feed.fetchComments(this.id, 100)
    }
  },

  async created () {
    this.fetch()
  }
}
</script>
