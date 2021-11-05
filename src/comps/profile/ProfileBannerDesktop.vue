<template>
<article>
  <div class="columns">
    <!-- Image -->
    <div class="column is-one-quarter is-flex is-justify-content-center is-align-items-center">
      <c-avatar :src="user.picture" round size="10.625rem" />
    </div>

    <div class="column">
      <div class="level">
        <!-- Name -->
        <div class="level-left">
          <div class="level-item">
            <div>
              <h4 class="title is-4"> {{ user.name }} </h4>
              <p> @{{ user.username }} </p>
            </div>
          </div>
        </div>

        <!-- Button -->
        <div v-if="isSelf" class="level-right">
          <div class="level-item">
            <router-link :to="`/u/${username}/edit`">
              <c-button class="is-primary" left icon="pen" >
                Editar perfil
              </c-button>
            </router-link>
          </div>
        </div>

        <div v-if="!isSelf" class="level-right">
          <div class="level-item">
            <c-button class="button is-primary" @click="this.user.following ? unfollow() : follow()"
            >
              <span class="icon-text">
                <span v-if="!user.following" class="icon">
                  <font-awesome-icon icon="plus"/>
                </span>
                <span v-if="user.following" class="icon">
                  <font-awesome-icon icon="check"/>
                </span>
                <span> {{ user.following ? 'Seguindo' : 'Seguir' }} </span>
              </span>
            </c-button>
          </div>
        </div>
      </div>

      <hr style="margin: 1rem 0">

      <!-- Stats -->
      <div class="level is-mobile has-text-centered-touch">
        <div class="level-left">
          <!-- TODO -->
          <!-- Wallets -->
          <!-- <div class="level-item px-2">
            <p>
              <strong class="has-text-primary"> 10 </strong>
              <br class="is-hidden-desktop">
              carteras
            </p>
          </div> -->

          <!-- Followers -->
          <div class="level-item pr-2">
            <router-link :to="`/u/${this.user.username}/followers`">
              <p class="has-text-grey-darker">
                <strong class="has-text-primary"> {{ user.followersCount }} </strong>
                <br class="is-hidden-desktop">
                seguidores
              </p>
            </router-link>
          </div>

          <!-- Following -->
          <div class="level-item">
            <router-link :to="`/u/${this.user.username}/following`">
              <p class="has-text-grey-darker">
                <strong class="has-text-primary"> {{ user.followingCount }} </strong>
                <br class="is-hidden-desktop">
                seguindo
              </p>
            </router-link>
          </div>
        </div>
      </div>

      <!-- Description -->
      <!--
        Style added to allow rendering of new lines `\n`. Adapted from:
          https://stackoverflow.com/a/22896536
      -->
      <p class="is-size-6" style="white-space: pre-wrap;">
        {{ user.description }}
      </p>
    </div>
  </div>
</article>
</template>

<script>
import client from '@/commons/client.api'

export default {
  name: 'ProfileBannerDesktop',
  props: {
    username: {
      type: String,
      required: true
    }
  },

  data: () => ({
    user: {}
  }),

  computed: {
    isSelf () {
      return this.user.username === this.$store.state.user.profile.username
    }
  },

  watch: {
    async username () {
      this.user = await client.users.byUsername(this.username)
    }
  },

  methods: {
    async follow () {
      await client.users.follow(this.user.username)
      this.user.following = true
    },
    async unfollow () {
      await client.users.unfollow(this.user.username)
      this.user.following = false
    }
  },

  async created () {
    this.user = await client.users.byUsername(this.username)
  }
}
</script>
