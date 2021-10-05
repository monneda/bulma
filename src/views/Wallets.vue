<template>
<Navbar />

<hr class="m-0">

<WalletsNavbar @create="create" />

<br>

<div class="container">
  <div class="columns mx-0 is-centered">
    <div class="column is-one-quarter is-hidden-touch">
      <div class="box">
        Top
      </div>
    </div>

    <div class="column is-three-quarters">
      <WalletsList class="box" />
    </div>
  </div>
</div>

</template>

<script>
import Navbar from '@/comps/navbar/Navbar'
import WalletsList from '@/comps/wallets/WalletsList'
import WalletsNavbar from '@/comps/wallets/WalletsNavbar'

export default {
  name: 'Wallets',

  components: {
    Navbar,
    WalletsList,
    WalletsNavbar
  },

  methods: {
    create () {
      console.log('New cartera')
    }
  }
}
</script>
