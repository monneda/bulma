<template>
<div :class="rowClass">
  <div class="is-flex is-justify-content-space-between is-align-items-center">
    <!-- Rank -->
    <div class="px-3">
      <span class="has-text-primary has-text-weight-bold is-size-4">
        {{ rank }}
      </span>
    </div>

    <!-- Name -->
    <div>
      <span class="has-text-weight-bold">
        {{ wallet.name }}
      </span>
    </div>

    <!-- Icon -->
    <div :class="gainClass" class="py-2 px-4">
      <div class="is-flex is-flex-direction-column is-align-items-center">
        <span class="icon has-text-primary-dark">
          <font-awesome-icon :icon="['far', 'arrow-alt-circle-up']" size="lg" />
        </span>
        <span class="has-text-primary-dark has-text-weight-bold is-size-7">
          {{ wallet.gain.toFixed(2) }}%
        </span>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'WalletRank',

  props: {
    rank: {
      type: Number,
      required: true
    },
    wallet: {
      type: Object,
      required: true
    }
  },

  computed: {
    rowClass () {
      return {
        row: this.rank > 1,
        'row-first': this.rank <= 1
      }
    },

    gainClass () {
      return {
        gain: this.rank > 1,
        'gain-first': this.rank <= 1
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.row {
  border-radius: $radius;
  border-style: solid;
  border-width: 2px;
  border-color: $gray-5;
  background-color: $gray-6;
}

.row-first {
  border-radius: $radius;
  border-style: solid;
  border-width: 2px;
  border-color: $green-7;
  background-color: $green-8;
}

.gain {
  background-color: $gray-5;
  border-radius: $radius;
}

.gain-first {
  background-color: $green-7;
  border-radius: $radius;
}
</style>
