<template>
<button class="button is-primary is-light">
  <span class="icon-text">
    <span class="icon has-text-primary">
      <font-awesome-icon :icon="icon" />
    </span>
    <span class="has-text-grey has-text-weight-bold"> {{ label }} </span>
  </span>
</button>
</template>

<script>
export default {
  name: 'ItemFormEditButton',

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
