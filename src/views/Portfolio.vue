<template>
<Navbar class="has-shadow" />

<br>

<div class="columns is-centered mx-0">
  <div class="column is-three-quarters">

    <PortfolioBanner
        class="box"
        v-if="user && wallet"
        :wallet="wallet"
        :user="user"
        @period="period"
    />

    <div class="box">
      <!-- Tabs -->
      <div class="tabs is-fullwidth">
        <ul>
          <li><a @click="tab = 'PortfolioAssets'">Ativos</a></li>
          <li><a @click="tab = 'PortfolioComposition'">Composição</a></li>
          <li><a @click="tab = 'PortfolioHistory'">Histórico</a></li>
        </ul>
      </div>

      <component v-if="wallet" :is="tab" :wallet="wallet" />
    </div>
  </div>
</div>
</template>

<script>
import client from '@/commons/client.api'

import Navbar from '@/comps/navbar/Navbar'
import PortfolioBanner from '@/comps/portfolio/PortfolioBanner'
import PortfolioAssets from '@/comps/portfolio/PortfolioAssets'
import PortfolioHistory from '@/comps/portfolio/PortfolioHistory'
import PortfolioComposition from '@/comps/portfolio/PortfolioComposition'

export default {
  name: 'Portfolio',

  components: {
    Navbar,
    PortfolioBanner,
    PortfolioAssets,
    PortfolioHistory,
    PortfolioComposition
  },

  props: {
    id: {
      type: String,
      required: true
    }
  },

  data: () => ({
    user: null,
    wallet: null,
    tab: 'PortfolioAssets'
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
