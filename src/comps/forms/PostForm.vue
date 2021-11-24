<template>
<article>
  <div class="media">
    <c-avatar class="media-left" :src="self.picture" round size="4rem" />

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
  <PostFormModal :active="modal" @close="modal = false" @post="post" />

  <div class="level has-text-grey is-hidden-touch">
    <PostFormButton class="level-item" icon="image" label="Foto" @click="modal = true" />
    <!-- |
    <PostFormButton class="level-item" icon="video" label="Vídeo" @click="modal = true" />
    |
    <PostFormButton class="level-item" icon="poll" label="Enquete" @click="modal = true" />
    |
    <PostFormButton class="level-item" icon="file" label="Documento" @click="modal = true" /> -->
  </div>
</article>
</template>

<script>
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

  computed: {
    self () {
      return this.$store.state.user.profile
    }
  },

  methods: {
    post (item) {
      this.$emit('create', item)
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
