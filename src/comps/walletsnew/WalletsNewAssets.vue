<template>
<!-- Input -->
<div class="column is-two-fifths">
  <article class="box">
    <h4 class="title is-4 my-0"> Adicionar ativos </h4>

    <hr class="my-2">

    <!-- Ticker -->
    <div class="field">
      <div class="control">
        <label class="label"> Código </label>
        <input
          type="text"
          placeholder="Digite o código..."
          class="input has-background-white-ter is-size-6"
          v-model="ticker"
        >
      </div>
    </div>

    <!-- Amount -->
    <div class="field">
      <div class="control">
        <label class="label"> Quantidade </label>
        <input
          type="number"
          placeholder="Digite a quantidade..."
          class="input has-background-white-ter is-size-6"
          v-model="amount"
          @keyup.enter="add"
        >
      </div>
    </div>
  </article>
</div>

<!-- Added assets -->
<div class="column is-three-fifths" v-bind="$attrs">
  <h4 class="title is-4 mb-2 p-3"> Seus ativos </h4>
  <Step2AssetRow v-for="a of assets" :key="a.ticker" :asset="a" class="box" />
</div>
</template>

<script>
import client from '@/commons/client.api'

import Step2AssetRow from './Step2AssetRow'

export default {
  name: 'WalletsNewStep2',

  components: {
    Step2AssetRow
  },

  data: () => ({
    ticker: '',
    amount: null,
    assets: []
  }),

  methods: {
    async add () {
      const asset = await client.assets.fetchAsset(this.ticker)
      asset.amount = this.amount

      // Replace if already in the list
      const index = this.assets.findIndex(i => i.ticker === this.ticker)
      if (index === -1) {
        this.assets.push(asset)
      } else {
        this.assets[index] = asset
      }

      this.$emit('update:modelValue', this.assets)

      this.ticker = ''
      this.amount = null
    }
  }
}
</script>
