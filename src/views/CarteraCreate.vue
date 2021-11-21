<template>
<Navbar class="has-shadow" />

<!-- Navigation -->
<WalletsNewNavigation
  class="has-background-white p-2"
  v-if="step !== 3"
  v-model="step"
  :valid="allValid"
  @finish="create"
/>

<br>

<div class="container">
  <div class="columns is-centered mx-0">
    <!-- Step 1 (about) -->
    <WalletsNewAbout
      v-if="step === 1"
      v-model:name="name"
      v-model:description="description"
      v-model:isDescriptionValid="validDescription"
      :validName="validName"
    />

    <!-- Step 2 (assets) -->
    <WalletsNewAssets
      v-if="step === 2"
      v-model:assets="assets"
      @add="addAsset"
      @remove="removeAsset"
    />

    <!-- Step 3 (completed) -->
    <WalletsNewCompleted
      v-if="step === 3 && wallet"
      :wallet="wallet"
    />
  </div>
</div>

<NavbarBottom/>
</template>

<script>
import client from '@/commons/client.api'

import Navbar from '@/comps/navbar/Navbar'

import WalletsNewAbout from '@/comps/walletsnew/WalletsNewAbout'
import WalletsNewAssets from '@/comps/walletsnew/WalletsNewAssets'
import WalletsNewCompleted from '@/comps/walletsnew/WalletsNewCompleted'
import WalletsNewNavigation from '@/comps/walletsnew/WalletsNewNavigation'
import NavbarBottom from '../comps/navbar/NavbarBottom'

export default {
  name: 'CarteraCreate',

  components: {
    NavbarBottom,
    Navbar,
    WalletsNewAbout,
    WalletsNewAssets,
    WalletsNewCompleted,
    WalletsNewNavigation
  },

  data: () => ({
    step: 1,
    name: '',
    description: '',
    validDescription: true,
    assets: [],
    wallet: null
  }),

  methods: {
    async create () {
      this.wallet = { name: this.name, description: this.description, assets: this.assets }
      await client.wallets.create(this.wallet)
    },
    async addAsset (asset) {
      this.removeAsset(asset.ticker)
      this.assets.unshift(asset)
    },
    async removeAsset ({ ticker }) {
      this.assets = this.assets.filter(i => i.ticker !== ticker)
    }
  },

  computed: {
    validName () {
      return this.name.length > 2
    },
    validAssets () {
      return this.assets.length !== 0
    },
    allValid () {
      return this.validName && this.validDescription && this.validAssets
    }
  }
}
</script>
