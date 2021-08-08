<template>
<aside class="menu">
  <ul class="menu-list">
    <li>
      <a><Icon icon="bell" label="Feed" /></a>
    </li>
    <li>
      <a><Icon icon="bell" label="Ativos" /></a>
    </li>
    <li>
      <a><Icon icon="bell" label="Fórum" /></a>
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
