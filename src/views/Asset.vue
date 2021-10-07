<template>
<Navbar class="has-shadow" />

<br>

<div class="container">
  <div class="columns is-centered mx-0">
    <div class="column is-three-fifths">
      <article class="box">
        <AssetBanner v-if="asset" :asset="asset" />
        <br>
        <AssetTabs class="is-fullwidth is-toggle" @update="fetchData($event)" />
        <AssetHistoryChart :labels="labels" :data="data" />
      </article>
    </div>

    <!-- TODO -->
    <!-- <div class="column is-two-fifths">Right</div> -->
  </div>
</div>
</template>

<script>
import client from '@/commons/client.api'

import Navbar from '@/comps/navbar/Navbar'

import AssetTabs from '@/comps/asset/AssetTabs'
import AssetBanner from '@/comps/asset/AssetBanner'
import AssetHistoryChart from '@/comps/asset/AssetHistoryChart'

export default {
  name: 'Asset',

  components: {
    Navbar,
    AssetTabs,
    AssetBanner,
    AssetHistoryChart
  },

  props: {
    ticker: {
      type: String,
      required: true
    }
  },

  data: () => ({
    period: 7,
    asset: null,
    history: { prices: [] }
  }),

  computed: {
    data () {
      return this.history.prices.map(i => i.price)
    },
    labels () {
      return this.history.prices
        .map(i => new Date(i.date))
        .map(i => i.toLocaleDateString('pt-BR'))
    }
  },

  methods: {
    async fetchData (days) {
      this.asset = await client.assets.fetchAsset(this.ticker, days)
      this.history = await client.assets.fetchHistory(this.ticker, days)
    }
  },

  async created () {
    await this.fetchData(7)
  }
}
</script>
