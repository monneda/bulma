<template>
<div class="field">
  <label v-if="label" class="label">
    {{ label }}
  </label>

  <div
    class="control"
    :class="{ 'has-icons-left': left, 'has-icons-right': right }
  ">
    <input
      class="input"
      :type="type"
      :placeholder="placeholder"
      :class="{ 'is-danger': invalid }"
      @input="input"
    >

    <span v-if="left" class="icon is-small is-left">
      <font-awesome-icon :icon="icon" />
    </span>
    <span v-if="right" class="icon is-small is-right">
      <font-awesome-icon :icon="icon" />
    </span>
  </div>

  <p v-if="invalid" class="help is-danger"> {{ error }} </p>
</div>
</template>

<script>
export default {
  name: 'CInput',

  props: {
    // Form
    modelValue: { type: String, default: '' },
    label: { type: String, default: null },
    type: { type: String, default: 'text' },
    placeholder: { type: String, default: '' },

    // Validation
    error: { type: String, default: null },
    validator: { type: Function, default: () => () => true },

    // Icon
    icon: { type: String, default: null },
    left: { type: Boolean, default: false },
    right: { type: Boolean, default: false }
  },

  computed: {
    invalid () {
      return !this.validator(this.modelValue)
    }
  },

  methods: {
    input (e) {
      this.$emit('input', e)
      this.$emit('update:modelValue', e.target.value)
    }
  }
}
</script>
