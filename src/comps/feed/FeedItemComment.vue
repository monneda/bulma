<template>
<article class="media">
  <!-- Image -->
  <div class="media-left">
    <router-link :to="`/u/${comment.user.username}`">
      <c-avatar :src="comment.user.picture" round size="2.5rem" />
    </router-link>
  </div>

  <div class="media-content">
    <div class="comment has-background-light p-5">
      <div class="is-flex is-justify-content-space-between is-align-items-center">
        <!-- Username -->
        <router-link :to="`/u/${comment.user.username}`">
          <strong class="has-text-gray-1">
            @{{ comment.user.username }}
          </strong>
        </router-link>

        <div class="is-flex is-align-items-center">
          <!-- Timestamp -->
          <small class="has-text-grey">
            <TimeAgo :time="comment.createdAt" />
          </small>

          <!-- Dropdown -->
          <FeedItemCommentDropdown
            v-if="isSelf"
            @remove="remove"
          />
        </div>
      </div>

      <!-- Comment -->
      <p class="mt-2 has-text-justified-desktop">
        <Linkify :text="comment.text" />
      </p>
    </div>
  </div>
</article>
</template>

<script>
import { FEED_COMMENT_DELETE } from '@/store/type.actions'

import Linkify from '@/comps/utils/Linkify'
import TimeAgo from '@/comps/utils/TimeAgo'

import FeedItemCommentDropdown from './FeedItemCommentDropdown'

export default {
  name: 'FeedItemComment',

  components: {
    Linkify,
    TimeAgo,
    FeedItemCommentDropdown
  },

  props: {
    comment: {
      type: Object,
      required: true
    }
  },

  computed: {
    isSelf () {
      return this.$store.state.user.profile.username === this.comment.user.username
    }
  },

  methods: {
    remove () {
      this.$store.dispatch(FEED_COMMENT_DELETE, this.comment)
    }
  }
}
</script>

<style lang="scss" scoped>
.comment {
  line-height: 90%;
  border-radius: $radius-small $radius-large $radius-large $radius-large;
}

.has-text-gray-1 {
  color: $gray-1;
}

/* Hide border colors */
.media {
  border: 0px transparent;
}

/*
Style added to allow rendering of new lines `\n`. Adapted from:
  https://stackoverflow.com/a/22896536

Added the style based on the following link:
  https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Text/Wrapping_Text#breaking_long_words
*/
p {
  line-height: 125%;
  overflow-wrap: anywhere;
  white-space:pre-wrap;
}
</style>
