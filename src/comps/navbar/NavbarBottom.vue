<template>
<section class="is-hidden-desktop has-navbar-fixed-bottom-touch">
  <nav
    v-if="$store.state.user.auth"
    class="navbar is-fixed-bottom"
    style="padding-bottom: env(safe-area-inset-bottom)"
  >
    <div class="container is-flex is-justify-content-space-around is-align-items-center">
      <router-link v-for="{ link, icon } of ITEMS" :key="link" :to="link" >
        <button class="button is-white">
          <span class="icon is-large has-text-grey-dark">
            <font-awesome-icon :icon="icon" size="lg" />
          </span>
        </button>
      </router-link>
    </div>
  </nav>
</section>
</template>

<script>
const ITEMS = [
  { link: '/feed', icon: 'home' },
  { link: '/c', icon: 'wallet' },
  // { link: '/a', icon: 'chart-line' },
  // { link: '/explore', icon: 'compass' },
  // { link: '/chat', icon: 'comment' },
  { link: '/notifications', icon: 'bell' }
]

export default {
  name: 'NavbarBottom',
  data: () => ({ ITEMS })
}
</script>

<style scoped>
@media screen and (max-width: 1023px) {
  .has-navbar-fixed-bottom-touch {
    padding-bottom: 60px;
  }
}
</style>
