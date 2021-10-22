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
          @input="ticker = $event.target.value.toUpperCase()"
          @keyup.enter="add"
        >
      </div>
    </div>

    <!-- Amount -->
    <div class="field">
      <div class="control">
        <label class="label"> Quantidade </label>
        <input
          type="number"
          min="1"
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
  <Step2AssetRow v-for="a of assets" :key="a.ticker" :asset="a" class="box" @remove="remove" />
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

  props: {
    assets: {
      type: Object
    }
  },

  data: () => ({
    ticker: '',
    amount: null
  }),

  methods: {
    async add () {
      // asset exist?
      let asset
      try {
        asset = await client.assets.fetchAsset(this.ticker)
      } catch (e) {
        return
      }
      // amount exist?
      if (this.amount <= 0) {
        return
      }
      asset.amount = this.amount

      // Replace if already in the list
      const index = this.assets.findIndex(i => i.ticker === this.ticker)
      if (index === -1) {
        this.$emit('addAsset', asset)
      } else {
        this.$emit('replaceAsset', { index, asset })
      }

      this.ticker = ''
      this.amount = null
    },
    async remove ({ ticker }) {
      this.$emit('removeAsset', ticker)
    }
  }
}
</script>
