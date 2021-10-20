<template>
<div class="has-text-centered">
  <!-- User -->
  <router-link :to="`/u/${user.username}`" class="py-1">
    <!-- Image -->
    <c-avatar :src="user.picture" round :size="this.size" />
    <br>
    <!-- Username -->
    <div class="white-space-no-wrap">
      <span class="has-text-weight-bold is-size-6 has-text-grey-dark"> {{ user.username }} </span>
      <br>
      <span class="is-size-7 has-text-gray-3"> {{ user.name }} </span>
    </div>
  </router-link>
  <!-- Follow button -->
  <button
    class="button is-small is-primary has-text-weight-bold"
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
  name: 'SimpleFollowCardVertical',

  props: {
    user: {
      required: true,
      type: Object
    },
    size: {
      required: false,
      type: String,
      default: '3rem'
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
.has-text-gray-3 {
  color: $gray-3
}
.white-space-no-wrap {
  white-space: nowrap;
}
</style>
