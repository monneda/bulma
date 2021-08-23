<template>
  <div class="field has-addons">
    <p class="control">
      <button class="button">
        <span class="has-text-dark button-width">1D</span>
      </button>
    </p>
    <p class="control">
      <button class="button">
        <span class="has-text-dark button-width">1S</span>
      </button>
    </p>
    <p class="control">
      <button class="button">
        <span class="has-text-dark button-width">1M</span>
      </button>
    </p>
    <p class="control">
      <button class="button">
        <span class="has-text-dark button-width">3M</span>
      </button>
    </p>
    <p class="control">
      <button class="button">
        <span class="has-text-dark button-width">6M</span>
      </button>
    </p>
    <p class="control">
      <button class="button">
        <span class="has-text-dark button-width">YTD</span>
      </button>
    </p>
    <p class="control">
      <button class="button">
        <span class="has-text-dark button-width">1A</span>
      </button>
    </p>
  </div>
</template>

<script>

export default {
  name: 'Variation',

  data: () => ({
    comment: '',
    portfolios: ['a', 'b', 'c']
  }),

  computed: {
    rows () {
      const newlines = this.comment.split('\n').length
      return Math.max(newlines, 1)
    }
  }
}
</script>

<style scoped>
textarea {
  resize: none;
}

.button-width {
  width: 2rem;
}
</style>
