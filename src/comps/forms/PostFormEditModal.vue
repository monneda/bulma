<template>
<div class="modal" :class="{ 'is-active': active }">
  <div class="modal-background" @click="$emit('close')"></div>
  <div class="modal-card">

    <!-- Title -->
    <header class="modal-card-head has-background-white">
      <p class="modal-card-title"> Editar publicação </p>
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
        <post-form-modal-button icon="image" label="Foto" @click="imageModal = true" />
        <!-- <post-form-modal-button icon="video" label="Vídeo" /> -->
        <!-- <post-form-modal-button icon="poll" label="Enquete" /> -->
        <!-- <post-form-modal-button icon="file" label="Documento" /> -->
        <button class="button is-dark" @click="save"> Salvar </button>
      </nav>
    </footer>
  </div>

  <PostImageModal
    :active="imageModal"
    :inputValue="picture"
    v-model="picture"
    @close="imageModal = false"
  />
</div>
</template>

<script>
import PostImageModal from '@/comps/forms/PostImageModal'
import PostFormModalButton from '@/comps/forms/PostFormModalButton'

export default {
  name: 'PostFormEditModal',

  components: {
    PostImageModal,
    PostFormModalButton
  },

  props: {
    active: {
      type: Boolean,
      default: true
    },
    postData: {
      type: Object,
      required: true
    }
  },

  data: () => ({
    imageModal: false,
    text: '',
    picture: ''
  }),

  created () {
    this.text = this.postData.text
    this.picture = this.postData.picture
  },

  methods: {
    save () {
      this.$emit('save', { text: this.text, picture: this.picture })
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
