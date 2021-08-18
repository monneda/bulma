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
      <Icon icon="image" />
    </button>
    <button class="level-item button is-inverted is-link">
      <Icon icon="video" />
    </button>
    <button class="level-item button is-inverted is-link">
      <Icon icon="poll" />
    </button>
    <button class="level-item button is-inverted is-link">
      <Icon icon="file" />
    </button>
    <button class="level-item button is-link">
      <Icon icon="paper-plane" />
    </button>
  </Breakpoint>

  <Breakpoint class="level mt-2" br="mobile" hide>
    <button class="level-item button is-inverted is-link">
      <Icon icon="image" label="Imagem" />
    </button>
    <button class="level-item button is-inverted is-link">
      <Icon icon="video" label="Vídeo" />
    </button>
    <button class="level-item button is-inverted is-link">
      <Icon icon="poll" label="Enquete" />
    </button>
    <button class="level-item button is-inverted is-link">
      <Icon icon="file" label="Documento" />
    </button>
    <button class="level-item button is-link">
      <Icon icon="paper-plane" label="Publicar" />
    </button>
  </Breakpoint>
</article>
</template>

<script>
import Icon from '@/comps/Icon'
import Breakpoint from '@/comps/Breakpoint'

export default {
  name: 'PostCreate',

  components: {
    Icon,
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
