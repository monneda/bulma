<template>
<article>
  <p v-if="edit.data.type === 'UPDATE'">
    Atualizei minha carteira:
    <router-link :to="`/c/${wallet.id}`">
      {{ wallet.name }}
    </router-link>
  </p>

  <br>

  <!-- Start -->
  <div class="is-flex" v-if="start.length > 0">
    <span class="icon-text has-text-primary-dark has-background-primary-light p-2">
      <span class="icon is-large my-auto">
        <font-awesome-icon icon="arrow-up" size="2x" />
      </span>
      <span class="pr-2 has-text-weight-bold my-auto" style="line-height: 110%">
        Iniciou <br> Posição
      </span>
    </span>

    <div v-for="c of start" :key="c.ticker" class="px-2 has-text-centered">
      <span class="icon is-large">
        <IconTicker :ticker="c.ticker"/>
      </span>
      <br>
      <span>
        {{ c.ticker }}
      </span>
    </div>
  </div>
  <br v-if="start.length > 0">

  <!-- End -->
  <div class="is-flex" v-if="end.length > 0">
    <span class="icon-text has-text-danger-dark has-background-danger-light p-2">
      <span class="icon is-large my-auto">
        <font-awesome-icon icon="arrow-down" size="2x" />
      </span>
      <span class="pr-2 has-text-weight-bold my-auto" style="line-height: 110%">
        Terminou <br> Posição
      </span>
    </span>

    <div v-for="c of end" :key="c.ticker" class="px-2 has-text-centered">
      <span class="icon is-large">
        <IconTicker :ticker="c.ticker"/>
      </span>
      <br>
      <span>
        {{ c.ticker }}
      </span>
    </div>
  </div>
  <br v-if="end.length > 0">

  <!-- Dec -->
  <div class="is-flex" v-if="dec.length > 0">
    <span class="icon-text has-text-danger-dark has-background-danger-light p-2">
      <span class="icon is-large my-auto">
        <font-awesome-icon icon="arrow-down" size="2x" />
      </span>
      <span class="pr-2 has-text-weight-bold my-auto" style="line-height: 110%">
        Diminuiu <br> Posição
      </span>
    </span>

    <div v-for="c of dec" :key="c.ticker" class="px-2 has-text-centered">
      <span class="icon is-large">
        <IconTicker :ticker="c.ticker"/>
      </span>
      <br>
      <span>
        {{ c.ticker }}
      </span>
    </div>
  </div>
  <br v-if="dec.length > 0">

  <!-- Inc -->
  <div class="is-flex" v-if="inc.length > 0">
    <span class="icon-text has-text-primary-dark has-background-primary-light p-2">
      <span class="icon is-large my-auto">
        <font-awesome-icon icon="arrow-up" size="2x" />
      </span>
      <span class="pr-2 has-text-weight-bold my-auto" style="line-height: 110%">
        Aumentou <br> Posição
      </span>
    </span>

    <div v-for="c of inc" :key="c.ticker" class="px-2 has-text-centered">
      <span class="icon is-large">
        <IconTicker :ticker="c.ticker"/>
      </span>
      <br>
      <span>
        {{ c.ticker }}
      </span>
    </div>
  </div>
  <br v-if="inc.length > 0">
</article>
</template>

<script>
import client from '@/commons/client.api'

import IconTicker from '@/comps/utils/IconTicker'

export default {
  name: 'Edit',

  components: {
    IconTicker
  },

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
    end () {
      return this.edit.data.changes.filter(i => i.change === 'END')
    },
    start () {
      return this.edit.data.changes.filter(i => i.change === 'START')
    },
    dec () {
      return this.edit.data.changes.filter(i => i.change === 'DEC')
    },
    inc () {
      return this.edit.data.changes.filter(i => i.change === 'INC')
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

.is-flex {
  overflow-x: auto;
  overflow-y: hidden;
}
</style>
