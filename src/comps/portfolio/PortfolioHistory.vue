<template>
<article>
  <div class="history my-3 p-3" v-for="item of history" :key="item.id">
    <!-- Date -->
    <p class="p-1">
      <strong>
        {{ new Date(item.timestamp).toLocaleString('pt-BR') }}
      </strong>
    </p>

    <!-- Changes -->
    <p class="p-1" v-for="({ change, ticker }) of item.data.changes" :key="ticker">
      <span class="icon-text">
        <!-- Icon (mobile) -->
        <span class="icon is-medium is-hidden-desktop">
          <IconTicker :ticker="ticker" />
        </span>

        <!-- Icon (desktop) -->
        <span class="icon is-large is-hidden-touch">
          <IconTicker :ticker="ticker" />
        </span>

        <!-- Text -->
        <span class="my-auto ml-1 is-size-7-touch">
          <strong :class="COLORS[change]"> {{ TEXT[change] }} </strong>
          sua posição em
          <strong> {{ ticker }} </strong>
        </span>
      </span>
    </p>
  </div>
</article>
</template>

<script>
import client from '@/commons/client.api'

import IconTicker from '@/comps/utils/IconTicker'

const TEXT = {
  START: 'Iniciou',
  INC: 'Aumentou',
  DEC: 'Diminuiu',
  END: 'Encerrou'
}

const COLORS = {
  START: 'has-text-info',
  INC: 'has-text-primary-dark',
  DEC: 'has-text-warning-dark',
  END: 'has-text-danger'
}

export default {
  name: 'PortfolioHistory',

  components: {
    IconTicker
  },

  props: {
    wallet: {
      type: Object,
      default: () => ({})
    }
  },

  data: () => ({
    history: [],
    TEXT,
    COLORS
  }),

  async created () {
    this.history = await client.wallets.fetchHistory(this.wallet.id)
  }
}
</script>

<style lang="scss" scoped>
.history {
  border-color: $gray-5;
  border-style: solid;
  border-radius: $radius;
  border-width: 2px;
}
</style>
