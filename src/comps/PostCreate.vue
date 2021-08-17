<template>
<article>
  <div class="media">
    <figure class="media-left image is-64x64">
      <img class="is-rounded" src="http://placekitten.com/64/64">
    </figure>

    <div class="media-content my-auto">
      <div class="field">
        <p class="control">
          <textarea
            class="textarea"
            placeholder="Novo post"
            :rows="rows"
            v-model="comment"
          />
        </p>
      </div>
    </div>
  </div>

  <Breakpoint class="level is-mobile mt-2" br="mobile">
    <button class="level-item button is-inverted is-link">
      <span class="icon">
        <font-awesome-icon icon="image" />
      </span>
    </button>
    <button class="level-item button is-inverted is-link">
      <span class="icon">
        <font-awesome-icon icon="video" />
      </span>
    </button>
    <button class="level-item button is-inverted is-link">
      <span class="icon">
        <font-awesome-icon icon="poll" />
      </span>
    </button>
    <button class="level-item button is-inverted is-link">
      <span class="icon">
        <font-awesome-icon icon="file" />
      </span>
    </button>
    <button class="level-item button is-link">
      <span class="icon">
        <font-awesome-icon icon="paper-plane" />
      </span>
    </button>
  </Breakpoint>

  <Breakpoint class="level mt-2" br="mobile" hide>
    <button class="level-item button is-inverted is-link">
      <span class="icon-text">
        <span class="icon">
          <font-awesome-icon icon="image" />
        </span>
        <span>Imagem</span>
      </span>
    </button>
    <button class="level-item button is-inverted is-link">
      <span class="icon-text">
        <span class="icon">
          <font-awesome-icon icon="video" />
        </span>
        <span>Vídeo</span>
      </span>
    </button>
    <button class="level-item button is-inverted is-link">
      <span class="icon-text">
        <span class="icon">
          <font-awesome-icon icon="poll" />
        </span>
        <span>Enquete</span>
      </span>
    </button>
    <button class="level-item button is-inverted is-link">
      <span class="icon-text">
        <span class="icon">
          <font-awesome-icon icon="file" />
        </span>
        <span>Documento</span>
      </span>
    </button>
    <button class="level-item button is-link">
      <span class="icon-text">
        <span class="icon">
          <font-awesome-icon icon="paper-plane" />
        </span>
        <span>Publicar</span>
      </span>
    </button>
  </Breakpoint>
</article>
</template>

<script>
import Breakpoint from '@/comps/Breakpoint'

export default {
  name: 'PostCreate',

  components: {
    Breakpoint
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
