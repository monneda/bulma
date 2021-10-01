<template>
<Navbar class="has-shadow" />
<br>
<div class="columns is-centered mx-0">
  <div class="column is-three-quarters">
    <PortfolioBanner class="box" />

    <div class="box">
      <div class="tabs is-toggle is-fullwidth">
        <ul>
          <li class="is-active">
            <a> Ativos </a>
          </li>
          <li>
            <a> Composição </a>
          </li>
          <li>
            <a> Histórico </a>
          </li>
        </ul>
      </div>

      <PortfolioInputs @mode="updateMode" />

      <br>

      <PortfolioTiles v-if="mode === 'tiles'" :assets="[1, 2, 3, 4, 5, 6]" />
      <PortfolioTable v-if="mode === 'table'" :assets="[1, 2, 3, 4, 5, 6]" />
    </div>
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

  methods: {
    updateMode (e) {
      this.mode = e
    }
  }
}
</script>
