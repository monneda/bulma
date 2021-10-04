<template>
<div>
  <post v-if="item.type === 'TEXT_POST_CREATED'" :post="item" />
</div>
</template>

<script>
import Post from '@/comps/feed/Post'

export default {
  name: 'FeedItem',

  components: {
    Post
  },

  props: {
    item: {
      type: Object,
      required: true
    }
  }
}
</script>
