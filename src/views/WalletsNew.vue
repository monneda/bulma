<template>
<Navbar class="has-shadow" />

<!-- Navigation -->
<WalletsNewNavigation
  class="has-background-white p-2"
  v-if="step !== 3"
  v-model="step"
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
    />

    <!-- Step 2 (assets) -->
    <WalletsNewAssets
      v-if="step === 2"
      v-model:assets="assets"
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
import Navbar from '@/comps/navbar/Navbar'

import WalletsNewAbout from '@/comps/walletsnew/WalletsNewAbout'
import WalletsNewAssets from '@/comps/walletsnew/WalletsNewAssets'
import WalletsNewCompleted from '@/comps/walletsnew/WalletsNewCompleted'
import WalletsNewNavigation from '@/comps/walletsnew/WalletsNewNavigation'
import NavbarBottom from '../comps/navbar/NavbarBottom'

export default {
  name: 'WalletsNew',

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
    assets: [],
    wallet: null
  }),

  methods: {
    create () {
      // TODO
      this.wallet = { name: this.name }
    }
  }
}
</script>
