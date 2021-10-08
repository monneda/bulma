<template>
<div class="column is-half">
  <div class="is-flex is-flex-direction-column is-align-items-center">
    <font-awesome-icon icon="wallet" size="10x" class="has-text-grey" />

    <br>
    <br>

    <h2 class="title is-2 is-size-4-mobile has-text-centered">
      Sua cartera
      <span class="has-text-primary">
        {{ wallet.name }}
      </span>
      foi criada com sucesso!
    </h2>

    <br>

    <!-- TODO -->
    <!-- <c-button class="is-primary"> Compartilhar </c-button> -->
    <!-- <br> -->

    <router-link to="/wallets">
      <c-button class="is-light">
        Voltar para Carteras
      </c-button>
    </router-link>
  </div>
</div>
</template>

<script>
export default {
  name: 'WalletsNewCompleted',

  props: {
    wallet: {
      type: Object,
      required: true
    }
  }
}
</script>
