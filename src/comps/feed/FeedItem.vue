<template>
<div v-if="item">
  <PostFormEditModal
    v-if="item.data"
    :postData="item.data"
    :active="modal"
    @close="modal = false"
    @save="edit"
  />

  <ItemHeader
    :item="item"
    @edit="modal = true"
    @remove="remove"
  />

  <ItemTextPost v-if="item.type === 'TEXT_POST_CREATED'" :post="item" />
  <ItemUserCreate v-if="item.type === 'USER_CREATED'" :event="item" />
  <ItemCarteraUpdate v-if="item.type === 'WALLET_ASSETS_EDIT'" :edit="item" />
  <ItemCarteraCreate v-if="item.type === 'NEW_WALLET'" :event="item" />

  <br>

  <ItemFooter :item="item" />

  <hr class="my-1">
  <ItemButtonList
    class="my-0"
    :item="item"
    @react="react"
    @unreact="unreact"
  />
  <hr class="my-1">

  <br>

  <!-- Comments -->
  <ItemCommentList
    :id="item.id"
    @created="item.commentCount++"
    @removed="item.commentCount--"
  />
</div>
</template>

<script>
import client from '@/commons/client.api'

import ItemTextPost from './items/ItemTextPost'
import ItemUserCreate from './items/ItemUserCreate'
import ItemCarteraUpdate from './items/ItemCarteraUpdate'
import ItemCarteraCreate from './items/ItemCarteraCreate'

import ItemCommentList from './comment/ItemCommentList'

import ItemHeader from './ItemHeader'
import ItemFooter from './ItemFooter'
import ItemButtonList from './ItemButtonList'

import PostFormEditModal from '@/comps/forms/PostFormEditModal'

export default {
  name: 'FeedItem',

  components: {
    ItemTextPost,
    ItemUserCreate,
    ItemCarteraUpdate,
    ItemCarteraCreate,

    ItemCommentList,

    ItemHeader,
    ItemFooter,
    ItemButtonList,

    PostFormEditModal
  },

  props: {
    id: { type: String, required: true }
  },

  data: () => ({
    modal: false,
    item: null
  }),

  methods: {
    async remove () {
      await client.feed.deleteEvent(this.item.id)
      this.$emit('remove', this.item)
    },

    async edit (item) {
      const update = { ...this.item, data: item }
      this.item = await client.feed.editPost(update)
      this.$emit('edit', this.item)
      this.modal = false
    },

    async react () {
      await client.feed.reactEvent(this.item.id)
      this.item.likeCount++
      this.item.like = true
      this.$emit('react', this.item)
    },

    async unreact () {
      await client.feed.unreactEvent(this.item.id)
      this.item.likeCount--
      this.item.like = false
      this.$emit('unreact', this.item)
    }
  },

  async mounted () {
    this.item = await client.feed.fetchEvent(this.id)
  }
}
</script>
