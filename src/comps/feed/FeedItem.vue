<template>
<div>
  <ItemInfo :item="item" />

  <Post v-if="item.type === 'TEXT_POST_CREATED'" :post="item" />
  <Edit v-if="item.type === 'WALLET_ASSETS_EDIT'" :edit="item" />

  <br>

  <ItemShareInfo :item="item" />

  <hr class="my-1">
  <ItemButtonList class="my-0" :item="item" />
  <hr class="my-1">

  <br>

  <ItemCommentForm @post="post" />

  <br>

  <ItemCommentList :item="item" />
</div>
</template>

<script>
import { FEED_COMMENT_CREATE } from '@/store/type.actions'

import Post from './Post'
import Edit from './Edit'
import ItemButtonList from './ItemButtonList'
import ItemCommentList from './ItemCommentList'
import ItemCommentForm from './ItemCommentForm'
import ItemShareInfo from './ItemShareInfo'
import ItemInfo from './ItemInfo'

export default {
  name: 'FeedItem',

  components: {
    Post,
    Edit,
    ItemButtonList,
    ItemCommentList,
    ItemCommentForm,
    ItemShareInfo,
    ItemInfo
  },

  props: {
    item: {
      type: Object,
      required: true
    }
  },

  methods: {
    post (item) {
      this.$store.dispatch(FEED_COMMENT_CREATE, { id: this.item.id, item })
    }
  }
}
</script>
