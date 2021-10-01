<template>
<div class="navbar-item has-dropdown" ref="dropdown" @click="toggle">
  <a class="navbar-link">
    <span class="icon-text">
      <span class="icon is-medium">
        <figure class="image">
          <img class="is-32x32 is-rounded" :src="$store.state.user.profile.picture">
        </figure>
      </span>
      <span class="my-auto"> {{ $store.state.user.profile.givenName }} </span>
    </span>
  </a>

  <div class="navbar-dropdown">
    <!-- Profile -->
    <router-link :to="`/u/${$store.state.user.profile.username}`" class="navbar-item">
      <span class="icon is-small">
        <font-awesome-icon icon="user" />
      </span>
      <span class="is-size-7 pl-3"> Perfil </span>
    </router-link>

    <!-- Edit profile -->
    <router-link to="/u/nice/edit" class="navbar-item">
      <span class="icon is-small">
        <font-awesome-icon icon="pen" />
      </span>
      <span class="is-size-7 pl-3"> Editar perfil </span>
    </router-link>

    <!-- Change password -->
    <router-link to="/u/nice/password" class="navbar-item">
      <span class="icon is-small">
        <font-awesome-icon icon="lock" />
      </span>
      <span class="is-size-7 pl-3"> Trocar senha </span>
    </router-link>

    <!-- Logout -->
    <a @click="logout" class="navbar-item">
      <span class="icon is-small">
        <font-awesome-icon icon="sign-out-alt" />
      </span>
      <span class="is-size-7 pl-3"> Sair </span>
    </a>
  </div>
</div>
</template>

<script>
import { LOGOUT } from '@/store/type.actions'

export default {
  name: 'NavbarItemUser',

  methods: {
    toggle () {
      this.$refs.dropdown.classList.toggle('is-active')
    },
    logout () {
      console.log('logout')
      this.$store.dispatch(LOGOUT)
    }
  }
}
</script>
