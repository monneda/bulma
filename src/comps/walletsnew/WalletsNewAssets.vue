<template>
<!-- Input -->
<div class="column is-two-fifths">
  <AssetForm class="box" @submit="add" />
</div>

<!-- Added assets -->
<div class="column is-three-fifths" v-bind="$attrs">
  <h4 class="title is-4 mb-2 p-3"> Seus ativos </h4>

  <template v-for="a of assets" :key="a.ticker">
    <Step2AssetRow :asset="a" class="box" @remove="$emit('remove', $event)" />
  </template>
</div>
</template>

<script>
import client from '@/commons/client.api'

import AssetForm from '@/comps/forms/AssetForm'
import Step2AssetRow from './Step2AssetRow'

export default {
  name: 'WalletsNewStep2',

  components: {
    AssetForm,
    Step2AssetRow
  },

  props: {
    assets: { type: Array, default: () => [] }
  },

  methods: {
    async add ({ ticker, amount }) {
      // asset exist?
      let asset
      try {
        asset = await client.assets.fetchAsset(ticker)
      } catch (e) {
        console.error(e)
        return
      }

      // amount exist?
      if (amount <= 0) {
        return
      }
      asset.amount = amount

      this.$emit('add', asset)
    }
  }
}
</script>
