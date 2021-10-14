<template>
<div class="is-flex is-flex-wrap-wrap is-justify-content-space-between">
  <div class="is-flex">
    <!-- Icon -->
    <c-ticker :ticker="asset.ticker" />

    <!-- Name + ticker -->
    <div class="is-flex is-flex-direction-column is-justify-content-center pl-3">
      <div>
        <span class="has-text-weight-bold is-size-5"> {{ asset.name }} </span>
        <span class="is-size-6"> ${{ asset.ticker }} </span>
      </div>
      <div>
        R$ {{ asset.price }}
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'AssetBanner',

  props: {
    asset: {
      type: Object,
      required: true
    }
  },

  computed: {
    colors () {
      return {
        'has-text-danger': this.asset.gain < 0,
        'has-text-primary': this.asset.gain > 0,
        'has-text-weight-bold': this.asset.gain !== 0
      }
    }
  }
}
</script>
