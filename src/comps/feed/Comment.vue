<template>
<article class="media my-0">
  <!-- Image -->
  <figure class="media-left image is-48x48">
    <img class="is-rounded" :src="comment.user.picture">
  </figure>

  <div class="media-content">
    <div class="comment has-background-light p-5">
      <!-- User -->
      <div class="level is-mobile mb-2">
        <div class="level-left">
          <strong class="level-item"> @{{ comment.user.username }} </strong>
        </div>
        <div class="level-right">
          <small class="level-item has-text-grey">
            <TimeAgo :time="comment.createdAt" />
          </small>
        </div>
      </div>

     <!--
        Comment

        Style added to allow rendering of new lines `\n`. Adapted from:
          https://stackoverflow.com/a/22896536

        Added the style based on the following link:
          https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Text/Wrapping_Text#breaking_long_words
      -->
      <p
        class="has-text-justified"
        style="line-height: 125%; overflow-wrap: break-word; white-space:pre-wrap;">
        <Linkify :text="comment.text" />
      </p>
    </div>

    <!-- TODO -->
    <!-- Buttons -->
    <!-- <div class="pl-1 mb-1 level is-mobile">
      <div class="level-left">
        <span class="level-item">Curtir</span>
        <span class="level-item">&bull;</span>
        <span class="level-item">
          <span class="icon-text">
            <span class="icon" :class="{'has-text-primary': liked}">
              <font-awesome-icon icon="heart" size="sm" />
            </span>
            <span>{{ likes }}</span>
          </span>
        </span>
        <span class="level-item">&bull;</span>
        <span class="level-item">Responder</span>
      </div>
    </div> -->

    <!-- TODO -->
    <!-- Replies -->
    <!-- <div>
      <span class="icon-text has-text-grey">
        <span class="icon">
          <font-awesome-icon icon="angle-right" />
        </span>
        <span>12 respostas</span>
      </span>
    </div> -->
  </div>
</article>
</template>

<script>
import Linkify from '@/comps/utils/Linkify'
import TimeAgo from '@/comps/utils/TimeAgo'

export default {
  name: 'Comment',

  components: {
    Linkify,
    TimeAgo
  },

  props: {
    comment: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
.comment {
  line-height: 90%;
  border-radius: $radius-small $radius-large $radius-large $radius-large;
}

/* Hide border colors */
article .media {
  border: 0px transparent;
}
</style>
