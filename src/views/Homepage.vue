<template>
<!--  NAVBAR -->
<nav class="navbar is-fixed-top custom-navbar is-spaced">
  <div class="navbar-brand ml-6">
    <a class="navbar-item">
      <img src="@/assets/logo-horizontal-fundo-claro.png">
    </a>
  </div>
  <div class="navbar-menu mr-6">
    <div class="navbar-end ">
      <div class="navbar-item">
        <button class="button navbar-item is-primary is-outlined homepage-buttons" style="width: 100px;"> entrar </button>
      </div>
      <div class="navbar-item">
        <button class="button navbar-item is-primary homepage-buttons" style="width: 130px;"> criar conta</button>
      </div>
    </div>
  </div>
</nav>
<!-- CONTENT -->
<div class="container is-fluid has-background-light px-0">
  <section class="section is-medium">
    <div class="columns">
      <div class="column is-5 mt-6">
        <p class="is-size-1 has-text-weight-bold" style="line-height: 0.9">
          <span class="has-text-black-ter t1"> o seu network de</span>
          <span class="has-text-primary t1"> valor está aqui. </span>
        </p>

        <br>

        <p class="is-size-5 has-text-grey-darker">
          A Cartera é uma rede social para investidores e futuros investidores.
          Conecte-se ao network que realmente tem valor para seus investimentos.
        </p>

        <br>
        <br>
        <br>

        <button
          class="button is-primary has-text-grey-darker has-text-weight-bold is-large"
          style="font-size: 18px; width: 250px; height: 55px;">
          quero fazer parte!
        </button>
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
  name: 'Homepage'
}
</script>

<style scoped>
.custom-navbar {
  /* Off White */
  background: #F6F9FC;
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
.t1 {
  /* o seu network de valor está aqui. */
  /* Title */
  font-family: Tajawal;
  font-weight: bold;
  font-size: 4rem;

  /* Preto */
  color: #23252E;
}
</style>
