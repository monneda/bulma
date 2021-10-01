<template>
<Navbar class="has-shadow" />
<br>
<div class="columns is-centered mx-0">
  <div class="column is-three-quarters">
    <PortfolioBanner class="box" />

    <div class="box">
      <div class="tabs is-toggle is-fullwidth">
        <ul>
          <li class="is-active">
            <a> Ativos </a>
          </li>
          <li>
            <a> Composição </a>
          </li>
          <li>
            <a> Histórico </a>
          </li>
        </ul>
      </div>

      <portfolio-inputs @mode="e => mode = e" />

      <br>

      <portfolio-tiles v-if="mode === 'tiles'" :assets="wallet.assets" />
      <portfolio-table v-if="mode === 'table'" :assets="wallet.assets" />
    </div>
  </div>
</div>
</template>

<script>
import client from '@/commons/client.api'

import Navbar from '@/comps/navbar/Navbar'
import PortfolioTiles from '@/comps/portfolio/PortfolioTiles'
import PortfolioTable from '@/comps/portfolio/PortfolioTable'
import PortfolioInputs from '@/comps/portfolio/PortfolioInputs'
import PortfolioBanner from '@/comps/portfolio/PortfolioBanner'

export default {
  name: 'Portfolio',

  components: {
    Navbar,
    PortfolioTiles,
    PortfolioTable,
    PortfolioInputs,
    PortfolioBanner
  },

  props: {
    id: {
      type: String,
      required: true
    }
  },

  data: () => ({
    days: 7,
    mode: 'tiles',
    wallet: {}
  }),

  methods: {
    async fetchWallet () {
      this.wallet = await client.wallets.byId(this.id, this.days)
    }
  },

  watch: {
    days () {
      this.fetchWallet()
    }
  },

  async created () {
    this.fetchWallet()
  }
}
</script>
