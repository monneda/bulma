<template>
<nav class="navbar">
  <div class="navbar-brand">
    <!-- Logo -->
    <a class="navbar-item">
      <img src="@/assets/logo-horizontal-fundo-claro.png">
    </a>

    <!-- Search -->
    <div class="navbar-item">
      <Search style="min-width: 12rem;" />
    </div>

    <!-- Burguer -->
    <a class="navbar-burger" ref="burger" @click="toggle">
      <span></span>
      <span></span>
      <span></span>
    </a>
  </div>

  <!-- Items -->
  <div class="navbar-menu" ref="menu">
    <div class="navbar-end">
      <!-- Common items -->
      <NavbarItem class="mx-3" icon="home" label="Feed" is-active />
      <NavbarItem class="mx-3" icon="wallet" label="Carteras" />
      <NavbarItem class="mx-3" icon="chart-line" label="Ativos" />
      <NavbarItem class="mx-3" icon="compass" label="Descobrir" />
      <NavbarItem class="mx-3" icon="envelope" label="Chat" />
      <NavbarItem class="mx-3" icon="bell" label="Notificações" />
      <!-- User -->
      <NavbarItemUser class="mx-3" user="Roberta" />
    </div>
  </div>
</nav>
</template>

<script>
import Search from '@/comps/navbar/Search'
import NavbarItem from '@/comps/navbar/NavbarItem'
import NavbarItemUser from '@/comps/navbar/NavbarItemUser'

export default {
  name: 'Navbar',

  components: {
    Search,
    NavbarItem,
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

<style scoped>
.navbar {
  min-height: 5rem;
}
</style>
