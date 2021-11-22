<template>
<article :class="{'notification-new': !isViewed}">
  <a class="is-flex is-align-items-center p-1 has-text-grey-dark is-justify-content-flex-start" @click="router">
    <!-- Picture -->
    <router-link :to="`/u/${notification.user.username}`" class="icon is-large">
      <c-avatar :src="notification.user.picture" round />
    </router-link>

    <!-- Notification -->
    <div class="mx-2">
      <p>
        <router-link :to="`/u/${notification.user.username}`">
          <strong> @{{ notification.user.username }} </strong>
        </router-link>
        <span class="has-text-dark pl-1"> {{ message }} </span>
        <span class="has-text-dark" v-if="text"> {{text}}</span>
      </p>

      <!-- Time -->
      <small>
        <TimeAgo class="has-text-dark" :time="notification.createdAt" />
      </small>
    </div>
  </a>
</article>
</template>

<script>
import TimeAgo from '@/comps/utils/TimeAgo'

const TEXT = {
  USER_COMMENT_EVENT: 'comentou na sua postagem: ',
  USER_FOLLOWED: 'te seguiu',
  USER_LIKE_EVENT: 'curtiu sua postagem',
  USER_TAGGED_COMMENT_EVENT: 'te marcou em um comentário: ',
  USER_COMMENT_EVENT_COMMENTED: 'comentou em uma publicação que você interagiu: '
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
    },
    text () {
      if (this.notification.data && this.notification.data.text) {
        return this.notification.data.text.length < 40
          ? this.notification.data.text
          : this.notification.data.text.substring(0, 40) + '...'
      } else {
        return ''
      }
    }
  },

  methods: {
    router () {
      switch (this.notification.type) {
        case 'USER_COMMENT_EVENT':
          this.$router.push(`/p/${this.notification.data.eventId}`)
          break
        case 'USER_LIKE_EVENT':
          this.$router.push(`/p/${this.notification.data.eventId}`)
          break
        case 'USER_TAGGED_COMMENT_EVENT':
          this.$router.push(`/p/${this.notification.data.eventId}`)
          break
        case 'USER_FOLLOWED':
          this.$router.push(`/u/${this.notification.user.username}`)
          break
        case 'USER_COMMENT_EVENT_COMMENTED':
          this.$router.push(`/p/${this.notification.data.eventId}`)
          break
        default:
          this.$router.push(`/u/${this.notification.user.username}`)
      }
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
