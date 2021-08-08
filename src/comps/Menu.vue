<template>
<aside class="menu">
  <ul class="menu-list">
    <li>
      <a><Icon icon="newspaper" label="Feed" /></a>
    </li>
    <li>
      <a><Icon icon="dollar-sign" label="Ativos" /></a>
    </li>
    <li>
      <a><Icon icon="comments" label="Fórum" /></a>
    </li>
  </ul>
</aside>
</template>

<script>
import Icon from '@/comps/Icon'

export default {
  name: 'Menu',

  components: {
    Icon
  }
}
</script>
