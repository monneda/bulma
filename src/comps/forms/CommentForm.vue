<template>
<article class="media">
  <!-- Image -->
  <figure class="media-left">
    <figure class="image is-48x48">
      <img class="is-rounded" src="https://placekitten.com/64/64">
    </figure>
  </figure>

  <!-- Input -->
  <div class="media-content my-auto">
    <p class="control has-icons-right">
      <input
        type="text"
        v-model="text"
        @keyup.enter.prevent="submit"
        placeholder="Escreva um comentário"
        class="input has-background-white-ter is-size-6"
        style="border-radius: 25px;"
      >
      <span class="icon is-right">
        <font-awesome-icon icon="smile" />
      </span>
    </p>
  </div>
</article>
</template>

<script>
export default {
  name: 'CommentForm',

  data: () => ({
    text: ''
  }),

  methods: {
    submit () {
      this.$emit('submit', this.text)
    }
  }
}
</script>
