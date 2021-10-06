<template>
<article>
  <AssetChart :labels="labels" :data="data" />
</article>
</template>

<script>
import AssetChart from './AssetChart'

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
    labels () {
      return ['a', 'b', 'c']
    },

    data () {
      return [1, 2, 3]
    }
  }
}
</script>
