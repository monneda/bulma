<template>
    <div class="level">
      <router-link :to="'/u/'+user.username" style="overflow: hidden">
        <div class="level-left has-text-gray-1">
          <!-- Image -->
          <div class="level-item">
            <span class="icon is-35x35">
              <IconUser :src="user.picture" size="sm"/>
            </span>
          </div>

          <!-- Username -->
          <div class="level-item">
            <div style="line-height: 110%">
              <span class="is-subtitle-size has-text-weight-bold">@{{user.username}}</span>
              <p class="has-text-grey is-subtitle-size2">{{user.name}}</p>
            </div>
          </div>
        </div>
      </router-link>
      <!-- Button -->
      <div class="level-right">
        <div class="level-item">
          <button
            class="button is-primary is-small has-text-weight-bold"
            :class="user.following ? 'is-active has-text-white' : 'is-light'"
            style="width: 90px;"
            @click="clicked()"
          >
            <span>{{ user.following ? 'Seguindo' : 'Seguir' }}</span>
            <span v-if="user.following" class="icon is-small">
              <font-awesome-icon icon="check" size="1x"></font-awesome-icon>
            </span>
          </button>
        </div>
      </div>
    </div>
</template>

<script>
import IconUser from './IconUser'
export default {
  name: 'SimpleFollowCard',
  components: {
    IconUser
  },

  props: {
    user: {
      required: true,
      type: Object
    }
  },

  methods: {
    follow () {
      this.$emit('follow', this.user)
    },
    unfollow () {
      this.$emit('unfollow', this.user)
    },
    clicked () {
      this.user.following ? this.$emit('unfollow', this.user) : this.$emit('follow', this.user)
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
