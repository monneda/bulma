<template>
<!--  NAVBAR -->
<nav class="navbar is-fixed-top custom-navbar">
  <div class="navbar-brand">
    <a class="navbar-item ml-4">
      <img src="@/assets/logo-horizontal-fundo-claro.png">
    </a>
    <a class="navbar-burger" ref="burger" @click="toggle">
      <span class="is-rounded-15" style="width: 22px; height: 0.16rem;"></span>
      <span class="is-rounded-15" style="width: 22px; height: 0.16rem;"></span>
      <span class="is-rounded-15" style="width: 22px; height: 0.16rem;"></span>
    </a>
  </div>
  <div class="navbar-menu" ref="menu">
    <div class="navbar-end">
      <a class="navbar-item font-title is-invisible-desktop" style="nav link">
        Home
      </a>
      <a class="navbar-item is-invisible-desktop">
        Política de Privacidade
      </a>
      <a class="navbar-item is-invisible-desktop">
        Termos de Uso
      </a>
      <a class="navbar-item is-invisible-desktop">
        Contato
      </a>
      <div class="navbar-item">
        <button class="button navbar-item navbar-button is-primary is-outlined font-button">
          login
        </button>
      </div>
      <div class="navbar-item">
        <button class="button navbar-item navbar-button is-primary font-button"> criar conta </button>
      </div>
    </div>
  </div>
</nav>
<!-- CONTENT -->
<div class="container is-fluid has-background-light px-0">
  <section class="section is-medium">
    <div class="columns">
      <div class="column is-5 mt-6">
        <h1 class="h1 has-text-black has-text-centered-mobile is-h3-mobile"> o seu network de </h1>
        <h1 class="h1 has-text-weight-bold has-text-black has-text-centered-mobile is-h3-mobile"> valor está aqui </h1>
        <br>

        <p class="has-text-primary font-super-title has-text-grey-darker has-text-centered-mobile is-title-mobile">
          A Cartera é uma rede social para investidores e futuros investidores.
          Conecte-se ao network que realmente tem valor para seus investimentos.
        </p>

        <br>
        <br>
        <br>

        <div class="has-text-centered-mobile">
          <button
            class="button is-primary font-title-bold has-text-black-bis"
            style="border-radius: 15px"
          >
            <span class="px-5">quero fazer parte!</span>
          </button>
        </div>
      </div>
      <div class="column is-1"></div>
      <div class="column">
        <figure class="image">
          <img src="https://placekitten.com/575/350">
        </figure>
      </div>
    </div>
  </section>

  <section class="section is-medium has-background-primary">
    <p class="is-size-1 has-text-grey-darker has-text-weight-bold has-text-centered">
      suas oportunidades sobre
      <br>
      investimentos em um único lugar.
    </p>

    <br>
    <br>
    <br>

    <div class="container">
      <div class="level">
        <div class="level-item">
          <div class="has-text-centered">
            <p class="is-size-1 has-text-grey-darker"> carteiras </p>
            <p class="is-size-4 has-text-grey-dark"> dos seus amigos </p>
          </div>
        </div>

        <div class="level-item is-size-1 has-text-grey-darker"> + </div>

        <div class="level-item">
          <div class="has-text-centered">
            <p class="is-size-1 has-text-grey-darker"> notícias </p>
            <p class="is-size-4 has-text-grey-dark"> sobre a bolsa </p>
          </div>
        </div>

        <div class="level-item is-size-1 has-text-grey-darker"> + </div>

        <div class="level-item">
          <div class="has-text-centered">
            <p class="is-size-1 has-text-grey-darker"> ativos </p>
            <p class="is-size-4 has-text-grey-dark"> saiba o que está em alta </p>
          </div>
        </div>

        <div class="level-item is-size-1 has-text-grey-darker"> + </div>

        <div class="level-item">
          <div class="has-text-centered">
            <p class="is-size-1 has-text-grey-darker"> descubra </p>
            <p class="is-size-4 has-text-grey-dark"> o que está em alta </p>
          </div>
        </div>
      </div>
    </div>

    <br>
    <br>
    <br>

    <p class="has-text-centered">
      <button class="button is-white is-large">
        quero fazer parte!
      </button>
    </p>
  </section>

  <section class="section is-medium has-background-light">
    <div class="container">
      <div class="columns">
        <div class="column is-5">
          <figure class="image">
            <img src="https://placekitten.com/550/350">
          </figure>
        </div>
        <div class="column is-2"></div>
        <div class="column is-5">
          <p class="is-size-2 has-text-grey-darker has-text-weight-bold">
            interaja com investidores e fique por dentro.
          </p>
          <br>
          <p class="is-size-5 has-text-grey">
            Saiba o que seus amigos estão investindo e intereja na sua posição
            de suas carteira: comente, curta ou indique "bear" ou "bull".
          </p>
        </div>
      </div>
    </div>
  </section>

  <section class="section is-medium has-background-light">
    <div class="container">
      <div class="columns">
        <div class="column is-5">
          <p class="is-size-2 has-text-grey-darker has-text-weight-bold">
            invista melhor seu dinheiro
          </p>
          <br>
          <p class="is-size-5 has-text-grey">
            Veja as carteiras mais rentáveis do mês e as notícias impactantes
            do mercado, realocando assim seu dinheiro para as melhores posições.
          </p>
        </div>
        <div class="column is-2"></div>
        <div class="column is-5">
          <figure class="image">
            <img src="https://placekitten.com/550/350">
          </figure>
        </div>
      </div>
    </div>
  </section>

  <section class="section is-medium has-background-light">
    <div class="container">
      <div class="columns">
        <div class="column is-5">
          <figure class="image">
            <img src="https://placekitten.com/550/350">
          </figure>
        </div>
        <div class="column is-2"></div>
        <div class="column is-5">
          <p class="is-size-2 has-text-grey-darker has-text-weight-bold">
            segurança com os seus dados.
          </p>
          <br>
          <p class="is-size-5 has-text-grey">
            Seus dados estão protegidos conosco, apenas você pode ver o valor
            da sua carteira. Seus amigos só veem a composição em %.
          </p>
        </div>
      </div>
    </div>
  </section>
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

<style scoped>
.custom-navbar {
  /* Off White */
  background: #FFFFFF;
  /* Feed */
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.1);
}
.homepage-buttons {
  /* criar conta e entrar*/
  height: 40px;
  /* Botões */
  font-weight: bold;
  font-size: 14px;
  line-height: 100%;
}
.navbar-button {
  padding: 0px 30px;
}

</style>
