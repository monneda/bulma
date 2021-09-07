<template>
<article>
  <table class="table is-fullwidth is-hoverable">
    <thead class="has-background-light">
      <tr>
        <th>Nome</th>
        <th>Peso</th>
        <th>Preço</th>
        <th>Variação</th>
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
