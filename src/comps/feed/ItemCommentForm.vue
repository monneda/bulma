<template>
<article class="media">
  <!-- Image -->
  <c-avatar class="media-left" size="2.5rem" :src="$store.state.user.profile.picture" round />

  <!-- Input -->
  <div class="media-content my-auto">
    <div class="control has-icons-right">
      <input
        type="text"
        v-model="text"
        @keyup.enter.prevent="create"
        placeholder="Escreva um comentário"
        class="input is-primary has-background-white-ter"
      >
      <!-- TODO: emoji support (?) -->
      <!-- <span class="icon is-right">
        <font-awesome-icon icon="smile" />
      </span> -->
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
    create () {
      this.$emit('create', { text: this.text })
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
