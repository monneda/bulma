<template>
<nav class="level is-mobile">
  <!-- Like -->
  <button
    class="level-item button is-white is-transparent px-0"
    @click="react"
  >
    <span class="icon-text">
      <span
        class="icon is-hidden-touch"
        :class="{ 'has-text-primary': item.like }"
      >
        <font-awesome-icon icon="heart" size="lg" />
      </span>
      <span class="has-text-dark"> Curtir </span>
    </span>
  </button>

  <!-- Share -->
  <button class="level-item button is-white is-transparent px-0">
    <span class="icon-text">
      <span class="icon is-hidden-touch">
        <font-awesome-icon icon="share" size="lg" />
      </span>
      <span class="has-text-dark"> Compartilhar </span>
    </span>
  </button>

  <!-- Send -->
  <button class="level-item button is-white is-transparent px-0">
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
import { FEED_EVENT_REACT, FEED_EVENT_UNREACT } from '@/store/type.actions'

export default {
  name: 'ItemButtonList',

  props: {
    item: {
      type: Object,
      required: true
    }
  },

  methods: {
    react () {
      if (this.item.like === true) {
        return this.$store.dispatch(FEED_EVENT_UNREACT, this.item)
      }
      return this.$store.dispatch(FEED_EVENT_REACT, this.item)
    }
  }
}
</script>
