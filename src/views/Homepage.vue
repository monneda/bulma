<template>
<!--  Navbar -->
<nav class="navbar is-fixed-top custom-navbar">
  <div class="container">

    <!-- Brand -->
    <div class="navbar-brand">
      <!-- Logo -->
      <a class="navbar-item">
        <figure class="image">
          <img src="@/assets/logo-horizontal-fundo-claro.png">
        </figure>
      </a>

      <!-- Buguer -->
      <a class="navbar-burger has-text-primary" ref="burger" @click="toggle">
        <span></span>
        <span></span>
        <span></span>
      </a>
    </div>

    <!-- Menu -->
    <div class="navbar-menu" ref="menu">
      <div class="navbar-end">
        <div class="navbar-item">
          <button class="button is-primary is-outlined is-rounded">
            login
          </button>
        </div>
        <div class="navbar-item">
          <button class="button is-primary is-rounded">criar conta</button>
        </div>
      </div>
    </div>
  </div>
</nav>

<!-- Content -->
<div class="container is-fluid p-0 pt-6">
  <section class="section is-medium has-background-light">
    <div class="container">
      <div class="columns is-vcentered">
        <!-- Text -->
        <div class="column is-5 has-text-centered-mobile">
          <p class="title is-size-1 is-size-2-mobile has-text-weight-normal">
            o seu network de
          </p>
          <p class="subtitle is-size-1 is-size-2-mobile has-text-weight-bold">
            valor está aqui
          </p>

          <p class="is-size-4 is-size-5-mobile">
            A Cartera é uma rede social para investidores e futuros investidores.
            Conecte-se ao network que realmente tem valor para seus investimentos.
          </p>

          <br>
          <br>

          <button class="button is-primary is-large is-rounded">
            <span class="has-text-dark">
              quero fazer parte!
            </span>
          </button>
        </div>

        <div class="column is-1"></div>

        <!-- Image -->
        <div class="column is-6">
          <figure class="image">
            <img src="https://placekitten.com/575/350">
          </figure>
        </div>
      </div>
    </div>
  </section>

  <section class="section is-medium has-background-primary">
    <div class="container has-text-centered">
      <div class="title is-size-1 is-size-3-mobile has-text-centered">
        <p>suas oportunidades sobre</p>
        <p>investimentos em um único lugar</p>
      </div>

      <br>
      <br>
      <br>

      <div class="level">
        <div class="level-item">
          <div>
            <p class="title is-size-1"> carteiras </p>
            <p class="is-size-4"> dos seus amigos </p>
          </div>
        </div>

        <div class="level-item">
          <p class="title is-size-1">+</p>
        </div>

        <div class="level-item">
          <div>
            <p class="title is-size-1"> notícias </p>
            <p class="is-size-4"> sobre a bolsa </p>
          </div>
        </div>

        <div class="level-item">
          <p class="title is-size-1">+</p>
        </div>

        <div class="level-item">
          <div>
            <p class="title is-size-1"> ativos </p>
            <p class="is-size-4"> saiba o que está em alta </p>
          </div>
        </div>

        <div class="level-item">
          <p class="title is-size-1">+</p>
        </div>

        <div class="level-item">
          <div>
            <p class="title is-size-1"> descubra </p>
            <p class="is-size-4"> o que está em alta </p>
          </div>
        </div>
      </div>

      <br>
      <br>
      <br>

      <button class="button is-white is-large is-rounded">
        quero fazer parte!
      </button>
    </div>
  </section>

  <section class="section is-medium has-background-light">
    <div class="container">
      <div class="columns is-vcentered">
        <!-- Image -->
        <div class="column is-6">
          <figure class="image">
            <img src="https://placekitten.com/550/350">
          </figure>
        </div>

        <div class="column is-1"></div>

        <!-- Text -->
        <div class="column is-5">
          <span class="has-text-centered-mobile">
            <p class="title is-size-1 is-size-3-mobile">
              interaja com investidores e fique por dentro
            </p>
            <p class="is-size-4 is-size-5-mobile">
              Saiba o que seus amigos estão investindo e intereja na sua posição
              de suas carteira: comente, curta ou indique "bear" ou "bull".
            </p>
          </span>
        </div>
      </div>
    </div>
  </section>

  <section class="section is-medium has-background-light">
    <div class="container">
      <div class="columns is-vcentered">
        <!-- Text -->
        <div class="column is-5">
          <span class="has-text-centered-mobile">
            <p class="title is-size-1 is-size-3-mobile">
              invista melhor o seu dinheiro
            </p>
            <p class="is-size-4 is-size-5-mobile">
              Veja as carteiras mais rentáveis do mês e as notícias impactantes
              do mercado, realocando assim seu dinheiro para as melhores posições.
            </p>
          </span>
        </div>

        <div class="column is-1"></div>

        <!-- Image -->
        <div class="column is-6">
          <figure class="image">
            <img src="https://placekitten.com/550/350">
          </figure>
        </div>
      </div>
    </div>
  </section>

  <section class="section is-medium has-background-light">
    <div class="container">
      <div class="columns is-vcentered">
        <!-- Image -->
        <div class="column is-6">
          <figure class="image">
            <img src="https://placekitten.com/550/350">
          </figure>
        </div>

        <div class="column is-1"></div>

        <!-- Text -->
        <div class="column is-5">
          <span class="has-text-centered-mobile">
            <p class="title is-size-1 is-size-3-mobile">
              segurança com os seus dados
            </p>
            <p class="is-size-4 is-size-5-mobile">
              Seus dados estão protegidos conosco, apenas você pode ver o valor
              da sua carteira. Seus amigos só veem a composição em %.
            </p>
          </span>
        </div>
      </div>
    </div>
  </section>

  <!-- TODO: last section -->
</div>
</template>

<script>
export default {
  name: 'Homepage',

  methods: {
    toggle () {
      this.$refs.menu.classList.toggle('is-active')
      this.$refs.burger.classList.toggle('is-active')
    }
  }
}
</script>
