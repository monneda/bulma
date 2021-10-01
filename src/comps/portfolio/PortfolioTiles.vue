<template>
<article>
  <div class="columns is-flex-wrap-wrap">
    <div v-for="item of assets" :key="item.ticker" class="column is-6">
      <asset-tile class="box" :asset="item" />
    </div>
  </div>
</article>
</template>

<script>
import AssetTile from '@/comps/portfolio/AssetTile'

export default {
  name: 'PortfolioTiles',

  components: {
    AssetTile
  },

  props: {
    assets: {
      type: Array,
      default: () => []
    }
  }
}
</script>
