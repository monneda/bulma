<template>
<Navbar />

<hr class="m-0">

<c-menu>
  <h4 class="title is-4">Minhas Carteras</h4>

  <template #right>
    <router-link to="/c/new">
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
    <div class="column is-one-quarter is-hidden-touch">
      <div class="box is-flex is-flex-direction-column">
        <template v-for="(w, i) of ranked" :key="w.id">
          <WalletsRank :rank="i + 1" :wallet="w" class="p-2 my-2" />
        </template>
      </div>
    </div>

    <div class="column is-three-quarters">
      <div class="is-flex is-flex-direction-column">
        <div class="is-flex is-justify-content-space-between">

          <!-- Select periods -->
          <div class="is-flex is-align-self-flex-end">
            <div class="select">
              <select v-model="period">
                <option value="7">1 semana</option>
                <option value="30">1 mês</option>
                <option value="90">3 meses</option>
                <option value="360">1 ano</option>
              </select>
            </div>
          </div>
        </div>

        <br>

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
import WalletsRank from '@/comps/wallets/WalletsRank'
import NavbarBottom from '../comps/navbar/NavbarBottom'

export default {
  name: 'Carteras',

  components: {
    NavbarBottom,
    Navbar,
    WalletsTile,
    WalletsRank
  },

  data: () => ({
    period: '7',
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
    }
  },

  watch: {
    period (val) {
      this.fetchWallets()
    }
  },

  created () {
    this.fetchWallets()
  }
}
</script>
