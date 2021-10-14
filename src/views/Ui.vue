<template>
<c-menu-desktop
  class="is-hidden-touch"
  :user="$store.state.user.profile"
  @logout="logout"
/>
<c-menu-logged-out />
</template>

<script>
import { LOGOUT } from '@/store/type.actions'

export default {
  name: 'Ui',

  methods: {
    logout () {
      this.$store.dispatch(LOGOUT)
    }
  }
}
</script>
