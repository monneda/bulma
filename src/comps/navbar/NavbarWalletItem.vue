<template>
<div class="level">
  <div class="level-left">
    <Icon class="level-item" icon="wallet" label="Minha carteira na clear" />
    <Icon class="level-item has-text-primary" icon="arrow-circle-up" label="15%" />
  </div>
</div>
</template>

<script>
import Icon from '@/comps/Icon'

export default {
  name: 'NavbarWalletItem',
  components: { Icon }
}
</script>

<style scoped>
</style>
