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
      <!-- User info -->
      <p>
        <strong>Guilherme Bueno</strong> <small>@bueno</small> <small>31m</small>
        <br>
        <small>Founder</small>
      </p>

      <!-- Post -->
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.
      </p>

      <!-- Share info -->
      <nav class="level is-mobile">
        <span class="level-left">
          <small class="level-item">5 curtidas</small>
        </span>
        <span class="level-right">
          <small class="level-item">2 comentários</small>
          <small class="level-item">10 compartilhamentos</small>
        </span>
      </nav>
    </div>

    <!-- Share buttons -->
    <nav class="level is-mobile">
      <button class="button is-inverted is-link">
        <Icon class="level-item" icon="heart" label="Curtir" />
      </button>
      <button class="button is-inverted is-link">
        <Icon class="level-item" icon="share" label="Compartilhar" />
      </button>
      <button class="button is-inverted is-link">
        <Icon class="level-item" icon="paper-plane" label="Enviar" />
      </button>
      <button class="button is-inverted is-link">
        <Icon class="level-item" icon="bookmark" label="Salvar" />
      </button>
    </nav>
  </div>
</article>
</template>

<script>
import Icon from '@/comps/Icon'

export default {
  components: {
    Icon
  }
}
</script>
