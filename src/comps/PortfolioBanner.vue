<template>
<article class="box p-0">
  <!-- User -->
  <div class="level box is-shadowless is-radiusless has-background-primary-light">
    <div class="level-left">
      <!-- Image -->
      <div class="level-item">
        <figure class="image is-48x48">
          <img class="is-rounded" src="http://placekitten.com/128/128">
        </figure>
      </div>

      <!-- ame -->
      <div class="level-item">
        <div>
          <p> Cartera de </p>
          <p><strong> Joao </strong></p>
        </div>
      </div>
    </div>

    <!-- Buttons -->
    <div class="level-right">
      <div class="level-item">
        <button class="button level-item"> Compartilhar </button>
        <button class="button level-item"> Enviar </button>
      </div>
    </div>
  </div>

  <!-- Title -->
  <div class="level box is-shadowless">
    <div class="level-left">
      <div class="level-item">
        <Icon class="is-large" icon="wallet" />
        <h1 class="title"> Minha cartera na clear </h1>
      </div>
    </div>

    <div class="level-right">
      <div class="level-item">
        <Icon icon="wallet" />
        <p>
          <strong> Variação: </strong> 12.5%
        </p>
      </div>
    </div>
  </div>

  <hr>

  <!-- Description -->
  <div class="content box is-shadowless">
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
      quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
      consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
      cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
      proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </p>
  </div>

  <!-- Tabs -->
  <div class="level box has-background-grey-lighter p-1">
    <button class="level-item button has-background-grey-lighter"> Ativos </button>
    <button class="level-item button has-background-grey-lighter"> Composição </button>
    <button class="level-item button has-background-grey-lighter"> Histórico </button>
  </div>
</article>
</template>

<script>
import Icon from '@/comps/Icon'

export default {
  name: 'PortfolioBanner',

  components: {
    Icon
  }
}
</script>
