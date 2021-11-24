<template>
<div>
  <ItemCommentForm @create="add" />

  <!-- Comments -->
  <template v-for="c of paged" :key="c.id">
    <ItemComment class="py-0" :comment="c" @remove="remove" />
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
    item: {
      type: Object,
      required: true
    }
  },

  data: () => ({
    show: 2,
    comments: []
  }),

  computed: {
    paged () {
      const totalComments = Math.min(this.show, this.item.commentCount)
      return this.comments.slice(0, totalComments)
    },

    hasMore () {
      return this.show < this.item.commentCount
    },

    remaining () {
      return Math.abs(this.item.commentCount - this.show)
    }
  },

  methods: {
    async remove (comment) {
      await client.feed.deleteComment(this.item.id, comment.id)
      this.comments = this.comments.filter(i => i.id !== comment.id)
      this.$emit('removed', comment)
    },

    async add (comment) {
      const comm = await client.feed.createComment(this.item.id, comment)
      this.comments.unshift(comm)
      this.$emit('created', comment)
    }
  },

  async created () {
    this.comments = await client.feed.fetchComments(this.item.id, 100)
  }
}
</script>
