<template>
<article>
  <!-- User -->
  <div class="level is-mobile">
    <div class="level-left">
      <div class="level-item is-m">
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
  <div class="is-size-6">
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

    <br>

    <figure class="image">
      <img style="border-radius: 25px;" src="https://placekitten.com/400/200">
    </figure>
  </div>

  <br>

  <!-- Share info -->
  <nav class="level is-mobile">
    <div class="level-left">
      <div class="level-item">
        <span class="icon-text">
          <span class="icon has-text-primary">
            <font-awesome-icon icon="heart" />
          </span>
          <span>5,8 mil curtidas</span>
        </span>
      </div>
    </div>

    <div class="level-right is-hidden-touch">
      <span class="level-item">5 comentários</span>
      <span class="level-item">11 compartilhamentos</span>
    </div>
  </nav>

  <!-- Buttons -->
  <hr class="my-1">
  <div class="level is-mobile my-0">
    <post-button class="px-0 level-item has-text-primary" icon="heart" label="Curtir" />
    <post-button class="px-0 level-item" icon="comment" label="Comentar" />
    <post-button class="px-0 level-item" icon="share" label="Compartilhar" />
    <post-button class="px-0 level-item" icon="paper-plane" label="Enviar" />
  </div>
  <hr class="my-1">

  <br>

  <comment-form class="my-0" @submit="newComment" />
  <comment class="c-is-borderless my-0" />
  <comment class="c-is-borderless my-0" />
</article>
</template>

<script>
import Comment from '@/comps/feed/Comment'
import PostButton from '@/comps/feed/PostButton'
import CommentForm from '@/comps/forms/CommentForm'

export default {
  name: 'Post',

  components: {
    Comment,
    PostButton,
    CommentForm
  },

  methods: {
    newComment (text) {
      console.log(text)
    }
  }
}
</script>
<style>
/* Hide border colors */
.c-is-borderless {
  border: 0px transparent;
}
</style>
