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

<br>

<div class="container">
  <div class="columns mx-0 is-centered">
    <!-- Top wallets -->
<!--<div class="column is-one-quarter is-hidden-touch">
      <div class="box is-flex is-flex-direction-column">
        <div class="level">
          <div class="level-left">
            <strong class="level-item"> Top Carteras </strong>
          </div>
          <div class="level-right">
            <CIcon icon="trophy" />
          </div>
        </div>
        <hr class="my-0">
        <template v-for="(w, i) of ranked" :key="w.id">
          <WalletsRank :rank="i + 1" :wallet="w" class="p-2 my-2" />
        </template>
      </div>
    </div>-->

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
        <div class="columns">
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

import Navbar from '@/comps/navbar/Navbar'
import WalletsTile from '@/comps/wallets/WalletsTile'
// import WalletsRank from '@/comps/wallets/WalletsRank'
import NavbarBottom from '../comps/navbar/NavbarBottom'
// import CIcon from '../ui/CIcon'

export default {
  name: 'Carteras',

  components: {
    // CIcon,
    NavbarBottom,
    Navbar,
    // WalletsRank,
    WalletsTile
  },

  data: () => ({
    period: 7,
    wallets: []
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
      this.wallets = []
      const wallets = await client.wallets.byUsername(this.self.username)
      for (const w of wallets) {
        client.wallets.byId(w.id, this.period).then(w => this.wallets.push(w))
      }
    },
    daysInYear () {
      const now = new Date()
      const start = new Date(now.getFullYear(), 0, 0)
      const diff = (now - start) + ((start.getTimezoneOffset() - now.getTimezoneOffset()) * 60 * 1000)
      const oneDay = 1000 * 60 * 60 * 24
      return Math.floor(diff / oneDay)
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
