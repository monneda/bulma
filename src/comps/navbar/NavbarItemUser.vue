<template>
<div class="navbar-item has-dropdown" ref="dropdown" @click="toggle">
  <a class="navbar-link">
    <span class="icon-text">
      <span class="icon is-medium">
        <figure class="image">
          <img class="is-32x32 is-rounded" src="https://placekitten.com/32/32">
        </figure>
      </span>
      <span class="my-auto"> Roberta </span>
    </span>
  </a>

  <div class="navbar-dropdown">
    <!-- Profile -->
    <router-link to="/u/nice" class="navbar-item">
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
    <router-link to="/logout" class="navbar-item">
      <span class="icon is-small">
        <font-awesome-icon icon="sign-out-alt" />
      </span>
      <span class="is-size-7 pl-3"> Sair </span>
    </router-link>
  </div>
</div>
</template>

<script>
export default {
  name: 'NavbarItemUser',

  methods: {
    toggle () {
      this.$refs.dropdown.classList.toggle('is-active')
    }
  }
}
</script>
