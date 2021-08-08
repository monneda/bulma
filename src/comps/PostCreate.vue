<template>
<article class="media">
  <!-- User image -->
  <figure class="media-left">
    <p class="image is-64x64">
      <img class="is-rounded" src="http://placekitten.com/64/64">
    </p>
  </figure>

  <!-- Content -->
  <div class="media-content">
    <div class="content">
      <!-- Post input -->
      <div class="field">
        <span class="control">
          <textarea
            class="textarea"
            placeholder="Novo post"
            :rows="rows"
            v-model="comment"
          />
        </span>
      </div>

      <!-- Share buttons -->
      <nav class="level is-mobile">
        <button class="button is-inverted is-link">
          <Icon class="level-item" icon="image" label="Imagem" />
        </button>
        <button class="button is-inverted is-link">
          <Icon class="level-item" icon="video" label="Vídeo" />
        </button>
        <button class="button is-inverted is-link">
          <Icon class="level-item" icon="poll" label="Enquete" />
        </button>
        <button class="button is-inverted is-link">
          <Icon class="level-item" icon="file" label="Documento" />
        </button>
        <button class="button is-link">
          <Icon class="level-item" icon="paper-plane" label="Publicar" />
        </button>
      </nav>
    </div>
  </div>
</article>
</template>

<script>
import Icon from '@/comps/Icon'

export default {
  name: 'PostCreate',

  components: {
    Icon
  },

  data: () => ({
    comment: ''
  }),

  computed: {
    rows () {
      const newlines = this.comment.split('\n').length
      const min = Math.max(newlines, 1) || 1
      return Math.min(min, 5)
    }
  }
}
</script>

<style scoped>
textarea {
  resize: none;
}
</style>
