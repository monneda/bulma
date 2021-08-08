<template>
<span class="field">
  <span class="control has-icons-right">
    <input class="input is-rounded is-spaced" type="text" placeholder="Pesquisar">
    <Icon class="icon is-right" icon="search" />
  </span>
</span>
</template>

<script>
import Icon from '@/comps/Icon'

export default {
  name: 'Search',
  components: { Icon }
}
</script>
