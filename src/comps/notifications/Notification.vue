<template>
<article :class="{'notification-new': !isViewed}">
  <div class="is-flex is-align-items-center p-1 has-text-grey-dark">
    <!-- Picture -->
    <router-link :to="`/u/${notification.user.username}`" class="icon is-large mx-2">
      <c-avatar :src="notification.user.picture" round />
    </router-link>

    <!-- Notification -->
    <router-link :to="`/p/${notification.data.eventId}`" class="mx-2">
      <p>
        <router-link :to="`/u/${notification.user.username}`">
          <strong> @{{ notification.user.username }} </strong>
        </router-link>
        <span class="has-text-dark pl-1"> {{ message }} </span>
      </p>

      <!-- Time -->
      <small>
        <router-link :to="`/p/${notification.data.eventId}`">
          <TimeAgo class="has-text-dark" :time="notification.createdAt" />
        </router-link>
      </small>
    </router-link>
  </div>
</article>
</template>

<script>
import TimeAgo from '@/comps/utils/TimeAgo'

const TEXT = {
  USER_COMMENT_EVENT: 'comentou na sua postagem',
  USER_FOLLOWED: 'te seguiu',
  USER_LIKE_EVENT: 'curtiu sua postagem',
  USER_TAGGED_COMMENT_EVENT: 'te marcou em um comentário'
}

export default {
  name: 'Notification',

  components: {
    TimeAgo
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
