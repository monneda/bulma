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

    <!-- Avoid glitching out when we do not have the sector of the ticker -->
    <div class="column is-two-fifths" v-if="asset && sector">
      <article class="box">
        <h4 class="title is-4"> Sobre a {{ asset.ticker }} </h4>

        <hr>

        <div class="columns">
          <!-- Sector -->
          <div class="column is-one-third">
            <h5 class="title is-5"> Setor </h5>
            <p class="subtitle is-7"> {{ sector.sector }} </p>
          </div>

          <!-- Subsector -->
          <div class="column is-one-third">
            <h5 class="title is-5"> Subsetor </h5>
            <p class="subtitle is-7"> {{ sector.subsector }} </p>
          </div>

          <!-- Segment -->
          <div class="column is-one-third">
            <h5 class="title is-5"> Segmento </h5>
            <p class="subtitle is-7"> {{ sector.segment }} </p>
          </div>
        </div>
      </article>
      <article class="box">
        <h4 class="title is-4"> Indicadores </h4>

        <hr>

        <div class="columns is-multiline">
          <!-- Subsector -->
          <div class="column is-half">
            <h5 class="title is-5"> P/L </h5>
            <p class="subtitle is-6"> {{ assetIndicators.pl }} </p>
          </div>

          <div class="column is-half">
            <h5 class="title is-5"> P/VP </h5>
            <p class="subtitle is-6"> {{ assetIndicators.pvp }} </p>
          </div>

          <div class="column is-half">
            <h5 class="title is-5"> ROE </h5>
            <p class="subtitle is-6"> {{ assetIndicators.roe }} </p>
          </div>

          <div class="column is-half">
            <h5 class="title is-5"> EV/Ebitda </h5>
            <p class="subtitle is-6"> {{ assetIndicators.evEbitda }} </p>
          </div>

          <div class="column is-half">
            <h5 class="title is-5"> Liquidez corrente </h5>
            <p class="subtitle is-6"> {{ assetIndicators.liquidezCorr }} </p>
          </div>

          <div class="column is-half">
            <h5 class="title is-5"> Margem líquida </h5>
            <p class="subtitle is-6"> {{ assetIndicators.margLiquida }} </p>
          </div>
        </div>
      </article>
    </div>
  </div>
</div>
<NavbarBottom/>
</template>

<script>
import SECTORS from '@/assets/sectors.json'

import client from '@/commons/client.api'

import Navbar from '@/comps/navbar/Navbar'
import NavbarBottom from '@/comps/navbar/NavbarBottom'

import AssetTabs from '@/comps/asset/AssetTabs'
import AssetBanner from '@/comps/asset/AssetBanner'
import AssetHistoryChart from '@/comps/asset/AssetHistoryChart'

export default {
  name: 'Asset',

  components: {
    Navbar,
    AssetTabs,
    AssetBanner,
    AssetHistoryChart,
    NavbarBottom
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
    },
    sector () {
      return SECTORS[this.asset.ticker]
    }
  },

  methods: {
    async fetchData (days) {
      this.asset = await client.assets.fetchAsset(this.ticker, days)
      this.assetIndicators = await client.assets.fetchAssetIndicators(this.ticker, days)
      this.history = await client.assets.fetchHistory(this.ticker, days)
    }
  },

  async created () {
    await this.fetchData(7)
  }
}
</script>
