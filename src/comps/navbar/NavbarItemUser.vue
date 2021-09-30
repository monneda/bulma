<template>
<div class="navbar-item has-dropdown" ref="dropdown" @click="toggle">
  <a class="navbar-link">
    <div class="level">
      <div class="level-item">
        <figure class="image">
          <img class="is-32x32 is-rounded" src="https://placekitten.com/32/32">
        </figure>
      </div>
      <div class="level-item pl-3">
        Roberta
      </div>
    </div>
  </a>

  <div class="navbar-dropdown">
    <a class="navbar-item">
      <span class="icon is-small">
        <font-awesome-icon icon="user" />
      </span>
      <span class="is-size-7 pl-3"> Editar perfil </span>
    </a>
    <a class="navbar-item">
      <span class="icon is-small">
        <font-awesome-icon icon="lock" />
      </span>
      <span class="is-size-7 pl-3"> Trocar senha </span>
    </a>
    <a class="navbar-item">
      <span class="icon is-small">
        <font-awesome-icon icon="sign-out-alt" />
      </span>
      <span class="is-size-7 pl-3"> Sair </span>
    </a>
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
