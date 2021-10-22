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
        <ais-instant-search :search-client="client" index-name="assets">
          <!-- Configuration -->
          <ais-configure :hits-per-page.camel="5" />
          <!-- Input -->
          <ais-search-box>
            <template v-slot="{ refine }">
              <input
                type="text"
                placeholder="Procure por código ou nome..."
                class="input has-background-white-ter is-size-6"
                v-model="ticker"
                @input="refine($event.target.value); clicked = false; ticker = ticker.toUpperCase()"
                @keyup.enter="add"
              >
            </template>
          </ais-search-box>
          <div class="dropdown" :class="{ 'is-active': ticker && !clicked }" style="position: absolute">
            <div class="dropdown-menu">
              <div class="dropdown-content">
                <ais-hits>
                  <template v-slot="{ items }">
                    <template v-for="item of items" :key="item.objectID">
                      <div class="dropdown-item" @click="dropdownItemClicked(item.codneg)" style="width: 15rem">
                        <div class="is-flex">
                          <icon-ticker :ticker="item.codneg"  />
                          <div class="pl-3 is-flex is-flex-direction-column is-justify-content-center">
                            <strong> {{ item.codneg }} </strong>
                            <span> {{ item.nomres }} </span>
                          </div>
                        </div>
                      </div>
                    </template>
                  </template>
                </ais-hits>
              </div>
            </div>
          </div>
        </ais-instant-search>
      </div>
    </div>
    <!-- Amount -->
    <div class="field">
      <div class="control">
        <label class="label"> Quantidade </label>
        <input
          type="number"
          min="1"
          placeholder="Quantas unidades você tem?"
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
import meili from '@/commons/meili.api'

import Step2AssetRow from './Step2AssetRow'
import IconTicker from '@/comps/utils/IconTicker'

export default {
  name: 'WalletsNewStep2',

  components: {
    Step2AssetRow,
    IconTicker
  },

  props: {
    assets: {
      type: Object
    }
  },

  data: () => ({
    ticker: '',
    amount: null,
    client: meili(),
    clicked: false
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
    },
    dropdownItemClicked (codneg) {
      this.ticker = codneg
      this.clicked = true
    }
  }
}
</script>
