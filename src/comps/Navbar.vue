<template>
<nav class="navbar is-white">
  <div class="navbar-brand">
    <a class="navbar-item">
      <img src="@/assets/logo.png" height="48">
    </a>

    <a class="navbar-burger" ref="burger" @click="toggle">
      <span></span>
      <span></span>
      <span></span>
    </a>
  </div>

  <div class="navbar-menu" ref="menu">
    <div class="navbar-start">
      <div class="navbar-item">
        <Search />
      </div>
    </div>

    <div class="navbar-end">
      <!-- Common items -->
      <a class="navbar-item">
        <span class="icon-text">
          <span class="icon">
            <font-awesome-icon icon="bell" />
          </span>
          <span>Notificações</span>
        </span>
      </a>
      <a class="navbar-item">
        <span class="icon-text">
          <span class="icon">
            <font-awesome-icon icon="envelope" />
          </span>
          <span>Mensagens</span>
        </span>
      </a>

      <!-- User dropdown -->
      <div class="navbar-item has-dropdown is-hoverable">
        <a class="navbar-item has-text-black">
          <span class="icon-text">
            <span class="icon">
              <font-awesome-icon icon="user" />
            </span>
            <span>Conta</span>
          </span>
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
import Search from '@/comps/Search'

export default {
  name: 'Navbar',

  components: {
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
