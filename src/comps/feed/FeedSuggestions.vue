<template>
<article class="box">
  <!-- User -->
  <div v-if="!horizontal" class="is-flex is-flex-direction-column is-align-items-center">
    <router-link :to="`/u/${$store.state.user.profile.username}`">
      <c-avatar size="3.75rem" :src="$store.state.user.profile.picture" round />
    </router-link>

    <br>

    <h5 class="title is-5"> {{ $store.state.user.profile.name }} </h5>
    <p class="subtitle is-size-6"> @{{ $store.state.user.profile.username }} </p>
  </div>

  <hr v-if="!horizontal">

  <!-- Title -->
  <div class="is-flex is-justify-content-space-between">
    <span class="has-text-weight-bold has-text-gray-2">
      Sugestão de investidores
    </span>
    <router-link class="has-text-weight-bold has-text-green-2" to="/suggestions">
      ver todas
    </router-link>
  </div>

  <br>

  <div v-if="!horizontal">
    <template v-for="user in users.slice(0,5)" :key="user">
      <SimpleFollowCard
        @follow="follow"
        @unfollow="unfollow"
        :user="user"
        size="2.1875rem"
        class="py-3"
      />
    </template>
  </div>

  <div v-else class="p-2 is-flex is-justify-content-flex-start">
    <template v-for="user in users.slice(0,15)" :key="user">
      <SimpleFollowCardVertical
        @follow="follow"
        @unfollow="unfollow"
        :user="user"
        size="3.4375rem"
        class="mx-1"
        style="min-width: 12.5rem"
      />
    </template>
  </div>
</article>
</template>

<script>
import client from '../../commons/client.api'
import SimpleFollowCard from '../utils/SimpleFollowCard'
import SimpleFollowCardVertical from '../utils/SimpleFollowCardVertical'

export default {
  name: 'FeedSuggestions',

  props: {
    horizontal: {
      type: Boolean,
      default: false
    }
  },

  components: {
    SimpleFollowCardVertical,
    SimpleFollowCard
  },

  data: () => ({
    users: []
  }),

  async created () {
    this.users = await client.profile.getSuggestedFriends()
  },
  methods: {
    async follow (user) {
      await client.users.follow(user.username)
      user.following = true
    },
    async unfollow (user) {
      await client.users.unfollow(user.username)
      user.following = false
    }
  }
}
</script>

<style scoped lang="scss">
.is-60x60 {
  height: 60px;
  width: 60px;
}
.is-35x35 {
  height: 35px;
  width: 35px;
}
.is-subtitle-size {
  font-size: 0.875rem;
}
.is-subtitle-size2 {
  font-size: 0.8125rem;
}
.has-text-gray-1 {
  color: $gray-1;
}
.has-text-gray-2 {
 color: $gray-2;
}
.has-text-green-2 {
  color: $green-2;
}
.is-flex{
  overflow-x: auto;
}
</style>
