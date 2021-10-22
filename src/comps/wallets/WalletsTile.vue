<template>
<article class="has-text-white-bis" :class="background">
  <div class="is-flex is-flex-direction-column is-align-items-center p-3">
    <!-- Icon -->
    <span class="icon is-large is-circled">
      <font-awesome-icon icon="wallet" />
    </span>

    <br>

    <!-- Title -->
    <h6 class="title is-6 has-text-white-bis">
      {{ wallet.name }}
    </h6>

    <!-- Date -->
    <p class="subtitle is-size-7 has-text-white-bis">
      Criada em {{ new Date(wallet.createdAt).toLocaleDateString('pt-BR') }}
    </p>
  </div>

  <div class="is-flex is-flex-direction-column is-overlayed-white p-3">
    <div class="level is-mobile">
      <!-- Performance -->
      <div class="level-item">
        <span class="icon-text">
          <span class="icon">
            <font-awesome-icon :icon="['far', 'arrow-alt-circle-up']" size="lg" />
          </span>
          <span class="my-auto is-size-7" style="line-height: 100%">
            <p class="has-text-weight-bold"> Variação: </p>
            <p> {{ wallet.gain.toFixed(2) }}% </p>
          </span>
        </span>
      </div>

      <!-- Assets -->
      <div class="level-item">
        <span class="icon-text">
          <span class="icon">
            <font-awesome-icon icon="chart-bar" size="lg" />
          </span>
          <span class="my-auto is-size-7" style="line-height: 100%">
            <p class="has-text-weight-bold"> Ativos: </p>
            <p> {{ wallet.assets.length }} </p>
          </span>
        </span>
      </div>
    </div>

    <!-- Edit -->
    <router-link :to="`/c/${wallet.id}/edit`" class="has-text-centered">
      <button class="button is-small is-light is-overlayed-white" style="width: 100%">
        <span class="has-text-white-bis has-text-weight-bold">
          Editar informações
        </span>
      </button>
    </router-link>

  </div>
</article>
</template>

<script>
export default {
  name: 'WalletsTile',

  props: {
    wallet: {
      type: Object,
      required: true
    }
  },

  computed: {
    background () {
      return {
        'has-gradient-green-background': this.wallet.gain > 0,
        'has-gradient-red-background': this.wallet.gain <= 0
      }
    }
  }
}
</script>

<style lang="scss" scoped>
article {
  border-radius: 1rem;
}

.is-circled {
  border-radius: 99999px;
  border-color: $white-bis;
  border-width: 0.15rem;
  border-style: solid;
}

.is-overlayed-white {
  background-color: rgba(255, 255, 255, 0.25);
}

.has-gradient-green-background {
  background: linear-gradient(138.32deg, #35E599 -6.06%, #009887 118.07%);
}

.has-gradient-red-background {
  background: linear-gradient(135.66deg, #E87575 -6.09%, #CE1B1B 102.06%);
}
</style>
