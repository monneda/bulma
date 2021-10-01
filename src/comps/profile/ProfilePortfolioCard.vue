<template>
<article class="has-text-white-bis" :class="classes">
  <div class="is-flex is-flex-direction-column is-align-items-center p-3">
    <span class="icon is-large c-circle">
      <font-awesome-icon icon="wallet" />
    </span>

    <br>

    <h6 class="title is-6 has-text-white-bis"> Minha cartera na clear </h6>
    <p class="subtitle is-size-7 has-text-white-bis"> Criada em 2021-09-01 </p>
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
            <p> 0.44% </p>
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
            <p> 25 </p>
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

  data: () => ({
    name: 'Minha carteira na Clear',
    gain: 12.5,
    createdAt: new Date(),
    assets: [1, 2, 3]
  }),

  computed: {
    classes () {
      return {
        'c-header-background-green': this.gain > 0,
        'c-header-background-red': this.gain <= 0
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
