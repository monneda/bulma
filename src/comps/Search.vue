<template>
<span class="field">
  <span class="control has-icons-left">
    <Icon icon="search"/>
    <input class="input" type="text" placeholder="Pesquisar usuários..." style="border-radius: 10px">
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
