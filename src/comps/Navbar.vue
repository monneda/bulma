<template>
<nav class="navbar is-white">
  <div class="navbar-brand">
    <a class="navbar-item">
      <img class="mx-5" src="@/assets/logo-horizontal-fundo-claro.png">
    </a>

    <div class="navbar-start">
      <div class="navbar-item">
        <Search />
      </div>
    </div>

    <a class="navbar-burger" ref="burger" @click="toggle">
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
  </div>

  <div class="navbar-menu" ref="menu">
    <div class="navbar-end">
      <!-- Common items -->
      <a class="navbar-item">
        <NavbarItem icon="home" label="Feed"/>
      </a>
      <a class="navbar-item">
        <NavbarItem icon="wallet" label="Carteras"/>
      </a>
      <a class="navbar-item">
        <NavbarItem icon="chart-line" label="Ativos"/>
      </a>
      <a class="navbar-item">
        <NavbarItem icon="compass" label="Descobrir"/>
      </a>
      <a class="navbar-item">
        <NavbarItem icon="bell" label="Notificações"/>
      </a>
      <a class="navbar-item">
        <NavbarItem icon="envelope" label="Mensagens"/>
      </a>

      <!-- User dropdown -->
      <div class="navbar-item has-dropdown is-hoverable">
        <a class="navbar-link has-text-black" >
          <NavbarItem src="http://placekitten.com/32/32" label="Conta" />
        </a>

        <!-- Dropdown items -->
        <div class="navbar-dropdown is-right">
          <a class="navbar-item">Perfil</a>
          <a class="navbar-item">Nova carteira</a>
          <a class="navbar-item">Configurações</a>
          <a class="navbar-item">Ajuda?</a>
          <hr class="navbar-divider">
          <a class="navbar-item">Sair</a>
        </div>
      </div>
    </div>
  </div>
</nav>
</template>

<script>
import NavbarItem from '@/comps/NavbarItem'
import Search from '@/comps/Search'

export default {
  name: 'Navbar',

  components: {
    NavbarItem,
    Search
  },

  methods: {
    toggle () {
      this.$refs.menu.classList.toggle('is-active')
      this.$refs.burger.classList.toggle('is-active')
    }
  }
}

</script>
