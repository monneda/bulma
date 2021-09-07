<template>
<article>
  <div class="level has-background-primary-light p-4">
    <div class="level-left">
      <div class="level-item">
        <figure class="image is-48x48">
          <img class="is-rounded" src="http://placekitten.com/128/128">
        </figure>
      </div>

      <div class="level-item">
        <div class="is-flex is-flex-direction-column">
          <span>Cartera de</span>
          <strong>Joao</strong>
        </div>
      </div>
    </div>

    <div class="level-right">
      <div class="level-item">
        <button class="button is-primary">Editar cartera</button>
      </div>
      <div class="level-item">
        <button class="button">Compartilhar</button>
      </div>
    </div>
  </div>

  <div class="level">
    <div class="level-left">
      <div class="level-item">
        <Icon class="fas fa-lg has-text-primary" icon="wallet" />
      </div>
      <div class="level-item">
        <span class="title">
          À prova de balas
        </span>
      </div>
    </div>

    <div class="level-right">
      <div class="level-item">
        <div class="select is-primary">
          <select v-model="selected">
            <option>7 dias</option>
            <option>1 mês</option>
            <option>3 meses</option>
            <option>YTD</option>
          </select>
        </div>
      </div>
      <div class="level-item">
        <Icon class="fas fa-lg" icon="wallet" />
      </div>
      <div class="level-item">
        <div class="is-flex is-flex-direction-column">
          <strong>Variação {{ selected }}:</strong>
          <span>10%</span>
        </div>
      </div>
    </div>
  </div>

  <hr>

  <div class="content">
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
      quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
      consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
      cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
      proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </p>
  </div>
</article>
</template>

<script>
import Icon from '@/comps/Icon'

const OPTIONS = ['7 dias', '1 mês', '3 meses', 'YTD']

export default {
  name: 'PortfolioBanner',

  components: {
    Icon
  },

  data: () => ({
    options: OPTIONS,
    selected: OPTIONS[0]
  })
}
</script>

<style scoped>
div .level {
  border-radius: 15px 15px 0px 0px;
}
</style>
