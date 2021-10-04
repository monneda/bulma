<template>
<div>
  <ItemInfo :item="item" />

  <Post v-if="item.type === 'TEXT_POST_CREATED'" :post="item" />
  <Edit v-if="item.type === 'WALLET_ASSETS_EDIT'" :edit="item" />

  <br>

  <ItemShareInfo :likes="item.likeCount" :comments="item.commentCount" />

  <hr class="my-1">
  <ItemButtonList class="my-0" @like="like" />
  <hr class="my-1">

  <br>

  <ItemCommentForm @submit="submit" />

  <br>

  <ItemCommentList :id="item.id" />
</div>
</template>

<script>
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
    like () {
      console.log('Liked:', this.item.id)
    },
    submit () {
      console.log('Commented:', this.item.id)
    }
  }
}
</script>
