<template>
<a class="navbar-item">
  <div class="is-flex is-flex-direction-column is-align-items-center">
    <span class="icon is-small">
      <font-awesome-icon :icon="icon" />
    </span>
    <span class="is-size-7"> {{ label }} </span>
  </div>
</a>
</template>

<script>
export default {
  name: 'NavbarItem',

  props: {
    icon: {
      type: String,
      required: false
    },
    label: {
      type: String,
      required: true
    }
  }
}
</script>
