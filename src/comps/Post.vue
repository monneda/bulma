<template>
<article>
  <!-- User info -->
  <div class="level">
    <div class="level-left">
      <!-- Image -->
      <div class="level-item">
        <figure class="image is-48x48">
          <img class="is-rounded" src="http://placekitten.com/64/64">
        </figure>
      </div>

      <!-- Info -->
      <div class="level-item">
        <div>
          <p><strong>bueno</strong></p>
          <p><small>31m</small></p>
        </div>
      </div>
    </div>
  </div>

  <!-- Post -->
  <div class="content">
    <p class="has-text-justified has-text-grey-darker">
      A Amazon e a Shopee estão na reta final para locar a maior parte do Faria Lima Plaza, transformando o edifício do Largo da Batata num verdadeiro polo do ecommerce brasileiro.
      <br>
      <br>
      A locação é uma boa notícia para o XP Properties ($XPPR11), um fundo imobiliário da XP  que em setembro comprou 40% do edifício e que apanhou muito na pandemia por conta do home office parecer que veio para ficar.
      <br>
      <br>
      Eai, será que vai ficar ou todo mundo ta louco pra voltar pro escritório?
      <br>
      <br>
      Fonte: https://cutt.ly/Pm7a4lU
    </p>

    <figure class="image mx-0 is-2by1">
      <img src="https://placekitten.com/400/200">
    </figure>
  </div>

  <!-- Share info -->
  <nav class="level">
    <div class="level-left">
      <Icon class="level-item has-text-primary fas fa-lg" icon="heart"/>
      <span class="level-item">5,8 mil curtidas</span>
    </div>

    <div class="level-right">
      <span class="level-item">5 comentários</span>
      <span class="level-item">11 compartilhamentos</span>
    </div>
  </nav>

  <hr>

  <!-- Buttons -->
  <nav class="level">
    <button class="level-item button is-white has-text-grey-dark">
      <Icon class="fas fa-lg" icon="heart" label="Curtir" />
    </button>
    <button class="level-item button is-white has-text-grey-dark">
      <Icon class="fas fa-lg" icon="comments" label="Comentar" />
    </button>
    <button class="level-item button is-white has-text-grey-dark">
      <Icon class="fas fa-lg" icon="share" label="Compartilhar" />
    </button>
    <button class="level-item button is-white has-text-grey-dark">
      <Icon class="fas fa-lg" icon="paper-plane" label="Enviar" />
    </button>
  </nav>

  <div class="is-flex is-flex-direction-column">
    <Comment />
    <Comment />
    <Comment />
  </div>
</article>
</template>

<script>
import Icon from '@/comps/Icon'
import Comment from '@/comps/Comment'

export default {
  name: 'Post',

  components: {
    Icon,
    Comment
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

<style>
img {
  border-radius: 25px;
}
</style>
