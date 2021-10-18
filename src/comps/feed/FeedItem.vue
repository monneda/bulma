<template>
<div>
  <ItemInfo :item="item" @remove="removePost" />

  <Post v-if="item.type === 'TEXT_POST_CREATED'" :post="item" />
  <Edit v-if="item.type === 'WALLET_ASSETS_EDIT'" :edit="item" />
  <NewCartera v-if="item.type === 'NEW_WALLET'" :event="item" />

  <br>

  <ItemShareInfo :item="item" />

  <hr class="my-1">
  <ItemButtonList
    class="my-0"
    :item="item"
    @react="reactEvent"
    @unreact="unreactEvent"
  />
  <hr class="my-1">

  <br>

  <ItemCommentForm @create="createComment" />

  <br>

  <ItemCommentList :item="item" />
</div>
</template>

<script>
import {
  FEED_COMMENT_CREATE,
  FEED_COMMENT_DELETE,
  FEED_EVENT_DELETE,
  FEED_EVENT_REACT,
  FEED_EVENT_UNREACT
} from '@/store/type.actions'

import Post from './Post'
import Edit from './Edit'
import NewCartera from './NewCartera'
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
    ItemInfo,
    NewCartera
  },

  props: {
    item: {
      type: Object,
      required: true
    }
  },

  methods: {
    createComment (item) {
      this.$store.dispatch(FEED_COMMENT_CREATE, { id: this.item.id, item })
    },

    removePost (item) {
      this.$store.dispatch(FEED_EVENT_DELETE, item)
    },

    removeComment (item) {
      this.$store.dispatch(FEED_COMMENT_DELETE, item)
    },

    reactEvent (item) {
      this.$store.dispatch(FEED_EVENT_REACT, item)
    },

    unreactEvent (item) {
      this.$store.dispatch(FEED_EVENT_UNREACT, item)
    }
  }
}
</script>
