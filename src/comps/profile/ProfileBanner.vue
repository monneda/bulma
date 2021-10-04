<template>
<article>
  <div class="columns">
    <!-- Image -->
    <div class="column is-one-fifth">
      <figure class="image is-128x128 mx-auto">
        <img class="is-rounded" :src="user.picture">
      </figure>
    </div>

    <div class="column">
      <div class="level">
        <!-- Name -->
        <div class="level-left">
          <div class="level-item">
            <div class="has-text-centered-mobile">
              <h4 class="title is-size-4"> {{ user.name }} </h4>
              <p> @{{ user.username }} </p>
            </div>
          </div>
        </div>

        <!-- Button -->
        <div v-if="isSelf" class="level-right">
          <div class="level-item">
            <button class="button is-primary">
              <span class="icon-text">
                <span class="icon">
                  <font-awesome-icon icon="pen" />
                </span>
                <span> Editar perfil </span>
              </span>
            </button>
          </div>
        </div>
      </div>

      <hr>

      <!-- Stats -->
      <div class="level is-mobile has-text-centered-touch">
        <div class="level-left">
          <!-- Wallets -->
          <div class="level-item px-2">
            <p>
              <strong class="has-text-primary"> 10 </strong>
              <br class="is-hidden-desktop">
              carteras
            </p>
          </div>

          <!-- Followers -->
          <div class="level-item px-2">
            <p>
              <strong class="has-text-primary"> {{ user.followersCount }} </strong>
              <br class="is-hidden-desktop">
              seguidores
            </p>
          </div>

          <!-- Following -->
          <div class="level-item px-2">
            <p>
              <strong class="has-text-primary"> {{ user.followingCount }} </strong>
              <br class="is-hidden-desktop">
              seguindo
            </p>
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
  name: 'ProfileBanner',

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

  async created () {
    this.user = await client.users.byUsername(this.username)
  }
}
</script>
