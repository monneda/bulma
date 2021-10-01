<template>
<article>
  <div class="level is-mobile">
    <!-- Title -->
    <div class="level-left">
      <div class="level-item">
        <h4 class="title is-4"> Carteras </h4>
      </div>
    </div>

    <!-- Buttons -->
    <div class="level-right">
      <div class="level-item">
        <!-- Button group -->
        <div class="field has-addons has-text-grey is-hidden-touch">
          <p class="control">
            <button class="button" @click="days = 7"> 1 semana </button>
          </p>
          <p class="control">
            <button class="button" @click="days = 30"> 1 mês </button>
          </p>
          <p class="control">
            <button class="button" @click="days = 90"> 3 meses </button>
          </p>
          <p class="control">
            <button class="button" @click="days = 360"> 1 ano </button>
          </p>
        </div>

        <!-- Select input (mobile) -->
        <div class="select is-primary is-hidden-desktop">
          <select v-model="days">
            <option value="7"> 1 semana </option>
            <option value="30"> 1 mês </option>
            <option value="90"> 3 meses </option>
            <option value="360"> 1 ano </option>
          </select>
        </div>
      </div>
    </div>
  </div>

  <!-- Portfolios -->
  <div class="columns is-flex-wrap-wrap">
    <div v-for="w of wallets" :key="w.id" class="column is-4">
      <router-link :to="`/c/${w.id}`">
        <profile-portfolio-card :wallet="w" />
      </router-link>
    </div>
  </div>
</article>
</template>

<script>
import client from '@/commons/client.api'

import ProfilePortfolioCard from '@/comps/profile/ProfilePortfolioCard'

export default {
  name: 'ProfilePortfolios',

  components: {
    ProfilePortfolioCard
  },

  props: {
    username: {
      type: String,
      required: true
    }
  },

  data: () => ({
    wallets: [],
    days: 7
  }),

  methods: {
    async fetchWallets () {
      this.wallets = []
      const wallets = await client.wallets.byUsername(this.username)
      for (const { id } of wallets) {
        client.wallets.byId(id, this.days).then(w => this.wallets.push(w))
      }
    }
  },

  watch: {
    days (val) {
      this.fetchWallets()
    }
  },

  async created () {
    this.fetchWallets()
  }
}
</script>
