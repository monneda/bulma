<template>
<article>
  <!-- User -->
  <div class="level is-mobile">
    <div class="level-left">
      <div class="level-item is-m">
        <figure class="image is-48x48">
          <img class="is-rounded" :src="post.owner.picture">
        </figure>
      </div>

      <!-- Info -->
      <div class="level-item">
        <div>
          <p><strong>  @{{ post.owner.username }} </strong></p>
          <p><small>
            <TimeAgo :time="post.timestamp" />
          </small></p>
        </div>
      </div>
    </div>
  </div>

  <!-- Post -->
  <div class="is-size-6">
    <!--
      Style added to allow rendering of new lines `\n`. Adapted from:
        https://stackoverflow.com/a/22896536

      Added the style based on the following link:
        https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Text/Wrapping_Text#breaking_long_words
    -->
    <p
      class="has-text-justified has-text-grey-darker"
      style="overflow-wrap: break-word; white-space:pre-wrap;">
      <Linkify :text="post.data.text" />
    </p>

    <div v-if="post.data.picture">
      <br>

      <figure class="image">
        <img alt="Post image" :src="post.data.picture" style="border-radius: 25px;">
      </figure>
    </div>
  </div>

  <br>

  <!-- Share info -->
  <nav class="level is-mobile">
    <div class="level-left">
      <div class="level-item">
        <span class="icon-text">
          <span class="icon has-text-primary">
            <font-awesome-icon icon="heart" />
          </span>
          <span> {{ post.likeCount }} curtida(s) </span>
        </span>
      </div>
    </div>

    <div class="level-right is-hidden-touch">
      <span class="level-item"> {{ post.commentCount }} comentário(s) </span>
      <!-- TODO -->
      <!-- <span class="level-item"> 11 compartilhamentos </span> -->
    </div>
  </nav>

  <!-- Buttons -->
  <hr class="my-1">
  <div class="level is-mobile my-0">
    <post-button
      class="px-0 level-item"
      :class="{ 'has-text-primary': post.like }"
      icon="heart"
      label="Curtir"
    />
    <post-button class="px-0 level-item" icon="comment" label="Comentar" />
    <post-button class="px-0 level-item" icon="share" label="Compartilhar" />
    <post-button class="px-0 level-item" icon="paper-plane" label="Enviar" />
  </div>
  <hr class="my-1">

  <br>

  <comment-form class="my-0" />

  <br>

  <CommentList :id="post.id" />
</article>
</template>

<script>
import client from '@/commons/client.api'

import Linkify from '@/comps/utils/Linkify'
import TimeAgo from '@/comps/utils/TimeAgo'
import CommentList from '@/comps/feed/CommentList'
import PostButton from '@/comps/feed/PostButton'
import CommentForm from '@/comps/forms/CommentForm'

export default {
  name: 'Post',

  components: {
    Linkify,
    TimeAgo,
    CommentList,
    PostButton,
    CommentForm
  },

  props: {
    post: {
      type: Object,
      required: true
    }
  },

  async created () {
    this.comments = await client.comments.byPostId(this.post.id)
  }
}
</script>
<style>
/* Hide border colors */
.c-is-borderless {
  border: 0px transparent;
}
</style>
