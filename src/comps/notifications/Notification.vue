<template>
<article :class="{'notification-new': !isViewed}">
  <div class="is-flex is-align-items-center p-1">
    <!-- Picture -->
    <span class="icon is-large mx-2">
      <IconUser :src="notification.user.picture" />
    </span>

    <!-- Notification -->
    <div class="mx-2">
      <p>
        <span class="has-text-weight-bold">
          <router-link :to="`/u/${notification.user.username}`">
            @{{ notification.user.username }}
          </router-link>
        </span>
        <span class="pl-1">
          {{ message }}
        </span>
      </p>

      <!-- Time -->
      <small>
        <TimeAgo :time="notification.createdAt" />
      </small>
    </div>
  </div>
</article>
</template>

<script>
import TimeAgo from '@/comps/utils/TimeAgo'
import IconUser from '@/comps/utils/IconUser'

const TEXT = {
  USER_COMMENT_EVENT: 'comentou na sua postagem',
  USER_FOLLOWED: 'te seguiu',
  USER_LIKE_EVENT: 'curtiu sua postagem',
  USER_TAGGED_COMMENT_EVENT: 'te marcou em um comentário'
}

export default {
  name: 'Notification',

  components: {
    TimeAgo,
    IconUser
  },

  props: {
    notification: {
      type: Object,
      required: true
    }
  },

  computed: {
    message () {
      return TEXT[this.notification.type]
    },
    isViewed () {
      return this.notification.viewedAt !== null
    }
  }
}
</script>

<style lang="scss" scoped>
.notification-new {
  border-top: 0px;
  border-left: 5px solid;
  border-color: $primary;
  background-color: $primary-light;
}
</style>
