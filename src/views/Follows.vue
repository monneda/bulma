<template>
<Navbar class="has-shadow" />

<br>

<div class="container">
  <div class="columns is-centered mx-0">
    <div class="column is-two-thirds">
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
            <IconUser :src="user.picture" class="mx-4"/>

            <!-- Text -->
            <span class="is-size-5">
              {{ $route.meta.followers === true
                    ? 'Seguidores(as) de'
                    : 'Seguidos(as) por'
              }}
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
        <div class="field is-hidden-desktop">
          <p class="control has-icons-left">
            <input v-model="search" class="input" type="text" placeholder="Pesquisar...">
            <span class="icon is-left has-text-primary">
              <font-awesome-icon icon="search" />
            </span>
          </p>
        </div>

        <hr class="is-hidden-touch">

        <!-- Followers -->
        <div class="columns is-flex-wrap-wrap">
          <div v-for="(user, i) of searched" :key="i" class="column is-half">
            <FollowTile :user="user" />
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import client from '@/commons/client.api'

import Navbar from '@/comps/navbar/Navbar'
import IconUser from '@/comps/utils/IconUser'

import FollowTile from '@/comps/follows/FollowTile'

export default {
  name: 'Followers',

  components: {
    Navbar,
    IconUser,
    FollowTile
  },

  props: {
    username: {
      type: String,
      required: true
    }
  },

  data: () => ({
    user: {},
    followers: [],
    search: ''
  }),

  computed: {
    searched () {
      const re = new RegExp(this.search)
      return this.followers.filter(i => i.name.match(re) || i.username.match(re))
    }
  },

  async created () {
    client.users.byUsername(this.username).then(u => { this.user = u })
    this.$route.meta.followers === true
      ? client.users.fetchFollowers(this.username).then(f => { this.followers = f })
      : client.users.fetchFollowing(this.username).then(f => { this.followers = f })
  }
}
</script>
