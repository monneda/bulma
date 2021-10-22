<template>
<article>
  <h4 class="title is-4 has-text-centered">
    Composição por ativo
  </h4>
  <AssetChart
    style="width: 100%; height: 30rem"
    :labels="assetLabels"
    :data="assetData"
  />

  <hr>

  <!-- <h4 class="title is-4 has-text-centered">
    Composição por setor
  </h4>
  <AssetChart
    style="width: 100%; height: 30rem"
    :labels="sectorLabels"
    :data="sectorData"
  /> -->
</article>
</template>

<script>
import AssetChart from './AssetChart'

import SECTORS from '@/assets/sectors.json'

export default {
  name: 'PortfolioComposition',

  components: {
    AssetChart
  },

  props: {
    wallet: {
      type: Object,
      default: () => ({})
    }
  },

  computed: {
    sectorLabels () {
      const sectors = this.wallet.assets
        .filter(i => i.ticker in SECTORS)
        .map(i => SECTORS[i.ticker].sector)

      const set = new Set()
      sectors.forEach(i => set.add(i))

      return Array.from(set).sort()
    },

    sectorData () {
      const table = {}
      const assets = this.wallet.assets.filter(i => i.ticker in SECTORS)

      for (const { ticker } of assets) {
        const { sector } = SECTORS[ticker]
        table[sector] = 0
      }

      for (const { ticker, weight } of assets) {
        const { sector } = SECTORS[ticker]
        table[sector] += weight
      }

      return this.sectorLabels.map(i => table[i].toFixed(2))
    },

    assetLabels () {
      return this.wallet.assets.map(i => i.ticker)
    },

    assetData () {
      return this.wallet.assets.map(i => i.weight.toFixed(2))
    }
  }
}
</script>
