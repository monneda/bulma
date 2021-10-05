<template>
<div class="columns is-flex-wrap-wrap">
  <div v-for="i of [1, 2, 3, 4]" :key="i" class="column is-one-third">
    <WalletsTile />
  </div>
</div>
</template>

<script>
import WalletsTile from './WalletsTile'

export default {
  name: 'WalletsList',

  components: {
    WalletsTile
  }
}
</script>
