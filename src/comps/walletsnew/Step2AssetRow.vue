<template>
<div>
  <div class="level is-mobile mb-0">
    <div class="level-left">
      <div class="level-item">
        <span class="icon-text">
          <!-- Icon -->
          <span class="icon is-large">
            <IconTicker :ticker="asset.ticker" :type="asset.type" />
          </span>

          <!-- Name + ticker -->
          <div class="is-flex is-flex-direction-column is-justify-content-center pl-3">
            <span><strong>{{ asset.name }}</strong></span>
            <span>{{ asset.ticker }}</span>
          </div>
        </span>
      </div>
    </div>
    <!-- Delete -->
    <div class="level-right">
      <div class="level-item is-hidden-desktop">
        <button class="button delete is-danger" @click="remove"></button>
      </div>
    </div>
    <!-- Spacing -->
    <div class="level-item is-hidden-touch"></div>
    <div class="level-item is-hidden-touch"></div>

    <!-- Desktop -->

    <!-- Amount -->
    <div class="level-item is-hidden-touch">
      <div class="is-flex is-flex-direction-column">
        <span><strong> Qtd. </strong></span>
        <span>{{ asset.amount }}</span>
      </div>
    </div>

    <!-- Price -->
    <div class="level-item is-hidden-touch">
      <div class="is-flex is-flex-direction-column">
        <span><strong> Preço </strong></span>
        <span>{{ asset.price }}</span>
      </div>
    </div>

    <!-- Gain -->
    <div class="level-item is-hidden-touch">
      <div class="is-flex is-flex-direction-column">
        <span><strong> Variação </strong></span>
        <span>{{ asset.gain.toFixed(2) }}</span>
      </div>
    </div>
    <!-- Delete -->
    <div class="level-item is-hidden-touch">
      <button class="button delete is-danger" @click="remove"></button>
    </div>
  </div>

  <hr class="is-hidden-desktop">

  <!-- Info (mobile) -->
  <div class="level is-mobile is-hidden-desktop">
    <!-- Amount -->
    <div class="level-item">
      <div class="is-flex is-flex-direction-column">
        <span><strong> Qtd. </strong></span>
        <span>{{ asset.amount }}</span>
      </div>
    </div>

    <!-- Price -->
    <div class="level-item">
      <div class="is-flex is-flex-direction-column">
        <span><strong> Preço </strong></span>
        <span>{{ asset.price }}</span>
      </div>
    </div>

    <!-- Gain -->
    <div class="level-item">
      <div class="is-flex is-flex-direction-column">
        <span><strong> Variação </strong></span>
        <span>{{ asset.gain.toFixed(2) }}</span>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import IconTicker from '@/comps/utils/IconTicker'

export default {
  name: 'Step2AssetRow',

  components: {
    IconTicker
  },

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
