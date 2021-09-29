<template>
<button class="button is-white">
  <span class="icon has-background-primary-lighter has-text-primary-darker p-5">
    <font-awesome-icon :icon="icon" size="lg" />
  </span>
  <span class="has-text-grey has-text-weight-bold pl-3 is-size-5"> {{ label }} </span>
</button>
</template>

<script>
export default {
  name: 'PostFormButton',

  props: {
    label: {
      type: String,
      required: true
    },
    icon: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
.icon {
  height: 2rem;
  width: 2rem;
  border-radius: $radius;
}
</style>
