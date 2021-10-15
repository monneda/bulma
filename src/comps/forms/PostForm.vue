<template>
<article>
  <div class="media">
    <c-avatar
      class="media-left"
      :src="$store.state.user.profile.picture"
      round
      size="4rem"
    />

    <div class="media-content my-auto">
      <span @click="modal = true">
        <input
          readonly
          type="text"
          placeholder="Como estão seus investimentos hoje?"
          class="input has-background-white-ter p-5 is-size-6"
          style="border-radius: 25px;"
        >
      </span>
    </div>
  </div>

  <hr class="is-hidden-touch">

  <!--
  For some reason, placing the modal here instead of the end of the div makes
  so that it won't occupy any space. Moving it to the end add some blank space
  -->
  <post-form-modal
    :active="modal"
    @close="modal = false"
    @post="post"
  />

  <div class="level has-text-grey is-hidden-touch">
    <post-form-button class="level-item" icon="image" label="Foto" @click="modal = true" />
    <!-- |
    <post-form-button class="level-item" icon="video" label="Vídeo" @click="modal = true" />
    |
    <post-form-button class="level-item" icon="poll" label="Enquete" @click="modal = true" />
    |
    <post-form-button class="level-item" icon="file" label="Documento" @click="modal = true" /> -->
  </div>
</article>
</template>

<script>
import { FEED_EVENT_CREATE } from '@/store/type.actions'

import PostFormModal from '@/comps/forms/PostFormModal'
import PostFormButton from '@/comps/forms/PostFormButton'

export default {
  name: 'PostForm',

  components: {
    PostFormModal,
    PostFormButton
  },

  data: () => ({
    modal: false
  }),

  methods: {
    async post (item) {
      await this.$store.dispatch(FEED_EVENT_CREATE, item)
      this.modal = false
    }
  }
}
</script>

<style scoped>
.is-50x50 {
  height: 50px;
  width: 50px;
}
</style>
