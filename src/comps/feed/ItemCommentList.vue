<template>
<div>
  <FeedItemComment
    class="py-0"
    v-for="c of paged"
    :key="c.id"
    :comment="c"
  />

  <br v-if="hasMore">
  <a v-if="hasMore" @click="show += 2">
    ver mais({{ Math.abs(item.commentCount - show) }})
  </a>
</div>
</template>

<script>
import { FEED_FETCH_COMMENTS } from '@/store/type.actions'

import FeedItemComment from '@/comps/feed/FeedItemComment'

export default {
  name: 'ItemCommentList',

  components: {
    FeedItemComment
  },

  props: {
    item: {
      type: Object,
      required: true
    }
  },

  data: () => ({
    show: 2
  }),

  computed: {
    comments () {
      return Object.values(this.item.comments)
        .sort((a, b) => a.createdAt.localeCompare(b.createdAt))
    },

    paged () {
      const totalComments = Math.min(this.show, this.item.commentCount)
      return this.comments.slice(0, totalComments)
    },

    hasMore () {
      return this.show < this.item.commentCount
    }
  },

  created () {
    this.$store.dispatch(FEED_FETCH_COMMENTS, this.item.id)
  }
}
</script>
