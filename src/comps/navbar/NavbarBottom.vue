<template>
  <section class="is-hidden-desktop has-navbar-fixed-top has-navbar-fixed-bottom-touch">
  <nav
    v-if="$store.state.user.auth"
    class="navbar is-fixed-bottom is-inline-flex is-justify-content-space-around is-align-items-center"
    style="padding-bottom: env(safe-area-inset-bottom)"
  >
    <navbar-item to="/feed" icon="home" label="" class="fa-lg" />
    <navbar-item to="/c" icon="wallet" label="" class="fa-lg" />
    <navbar-item to="/a" icon="chart-line" label="" class="fa-lg" />
    <navbar-item to="/explore" icon="compass" label="" class="fa-lg" />
    <navbar-item to="/chat" icon="comment" label="" class="fa-lg" />
    <navbar-item to="/notifications" icon="bell" label="" class="fa-lg" />
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
