<template>
<nav class="navbar">
  <div class="container">
    <!-- Brand -->
    <div class="navbar-brand">
      <!-- Logo -->
      <a class="navbar-item">
        <figure class="image">
          <img class="is-radiusless is-hidden-touch" src="@/assets/imgs/logo-horizontal-fundo-claro.png">
          <img class="is-radiusless is-hidden-desktop" src="@/assets/imgs/logo.png">
        </figure>
      </a>

      <!-- Search -->
      <div class="navbar-item">
        <navbar-search />
      </div>

      <!-- Burguer -->
      <a class="navbar-burger has-text-primary" ref="burger" @click="toggle">
        <span></span>
        <span></span>
        <span></span>
      </a>
    </div>

    <!-- Menu -->
    <div class="navbar-menu" ref="menu">
      <div class="navbar-end">
        <navbar-item icon="home"    label="FEED"         />
        <navbar-item icon="wallet"  label="CARTERAS"     />
        <navbar-item icon="compass" label="DESCOBRIR"    />
        <navbar-item icon="comment" label="CHAT"         />
        <navbar-item icon="bell"    label="NOTIFICAÇÕES" />

        <navbar-item-user />
      </div>
    </div>
  </div>
</nav>
</template>

<script>
import NavbarItem from '@/comps/navbar/NavbarItem'
import NavbarSearch from '@/comps/navbar/NavbarSearch'
import NavbarItemUser from '@/comps/navbar/NavbarItemUser'

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
    }
  }
}
</script>
