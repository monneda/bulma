<template>
<nav class="navbar navbar-size navbar-size-touch">
  <div class="container">
    <!-- Brand -->
    <div class="navbar-brand navbar-size-touch">
      <!-- Logo desktop width 125px -->
      <router-link class="navbar-item is-hidden-touch" to="/feed">
        <figure class="image">
          <img class="is-radiusless" src="@/assets/imgs/logo-horizontal.png" style="width: 7.8125rem">
        </figure>
      </router-link>
      <!-- Logo mobile height 25px -->
      <router-link v-if="!$store.state.user.auth" class="navbar-item is-hidden-desktop ml-3" to="/feed">
        <figure class="image">
            <img class="is-radiusless" src="@/assets/imgs/logo-horizontal.png" style="height: 1.5625rem">
        </figure>
      </router-link>

      <!-- Search -->
      <div v-if="$store.state.user.auth" class="navbar-item ml-4">
        <NavbarSearch />
      </div>

      <!-- Burger -->

      <a v-if="!$store.state.user.auth" class="navbar-burger navbar-size-touch" ref="burger" @click="toggle">
        <figure class="image is-flex navbar-size-touch is-align-items-center">
          <img src="@/assets/svgs/burger.svg" class="custom-burger">
        </figure>
      </a>

      <navbar-item-user style="margin-left: auto" v-else :simple="true" class="is-hidden-desktop" @toggle="toggle"/>
    </div>

    <!-- Menu logged -->
    <div v-if="$store.state.user.auth" class="navbar-menu navbar-menu-touch" ref="menu">
      <!-- icons navbar desktop -->
      <div class="navbar-end is-hidden-touch">
        <navbar-item to="/feed" icon="home" label="FEED" />
        <navbar-item to="/wallets" icon="wallet"  label="CARTERAS" />
        <navbar-item to="/explore" icon="compass" label="DESCOBRIR" />
        <navbar-item to="/chat" icon="comment" label="CHAT" />
        <navbar-item to="/notifications" icon="bell" label="NOTIFICAÇÕES" />
        <navbar-item-user />
      </div>
      <!-- dropdown mobile -->
      <div class="navbar-end is-hidden-desktop">
        <div class="navbar-item has-dropdown">
          <navbar-item-user-dropdown/>
        </div>
      </div>
    </div>

    <!-- Menu (anonymous) -->
    <div v-else class="navbar-menu" ref="menu">
      <div class="navbar-end">
        <!-- login desktop -->
        <div class="navbar-item is-hidden-touch">
          <button class="button is-primary is-outlined has-text-weight-bold" @click="login"> login </button>
        </div>
        <!-- criar conta desktop -->
        <div class="navbar-item is-hidden-touch">
          <button class="button is-primary has-text-weight-bold" @click="login"> criar conta </button>
        </div>
        <div class="is-hidden-desktop has-text-centered-touch">
          <!-- login desktop -->
          <div class="navbar-item">
            <button class="button is-primary is-outlined has-text-weight-bold login-button-touch" @click="login"> login </button>
          </div>
          <!-- criar conta desktop -->

          <div class="navbar-item">
            <button class="button is-primary has-text-weight-bold login-button-touch" @click="login"> criar conta </button>
          </div>
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
import NavbarItemUserDropdown from '@/comps/navbar/NavbarItemUserDropdown'

import { LOGIN } from '@/store/type.actions'

export default {
  name: 'Navbar',

  components: {
    NavbarItem,
    NavbarSearch,
    NavbarItemUser,
    NavbarItemUserDropdown
  },

  methods: {
    toggle () {
      this.$refs.menu.classList.toggle('is-active')
      this.$refs.burger.classList.toggle('is-active')
    },

    toggleMobileNavbar () {
      this.$refs.menu.classList.toggle('is-active')
    },

    login () {
      this.$store.dispatch(LOGIN, { origin: this.$route.path })
    }
  }
}
</script>

<style lang="scss" scoped>
.navbar-size {
  height: 70px;
}
@media screen and (max-width: 1023px) {
  .navbar-size-touch {
    height: 60px;
  }
}

@media screen and (max-width: 1023px) {
  .navbar-menu-touch {
    width: 90%;
    margin-right: auto;
    margin-left: auto;
  }
}
.custom-burger {
  height: 1.0875rem;
}
.navbar-menu-right {
  width: 75%;
  height: 100%;
  margin-left: auto
}
.login-button-touch {
  margin-right: auto;
  margin-left: auto;
  width: 75%;
  bottom: 0;
}
</style>
