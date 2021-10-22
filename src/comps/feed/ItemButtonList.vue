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
        <span class="has-text-dark">
          {{ item.like === true ? 'Curtido' : 'Curtir' }}
        </span>
      </span>
    </button>
  </div>
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
