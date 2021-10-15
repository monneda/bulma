<template>
<nav class="level is-mobile">
  <!-- Like -->
  <div class="level-item">
    <button
      class="button is-white is-transparent is-fullwidth"
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
  </div>

  <!-- TODO -->
  <!-- Share -->
  <!-- <div class="level-item">
    <button
      class="button is-white is-transparent is-fullwidth"
      @click="$emit('share', item)"
    >
      <span class="icon-text">
        <span class="icon is-hidden-touch">
          <font-awesome-icon icon="share" size="lg" />
        </span>
        <span class="has-text-dark"> Compartilhar </span>
      </span>
    </button>
  </div> -->

  <!-- TODO -->
  <!-- Send -->
  <!-- <div class="level-item">
    <button
      class="button is-white is-transparent is-fullwidth"
      @click="$emit('send', item)"
    >
      <span class="icon-text">
        <span class="icon is-hidden-touch">
          <font-awesome-icon icon="paper-plane" size="lg" />
        </span>
        <span class="has-text-dark"> Enviar </span>
      </span>
    </button>
  </div> -->
</nav>
</template>

<script>
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
      if (this.item.like) {
        return this.$emit('unreact', this.item)
      }
      this.$emit('react', this.item)
    }
  }
}
</script>
