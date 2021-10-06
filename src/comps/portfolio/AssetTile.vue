<template>
<article>
  <div class="level is-mobile">
    <div class="level-left">
      <!-- Icon -->
      <div class="level-item">
        <span class="icon is-large">
          <IconTicker :ticker="asset.ticker" />
        </span>
      </div>

      <!-- Asset name -->
      <div class="level-item">
        <div class="is-flex is-flex-direction-column">
          <span> {{ asset.name }} </span>
          <strong> {{ asset.ticker }} </strong>
        </div>
      </div>
    </div>
  </div>

  <hr class="my-2">

  <div class="level is-mobile">
    <div class="level-left">
      <!-- Weight -->
      <div class="level-item px-2">
        <div class="is-flex is-flex-direction-column">
          <strong> Peso </strong>
          <span> {{ asset.weight.toFixed(2) }}% </span>
        </div>
      </div>

      <!-- Price -->
      <div class="level-item px-2">
        <div class="is-flex is-flex-direction-column">
          <strong> Preço </strong>
          <span> R$ {{ asset.price.toFixed(2) }} </span>
        </div>
      </div>

      <!-- Performance -->
      <div class="level-item px-2">
        <div class="is-flex is-flex-direction-column">
          <strong> Variação </strong>
          <span> {{ asset.gain.toFixed(2) }}% </span>
        </div>
      </div>
    </div>
  </div>
</article>
</template>

<script>
import IconTicker from '@/comps/utils/IconTicker'

export default {
  name: 'AssetTile',

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
