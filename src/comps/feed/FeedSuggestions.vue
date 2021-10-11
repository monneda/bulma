<template>
<article class="box">
  <router-link :to="'/u/'+$store.state.user.profile.username">
    <div class="has-text-centered">
      <span class="icon is-60x60">
        <IconUser :src="$store.state.user.profile.picture"/>
      </span>
      <br>
      <span class="title is-size-6"> {{ $store.state.user.profile.name }} </span>
      <br>
      <span class="subtitle is-subtitle-size"> @{{ $store.state.user.profile.username }} </span>
    </div>
  </router-link>

  <hr class="my-3">

  <div class="pb-4">
    <div class="level">
      <div class="level-left">
        <span class="level-item has-text-weight-bold is-subtitle-size has-text-gray-2">Sugestão de investidores</span>
      </div>
      <div class="level-right">
        <a class="level-item is-subtitle-size has-text-green-2 has-text-weight-bold">Ver todas</a>
      </div>
    </div>
  </div>

  <template v-for="user in users" :key="user">
    <SimpleFollowCard @follow="follow" @unfollow="unfollow" :user="user" />
  </template>
</article>
</template>

<script>
import IconUser from '../utils/IconUser'
import client from '../../commons/client.api'
import SimpleFollowCard from '../utils/SimpleFollowCard'

export default {
  name: 'FeedSuggestions',
  components: { SimpleFollowCard, IconUser },
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
</style>
