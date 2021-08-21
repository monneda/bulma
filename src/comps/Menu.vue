<template>
<aside class="menu">
  <div class="menu-list">
    <li class="level">
      <span class="level-item"></span>
      <button class="level-item button is-rounded is-primary">
        <figure class="image is-32x32">
          <img src="@/assets/icone-branco.png" height="48">
        </figure>
        <span>
          Minhas Carteras
        </span>
      </button>
      <span class="level-item"></span>
    </li>

    <hr>

    <ul class="content is-normal">
      <li><a><Icon icon="newspaper" label="Feed" /></a></li>
      <li class="mt-4"><a><Icon icon="dollar-sign" label="Ativos" /></a></li>
      <li class="mt-4"><a><Icon icon="heart" label="Descobrir" /></a></li>
      <li class="mt-4"><a><Icon icon="comments" label="Fórum" /></a></li>
    </ul>
  </div>
</aside>
</template>

<script>
import Icon from '@/comps/Icon'

export default {
  name: 'Menu',
  components: { Icon }
}
</script>
