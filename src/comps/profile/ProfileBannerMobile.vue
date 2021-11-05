<template>
<article>
  <div class="columns is-mobile p-4 is-align-self-center mb-0">
    <!-- Image -->
    <div class="column is-narrow has-text-centered p-0">
      <c-avatar :src="user.picture" round size="5.625rem" />
    </div>
    <div class="column p-0 ml-2">
      <div class="pb-4">
        <h5 class="title is-5 m-0"> {{ user.name }} </h5>
        <p> @{{ user.username }} </p>
      </div>

      <!-- Button -->
      <div v-if="isSelf">
        <router-link :to="`/u/${username}/edit`">
          <c-button class="is-primary" left icon="pen">
            Editar Perfil
          </c-button>
        </router-link>
      </div>

      <div v-if="!isSelf">
        <c-button
          class="button is-primary"
          @click="this.user.following ? unfollow() : follow()"
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
  <!-- Description -->
  <!--
    Style added to allow rendering of new lines `\n`. Adapted from:
      https://stackoverflow.com/a/22896536
  -->
  <p class="is-size-6" style="white-space: pre-wrap;">
    {{ user.description }}
  </p>
  <br>
  <div class="is-flex has-text-grey has-text-centered is-justify-content-space-evenly">
      <router-link :to="`/u/${this.user.username}/followers`">
        <p class="has-text-grey-darker">
          <strong class="has-text-primary"> {{ user.followersCount }} </strong>
          <br class="is-hidden-desktop">
          seguidores
        </p>
      </router-link>
      <router-link :to="`/u/${this.user.username}/followers`">
        <p class="has-text-grey-darker">
          <strong class="has-text-primary"> {{ user.followingCount }} </strong>
          <br class="is-hidden-desktop">
          seguindo
        </p>
      </router-link>
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

<style lang="scss" scoped>
</style>
