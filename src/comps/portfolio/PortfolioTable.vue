<template>
<article>
  <table class="table is-fullwidth is-hoverable is-striped">
    <thead>
      <tr>
        <th> Nome     </th>
        <th> Peso     </th>
        <th> Preço    </th>
        <th> Variação </th>
      </tr>
    </thead>

    <tbody>
      <AssetRow v-for="(item, i) of assets" :key="i" />
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
    assets: {
      type: Array,
      default: () => []
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
