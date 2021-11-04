<template>
<Navbar />

<hr class="m-0">

<c-menu>
  <h4 class="title is-4">Minhas Carteras</h4>

  <template #right>
    <router-link to="/c/create">
      <c-button class="is-primary has-text-weight-bold" right icon="plus">
        Criar Cartera
      </c-button>
    </router-link>
  </template>
</c-menu>
  <NotFoundWallet v-if="!loading && !wallets.length"/>

<div v-if="wallets.length" class="container">
  <br>
  <div class="columns mx-0 is-centered">
    <div class="column is-three-quarters">
      <div class="is-flex is-flex-direction-column">

        <!-- Periods -->
        <div class="tabs is-toggle is-fullwidth">
          <ul class="has-background-white">
            <li :class="{ 'is-active': period === 7 }">
              <a @click="period = 7">1 semana</a>
            </li>
            <li :class="{ 'is-active': period === 30 }">
              <a @click="period = 30">1 mês</a>
            </li>
            <li :class="{ 'is-active': period === 90 }">
              <a @click="period = 90">3 meses</a>
            </li>
            <li :class="{ 'is-active': period === daysInYear() }">
              <a @click="period = daysInYear()">YTD</a>
            </li>
          </ul>
        </div>

        <!-- Wallet tiles -->
        <div class="columns is-flex-wrap-wrap">
          <template v-for="w of wallets" :key="w.id">
            <div class="column is-one-third">
              <router-link :to="`/c/${w.id}`" >
                <WalletsTile :wallet="w" />
              </router-link>
            </div>
          </template>
        </div>
      </div>
    </div>
  </div>
</div>

<NavbarBottom/>
</template>

<script>
import client from '@/commons/client.api'
import { getDaysInYear } from '@/utils.js'

import Navbar from '@/comps/navbar/Navbar'
import WalletsTile from '@/comps/wallets/WalletsTile'
// import WalletsRank from '@/comps/wallets/WalletsRank'
import NavbarBottom from '../comps/navbar/NavbarBottom'
import NotFoundWallet from '../comps/wallets/NotFoundWallet'
// import CIcon from '../ui/CIcon'

export default {
  name: 'Carteras',

  components: {
    // CIcon,
    NavbarBottom,
    Navbar,
    NotFoundWallet,
    // WalletsRank,
    WalletsTile
  },

  data: () => ({
    period: 7,
    wallets: [],
    loading: true
  }),

  computed: {
    self () {
      return this.$store.state.user.profile
    },
    ranked () {
      return [...this.wallets].sort((a, b) => a.gain - b.gain)
    }
  },

  methods: {
    async fetchWallets () {
      this.loading = true
      this.wallets = []
      const wallets = await client.wallets.byUsername(this.self.username)
      for (const w of wallets) {
        const wallet = await client.wallets.byId(w.id, this.period)
        this.wallets.push(wallet)
      }
      this.loading = false
    },
    daysInYear () {
      return getDaysInYear()
    }
  },

  watch: {
    period () {
      this.fetchWallets()
    }
  },

  created () {
    this.fetchWallets()
  }
}
</script>
