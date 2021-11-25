<template>
<div class="field">
  <input v-bind="$attrs" id="switch" type="checkbox" :value=modelValue class="switch is-rounded" @click="toggle">
  <label for="switch">
    <slot>
    </slot>
  </label>
</div>
</template>

<script>
export default {
  name: 'CSwitch',
  inheritAttrs: false,

  props: {
    modelValue: { type: Boolean, required: true }
  },

  methods: {
    toggle (e) {
      this.$emit('update:modelValue', e.target.checked)
    }
  }
}
</script>
