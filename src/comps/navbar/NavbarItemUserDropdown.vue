<template>
<div class="navbar-dropdown" style="left: -50%">
  <!-- Profile -->
  <router-link :to="`/u/${$store.state.user.profile.username}`" class="navbar-item">
    <div class="is-flex is-flex-wrap-nowrap is-align-items-center">
      <span class="icon is-60x60">
        <IconUser :src="$store.state.user.profile.picture"/>
      </span>
      <div class="ml-3">
        <span class="is-size-6 has-text-weight-bold"> {{ $store.state.user.profile.name }} </span>
        <br>
        <span class="has-text-gray-3"> Veja seu perfil </span>
      </div>
    </div>
  </router-link>
  <hr class="navbar-divider">
  <!-- Edit profile -->
  <router-link :to="`/u/${$store.state.user.profile.username}/edit`" class="navbar-item">
    <span class="icon is-small">
      <font-awesome-icon icon="pen" />
    </span>
    <span class="has-text-gray-2 pl-3"> Editar perfil </span>
  </router-link>
  <hr class="navbar-divider">

  <!-- Change password -->
  <router-link to="/u/nice/password" class="navbar-item">
    <span class="icon is-small">
      <font-awesome-icon icon="lock" />
    </span>
    <span class="pl-3"> Trocar senha </span>
  </router-link>

  <hr class="navbar-divider">
  <!-- Logout -->
  <a @click="logout" class="navbar-item">
    <span class="icon is-small">
      <font-awesome-icon icon="sign-out-alt" />
    </span>
    <span class="pl-3"> Sair </span>
  </a>
</div>
</template>

<script>
import { LOGOUT } from '@/store/type.actions'
import IconUser from '../utils/IconUser'

export default {
  name: 'NavbarItemUserDropdown',
  components: {
    IconUser
  },

  methods: {
    logout () {
      this.$store.dispatch(LOGOUT)
    }
  }
}
</script>

<style lang="scss" scoped>
.is-60x60 {
  height: 60px;
  width: 60px;
}
.navbar-divider {
  display: block;
}
.has-text-gray-3 {
  color: $gray-3;
}
.has-text-gray-2 {
  color: $gray-2;
}
</style>
