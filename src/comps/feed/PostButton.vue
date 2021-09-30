<template>
<button class="button is-white is-transparent">
  <span class="icon-text">
    <span class="icon is-hidden-touch">
      <font-awesome-icon v-if="icon" :icon="icon" size="lg" />
    </span>
    <span class="has-text-dark"> {{ label }} </span>
  </span>
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
      required: false
    },
    iconColor: {
      type: String,
      default: ''
    }
  }
}
</script>
