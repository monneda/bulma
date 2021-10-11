<template>
<div class="is-flex is-flex-direction-column is-align-items-center">
  <span class="icon" v-bind="$attrs">
    <font-awesome-icon :icon="icon" size="lg" />
  </span>
  <span v-if="text" class="is-size-7"> {{ text }} </span>
</div>
</template>

<script>
export default {
  name: 'CMenuIcon',

  props: {
    icon: { type: String, required: true },
    text: { type: String, default: '' }
  }
}
</script>
