<template>
<nav class="navbar">
  <div class="container">
    <div class="navbar-brand">
      <!-- Logo -->
      <router-link class="navbar-item" to="/">
        <figure class="image">
          <img src="@/assets/imgs/logo-horizontal.png">
        </figure>
      </router-link>

      <a
        class="navbar-burger is-hidden-desktop is-flex is-flex-direction-column is-align-items-center is-justify-content-center"
        @click="active = !active"
      >
        <font-awesome-icon icon="bars" />
      </a>
    </div>

    <div class="navbar-end">
      <div class="navbar-menu" :class="{ 'is-active': active }">
        <!-- Logout -->
        <a class="navbar-item" @click="$emit('login')">
          <button class="button is-fullwidth is-primary is-outlined"> login </button>
        </a>

        <!-- Sign up -->
        <a class="navbar-item" @click="$emit('login')">
          <button class="button is-fullwidth is-primary"> criar conta </button>
        </a>
      </div>
    </div>
  </div>
</nav>
</template>

<script>
export default {
  name: 'CMenuLoggedOut',

  data: () => ({
    active: false
  })
}
</script>
