<template>
<article>
  <p v-if="edit.data.type === 'CREATION'">
    Criei uma carteira:
    <router-link :to="`/c/${wallet.id}`"> {{ wallet.name }} </router-link>
  </p>

  <br>

  <p v-if="wallet.description">
    {{ wallet.description }}
  </p>

  <br>
  <!-- Start -->
  <div class="is-flex" v-if="start.length > 0">
    <span class="icon-text has-text-primary-dark has-background-primary-light p-2">
      <div v-for="c of start" :key="c.ticker" class="has-text-centered p-2">
        <c-ticker :ticker="c.ticker" />
        <br>
        <span> {{ c.ticker }} </span>
      </div>
    </span>
  </div>
</article>
</template>

<script>
import client from '@/commons/client.api'

export default {
  name: 'New Cartera',

  props: {
    edit: {
      type: Object,
      required: true
    }
  },

  data: () => ({
    wallet: {}
  }),

  computed: {
    start () {
      return this.edit.data.changes.filter(i => i.change === 'START')
    }
  },

  async created () {
    this.wallet = await client.wallets.byId(this.edit.data.walletId)
  }
}
</script>

<style scoped>
.icon-text {
  border-radius: 10px;
  min-width: 10rem;
}
</style>
