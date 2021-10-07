<template>
<Navbar class="has-shadow" />

<br>

<div class="container">
  <div class="columns is-centered mx-0">
    <div class="column is-three-fifths">
      <!-- Graph -->
      <article class="box">
        <!-- Banner -->
        <div class="level is-mobile">
          <div class="level-left">
            <div class="level-item">
              <span class="icon is-large">
                <IconTicker :ticker="ticker" />
              </span>
            </div>
            <div class="level-item">
              <span class="is-flex">
                {{ asset.name }}
                <br>
                {{ asset.price }}
              </span>
            </div>
          </div>
          <div class="level-right"></div>
        </div>

        <div class="tabs is-fullwidth">
          <ul>
            <li><a @click="fetchData(7)">1 semana</a></li>
            <li><a @click="fetchData(30)">1 mês</a></li>
            <li><a @click="fetchData(90)">3 meses</a></li>
            <li><a @click="fetchData(360)">1 ano</a></li>
          </ul>
        </div>

        <AssetHistoryChart :labels="labels" :data="data" />
      </article>
    </div>
    <div class="column is-two-fifths">Right</div>
  </div>
</div>
</template>

<script>
import client from '@/commons/client.api'

import Navbar from '@/comps/navbar/Navbar'
import IconTicker from '@/comps/utils/IconTicker'

import AssetHistoryChart from '@/comps/asset/AssetHistoryChart'

export default {
  name: 'Asset',

  components: {
    Navbar,
    IconTicker,
    AssetHistoryChart
  },

  props: {
    ticker: {
      type: String,
      required: true
    }
  },

  data: () => ({
    asset: {},
    period: 7,
    history: {
      prices: []
    }
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
