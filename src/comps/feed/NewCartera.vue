<template>
<article>
  <!-- Name -->
  <p>
    Criei uma carteira:
    <router-link :to="`/c/${wallet.id}`">
      {{ wallet.name }}
    </router-link>
  </p>

  <!-- Description -->
  <p v-if="wallet.description">
    {{ wallet.description }}
  </p>

  <br>

  <!-- Start -->
  <template v-if="start.length > 0">
    <div class="is-flex is-flex-wrap-wrap is-justify-content-center has-background-primary-light">
      <template v-for="{ ticker } of start" :key="ticker">
        <div class="is-flex is-flex-direction-column is-align-items-center p-2">
          <c-ticker :ticker="ticker" />
          <span class="has-text-primary-dark"> {{ ticker }} </span>
        </div>
      </template>
    </div>
  </template>
</article>
</template>

<script>
import client from '@/commons/client.api'

export default {
  name: 'NewCartera',

  props: {
    event: {
      type: Object,
      required: true
    }
  },

  data: () => ({
    wallet: {}
  }),

  computed: {
    start () {
      return this.event.data.changes.filter(i => i.change === 'START')
    }
  },

  async created () {
    this.wallet = await client.wallets.byId(this.event.data.walletId)
  }
}
</script>
