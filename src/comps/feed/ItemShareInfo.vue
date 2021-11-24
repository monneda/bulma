<template>
<!-- Share info -->
<nav class="level is-mobile">
  <div class="level-left">

    <!-- Likes -->
    <div class="level-item">
      <span class="icon-text">
        <span class="icon has-text-primary">
          <font-awesome-icon icon="heart" />
        </span>
        <span> {{ item.likeCount }} curtida(s) </span>
      </span>
    </div>
  </div>

  <div class="level-right is-hidden-touch">
    <!-- Comments -->
    <span class="level-item"> {{ item.commentCount }} comentário(s) </span>
    <!-- TODO: Shares -->
    <!-- <span class="level-item"> 11 compartilhamentos </span> -->
  </div>
</nav>
</template>

<script>
export default {
  name: 'ItemShareInfo',

  props: {
    item: {
      type: Object,
      required: true
    }
  }
}
</script>
