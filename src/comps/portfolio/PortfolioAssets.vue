<template>
<article>
  <!-- Inputs -->
<!--  <div class="level">-->
<!--    <div class="level-left">-->
<!--      <div class="level-item">-->
        <div class="field has-addons is-hidden-touch">
          <!-- Block -->
          <div class="control">
            <button
              class="button"
              :class="{'is-active': component === 'AssetTiles'}"
              @click="component = 'AssetTiles'"
            >
              Blocos
            </button>
          </div>

          <!-- List -->
          <div class="control">
            <button
              class="button"
              :class="{'is-active': component === 'AssetTable'}"
              @click="component = 'AssetTable'"
            >
              Lista
            </button>
          </div>
        </div>
<!--      </div>-->
<!--    </div>-->

<!--    <div class="level-right">
      &lt;!&ndash; Sectors &ndash;&gt;
      <div class="level-item">
        <div class="select is-primary">
          <select v-model="sector">
            <option>Setor 1</option>
            <option>Setor 2</option>
            <option>Setor 3</option>
          </select>
        </div>
      </div>

      &lt;!&ndash; Segments &ndash;&gt;
      <div class="level-item">
        <div class="select is-primary">
          <select v-model="segment">
            <option>Segmento 1</option>
            <option>Segmento 2</option>
            <option>Segmento 3</option>
          </select>
        </div>
      </div>

      &lt;!&ndash; Type &ndash;&gt;
      <div class="level-item">
        <div class="select is-primary">
          <select v-model="type">
            <option>Tipo 1</option>
            <option>Tipo 2</option>
            <option>Tipo 3</option>
          </select>
        </div>
      </div>
    </div>
  </div> -->

  <AssetTiles v-if="component === 'AssetTiles'" :sortedAssets="sortedAssets"/>
  <AssetTable v-if="component === 'AssetTable'"
              @toggle="toggle"
              :sortedAssets="sortedAssets"/>
</article>
</template>

<script>
import AssetTable from '@/comps/portfolio/AssetTable'
import AssetTiles from '@/comps/portfolio/AssetTiles'

export default {
  name: 'PortfolioAssets',

  components: {
    AssetTiles,
    AssetTable
  },

  props: {
    wallet: {
      type: Object,
      default: () => ({})
    }
  },

  data: () => ({
    component: 'AssetTiles',
    sector: 'Setor 1',
    segment: 'Segmento 1',
    type: 'Tipo 1',

    // Sorting
    sort: 1,
    sortedBy: 'name'
  }),

  computed: {
    sortedAssets () {
      const assets = [...this.wallet.assets].sort((a, b) => {
        switch (this.sortedBy) {
          case 'name':
            return (a.ticker.localeCompare(b.ticker)) * this.sort
          case 'weight':
            return (a.weight - b.weight) * this.sort
          case 'price':
            return (a.price - b.price) * this.sort
          case 'gain':
            return (a.gain - b.gain) * this.sort
          default:
            return 1
        }
      })
      return { assets: assets, sort: this.sort, sortedBy: this.sortedBy }
    }
  },

  methods: {
    toggle (key) {
      if (this.sortedBy === key) {
        this.sort = this.sort * -1
      } else {
        this.sortedBy = key
      }
    }
  }
}
</script>
