<template>
<Navbar class="has-shadow" />
<WalletsNewNavigation
  class="has-background-white p-2"
  v-model="step"
/>

<br>

<div class="container">
  <div class="columns is-centered mx-0">
    <!-- Step 1 (about) -->
    <WalletsNewStep1
      class="box"
      v-model:name="name"
      v-model:description="description"
      v-if="step === 1"
    />

    <!-- Step 2 (assets) -->
    <WalletsNewStep2
      v-model="assets"
      v-if="step === 2"
    />
  </div>
</div>
</template>

<script>
import Navbar from '@/comps/navbar/Navbar'

import WalletsNewStep1 from '@/comps/walletsnew/WalletsNewStep1'
import WalletsNewStep2 from '@/comps/walletsnew/WalletsNewStep2'
import WalletsNewNavigation from '@/comps/walletsnew/WalletsNewNavigation'

export default {
  name: 'WalletsNew',

  components: {
    Navbar,
    WalletsNewStep1,
    WalletsNewStep2,
    WalletsNewNavigation
  },

  data: () => ({
    step: 1,
    name: '',
    description: '',
    assets: []
  })
}
</script>
