<template>
<aside class="menu">
  <ul class="menu-list">
    <li class="level">
      <span class="level-item"></span>
      <button class="level-item button is-rounded is-primary">Nova Cartera</button>
      <span class="level-item"></span>
    </li>

    <hr>

    <li><a><Icon icon="newspaper" label="Feed" before /></a></li>
    <li><a><Icon icon="dollar-sign" label="Ativos" before /></a></li>
    <li><a><Icon icon="heart" label="Descobrir" before /></a></li>
    <li><a><Icon icon="comments" label="Fórum" before /></a></li>
  </ul>
</aside>
</template>

<script>
import Icon from '@/comps/Icon'

export default {
  name: 'Menu',
  components: { Icon }
}
</script>
