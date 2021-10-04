<template>
<Navbar class="has-shadow" />

<br>

<div class="columns is-centered mx-0">
  <div class="column is-three-quarters">

    <PortfolioBanner :wallet="wallet" :user="user" @period="period" class="box" />

    <div class="box">
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
    mode: 'tiles',
    wallet: {},
    user: {}
  }),

  methods: {
    async period (days) {
      this.wallet = await client.wallets.byId(this.id, days)
    }
  },

  async created () {
    this.wallet = await client.wallets.byId(this.id, 7)
    this.user = await client.users.byUsername(this.wallet.username)
  }
}
</script>
