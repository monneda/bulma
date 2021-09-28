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
  <br class="is-hidden-desktop">

  <section class="section is-medium has-background-light">
    <div class="container">
      <div class="columns is-vcentered">
        <!-- Text -->
        <div class="column is-6 has-text-centered-mobile">
          <h1 class="title is-size-2-mobile">
            <span class="has-text-weight-normal">o seu network de</span>
            <br>
            valor está aqui
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
          <figure class="image">
            <img src="@/assets/imgs/landing-1.png">
          </figure>
        </div>
      </div>
    </div>
  </section>

  <section class="section is-medium has-background-primary">
    <div class="container has-text-centered">
      <h2 class="title is-size-2 is-size-3-mobile">
        suas oportunidades sobre
        <br>
        investimentos em um único lugar
      </h2>

      <br>

      <div class="level p-6 has-background-green-3" style="border-radius: 20px;">
        <div class="level-item">
          <div>
            <span class="icon is-large has-background-green-2 has-text-light is-rounded is-96x96">
              <c-icon icon="cartera-fill" />
            </span>
            <br>
            <br>
            <p class="title is-3"> carteiras </p>
            <p class="title is-5"> dos seus amigos </p>
          </div>
        </div>

        <div class="level-item">
          <p class="title is-3"> + </p>
        </div>

        <div class="level-item">
          <div>
            <span class="icon is-large has-background-green-2 has-text-light is-rounded is-96x96">
              <c-icon icon="newspaper" />
            </span>
            <br>
            <br>
            <p class="title is-3"> notícias </p>
            <p class="title is-5"> sobre a bolsa </p>
          </div>
        </div>

        <div class="level-item">
          <p class="title is-3"> + </p>
        </div>

        <div class="level-item">
          <div>
            <span class="icon is-large has-background-green-2 has-text-light is-rounded is-96x96">
              <c-icon icon="graph-pie" />
            </span>
            <br>
            <br>
            <p class="title is-3"> ativos </p>
            <p class="title is-5"> saiba o que está em alta </p>
          </div>
        </div>

        <div class="level-item">
          <p class="title is-3"> + </p>
        </div>

        <div class="level-item">
          <div>
            <span class="icon is-large has-background-green-2 has-text-light is-rounded is-96x96">
              <c-icon icon="compass" />
            </span>
            <br>
            <br>
            <p class="title is-3"> descubra </p>
            <p class="title is-5"> o que está em alta </p>
          </div>
        </div>
      </div>

      <br>

      <button class="button is-white">
        <span class="has-text-weight-bold p-6">
          quero fazer parte!
        </span>
      </button>
    </div>
  </section>

  <section class="section has-background-light">
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
          <span class="icon has-background-white has-text-primary has-shadow is-rounded is-96x96">
            <c-icon icon="users" />
          </span>

          <br>
          <br>

          <h3 class="title">
            interaja com investidores e fique por dentro
          </h3>

          <p>
            Saiba o que seus amigos estão investindo e
            intereja na sua posição de suas carteira: comente,
            curta ou indique "bear" ou "bull".
          </p>
        </div>

        <div class="column is-1"></div>
      </div>
    </div>
  </section>

  <section class="section has-background-light">
    <div class="container">
      <div class="columns is-vcentered">
        <div class="column is-1"></div>

        <!-- Text -->
        <div class="column is-4 has-text-centered-mobile">
          <span class="icon has-background-white has-text-primary has-shadow is-rounded is-96x96">
            <c-icon icon="line-up" />
          </span>

          <br>
          <br>

          <h3 class="title">
            invista melhor o seu dinheiro
          </h3>

          <p>
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

  <section class="section has-background-light">
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
          <span class="icon has-background-white has-text-primary has-shadow is-rounded is-96x96">
            <c-icon icon="lock" />
          </span>

          <br>
          <br>

          <h3 class="title">
            segurança com os seus dados
          </h3>

          <p>
            Seus dados estão protegidos conosco, apenas
            você pode ver o valor da sua carteira. Seus
            amigos só veem a composição em %.
          </p>
        </div>

        <div class="column is-1"></div>
      </div>
    </div>
  </section>

  <section class="section has-background-custom">
    <div class="container has-text-centered">
      <div class="is-flex is-justify-content-center">
        <figure class="image">
          <img src="@/assets/imgs/landing-5.png">
        </figure>
      </div>
      <br>
      <h3 class="title">
        os melhores investidores estão aqui.
        <br>
        e você?
      </h3>
      <br>
      <button class="button is-white is-large">quero fazer parte!</button>
    </div>
  </section>
</div>

<Footer />
</template>

<script>
import CIcon from '@/ui/CIcon'
import Footer from '@/comps/Footer'

export default {
  name: 'Landing',

  components: {
    CIcon,
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
.has-background-custom {
  background: linear-gradient(to top, $primary 0%, $primary 70%, $light 70%, $light 100%);
}

.is-96x96 {
  height: 96px;
  width: 96px;
}

.is-rounded {
  border-radius: 9999px;
}

.has-shadow {
  box-shadow: 0px 0px 8px $gray-4;
}
</style>
