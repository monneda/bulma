<template>
<article class="media">
  <!-- Image -->
  <figure class="media-left">
    <figure class="image is-48x48">
      <img class="is-rounded" src="https://placekitten.com/64/64">
    </figure>
  </figure>

  <div class="media-content" @click="toggle">
    <textarea class="textarea has-background-white-ter is-clickable is-clipped" readonly rows="1">
      Escreva um comentário...
    </textarea>
  </div>
</article>
</template>

<script>
export default {
  name: 'CommentCreate'
}
</script>

<style scoped>
textarea {
  resize: none;
  border-radius: 25px;
}

/* Hide border colors */
article .media {
  border: 0px transparent;
}
</style>
