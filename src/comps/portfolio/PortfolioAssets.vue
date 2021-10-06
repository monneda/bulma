<template>
<article>
  <!-- Inputs -->
  <div class="level">
    <div class="level-left">
      <div class="level-item">
        <div class="field has-addons">
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
      </div>
    </div>

    <div class="level-right">
      <!-- Sectors -->
      <div class="level-item">
        <div class="select is-primary">
          <select v-model="sector">
            <option>Setor 1</option>
            <option>Setor 2</option>
            <option>Setor 3</option>
          </select>
        </div>
      </div>

      <!-- Segments -->
      <div class="level-item">
        <div class="select is-primary">
          <select v-model="segment">
            <option>Segmento 1</option>
            <option>Segmento 2</option>
            <option>Segmento 3</option>
          </select>
        </div>
      </div>

      <!-- Type -->
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
  </div>

  <AssetTiles v-if="component === 'AssetTiles'" :assets="wallet.assets" />
  <AssetTable v-if="component === 'AssetTable'" :assets="wallet.assets" />
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
    type: 'Tipo 1'
  })
}
</script>
