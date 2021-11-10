<template>
<article class="media">
  <!-- Image -->
  <c-avatar class="media-left" size="2.5rem" :src="$store.state.user.profile.picture" round />

  <!-- TextArea -->
  <div class="media-content my-auto">
    <div class="control has-icons-right">
      <c-textarea
        type="text"
        v-model="text"
        :validator="i => i.length <= this.maxLength"
        :error="this.text.length + '/' + this.maxLength"
        right icon="paper-plane"
        @submit="create"
        placeholder="Escreva um comentário"
        class="textarea is-primary has-background-white-ter has-fixed-size pr-5"
      />
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
    text: '',
    maxLength: 300
  }),

  methods: {
    create () {
      this.$emit('create', { text: this.text })
      this.text = ''
    }
  }
}
</script>
