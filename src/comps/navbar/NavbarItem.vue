<template>
<router-link :to="to" class="navbar-item">
  <div class="is-flex is-flex-direction-column is-align-items-center">
    <span class="icon is-relative">
      <span v-if="counter && counter > 0" class="badge"> {{ counter }} </span>
      <font-awesome-icon :icon="icon" />
    </span>
    <span v-if="label" class="is-size-7"> {{ label }} </span>
  </div>
</router-link>
</template>

<script>
export default {
  name: 'NavbarItem',

  props: {
    to: { type: String, required: true },
    icon: { type: String, required: true },
    label: { type: String, required: true },
    counter: { type: Number, default: null }
  }
}
</script>
