<template>
<Navbar />

<!-- Content -->
<div class="container is-fluid px-0 is-clipped">
  <section class="section">
    <div class="container">
      <div class="columns is-vcentered">
        <!-- Text -->
        <div class="column is-6 has-text-centered-touch">
          <h1 class="title is-1 is-size-2-touch">
            <span class="has-text-weight-normal">
              Acompanhe as carteiras de ações e cripto de amigos e profissionais
            </span>
          </h1>

          <p class="is-size-5 has-text-grey-dark">
            A Cartera facilita que você compartilhe sua carteira de
            investimentos com amigos e siga carteiras de outros investidores.
          </p>

          <br>
          <br>

          <button class="button is-primary is-large" @click="login">
            <span class="has-text-weight-bold is-size-6 px-6">
              quero fazer parte!
            </span>
          </button>
        </div>

        <!-- Image -->
        <div class="column is-6">
          <img
            src="@/assets/imgs/landing-bg-1.svg"
            class="is-hidden-touch"
            style="position: absolute; z-index: 0; right: -5%; top: -15%; height: 50%"
          >
          <img
            src="@/assets/imgs/landing-bg-1.svg"
            class="is-hidden-desktop"
            style="position: absolute; z-index: 0; height: 25%; right: -10%; top: 350px"
          >
          <img
            src="@/assets/imgs/landing-bg-2.svg"
            class="is-hidden-touch"
            style="position: absolute; z-index: 0; height: 20%; right: -3%; bottom: 0 "
          >
          <img
            src="@/assets/imgs/landing-bg-2.svg"
            class="is-hidden-desktop"
            style="position: absolute; z-index: 0; height: 8%; right: 0; bottom: 0 "
          >
          <img
            src="@/assets/imgs/landing-bg-3.svg"
            class="is-hidden-touch"
            style="position: absolute; z-index: 0; left: 55%; top: 25%; height: 15%"
          >
          <img
            src="@/assets/imgs/landing-bg-3.svg"
            class="is-hidden-desktop"
            style="position: absolute; z-index: 0; left: 10%; bottom: 27%; height: 6%"
          >
          <figure class="image">
            <img src="@/assets/imgs/landing-1.png">
          </figure>
        </div>
      </div>
    </div>
  </section>

  <section class="section is-medium has-background-primary">
    <div class="container has-text-centered">
      <h2 class="title is-2 is-size-3-touch">
        Descubra, acompanhe e discuta
        <br>
        investimentos em um só lugar!
      </h2>

      <br>

      <div class="level p-6" style="border-radius: 20px; background-color: #29D385;">
        <div class="level-item">
          <div>
            <span class="icon is-large has-text-light is-rounded is-96x96">
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
            <span class="icon is-large has-text-light is-rounded is-96x96">
              <c-icon icon="newspaper" />
            </span>
            <br>
            <br>
            <p class="title is-3"> novidades </p>
            <p class="title is-5"> do mercado </p>
          </div>
        </div>

        <div class="level-item">
          <p class="title is-3"> + </p>
        </div>

        <div class="level-item">
          <div>
            <span class="icon is-large has-text-light is-rounded is-96x96">
              <c-icon icon="graph-pie" />
            </span>
            <br>
            <br>
            <p class="title is-3"> ativos </p>
            <p class="title is-5"> de maior retorno </p>
          </div>
        </div>

        <div class="level-item">
          <p class="title is-3"> + </p>
        </div>

        <div class="level-item">
          <div>
            <span class="icon is-large has-text-light is-rounded is-96x96">
              <c-icon icon="compass" />
            </span>
            <br>
            <br>
            <p class="title is-3"> descubra </p>
            <p class="title is-5"> oportunidades </p>
          </div>
        </div>
      </div>

      <br>
      <br>

      <button class="button is-white is-large" @click="login">
        <span class="has-text-weight-bold is-size-6 px-6">
          quero fazer parte!
        </span>
      </button>
    </div>

  </section>

  <section class="section">
    <div class="container">
      <div class="columns is-vcentered">
        <!-- Image desktop -->
        <div class="column is-6 is-hidden-touch">
          <figure class="image">
            <img src="@/assets/imgs/landing-2.png">
          </figure>
        </div>

        <div class="column is-1 is-hidden-touch"></div>

        <!-- Text -->
        <div class="column is-5 has-text-centered-touch">
          <span class="icon has-background-white has-text-primary has-shadow is-rounded is-96x96">
            <c-icon icon="users" />
          </span>

          <br>
          <br>

          <h3 class="title is-3">
            interaja com investidores e fique por dentro
          </h3>

          <p class="is-size-5 has-text-grey-dark">
            Saiba o que seus amigos estão investindo e
            intereja na sua posição de suas carteira: comente,
            curta ou indique "bear" ou "bull".
          </p>
        </div>

        <div class="column is-1 is-hidden-desktop"></div>

        <!-- Image mobile -->
        <div class="column is-6 is-hidden-desktop">
          <figure class="image">
            <img src="@/assets/imgs/landing-2.png">
          </figure>
        </div>
      </div>
    </div>
  </section>

  <section class="section">
    <div class="container">
      <div class="columns is-vcentered">
        <!-- Text -->
        <div class="column is-5 has-text-centered-touch">
          <span class="icon has-background-white has-text-primary has-shadow is-rounded is-96x96">
            <c-icon icon="line-up" />
          </span>

          <br>
          <br>

          <h3 class="title is-3">
            invista melhor o seu dinheiro
          </h3>

          <p class="is-size-5 has-text-grey-dark">
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

  <section class="section">
    <div class="container">
      <div class="columns is-vcentered">
        <!-- Image desktop -->
        <div class="column is-6 is-hidden-touch">
          <figure class="image">
            <img src="@/assets/imgs/landing-4.png">
          </figure>
        </div>

        <div class="column is-1 is-hidden-touch"></div>

        <!-- Text -->
        <div class="column is-5 has-text-centered-touch">
          <span class="icon has-background-white has-text-primary has-shadow is-rounded is-96x96">
            <c-icon icon="lock" />
          </span>

          <br>
          <br>

          <h3 class="title is-3">
            segurança com os seus dados
          </h3>

          <p class="is-size-5 has-text-grey-dark">
            Seus dados estão protegidos conosco, apenas
            você pode ver o valor da sua carteira. Seus
            amigos só veem a composição em %.
          </p>
        </div>

        <div class="column is-1 is-hidden-desktop"></div>

        <!-- Image mobile -->
        <div class="column is-6 is-hidden-desktop">
          <figure class="image">
            <img src="@/assets/imgs/landing-4.png">
          </figure>
        </div>
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
      <br>

      <h3 class="title is-3">
        os melhores investidores estão aqui.
        <br>
        e você?
      </h3>

      <br>

      <button class="button is-white is-large" @click="login">
        <span class="has-text-weight-bold is-size-6 px-6">
          quero fazer parte!
        </span>
      </button>
    </div>
  </section>
</div>

<Footer />
<NavbarBottom/>
</template>

<script>
import CIcon from '@/ui/CIcon'
import Footer from '@/comps/Footer'
import Navbar from '@/comps/navbar/Navbar'
import NavbarBottom from '@/comps/navbar/NavbarBottom'

import { LOGIN } from '@/store/type.actions'

export default {
  name: 'Landing',

  components: {
    CIcon,
    Footer,
    Navbar,
    NavbarBottom
  },

  methods: {
    login () {
      this.$store.dispatch(LOGIN, { origin: '/feed' })
    }
  }
}
</script>
<style lang="scss" scoped>
.has-background-custom {
  background: linear-gradient(to top, $primary 0%, $primary 70%, $light 70%, $light 100%);

  @include until($tablet) {
    background: linear-gradient(to top, $primary 0%, $primary 80%, $light 80%, $light 100%);
  }
}

.is-96x96 {
  height: 96px;
  width: 96px;
}

.icon.is-96x96 {
  background-color: #1ABE77;
}

.is-rounded {
  border-radius: 9999px;
}

.has-shadow {
  box-shadow: 0px 0px 8px $grey-lighter;
}
</style>
