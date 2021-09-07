<template>
<Navbar class="has-shadow" />
<div class="columns mx-0 my-1">
  <!-- Left -->
  <div class="column is-2 is-hidden-mobile"></div>

  <!-- Center -->
  <div class="column is-8">

    <PortfolioBanner class="box" />

    <!-- Buttons -->
    <article class="box">
      <div class="level">
        <div class="level-left">
          <div class="level-item">
            <div class="field has-addons">
              <p class="control">
                <button class="button is-active" ref="blockButton" @click="enableBlockMode">
                  Blocos
                </button>
              </p>
              <p class="control">
                <button class="button" ref="tableButton" @click="enableTableMode">
                  Lista
                </button>
              </p>
            </div>
          </div>
        </div>

        <div class="level-right">
          <div class="level-item">
            <div class="select is-primary">
              <select>
                <option>Setor 1</option>
                <option>Setor 2</option>
                <option>Setor 3</option>
              </select>
            </div>
          </div>

          <div class="level-item">
            <div class="select is-primary">
              <select>
                <option>Segmento 1</option>
                <option>Segmento 2</option>
                <option>Segmento 3</option>
              </select>
            </div>
          </div>

          <div class="level-item">
            <div class="select is-primary">
              <select>
                <option>Tipo 1</option>
                <option>Tipo 2</option>
                <option>Tipo 3</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </article>

    <PortfolioTiles v-if="blockMode" :assets="[1, 2, 3, 4, 5, 6]" />
    <PortfolioTable v-else class="box" :assets="[1, 2, 3, 4, 5, 6]" />
  </div>

  <!-- Right -->
  <div class="column is-2 is-hidden-mobile"></div>
</div>
</template>

<script>
import Navbar from '@/comps/navbar/Navbar'
import PortfolioTiles from '@/comps/portfolio/PortfolioTiles'
import PortfolioTable from '@/comps/portfolio/PortfolioTable'
import PortfolioBanner from '@/comps/portfolio/PortfolioBanner'

export default {
  name: 'Portfolio',

  components: {
    Navbar,
    PortfolioTiles,
    PortfolioTable,
    PortfolioBanner
  },

  data: () => ({
    blockMode: true
  }),

  methods: {
    enableBlockMode () {
      this.blockMode = true
    },
    enableTableMode () {
      this.blockMode = false
    }
  }
}
</script>
