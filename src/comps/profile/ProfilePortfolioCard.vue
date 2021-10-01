<template>
<article class="has-text-white-bis" :class="classes">
  <div class="is-flex is-flex-direction-column is-align-items-center p-3">
    <span class="icon is-large c-circle">
      <font-awesome-icon icon="wallet" />
    </span>

    <br>

    <h6 class="title is-6 has-text-white-bis"> {{ wallet.name }} </h6>
    <p class="subtitle is-size-7 has-text-white-bis">
      Criada em {{ new Date(wallet.createdAt).toLocaleDateString('pt-BR') }}
    </p>
  </div>

  <div class="c-footer-background p-3">
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
  </div>
</article>
</template>

<script>
export default {
  name: 'ProfilePortfolioCard',

  props: {
    wallet: {
      type: Object,
      required: true
    }
  },

  computed: {
    classes () {
      return {
        'c-header-background-green': this.wallet.gain > 0,
        'c-header-background-red': this.wallet.gain <= 0
      }
    }
  }
}
</script>

<style lang="scss" scoped>
article {
  border-radius: $radius;
}

.c-circle {
  border-radius: 99999px;
  border-color: $white-bis;
  border-width: 0.15rem;
  border-style: solid;
}

.c-footer-background {
  background-color: rgba(255, 255, 255, 0.25);
}

.c-header-background-green {
  background: linear-gradient(138.32deg, #35E599 -6.06%, #009887 118.07%);
}

.c-header-background-red {
  background: linear-gradient(135.66deg, #E87575 -6.09%, #CE1B1B 102.06%);
}
</style>
