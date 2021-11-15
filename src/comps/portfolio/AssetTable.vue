<template>
<article>
  <table class="table is-fullwidth is-hoverable is-striped">
    <thead>
    <th v-for="key of Object.keys(map)" :key="key">
      <div
        class="is-flex is-justify-content-space-between is-align-items-center is-clickable"
        @click="toggle(key)"
      >
        <!-- Column title -->
        <span>
            {{ map[key].charAt(0).toUpperCase() + map[key].substr(1).toLowerCase() }}
        </span>

        <!-- Sort icon -->
        <span class="icon" :class="{'has-text-primary': key === this.sortedAssets.sortedBy}">
            <font-awesome-icon :icon="icon(key)" />
        </span>
      </div>
    </th>
    </thead>

    <tbody>
      <asset-row v-for="item of this.sortedAssets.assets" :key="item.ticker" :asset="item" />
    </tbody>
  </table>
</article>
</template>

<script>
import AssetRow from '@/comps/portfolio/AssetRow'

export default {
  name: 'PortfolioTable',

  components: {
    AssetRow
  },

  props: {
    sortedAssets: { type: Object, required: true }
  },

  data: () => ({
    map: { name: 'Nome', weight: 'Peso', price: 'Preço', gain: 'Variação' }
  }),

  methods: {
    toggle (key) {
      this.$emit('toggle', key)
    },
    icon (key) {
      return this.sortedAssets.sortedBy === key && this.sortedAssets.sort === 1 ? 'angle-down' : 'angle-up'
    }
  }
}
</script>

<style scoped>
/*
  Makes the table horizontally scrollable
  when screen is too small, like in mobile
*/
article {
  overflow-y: hidden;
  overflow-x: auto;
}

/*
  Makes it big so text does not break inside
  cells
*/
table {
  min-width: 30rem;
}
</style>
