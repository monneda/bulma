<template>
<article>
  <!-- User info -->
  <div class="level is-mobile mb-1">
    <div class="level-left">
      <!-- Image -->
      <div class="level-item">
        <figure class="image is-48x48">
          <img class="is-rounded" src="http://placekitten.com/64/64">
        </figure>
      </div>

      <!-- Info -->
      <div class="level-item">
        <p>
          <strong>Guilherme Bueno</strong> <small>@bueno</small> <small>31m</small>
          <br>
          <small>Founder</small>
        </p>
      </div>
    </div>
  </div>

  <!-- Post -->
  <div class="content mt-2 mb-0">
    <p class="has-text-justified has-text-grey-darker">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
    </p>
  </div>

  <Breakpoint class="level is-mobile has-text-grey mt-2 mb-1" br="mobile">
    <div class="level-left">
      <span class="level-item icon-text">
        <span class="icon"><font-awesome-icon icon="heart" /></span>
        <span>5</span>
      </span>
    </div>
    <div class="level-right">
      <span class="level-item icon-text">
        <span class="icon"><font-awesome-icon icon="comments" /></span>
        <span>2</span>
      </span>
      <span class="level-item icon-text">
        <span class="icon"><font-awesome-icon icon="share" /></span>
        <span>11</span>
      </span>
    </div>
  </Breakpoint>

  <Breakpoint class="level has-text-grey mt-2 mb-1" br="mobile" hide>
    <div class="level-left">
      <small class="level-item">5 curtidas</small>
    </div>
    <div class="level-right">
      <small class="level-item">2 comentários</small>
      <small class="level-item">11 compartilhamentos</small>
    </div>
  </Breakpoint>

  <hr class="mt-2 mb-1">

  <Breakpoint class="level is-mobile" br="mobile">
    <button class="level-item button is-inverted is-link">
      <span class="icon">
        <font-awesome-icon icon="heart" />
      </span>
    </button>
    <button class="level-item button is-inverted is-link">
      <span class="icon">
        <font-awesome-icon icon="comments" />
      </span>
    </button>
    <button class="level-item button is-inverted is-link">
      <span class="icon">
        <font-awesome-icon icon="share" />
      </span>
    </button>
  </Breakpoint>

  <Breakpoint class="level" br="mobile" hide>
    <button class="level-item button is-inverted is-link">Curtir</button>
    <button class="level-item button is-inverted is-link">Comentar</button>
    <button class="level-item button is-inverted is-link">Compartilhar</button>
  </Breakpoint>
</article>
</template>

<script>
import Breakpoint from '@/comps/Breakpoint'

export default {
  name: 'Post',

  components: {
    Breakpoint
  },

  data: () => ({
    comment: ''
  }),

  computed: {
    rows () {
      const newlines = this.comment.split('\n').length
      return Math.max(newlines, 1)
    }
  }
}
</script>

<style scoped>
textarea {
  resize: none;
}
</style>
