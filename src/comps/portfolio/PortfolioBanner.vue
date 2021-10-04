<template>
<article>
  <div class="level">
    <div class="level-left">
      <!-- Image -->
      <div class="level-item">
        <figure class="image is-48x48">
          <img class="is-rounded" src="http://placekitten.com/128/128">
        </figure>
      </div>

      <!-- Name -->
      <div class="level-item">
        <div class="is-flex is-flex-direction-column has-text-centered-mobile">
          <span>Cartera de</span>
          <strong>Joao</strong>
        </div>
      </div>
    </div>

    <div class="level-right">
      <!-- Edit -->
      <div class="level-item">
        <button class="button is-primary">
          <span class="icon-text">
            <span class="icon">
              <font-awesome-icon icon="pen" />
            </span>
            <span> Editar cartera </span>
          </span>
        </button>
      </div>

      <!-- Share -->
      <div class="level-item">
        <button class="button is-primary is-light">
          <span class="icon-text">
            <span class="icon">
              <font-awesome-icon icon="share" />
            </span>
            <span> Compartilhar </span>
          </span>
        </button>
      </div>
    </div>
  </div>

  <div class="level">
    <div class="level-left">
      <!-- Icon -->
      <div class="level-item">
        <span class="icon is-large has-text-primary">
          <font-awesome-icon icon="wallet" size="lg" />
        </span>
      </div>

      <!-- Wallet name -->
      <div class="level-item">
        <h4 class="title is-4"> À prova de balas </h4>
      </div>
    </div>

    <div class="level-right">
      <div class="level-item">
        <!-- Input -->
        <div class="select is-primary">
          <select v-model="selected">
            <option> 7 dias  </option>
            <option> 1 mês   </option>
            <option> 3 meses </option>
            <option> YTD     </option>
          </select>
        </div>
      </div>

      <!-- Selected item -->
      <div class="level-item">
        <span class="icon-text">
          <span class="icon is-large">
            <font-awesome-icon icon="wallet" size="lg" />
          </span>
          <span class="my-auto">
            <p class="has-text-weight-bold"> Variação {{ selected }}: </p>
            <p> 10% </p>
          </span>
        </span>
      </div>
    </div>
  </div>

  <hr>

  <!-- Description -->
  <p>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
    proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
  </p>
</article>
</template>

<script>
const OPTIONS = ['7 dias', '1 mês', '3 meses', 'YTD']

export default {
  name: 'PortfolioBanner',

  data: () => ({
    options: OPTIONS,
    selected: OPTIONS[0]
  })
}
</script>
