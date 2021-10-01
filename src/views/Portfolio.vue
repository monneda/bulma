<template>
<Navbar class="has-shadow" />
<br>
<div class="columns is-centered mx-0">
  <div class="column is-three-quarters">
    <PortfolioBanner class="box" />
    <PortfolioInputs class="box" @mode="updateMode" />
    <PortfolioTiles v-if="isTiles" :assets="[1, 2, 3, 4, 5, 6]" />
    <PortfolioTable v-if="isTable" class="box" :assets="[1, 2, 3, 4, 5, 6]" />
  </div>
</div>
</template>

<script>
import Navbar from '@/comps/navbar/Navbar'
import PortfolioTiles from '@/comps/portfolio/PortfolioTiles'
import PortfolioTable from '@/comps/portfolio/PortfolioTable'
import PortfolioInputs from '@/comps/portfolio/PortfolioInputs'
import PortfolioBanner from '@/comps/portfolio/PortfolioBanner'

export default {
  name: 'Portfolio',

  components: {
    Navbar,
    PortfolioTiles,
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
    mode: 'tiles'
  }),

  computed: {
    isTable () {
      return this.mode === 'table'
    },
    isTiles () {
      return this.mode === 'tiles'
    }
  },

  methods: {
    updateMode (e) {
      this.mode = e
    }
  }
}
</script>
