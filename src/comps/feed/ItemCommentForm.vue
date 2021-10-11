<template>
<article class="media">
  <!-- Image -->
  <figure class="media-left image is-48x48">
    <img class="is-rounded" :src="$store.state.user.profile.picture">
  </figure>

  <!-- Input -->
  <div class="media-content my-auto">
    <div class="control has-icons-right">
      <input
        type="text"
        v-model="text"
        @keyup.enter.prevent="post"
        placeholder="Escreva um comentário"
        class="input is-primary has-background-white-ter"
      >
      <span class="icon is-right">
        <font-awesome-icon icon="smile" />
      </span>
    </div>
  </div>
</article>
</template>

<script>
export default {
  name: 'ItemCommentForm',

  data: () => ({
    text: ''
  }),

  methods: {
    post () {
      this.$emit('post', { text: this.text })
      this.text = ''
    }
  }
}
</script>

<style scoped>
.input {
  border-radius: 25px;
}
</style>
