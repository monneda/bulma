<template>
<nav class="navbar">
  <div class="container">
    <!-- Brand -->
    <div class="navbar-brand">
      <!-- Logo -->
      <router-link class="navbar-item" to="/feed">
        <figure class="image">
          <img class="is-radiusless is-hidden-touch" src="@/assets/imgs/logo-horizontal.png">
          <img class="is-radiusless is-hidden-desktop" src="@/assets/imgs/logo.png">
        </figure>
      </router-link>

      <!-- Search -->
      <div class="navbar-item">
        <navbar-search />
      </div>

      <!-- Burguer -->
      <a class="navbar-burger" ref="burger" @click="toggle">
        <span style="height: 2px"></span>
        <span style="height: 2px"></span>
        <span style="height: 2px"></span>
      </a>
    </div>

    <!-- Menu -->
    <div v-if="$store.state.user.auth" class="navbar-menu" ref="menu">
      <div class="navbar-end">
        <navbar-item to="/feed" icon="home" label="FEED" />
        <navbar-item to="/wallets" icon="wallet"  label="CARTERAS" />
        <navbar-item to="/explore" icon="compass" label="DESCOBRIR" />
        <navbar-item to="/chat" icon="comment" label="CHAT" />
        <navbar-item to="/notifications" icon="bell" label="NOTIFICAÇÕES" />
        <navbar-item-user />
      </div>
    </div>

    <!-- Menu (anonymous) -->
    <div v-else class="navbar-menu" ref="menu">
      <div class="navbar-end">
        <div class="navbar-item">
          <button class="button is-primary is-light" @click="login"> Login </button>
        </div>
        <div class="navbar-item">
          <button class="button is-primary" @click="login"> Criar conta </button>
        </div>
      </div>
    </div>
  </div>
</nav>
</template>

<script>
import NavbarItem from '@/comps/navbar/NavbarItem'
import NavbarSearch from '@/comps/navbar/NavbarSearch'
import NavbarItemUser from '@/comps/navbar/NavbarItemUser'

import { LOGIN } from '@/store/type.actions'

export default {
  name: 'Navbar',

  components: {
    NavbarItem,
    NavbarSearch,
    NavbarItemUser
  },

  methods: {
    toggle () {
      this.$refs.menu.classList.toggle('is-active')
      this.$refs.burger.classList.toggle('is-active')
    },

    login () {
      this.$store.dispatch(LOGIN, { origin: this.$route.path })
    }
  }
}
</script>
