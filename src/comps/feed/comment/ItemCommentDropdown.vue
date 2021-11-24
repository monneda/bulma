<template>
<div class="dropdown is-right" :class="{ 'is-active': active }">
  <!-- Button -->
  <div class="dropdown-trigger">
    <c-button
      class="is-light is-small"
      @click="active = !active"
      left
      :icon="['fa', 'ellipsis-v']"
    />
  </div>

  <!-- Menu -->
  <div class="dropdown-menu">
    <div class="dropdown-content">
      <a class="dropdown-item" @click="remove"> Deletar </a>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'ItemCommentDropdown',

  data: () => ({
    active: false
  }),

  methods: {
    remove () {
      this.$emit('remove')
      this.active = false
    }
  }
}
</script>
