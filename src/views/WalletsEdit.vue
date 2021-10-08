<template>
<Navbar class="has-shadow" />

<!-- Bar -->
<div class="has-background-white">
  <div class="container p-3">
    <div class="is-flex is-justify-content-space-between">
      <h4 class="is-size-5 has-text-weight-bold"> Editar sua Cartera </h4>
      <c-button class="is-primary" right icon="arrow-down"> Salvar </c-button>
    </div>
  </div>
</div>

<br>

<div class="container">
  <div class="columns is-centered mx-0">
    <div class="column is-three-fifths">
      <!-- About -->
      <article class="box">
        <h4 class="title is-4"> Sobre sua Cartera </h4>
        <hr>

        <!-- Name -->
        <div class="field">
          <div class="control">
            <label class="label"> Nome </label>
            <input class="input" type="text" v-model="wallet.name" >
          </div>
        </div>

        <!-- Description -->
        <div class="field">
          <div class="control">
            <label class="label"> Descrição </label>
            <textarea class="textarea" v-model="wallet.description" />
          </div>
        </div>
      </article>

      <!-- Assets -->
      <div class="columns">
        <!-- Input -->
        <div class="column is-one-third">
          <article class="box">
            <h4 class="title is-4"> Adicionar ativos </h4>
            <hr>

            <!-- Ticker -->
            <div class="field">
              <div class="control">
                <label class="label"> Código </label>
                <input class="input" type="text" v-model="ticker" >
              </div>
            </div>

            <!-- Amount -->
            <div class="field">
              <div class="control">
                <label class="label"> Quantidade </label>
                <input
                  class="input"
                  type="number"
                  v-model="amount"
                  @keyup.enter="add"
                >
              </div>
            </div>
          </article>
        </div>

        <!-- List -->
        <div class="column is-two-thirds">
          <WalletsEditAssetRow
            class="box"
            v-for="item of wallet.assets"
            :key="item.ticker"
            :asset="item"
            @remove="remove"
          />
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import client from '@/commons/client.api'

import Navbar from '@/comps/navbar/Navbar'

import WalletsEditAssetRow from '@/comps/walletsedit/WalletsEditAssetRow'

export default {
  name: 'WalletsEdit',

  components: {
    Navbar,
    WalletsEditAssetRow
  },

  props: {
    id: {
      type: String,
      required: true
    }
  },

  data: () => ({
    amount: '',
    ticker: '',
    wallet: {
      assets: []
    }
  }),

  methods: {
    remove ({ ticker }) {
      this.wallet.assets = this.wallet.assets.filter(i => i.ticker !== ticker)
    },
    async add () {
      const asset = await client.assets.fetchAsset(this.ticker)
      asset.amount = this.amount

      // Replace if already in the list
      const index = this.wallet.assets.findIndex(i => i.ticker === this.ticker)
      if (index === -1) {
        this.wallet.assets.push(asset)
      } else {
        this.wallet.assets[index] = asset
      }

      this.amount = ''
      this.ticker = ''
    }
  },

  async created () {
    this.wallet = await client.wallets.byId(this.id)
  }
}
</script>
