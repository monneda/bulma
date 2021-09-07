<template>
<div class="level" :class="background">
  <div class="level-left">
    <div class="level-item">
      <strong class="has-text-primary">{{ number }}</strong>
    </div>

    <div class="level-item">
      <figure class="image is-48x48">
        <img class="is-rounded" src="https://placekitten.com/128/128">
      </figure>
    </div>

    <div class="level-item">
      <div class="is-flex is-flex-direction-column is-align-items-flex-start">
        <strong>Roberta</strong>
        <small>Minha carteira na clear</small>
      </div>
    </div>
  </div>

  <div class="level-right">
    <div class="level-item">
      <div class="is-flex is-flex-direction-column is-align-items-center pt-1 pb-0">
        <Icon class="fas fa-2x" :class="color" :icon="icon" />
        <strong class="pt-1" :class="color">{{ gain.toFixed(2) }}%</strong>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import Icon from '@/comps/Icon'

export default {
  name: 'TopWalletItem',

  components: {
    Icon
  },

  props: {
    wallet: {
      type: String,
      required: true
    },
    gain: {
      type: Number,
      required: true
    },
    number: {
      type: Number,
      required: true
    },
    first: {
      type: Boolean,
      default: false
    }
  },

  computed: {
    background () {
      return {
        'has-background-primary-light': this.first,
        'has-background-light': !this.first
      }
    },
    icon () {
      return this.gain > 0 ? 'arrow-circle-up' : 'arrow-circle-down'
    },
    color () {
      return {
        'has-text-primary': this.gain > 0,
        'has-text-danger': this.gain <= 0
      }
    }
  }
}
</script>

<style scoped>
div .level {
  border-radius: 15px;
}
</style>
