<template>
<div class="modal" :class="{ 'is-active': active }">
  <div class="modal-background" @click="$emit('close')"></div>
  <div class="modal-card">
    <!-- Title -->
    <header class="modal-card-head has-background-white">
      <p class="modal-card-title"> Inserir imagem </p>
      <button class="delete is-large" @click="$emit('close')"></button>
    </header>

    <!-- Form -->
    <section class="modal-card-body is-clipped">
      <div class="field">
        <div class="control">
          <label class="label"> URL da imagem </label>
          <textarea
            class="input"
            placeholder="Inserir url"
            v-model="picture"
            @input="$emit('update:modelValue', $event.currentTarget.value)"
          />
        </div>
      </div>
    </section>

    <!-- Buttons -->
    <footer class="modal-card-foot has-background-white">
      <button class="button is-primary" @click="$emit('close')"> Ok </button>
    </footer>
  </div>
</div>
</template>

<script>
export default {
  name: 'PostImageModal',

  props: {
    active: {
      type: Boolean,
      default: false
    },
    inputValue: {
      type: String,
      default: 'oi'
    }
  },

  data: () => ({
    postPicture: ''
  }),

  created () {
    this.postPicture = this.inputValue
  }

}
</script>
