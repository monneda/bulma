<template>
<nav class="navbar">
  <div class="container">
    <div class="navbar-brand">
      <!-- Logo -->
      <router-link class="navbar-item" to="/feed">
        <figure class="image">
          <img src="@/assets/imgs/logo-horizontal.png">
        </figure>
      </router-link>

      <!-- Search -->
      <div class="navbar-item">
        <div class="field">
          <div class="control has-icons-left">
            <input class="input" type="search" placeholder="Pesquisar investidores...">
            <span class="icon is-left">
              <font-awesome-icon icon="search" />
            </span>
          </div>
        </div>
      </div>
    </div>

    <!-- Menu -->
    <div class="navbar-end">
      <!-- Items -->
      <template v-for="{ text, link, icon } of menuItems" :key="text">
        <router-link :to="link" class="navbar-item is-toggle">
          <div class="is-flex is-flex-direction-column is-align-items-center">
            <span class="icon is-small">
              <font-awesome-icon :icon="icon" />
            </span>
            <small> {{ text }} </small>
          </div>
        </router-link>
      </template>

      <!-- User -->
      <a class="navbar-item has-dropdown" :class="{ 'is-active': active }">
        <a class="navbar-link" @click="active = !active">
          <c-avatar :src="user.picture" size="2rem" round />
          <span class="pl-2"> {{ user.name }} </span>
        </a>

        <!-- Dropdown -->
        <div class="navbar-dropdown">
          <!-- See profile -->
          <router-link class="navbar-item" :to="`/u/${user.username}`">
            <div class="is-flex is-align-items-center is-justify-content-space-around">
              <c-avatar class="p-2" :src="user.picture" round size="5rem" />
              <div class="is-flex is-flex-direction-column pl-3">
                <strong> {{ user.name }} </strong>
                <span> Veja seu perfil </span>
              </div>
            </div>
          </router-link>

          <hr class="navbar-divider">

          <!-- Edit profile -->
          <router-link class="navbar-item" :to="`/u/${user.username}/edit`">
            <span class="icon-text">
              <span class="icon">
                <font-awesome-icon icon="pen" />
              </span>
              <span> Editar perfil </span>
            </span>
          </router-link>

          <!-- Change password -->
          <router-link class="navbar-item" :to="`/u/${user.username}/password`">
            <span class="icon-text">
              <span class="icon">
                <font-awesome-icon icon="lock" />
              </span>
              <span> Alterar senha </span>
            </span>
          </router-link>

          <!-- Logout -->
          <a class="navbar-item" @click.prevent="() => $emit('logout', user)">
            <span class="icon-text">
              <span class="icon">
                <font-awesome-icon icon="sign-out-alt" />
              </span>
              <span> Sair </span>
            </span>
          </a>
        </div>
      </a>
    </div>
  </div>
</nav>
</template>

<script>
const MENU = [
  { link: '/feed', icon: 'home', text: 'FEED' },
  { link: '/wallets', icon: 'wallet', text: 'CARTERAS' },
  { link: '/assets', icon: 'chart-line', text: 'ATIVOS' },
  { link: '/explore', icon: 'compass', text: 'DESCOBRIR' },
  { link: '/chat', icon: 'comment', text: 'CHAT' },
  { link: '/notifications', icon: 'bell', text: 'NOTIFICAÇÕES' }
]

export default {
  name: 'CMenuDeskto',

  props: {
    user: {
      type: Object,
      required: true
    }
  },

  data: () => ({
    active: false,
    menuItems: MENU
  })
}
</script>
