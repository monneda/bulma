<template>
<article>
  <div class="columns is-multiline">
    <div v-for="(item, i) of assets" :key="i" class="column is-6">
      <AssetTile class="box" />
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
