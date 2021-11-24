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
        <ItemFormEditButton
          icon="image"
          label="Foto"
          @click="modal = true" />
        <button class="button is-dark" @click="save"> Salvar </button>
      </nav>
    </footer>
  </div>

  <ItemFormEditImageModal
    :active="modal"
    :inputValue="picture"
    v-model="picture"
    @close="modal = false"
  />
</div>
</template>

<script>
import ItemFormEditButton from './ItemFormEditButton'
import ItemFormEditImageModal from './ItemFormEditImageModal'

export default {
  name: 'ItemFormEditModal',

  components: {
    ItemFormEditButton,
    ItemFormEditImageModal
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
    modal: false,
    text: '',
    picture: ''
  }),

  // I don't like this, but fixes the bug in:
  // https://trello.com/c/Z6VJZtia
  watch: {
    postData (newVal, oldVal) {
      this.text = newVal.text
      this.picture = newVal.picture
    }
  },

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
