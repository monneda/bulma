<template>
<article class="media">
  <!-- Image -->
  <figure class="media-left">
    <figure class="image is-48x48">
      <img class="is-rounded" src="https://placekitten.com/64/64">
    </figure>
  </figure>

  <div class="media-content">
    <div class="comment has-background-light p-3">
      <!-- User -->
      <div class="level">
        <div class="level-left">
          <strong class="level-item">henrich.vaneli</strong>
        </div>
        <div class="level-right">
          <small class="level-item">5h atrás</small>
        </div>
      </div>

      <!-- Comment -->
      <p class="content">
        Vc sempre tão sábia, aprendi muito com vc mesmo sendo por pouco tempo.
      </p>
    </div>

    <!-- Buttons -->
    <div class="pl-2 level">
      <div class="level-left">
        <span class="level-item">Curtir</span>
        <span class="level-item">&bull;</span>
        <span class="level-item">
          <Icon class="has-text-primary" icon="heart" />
        </span>
        <span class="level-item">Responder</span>
      </div>
    </div>
  </div>
</article>
</template>

<script>
import Icon from '@/comps/Icon'

export default {
  name: 'Comment',
  components: { Icon }
}
</script>

<style scoped>
.comment {
  line-height: 0.25rem;
  border-radius: 5px 15px 15px 15px;
}
</style>
