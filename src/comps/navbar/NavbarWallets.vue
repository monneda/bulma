<template>
<nav class="container">
  <div class="level">
    <strong class="level-item">Variação de suas Carteras</strong>
    <span class="level-item"><NavbarWalletItem /></span>
    <span class="level-item"><NavbarWalletItem /></span>
  </div>
</nav>
</template>

<script>
import NavbarWalletItem from '@/comps/navbar/NavbarWalletItem'

export default {
  name: 'NavbarWallets',
  components: { NavbarWalletItem }
}
</script>
