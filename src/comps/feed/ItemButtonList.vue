<template>
<nav class="level is-mobile">
  <!-- Like -->
  <button class="level-item button is-white is-transparent px-0" @click="like">
    <span class="icon-text">
      <span class="icon is-hidden-touch" :class="{ 'has-text-primary': liked }">
        <font-awesome-icon icon="heart" size="lg" />
      </span>
      <span class="has-text-dark"> Curtir </span>
    </span>
  </button>

  <!-- Share -->
  <button class="level-item button is-white is-transparent px-0" @click="$emit('share')">
    <span class="icon-text">
      <span class="icon is-hidden-touch">
        <font-awesome-icon icon="share" size="lg" />
      </span>
      <span class="has-text-dark"> Compartilhar </span>
    </span>
  </button>

  <!-- Send -->
  <button class="level-item button is-white is-transparent px-0" @click="$emit('send')">
    <span class="icon-text">
      <span class="icon is-hidden-touch">
        <font-awesome-icon icon="paper-plane" size="lg" />
      </span>
      <span class="has-text-dark"> Enviar </span>
    </span>
  </button>
</nav>
</template>

<script>
export default {
  name: 'ItemButtonList',

  props: {
    liked: {
      type: Boolean,
      default: false
    }
  },

  methods: {
    like () {
      if (this.liked === true) {
        return this.$emit('unlike')
      }
      return this.$emit('like')
    }
  }
}
</script>
