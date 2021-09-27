<template>
<!--  Navbar -->
<nav class="navbar is-fixed-top is-spaced has-background-gray-7">
  <div class="container">

    <!-- Brand -->
    <div class="navbar-brand">
      <!-- Logo -->
      <div class="navbar-item">
        <a>
          <figure class="image">
            <img src="@/assets/imgs/logo-horizontal-fundo-claro.png" style="border-radius: 0px;">
          </figure>
        </a>
      </div>

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
          <button class="button is-outlined is-green-2">
            <span class="p-4">login</span>
          </button>
        </div>
        <div class="navbar-item">
          <button class="button is-primary has-text-weight-bold">
            <span class="p-4">criar conta</span>
          </button>
        </div>
      </div>
    </div>
  </div>
</nav>

<!-- Content -->
<div class="container is-fluid p-0">
  <section class="section is-medium has-background-light">
    <div class="container">
      <div class="columns is-vcentered">
        <!-- Text -->
        <div class="column is-6 has-text-centered-mobile">
          <h1 class="title is-size-1 is-size-2-mobile">
            <p class="has-text-weight-normal">o seu network de</p>
            <p>valor está aqui</p>
          </h1>

          <p class="is-size-5">
            A Cartera é uma rede social para investidores e futuros investidores.
            Conecte-se ao network que realmente tem valor para seus investimentos.
          </p>

          <br>
          <br>

          <button class="button is-primary is-medium">
            <span class="has-text-weight-bold is-size-6 px-6">
              quero fazer parte!
            </span>
          </button>
        </div>

        <!-- Image -->
        <div class="column is-6">
          <figure class="image cartera-icon is-1">
            <img src="@/assets/svgs/cartera-outlined.svg">
          </figure>
          <figure class="image cartera-icon is-2">
            <img src="@/assets/svgs/cartera-outlined.svg">
          </figure>
          <figure class="image cartera-icon is-3">
            <img src="@/assets/svgs/cartera-outlined.svg">
          </figure>
          <figure class="image">
            <img src="@/assets/imgs/landing-1.png">
          </figure>
        </div>
      </div>
    </div>
  </section>

  <section class="section is-medium has-background-primary">
    <div class="container has-text-centered">
      <h1 class="title is-size-1 is-size-3-mobile">
        <p>suas oportunidades sobre</p>
        <p>investimentos em um único lugar</p>
      </h1>

      <br>
      <br>
      <br>

      <div class="level has-background-success p-6" style="border-radius: 20px;">
        <div class="level-item">
          <div>
            <span class="icon is-large">
              <font-awesome-icon icon="wallet" />
            </span>
            <p class="title is-size-1"> carteiras </p>
            <p class="is-size-4"> dos seus amigos </p>
          </div>
        </div>

        <div class="level-item">
          <p class="title is-size-1"> + </p>
        </div>

        <div class="level-item">
          <div>
            <span class="icon is-large">
              <font-awesome-icon icon="newspaper" />
            </span>
            <p class="title is-size-1"> notícias </p>
            <p class="is-size-4"> sobre a bolsa </p>
          </div>
        </div>

        <div class="level-item">
          <p class="title is-size-1"> + </p>
        </div>

        <div class="level-item">
          <div>
            <span class="icon is-large">
              <font-awesome-icon icon="chart-pie" />
            </span>
            <p class="title is-size-1"> ativos </p>
            <p class="is-size-4"> saiba o que está em alta </p>
          </div>
        </div>

        <div class="level-item">
          <p class="title is-size-1"> + </p>
        </div>

        <div class="level-item">
          <div>
            <span class="icon is-large">
              <font-awesome-icon icon="compass" />
            </span>
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
            <img src="@/assets/imgs/landing-2.png">
          </figure>
        </div>

        <div class="column is-1"></div>

        <!-- Text -->
        <div class="column is-4 has-text-centered-mobile">
          <span class="icon has-text-primary">
            <font-awesome-icon icon="user-friends" />
          </span>

          <br>
          <br>

          <h3 class="title">
            interaja com investidores e fique por dentro
          </h3>

          <p class="is-size-6">
            Saiba o que seus amigos estão investindo e
            intereja na sua posição de suas carteira: comente,
            curta ou indique "bear" ou "bull".
          </p>
        </div>

        <div class="column is-1"></div>
      </div>
    </div>
  </section>

  <section class="section is-medium has-background-light">
    <div class="container">
      <div class="columns is-vcentered">
        <div class="column is-1"></div>

        <!-- Text -->
        <div class="column is-4 has-text-centered-mobile">
          <span class="icon has-text-primary">
            <font-awesome-icon icon="chart-line" />
          </span>

          <br>
          <br>

          <h3 class="title">
            invista melhor o seu dinheiro
          </h3>

          <p class="is-size-6">
            Veja as carteiras mais rentáveis do mês e
            as notícias impactantes do mercado, realocando
            assim seu dinheiro para as melhores posições.
          </p>
        </div>

        <div class="column is-1"></div>

        <!-- Image -->
        <div class="column is-6">
          <figure class="image">
            <img src="@/assets/imgs/landing-3.png">
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
            <img src="@/assets/imgs/landing-4.png">
          </figure>
        </div>

        <div class="column is-1"></div>

        <!-- Text -->
        <div class="column is-4 has-text-centered-mobile">
          <span class="icon has-text-primary">
            <font-awesome-icon icon="lock" />
          </span>

          <br>
          <br>

          <h3 class="title">
            segurança com os seus dados
          </h3>

          <p class="is-size-6">
            Seus dados estão protegidos conosco, apenas
            você pode ver o valor da sua carteira. Seus
            amigos só veem a composição em %.
          </p>
        </div>

        <div class="column is-1"></div>
      </div>
    </div>
  </section>

  <section class="section is-custom-background">
    <div class="container">
      <div class="is-flex is-justify-content-center">
        <figure class="image">
          <img src="@/assets/imgs/landing-5.png">
        </figure>
      </div>
    </div>
  </section>

  <section class="section has-background-primary pt-0">
    <div class="container has-text-centered">
      <h3 class="title">
        <p>os melhores investidores estão aqui.</p>
        <p>e você?</p>
      </h3>
      <br>
      <button class="button is-white is-large">quero fazer parte!</button>
    </div>
  </section>
</div>

<Footer />
</template>

<script>
import Footer from '@/comps/Footer'

export default {
  name: 'Landing',

  components: {
    Footer
  },

  methods: {
    toggle () {
      this.$refs.menu.classList.toggle('is-active')
      this.$refs.burger.classList.toggle('is-active')
    }
  }
}
</script>

<style lang="scss" scoped>
.is-custom-background {
  background: linear-gradient(to top, $primary 0%, $primary 50%, $light 50%, $light 100%);
}

.cartera-icon {
  position: absolute;
}

.cartera-icon > img {
  border-radius: 0px;
  stroke-width: 1px;
}

.is-1 {
  left: 74.03%;
  right: 3.21%;
  top: 0.94%;
  bottom: 92.31%;
}

.is-2 {
  left: 88.89%;
  right: 3.15%;
  top: 14.98%;
  bottom: 82.65%;
  transform: rotate(-180deg);
}

.is-3 {
  left: 59.59%;
  right: 35.19%;
  top: 7.33%;
  bottom: 91.12%;
  transform: rotate(-180deg);
}
</style>
