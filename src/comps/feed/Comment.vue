<template>
<article class="media my-0">
  <!-- Image -->
  <figure class="media-left">
    <p class="image is-48x48">
      <img class="is-rounded" src="https://placekitten.com/64/64">
    </p>
  </figure>

  <div class="media-content">
    <div class="comment has-background-light p-5">
      <!-- User -->
      <div class="level is-mobile mb-2">
        <div class="level-left">
          <strong class="level-item">henrich.vaneli</strong>
        </div>
        <div class="level-right">
          <small class="level-item has-text-grey">5h atrás</small>
        </div>
      </div>

      <!-- Comment -->
      <p>
        Vc sempre tão sábia, aprendi muito com vc mesmo sendo por pouco tempo.
      </p>
    </div>

    <!-- Buttons -->
    <div class="pl-1 mb-1 level is-mobile">
      <div class="level-left">
        <span class="level-item">Curtir</span>
        <span class="level-item">&bull;</span>
        <span class="level-item" @click="like">
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
    </div>

    <!-- Replies -->
    <div>
      <span class="icon-text has-text-grey">
        <span class="icon">
          <font-awesome-icon icon="angle-right" />
        </span>
        <span>12 respostas</span>
      </span>
    </div>
  </div>
</article>
</template>

<script>
export default {
  name: 'Comment',

  data: () => ({
    liked: false,
    likes: 0
  }),

  methods: {
    like () {
      if (this.liked === true) {
        this.likes--
      } else {
        this.likes++
      }
      this.liked = !this.liked
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
