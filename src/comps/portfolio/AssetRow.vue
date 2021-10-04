<template>
<tr class="px-0">
  <td>
    <div class="level is-mobile">
      <div class="level-left">
        <!-- Icon -->
        <div class="level-item">
          <span class="icon is-large">
            <IconTicker :ticker="asset.ticker" />
          </span>
        </div>

        <!-- Name -->
        <div class="level-item">
          <div class="is-flex is-flex-direction-column">
            <span> {{ asset.name }} </span>
            <strong> {{ asset.ticker }} </strong>
          </div>
        </div>
      </div>
    </div>
  </td>
  <td class="is-vcentered"> {{ asset.weight.toFixed(2) }}% </td>
  <td class="is-vcentered"> R$ {{ asset.price.toFixed(2) }} </td>
  <td class="is-vcentered"> {{ asset.gain.toFixed(2) }}% </td>
</tr>
</template>

<script>
import IconTicker from '@/comps/utils/IconTicker'

export default {
  name: 'AssetRow',

  components: {
    IconTicker
  },

  props: {
    asset: {
      type: Object,
      required: true
    }
  }
}
</script>
