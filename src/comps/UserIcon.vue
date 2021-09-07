<template>
<div class="level">
  <div class="level-left">
    <div class="level-item">
      <figure class="image is-48x48">
        <img class="is-rounded" src="https://placekitten.com/64/64">
      </figure>
    </div>
    <div class="level-item">
      <div>
        <strong>{{ username }}</strong>
        <br>
        <small>{{ label }}</small>
      </div>
    </div>
  </div>

  <div class="level-right">
    <div class="level-item">
      <slot></slot>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'UserIcon',

  props: {
    username: {
      type: String,
      required: true
    },
    label: {
      type: String,
      default: ''
    }
  }
}
</script>
