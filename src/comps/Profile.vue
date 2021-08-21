<template>
<article>
  <!-- User info -->
  <div class="level is-mobile mb-1">
    <div class="level-left">
      <!-- Header -->
      <div class="level-item">
        <p><strong> User </strong></p>
      </div>
    </div>
    <div class="level-left">
      <!-- Header -->
      <div class="level-item">
        <p><strong> Carteras </strong></p>
      </div>
    </div>
    <div class="level-left">
          <!-- Info -->
      <div class="level-item">
        <p>
          Variação
        </p>
      </div>
      <div class="level-item">
        <div class="box m-0 py-0 first-box-border box-width" style="background-color:#35E599">
          <small> 1D </small>
        </div>
        <div class="box m-0 py-0 middle-box-border box-width">
          <small> 1S </small>
        </div>
        <div class="box m-0 py-0 middle-box-border box-width">
          <small> 1M </small>
        </div>
        <div class="box m-0 py-0 middle-box-border box-width">
          <small> 3M </small>
        </div>
        <div class="box m-0 py-0 middle-box-border box-width">
          <small> YTD </small>
        </div>
        <div class="box m-0 py-0 last-box-border box-width">
          <small> 1A </small>
        </div>
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
      <Icon class="level-item" icon="heart" label="5" />
    </div>
    <div class="level-right">
      <Icon class="level-item" icon="comments" label="2" />
      <Icon class="level-item" icon="share" label="11" />
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
      <Icon icon="heart" />
    </button>
    <button class="level-item button is-inverted is-link">
      <Icon icon="comments" />
    </button>
    <button class="level-item button is-inverted is-link">
      <Icon icon="share" />
    </button>
  </Breakpoint>

  <Breakpoint class="level" br="mobile" hide>
    <button class="level-item button is-inverted is-link">
      <Icon icon="heart" label="Curtir" />
    </button>
    <button class="level-item button is-inverted is-link">
      <Icon icon="comments" label="Comentar" />
    </button>
    <button class="level-item button is-inverted is-link">
      <Icon icon="share" label="Compartilhar" />
    </button>
  </Breakpoint>
</article>
</template>

<script>
import Icon from '@/comps/Icon'
import Breakpoint from '@/comps/Breakpoint'

export default {
  name: 'Portfolio',

  components: {
    Icon,
    Breakpoint
  },

  data: () => ({
    comment: '',
    portfolios: ['a', 'b', 'c']
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
.first-box-border {
  border-top-right-radius: 0rem;
  border-bottom-right-radius: 0rem;
}
.middle-box-border {
  border-radius: 0rem;
}
.last-box-border {
  border-top-left-radius: 0rem;
  border-bottom-left-radius: 0rem;
}
.box-width {
  width: 4rem;
}
</style>
