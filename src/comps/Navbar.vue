<template>
<nav class="navbar">
  <div class="navbar-brand">
    <a class="navbar-item">
      <img src="@/assets/logo.png" height="48">
    </a>

    <a class="navbar-burger" @click="toggle">
      <span></span>
      <span></span>
      <span></span>
    </a>
  </div>

  <div class="navbar-menu">
    <div class="navbar-start">
      <div class="navbar-item">
        <Search />
      </div>
    </div>

    <div class="navbar-end">
      <!-- Common items -->
      <a class="navbar-item"><Icon icon="bell" label="Notificações" /></a>
      <a class="navbar-item"><Icon icon="envelope" label="Mensagens" /></a>

      <!-- User dropdown -->
      <div class="navbar-item has-dropdown is-hoverable">
        <a class="navbar-link">
          <Icon icon="user" label="Conta" />
        </a>

        <!-- Dropdown items -->
        <div class="navbar-dropdown">
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
import Icon from '@/comps/Icon'
import Search from '@/comps/Search'

export default {
  name: 'Navbar',

  components: {
    Icon,
    Search
  },

  methods: {
    toggle () {
      document.querySelector('.navbar-menu').classList.toggle('is-active')
      document.querySelector('.navbar-burger').classList.toggle('is-active')
    }
  }
}

</script>
