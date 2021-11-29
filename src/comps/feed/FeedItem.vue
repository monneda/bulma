<template>
<div v-if="data">
  <PostFormEditModal
    v-if="data.data"
    :postData="data.data"
    :active="modal"
    @close="modal = false"
    @save="edit"
  />

  <ItemHeader
    :item="data"
    @edit="modal = true"
    @remove="remove"
  />

  <ItemTextPost v-if="data.type === 'TEXT_POST_CREATED'" :post="data" />
  <ItemUserCreate v-if="data.type === 'USER_CREATED'" :event="data" />
  <ItemCarteraUpdate v-if="data.type === 'WALLET_ASSETS_EDIT'" :edit="data" />
  <ItemCarteraCreate v-if="data.type === 'NEW_WALLET'" :event="data" />

  <br>

  <ItemFooter :item="data" />

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
    :id="data.id"
    @created="data.commentCount++"
    @removed="data.commentCount--"
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
