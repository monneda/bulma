<template>
<div>
  <Comment v-for="c of paged" :key="c.id" :comment="c" />
  <a v-if="show < comments.length" @click="show += 2">
    ver mais({{ Math.abs(comments.length - show) }})
  </a>
</div>
</template>

<script>
import client from '@/commons/client.api'

import Comment from '@/comps/feed/Comment'

export default {
  name: 'CommentList',

  components: {
    Comment
  },

  props: {
    id: {
      type: String,
      required: true
    }
  },

  data: () => ({
    comments: [],
    show: 2
  }),

  computed: {
    paged () {
      const totalComments = Math.min(this.show, this.comments.length)
      return this.comments.slice(0, totalComments)
    }
  },

  async created () {
    this.comments = await client.comments.byPostId(this.id)
  }
}
</script>
