<template>
<Navbar class="has-shadow" />

<br>

<div class="container">
  <div class="columns is-centered mx-0">
    <div class="column is-four-fifths">
      <div class="box">
        <!-- Header -->
        <header class="is-flex is-align-items-center is-justify-content-space-between">
          <div class="is-flex is-align-items-center">
            <!-- Back arrow -->
            <button class="button is-white" @click="$router.go(-1)">
              <span class="icon has-text-primary">
                <font-awesome-icon icon="arrow-left" />
              </span>
            </button>

            <!-- User picture -->
            <IconUser v-if="username" :src="user.picture" class="mx-4"/>

            <!-- Text -->
            <span class="is-size-5">
              {{ this.title }}
              <span class="has-text-weight-bold"> {{ user.name }} </span>
            </span>
          </div>

          <!-- Search (desktop) -->
          <div class="field is-hidden-touch">
            <p class="control has-icons-left">
              <input v-model="search" class="input" type="text" placeholder="Pesquisar...">
              <span class="icon is-left has-text-primary">
                <font-awesome-icon icon="search" />
              </span>
            </p>
          </div>
        </header>

        <br class="is-hidden-desktop">

        <!-- Search (mobile) -->
        <div class="field is-hidden-desktop pb-2">
          <p class="control has-icons-left">
            <input v-model="search" class="input" type="text" placeholder="Pesquisar...">
            <span class="icon is-left has-text-primary">
              <font-awesome-icon icon="search" />
            </span>
          </p>
        </div>

        <hr class="is-hidden-touch">

        <!-- Followers -->
        <div class="columns is-flex-wrap-wrap is-justify-content-space-between">
          <template v-for="(user, i) of searched" :key="i">
            <div class="column is-half">
              <SimpleFollowCard class="p-3 border-desktop borderless-mobile" :user="user" @follow="follow" @unfollow="unfollow"/>
            </div>
          </template>
        </div>
      </div>
    </div>
  </div>
</div>

<NavbarBottom/>
</template>

<script>
import client from '@/commons/client.api'

import Navbar from '@/comps/navbar/Navbar'
import IconUser from '@/comps/utils/IconUser'

import SimpleFollowCard from '../comps/utils/SimpleFollowCard'
import NavbarBottom from '../comps/navbar/NavbarBottom'

export default {
  name: 'Followers',

  components: {
    SimpleFollowCard,
    Navbar,
    IconUser,
    NavbarBottom
  },

  props: {
    username: {
      type: String,
      required: false
    }
  },

  data: () => ({
    user: {},
    users: [],
    search: ''
  }),

  computed: {
    searched () {
      const re = new RegExp(this.search)
      return this.users.filter(i => i.name.match(re) || i.username.match(re))
    },
    title () {
      switch (this.$route.meta.page) {
        case 'followers':
          return 'Seguidores(as) de'
        case 'following':
          return 'Seguidos(as) por'
        case 'suggestions':
          return 'Sugestão de investidores'
        default:
          return ''
      }
    }
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
  },

  async created () {
    client.users.byUsername(this.username).then(u => { this.user = u })
    switch (this.$route.meta.page) {
      case 'followers':
        client.users.fetchFollowers(this.username).then(f => { this.users = f })
        break
      case 'following':
        client.users.fetchFollowing(this.username).then(f => { this.users = f })
        break
      case 'suggestions':
        client.profile.getSuggestedFriends(50).then(f => { this.users = f })
        break
      default:
        break
    }
  }
}
</script>
<style lang="scss" scoped>
.border-desktop {
  border-width: 1px;
  border-style: solid;
  border-color: $gray-5;
  border-radius: $radius;
}
@media screen and (max-width: 768px) {
  .borderless-mobile {
    border-style: none;
    padding: 0 !important;
  }
}
</style>
