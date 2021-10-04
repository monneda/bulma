<template>
<div>
  <ItemComment v-for="c of paged" :key="c.id" :comment="c" class="py-0" />

  <br v-if="hasMore">

  <a v-if="hasMore" @click="show += 2">
    ver mais({{ Math.abs(comments.length - show) }})
  </a>
</div>
</template>

<script>
import client from '@/commons/client.api'

import ItemComment from '@/comps/feed/ItemComment'

export default {
  name: 'ItemCommentList',

  components: {
    ItemComment
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
    },
    hasMore () {
      return this.show < this.comments.length
    }
  },

  async created () {
    this.comments = await client.comments.byPostId(this.id)
  }
}
</script>
