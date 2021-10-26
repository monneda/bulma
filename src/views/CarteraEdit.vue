<template>
<Navbar class="has-shadow" />

<!-- Bar -->
<div class="has-background-white">
  <div class="container p-3">
    <div class="is-flex is-justify-content-space-between">
      <h4 class="is-size-5 has-text-weight-bold"> Editar sua Cartera </h4>
      <c-button class="is-primary" right icon="arrow-down" @click="update">
        Salvar
      </c-button>
    </div>
  </div>
</div>

<br>

<div class="container">
  <div class="columns is-centered mx-0">
    <div class="column is-four-fifths">
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

      <div class="columns">
        <!-- Asset form -->
        <div class="column is-one-third">
          <AssetForm class="box" @submit="add" />
        </div>

        <!-- Asset list -->
        <div class="column is-two-thirds">
          <template v-for="item of wallet.assets" :key="item.ticker">
            <WalletsEditAssetRow class="box" :asset="item" @remove="remove" />
          </template>
        </div>
      </div>
    </div>
  </div>
  <NavbarBottom/>
</div>
</template>

<script>
import client from '@/commons/client.api'

import Navbar from '@/comps/navbar/Navbar'
import NavbarBottom from '../comps/navbar/NavbarBottom'
import AssetForm from '@/comps/forms/AssetForm'
import WalletsEditAssetRow from '@/comps/walletsedit/WalletsEditAssetRow'

export default {
  name: 'CarteraEdit',

  components: {
    Navbar,
    NavbarBottom,
    WalletsEditAssetRow,
    AssetForm
  },

  props: {
    id: {
      type: String,
      required: true
    }
  },

  data: () => ({
    wallet: {
      assets: []
    }
  }),

  methods: {
    remove ({ ticker }) {
      this.wallet.assets = this.wallet.assets.filter(i => i.ticker !== ticker)
    },

    async add ({ ticker, amount }) {
      const asset = await client.assets.fetchAsset(ticker)
      asset.amount = amount

      this.wallet.assets = this.wallet.assets.filter(i => i.ticker !== ticker)
      this.wallet.assets.push(asset)
    },

    async update () {
      const assets = this.wallet.assets
        .map(({ ticker, amount }) => ({ ticker, amount }))
      const wallet = {
        assets,
        name: this.wallet.name,
        description: this.wallet.description
      }
      this.wallet = await client.wallets.update(this.wallet.id, wallet)
      this.$router.push(`/c/${this.wallet.id}`)
    }
  },

  async created () {
    this.wallet = await client.wallets.byId(this.id, 30, 'raw')
  }
}
</script>
