<template>
<tr>
  <td>
    <div class="level p-3 mb-1">
      <div class="level-left">
        <div class="level-item">
          <Icon class="is-large fa-2x" icon="wallet" />
        </div>
        <div class="level-item px-1">
          <div class="is-flex is-flex-direction-column">
            <span>Petrobras S/A</span>
            <strong>PETR3</strong>
          </div>
        </div>
      </div>
    </div>
  </td>
  <td class="is-vcentered">100%</td>
  <td class="is-vcentered">R$ 110,00</td>
  <td class="is-vcentered">-10%</td>
</tr>
</template>

<script>
import Icon from '@/comps/Icon'

export default {
  name: 'AssetRow',
  components: { Icon }
}
</script>
