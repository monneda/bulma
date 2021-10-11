<template>
<nav class="level is-mobile">
  <!-- Like -->
  <button
    class="level-item button is-white is-transparent px-0"
    @click="item.like ? $emit('unreact', item) : $emit('react', item)"
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
  <button
    class="level-item button is-white is-transparent px-0"
    @click="$emit('share', item)"
  >
    <span class="icon-text">
      <span class="icon is-hidden-touch">
        <font-awesome-icon icon="share" size="lg" />
      </span>
      <span class="has-text-dark"> Compartilhar </span>
    </span>
  </button>

  <!-- Send -->
  <button
    class="level-item button is-white is-transparent px-0"
    @click="$emit('send', item)"
  >
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
    item: {
      type: Object,
      required: true
    }
  }
}
</script>
