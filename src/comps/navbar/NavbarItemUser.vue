<template>
<div class="navbar-item has-dropdown is-hoverable is-flex is-align-items-center">
  <a class="navbar-link has-background-grey-lighter is-medium">
    <div class="level">
      <div class="level-left">
        <figure class="level-item image is-32x32">
          <img class="is-rounded" src="https://placekitten.com/64/64">
        </figure>
        <span class="level-item ml-3">Roberta</span>
      </div>
    </div>
  </a>

  <div class="navbar-dropdown is-right">
    <div class="dropdown-content">
      <div class="dropdown-item">
        <article class="media">
          <div class="media-left">
            <figure class="image is-48x48">
              <img class="is-rounded" src="https://placekitten.com/64/64">
            </figure>
          </div>
          <div class="media-content">
            <p><strong>Roberta</strong></p>
            <p><a class="has-text-grey">Veja seu perfil</a></p>
          </div>
        </article>
      </div>
      <hr class="dropdown-divider">
      <a class="dropdown-item"><Icon icon="user" label="Editar perfil" /></a>
      <a class="dropdown-item"><Icon icon="lock" label="Trocar senha" /></a>
      <a class="dropdown-item"><Icon icon="" label="Sair" /></a>
    </div>
  </div>
</div>
</template>

<script>
import Icon from '@/comps/Icon'

export default {
  name: 'NavbarItemUser',
  components: { Icon }
}
</script>

<style scoped>
.navbar-dropdown {
  min-width: 12rem;
}
</style>
