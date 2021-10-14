<template>
<div>
  <!-- Info (desktop) -->
  <div class="level is-mobile mb-0">
    <div class="level-left">
      <div class="level-item">
        <span class="icon-text">
          <!-- Icon -->
          <c-ticker :ticker="asset.ticker" />

          <!-- Name + ticker -->
          <div class="is-flex is-flex-direction-column is-justify-content-center pl-3">
            <strong>{{ asset.name }}</strong>
            <span>{{ asset.ticker }}</span>
          </div>
        </span>
      </div>
    </div>

    <div class="level-right">
      <!-- Amount -->
      <div class="level-item is-hidden-touch px-4">
        <div class="is-flex is-flex-direction-column">
          <strong> Qtd. </strong>
          <span>{{ asset.amount }}</span>
        </div>
      </div>

      <!-- Price -->
      <div class="level-item is-hidden-touch px-4">
        <div class="is-flex is-flex-direction-column">
          <strong> Preço </strong>
          <span>{{ asset.price }}</span>
        </div>
      </div>

      <!-- Gain -->
      <div class="level-item is-hidden-touch px-4">
        <div class="is-flex is-flex-direction-column">
          <strong> Variação </strong>
          <span> %{{ asset.gain.toFixed(2) }} </span>
        </div>
      </div>

      <!-- Delete -->
      <div class="level-item is-hidden-touch px-4">
        <button class="button delete is-danger" @click="remove"></button>
      </div>
    </div>
  </div>

  <hr class="is-hidden-desktop">

  <!-- Info (mobile) -->
  <div class="level is-mobile is-hidden-desktop">
    <!-- Amount -->
    <div class="level-item">
      <div class="is-flex is-flex-direction-column">
        <strong> Qtd. </strong>
        <span>{{ asset.amount }}</span>
      </div>
    </div>

    <!-- Price -->
    <div class="level-item">
      <div class="is-flex is-flex-direction-column">
        <strong> Preço </strong>
        <span>{{ asset.price }}</span>
      </div>
    </div>

    <!-- Gain -->
    <div class="level-item">
      <div class="is-flex is-flex-direction-column">
        <strong> Variação </strong>
        <span>{{ asset.gain.toFixed(2) }}</span>
      </div>
    </div>

    <!-- Delete -->
    <div class="level-item">
      <button class="button delete is-danger" @click="remove"></button>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'WalletEditAssetRow',

  props: {
    asset: {
      type: Object,
      required: true
    }
  },

  methods: {
    remove () {
      this.$emit('remove', this.asset)
    }
  }
}
</script>
