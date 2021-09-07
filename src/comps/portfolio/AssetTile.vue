<template>
<article>
  <div class="level p-3 mb-1">
    <div class="level-left">
      <div class="level-item">
        <Icon class="is-large fa-3x" icon="wallet" />
      </div>
      <div class="level-item px-1">
        <div class="is-flex is-flex-direction-column">
          <span>Petrobras S/A</span>
          <strong>PETR3</strong>
        </div>
      </div>
    </div>
  </div>

  <hr class="my-0">

  <div class="level p-3">
    <div class="level-left">
      <div class="level-item pr-4">
        <div class="is-flex is-flex-direction-column">
          <strong>Peso</strong>
          <span>100%</span>
        </div>
      </div>
      <div class="level-item px-4">
        <div class="is-flex is-flex-direction-column">
          <strong>Preço</strong>
          <span>R$ 100,00</span>
        </div>
      </div>
      <div class="level-item px-4">
        <div class="is-flex is-flex-direction-column">
          <strong>Variação</strong>
          <span>-10%</span>
        </div>
      </div>
    </div>
  </div>
</article>
</template>

<script>
import Icon from '@/comps/Icon'

export default {
  name: 'AssetTile',
  components: { Icon }
}
</script>
