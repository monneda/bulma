<template>
<div v-if="data">
  <PostFormEditModal
    v-if="data.data"
    :postData="data.data"
    :active="modal"
    @close="modal = false"
    @save="edit"
  />

  <ItemInfo
    :item="data"
    @edit="modal = true"
    @remove="remove"
  />

  <Post v-if="data.type === 'TEXT_POST_CREATED'" :post="data" />
  <Edit v-if="data.type === 'WALLET_ASSETS_EDIT'" :edit="data" />
  <NewCartera v-if="data.type === 'NEW_WALLET'" :event="data" />
  <NewAccount v-if="data.type === 'USER_CREATED'" :event="data" />

  <br>

  <ItemShareInfo :item="data" />

  <hr class="my-1">
  <ItemButtonList
    class="my-0"
    :item="data"
    @react="react"
    @unreact="unreact"
  />
  <hr class="my-1">

  <br>

  <!-- Comments -->
  <ItemCommentList
    :item="data"
    @created="data.commentCount++"
    @removed="data.commentCount--"
  />
</div>
</template>

<script>
import client from '@/commons/client.api'

import Post from './Post'
import Edit from './Edit'
import NewCartera from './NewCartera'
import ItemButtonList from './ItemButtonList'
import ItemCommentList from './comment/ItemCommentList'
import ItemShareInfo from './ItemShareInfo'
import ItemInfo from './ItemInfo'
import NewAccount from './UserCreated'
import PostFormEditModal from '@/comps/forms/PostFormEditModal'

export default {
  name: 'FeedItem',

  components: {
    NewAccount,
    Post,
    Edit,
    ItemButtonList,
    ItemCommentList,
    ItemShareInfo,
    ItemInfo,
    NewCartera,
    PostFormEditModal
  },

  props: {
    item: {
      type: Object,
      required: true
    }
  },

  data: () => ({
    modal: false,
    data: null
  }),

  methods: {
    async remove () {
      await client.feed.deleteEvent(this.data.id)
      this.$emit('remove', this.data)
    },

    async edit (item) {
      const update = { ...this.data, data: item }
      this.data = await client.feed.editPost(update)
      this.$emit('edit', this.data)
      this.modal = false
    },

    async react () {
      await client.feed.reactEvent(this.data.id)
      this.data.likeCount++
      this.data.like = true
      this.$emit('react', this.data)
    },

    async unreact () {
      await client.feed.unreactEvent(this.data.id)
      this.data.likeCount--
      this.data.like = false
      this.$emit('unreact', this.data)
    }
  },

  mounted () {
    this.data = JSON.parse(JSON.stringify(this.item))
  }
}
</script>
