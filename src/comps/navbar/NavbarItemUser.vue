<template>
<div class="navbar-item has-dropdown" ref="dropdown" @click="toggle">
  <a class="navbar-link">
    <span class="icon-text">
      <span class="icon is-medium is-30x30">
        <IconUser :src="$store.state.user.profile.picture" size="1x"/>
      </span>
      <span v-if="!simple" class="my-auto"> {{ $store.state.user.profile.givenName }} </span>
    </span>
  </a>

  <NavbarItemUserDropdown v-if="!simple"/>
</div>
</template>

<script>
import NavbarItemUserDropdown from './NavbarItemUserDropdown'
import IconUser from '../utils/IconUser'

export default {
  name: 'NavbarItemUser',
  components: { IconUser, NavbarItemUserDropdown },
  props: {
    simple: {
      required: false,
      default: false
    }
  },

  methods: {
    toggle () {
      this.$refs.dropdown.classList.toggle('is-active')
      this.$emit('toggle')
    }
  }
}
</script>

<style scoped>
.is-30x30 {
  height: 30px;
  width: 30px;
}
</style>
