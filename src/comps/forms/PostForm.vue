<template>
<article>
  <div class="media">
    <figure class="media-left image is-64x64">
      <img class="is-rounded" src="http://placekitten.com/64/64">
    </figure>

    <div class="media-content my-auto">
      <span @click="toggle">
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
  <post-form-modal :active="modal" @close="close" />

  <div class="level has-text-grey is-hidden-touch">
    <post-form-button class="level-item" icon="image" label="Foto" />
    |
    <post-form-button class="level-item" icon="video" label="Vídeo" />
    |
    <post-form-button class="level-item" icon="poll" label="Enquete" />
    |
    <post-form-button class="level-item" icon="file" label="Documento" />
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

  methods: {
    toggle () {
      this.modal = !this.modal
    },
    close () {
      this.modal = false
    }
  }
}
</script>
