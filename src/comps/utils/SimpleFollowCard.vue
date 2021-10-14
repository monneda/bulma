<template>
<div class="is-flex is-justify-content-space-between is-align-items-center">
  <!-- User -->
  <router-link :to="`/u/${user.username}`" class="is-clipped">
    <div class="is-flex is-align-items-center">
      <!-- Image -->
      <c-avatar class="px-3" :src="user.picture" round size="3rem" />

      <!-- Username -->
      <div class="has-text-dark">
        <p class="has-text-weight-bold is-size-6"> @{{ user.username }} </p>
        <p class="is-size-7"> {{ user.name }} </p>
      </div>
    </div>
  </router-link>

  <!-- Follow button -->
  <button
    class="button is-small is-primary has-text-weight-bold"
    style="width: 6rem;"
    @click="clicked"
    :class="{
      'has-text-white has-background-primary-dark': user.following,
      'is-light': !user.following
    }"
  >
    <span> {{ user.following ? 'Seguindo' : 'Seguir' }} </span>
    <span v-if="user.following" class="icon is-small">
      <font-awesome-icon icon="check" />
    </span>
  </button>
</div>
</template>

<script>
export default {
  name: 'SimpleFollowCard',

  props: {
    user: {
      required: true,
      type: Object
    }
  },

  computed: {
    isSelf () {
      return this.user.username === this.$store.state.user.profile.username
    }
  },

  methods: {
    clicked () {
      if (this.user.following) {
        return this.$emit('unfollow', this.user)
      }
      return this.$emit('follow', this.user)
    }
  }
}
</script>

<style scoped lang="scss">
.has-text-green-2 {
  color: $green-2 !important;
}
</style>
