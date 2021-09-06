<template>
<div class="navbar-item has-dropdown is-hoverable is-flex is-align-items-center">
  <div class="button navbar-link has-background-grey-lighter is-medium">
    <figure class="image is-32x32">
      <img class="is-rounded" src="https://placekitten.com/64/64">
    </figure>
    <span class="ml-3">{{ user }}</span>
  </div>
</div>
</template>

<script>
export default {
  name: 'NavbarItemUser',

  props: {
    user: {
      type: String,
      required: true
    }
  }
}
</script>
