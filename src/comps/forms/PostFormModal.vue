<template>
<div class="modal" :class="{ 'is-active': active }">
  <div class="modal-background" @click="close"></div>
  <div class="modal-card">

    <!-- Title -->
    <header class="modal-card-head has-background-white">
      <p class="modal-card-title"> Criar publicação </p>
      <button class="delete is-large" @click="close"></button>
    </header>

    <!-- Form -->
    <section class="modal-card-body is-clipped">
      <textarea class="is-size-5" placeholder="Como estão seus investimentos hoje?" rows="10" />
    </section>

    <!-- Buttons -->
    <footer class="modal-card-foot has-background-white">
      <nav class="level has-text-grey">
        <div class="level-left">
          <post-form-modal-button class="level-item" icon="image" label="Foto"    />
          <post-form-modal-button class="level-item" icon="video" label="Vídeo"   />
          <post-form-modal-button class="level-item" icon="poll"  label="Enquete" />
          <post-form-modal-button class="level-item" icon="file"  label="Poll"    />
        </div>

        <div class="level-right">
          <button class="level-item button is-dark"> Publicar </button>
        </div>
      </nav>
    </footer>
  </div>
</div>
</template>

<script>
import PostFormModalButton from '@/comps/forms/PostFormModalButton'

export default {
  name: 'PostFormModal',

  components: {
    PostFormModalButton
  },

  props: {
    active: {
      type: Boolean,
      default: false
    }
  },

  methods: {
    close () {
      this.$emit('close', this)
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
