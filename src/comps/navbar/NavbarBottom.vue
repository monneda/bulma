<template>
  <section class="is-hidden-desktop has-navbar-fixed-top has-navbar-fixed-bottom-touch">
  <nav
    v-if="$store.state.user.auth"
    class="navbar is-fixed-bottom is-inline-flex is-justify-content-space-around is-align-items-center"
    style="padding-bottom: env(safe-area-inset-bottom)"
  >
    <navbar-item to="/feed" icon="home" class="fa-lg" />
    <navbar-item to="/c" icon="wallet" class="fa-lg" />
    <navbar-item to="/a" icon="chart-line" class="fa-lg" />
    <navbar-item to="/explore" icon="compass" class="fa-lg" />
    <navbar-item to="/chat" icon="comment" class="fa-lg" />
    <navbar-item to="/notifications" icon="bell" class="fa-lg" />
  </nav>
  </section>
</template>

<script>
import NavbarItem from '@/comps/navbar/NavbarItem'

export default {
  name: 'NavbarBottom',

  components: {
    NavbarItem
  }
}
</script>

<style lang="scss" scoped>

@media screen and (max-width: 1023px) {
  .has-navbar-fixed-bottom-touch {
    padding-bottom: 60px;
  }
}
</style>
