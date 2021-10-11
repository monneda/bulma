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
import { COMMENTS_FETCH } from '@/store/type.actions'

import ItemComment from '@/comps/feed/ItemComment'

export default {
  name: 'ItemCommentList',

  components: {
    ItemComment
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
      return Object.values(this.$store.state.feed.comments)
        .filter(i => i.eventId === this.item.id)
        .sort((a, b) => a.createdAt.localeCompare(b.createdAt))
        .reverse()
    },

    paged () {
      const totalComments = Math.min(this.show, this.comments.length)
      return this.comments.slice(0, totalComments)
    },
    hasMore () {
      return this.show < this.comments.length
    }
  },

  created () {
    this.$store.dispatch(COMMENTS_FETCH, this.item.id)
  }
}
</script>
