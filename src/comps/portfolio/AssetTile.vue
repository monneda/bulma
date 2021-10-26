<template>
<article>
  <div class="is-flex">
    <!-- Icon -->
    <c-ticker :ticker="asset.ticker" :type="asset.type" />

    <!-- Asset name -->
    <div class="is-flex is-flex-direction-column pl-3">
      <span> {{ asset.name }} </span>
      <strong> {{ asset.ticker }} </strong>
    </div>
  </div>

  <hr class="my-2">

  <div class="level is-mobile">
    <div class="level-left">
      <!-- Weight -->
      <div class="level-item">
        <div class="is-flex is-flex-direction-column">
          <strong> Peso </strong>
          <span> {{ asset.weight.toFixed(2) }}% </span>
        </div>
      </div>

      <!-- Price -->
      <div class="level-item">
        <div class="is-flex is-flex-direction-column">
          <strong> Preço </strong>
          <span> R$ {{ asset.price.toFixed(2) }} </span>
        </div>
      </div>

      <!-- Performance -->
      <div class="level-item">
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
export default {
  name: 'AssetTile',

  props: {
    asset: {
      type: Object,
      required: true
    }
  }
}
</script>
