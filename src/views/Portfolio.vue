<template>
<Navbar class="has-shadow" />

<br>

<div class="columns is-centered mx-0">
  <div class="column is-three-quarters">
    <PortfolioBanner class="box" />

    <div class="box">
      <div class="tabs is-toggle is-fullwidth">
        <ul>
          <li class="is-active"><a> Ativos </a></li>
          <li><a> Composição </a></li>
          <li><a> Histórico </a></li>
        </ul>
      </div>

      <PortfolioInputs @mode="e => mode = e" />

      <br>

      <PortfolioTileList v-if="mode === 'tiles'" :assets="wallet.assets" />
      <PortfolioTable v-if="mode === 'table'" :assets="wallet.assets" />
    </div>
  </div>
</div>
</template>

<script>
import client from '@/commons/client.api'

import Navbar from '@/comps/navbar/Navbar'
import PortfolioTileList from '@/comps/portfolio/PortfolioTileList'
import PortfolioTable from '@/comps/portfolio/PortfolioTable'
import PortfolioInputs from '@/comps/portfolio/PortfolioInputs'
import PortfolioBanner from '@/comps/portfolio/PortfolioBanner'

export default {
  name: 'Portfolio',

  components: {
    Navbar,
    PortfolioTileList,
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
