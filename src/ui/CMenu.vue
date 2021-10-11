<template>
<!-- Top navabar (desktop,mobile) -->
<nav v-bind="$attrs">
  <div class="container">
    <div class="navbar-brand">
      <!-- Logo -->
      <router-link class="navbar-item" to="/feed">
        <figure class="image">
          <img src="@/assets/imgs/logo-horizontal.png">
        </figure>
      </router-link>

      <a class="navbar-burger">
        <span>
          <c-avatar size="2rem" />
        </span>
      </a>
    </div>
  </div>
</nav>

<!-- Bottom navbar (mobile) -->
<!-- I am not really sure why this works, but it does -->
<div class="is-hidden-desktop" v-bind="$attrs">
  <nav class="navbar is-bottom level is-mobile my-0 py-0">
    <template v-for="{ icon, text, link } of MENU" :key="text">
      <router-link class="navbar-item p-4" :to="link">
        <c-menu-icon :icon="icon" />
      </router-link>
    </template>
  </nav>
</div>
</template>

<script>
import CAvatar from './CAvatar'
import CMenuIcon from './CMenuIcon'

const MENU = [
  { link: '/feed', icon: 'home', text: 'FEED' },
  { link: '/wallets', icon: 'wallet', text: 'CARTERAS' },
  { link: '/assets', icon: 'chart-line', text: 'ATIVOS' },
  { link: '/explore', icon: 'compass', text: 'DESCOBRIR' },
  { link: '/chat', icon: 'comment', text: 'CHAT' },
  { link: '/notifications', icon: 'bell', text: 'NOTIFICAÇÕES' }
]

export default {
  name: 'CMenu',

  components: {
    CAvatar,
    CMenuIcon
  },

  data: () => ({
    active: false,
    search: '',
    MENU
  })
}
</script>

<style scoped>
.is-bottom {
  position: absolute;
  bottom: 0px;
  width: 100%;
}
</style>
