<template>
<article>
  <div class="columns is-multiline">
    <div v-for="(item, i) of assets" :key="i" class="column is-6">
      <AssetCard class="box" />
    </div>
  </div>
</article>
</template>

<script>
import AssetCard from '@/comps/portfolio/AssetCard'

export default {
  name: 'PortfolioTile',

  components: {
    AssetCard
  },

  props: {
    assets: {
      type: Array,
      default: () => []
    }
  }
}
</script>
