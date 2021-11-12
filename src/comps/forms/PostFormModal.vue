<template>
<div class="modal" :class="{ 'is-active': active }">
  <div class="modal-background" @click="$emit('close')"></div>
  <div class="modal-card">

    <!-- Title -->
    <header class="modal-card-head has-background-white">
      <p class="modal-card-title"> Criar publicação </p>
      <button class="delete is-large" @click="$emit('close')"></button>
    </header>

    <!-- Form -->
    <section class="modal-card-body is-clipped">
      <textarea
        class="is-size-5"
        placeholder="Como estão seus investimentos hoje?"
        rows="10"
        v-model="text"
      />
    </section>

    <!-- Buttons -->
    <footer class="modal-card-foot has-background-white">
      <nav class="buttons has-text-grey">
        <PostFormModalButton icon="image" label="Foto" @click="imageModal = true" />
        <!-- <post-form-modal-button icon="video" label="Vídeo" /> -->
        <!-- <post-form-modal-button icon="poll" label="Enquete" /> -->
        <!-- <post-form-modal-button icon="file" label="Documento" /> -->
        <button class="button is-dark" @click="post"> Publicar </button>
      </nav>
    </footer>
  </div>

  <PostImageModal
    :active="imageModal"
    v-model="picture"
    @close="imageModal = false"
  />
</div>
</template>

<script>
import PostImageModal from '@/comps/forms/PostImageModal'
import PostFormModalButton from '@/comps/forms/PostFormModalButton'

export default {
  name: 'PostFormModal',

  components: {
    PostImageModal,
    PostFormModalButton
  },

  props: {
    active: {
      type: Boolean,
      default: false
    }
  },

  data: () => ({
    text: '',
    picture: '',
    imageModal: false
  }),

  methods: {
    post () {
      this.$emit('post', { text: this.text, picture: this.picture })
      this.text = ''
    }
  }
}
</script>

<style scoped>
.modal-card-body textarea {
  border-color: transparent;
  resize: none;
  outline: none;
  min-height: 100%;
  min-width: 100%;
}
</style>
