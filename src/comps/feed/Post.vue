<template>
<article>
  <!-- Text -->
  <p class="post has-text-justified has-text-grey-darker">
    <Linkify :text="post.data.text" />
  </p>

  <br v-if="post.data.picture">

  <!-- Image -->
  <div class="container is-fluid">
    <figure v-if="post.data.picture" class="image">
      <img :src="post.data.picture" class="mx-auto" style="max-height: 60vh; width: auto">
    </figure>
  </div>
</article>
</template>

<script>
import Linkify from '@/comps/utils/Linkify'

export default {
  name: 'Post',

  components: {
    Linkify
  },

  props: {
    post: {
      type: Object,
      required: true
    }
  }
}
</script>
<style scoped>
/*
  Style added to allow rendering of new lines `\n`. Adapted from:
    https://stackoverflow.com/a/22896536

  Added the style based on the following link:
    https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Text/Wrapping_Text#breaking_long_words
 */
p {
  overflow-wrap: break-word;
  white-space: pre-wrap;
}

img {
  border-radius: 25px;
}
</style>
