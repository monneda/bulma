<template>
<span class="field">
  <span class="control has-icons-left">
    <Icon icon="search" class="has-text-primary" />
    <input class="input" type="text" placeholder="Pesquisar usuários...">
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
