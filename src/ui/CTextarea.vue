<template>
<div class="field">

  <div class="control"
       :class="{ 'has-icons-left': left, 'has-icons-right': right }"
  >
    <textarea
      class="textarea"
      :type="type"
      v-bind="$attrs"
      :placeholder="placeholder"
      :class="{ 'is-danger': invalid }"
      :value="modelValue"
      :rows="rows"
      @input="input"
    />
  </div>
  <span v-if="left" class="icon is-small is-left">
    <font-awesome-icon class="is-clickable" @click="submit" :icon="icon" />
  </span>
  <span v-if="right" class="icon is-right is-small mt-1">
    <font-awesome-icon
      class="is-clickable"
      :class="{'has-text-success': !invalid, 'has-text-danger': invalid}"
      @click="submit"
      :icon="icon" />
  </span>

  <div class="is-flex is-justify-content-flex-end">
    <p v-if="!invalid && message" class="help is-success"> {{ message }} </p>
    <p v-if="invalid && error" class="help is-danger"> {{ error }} </p>
  </div>
</div>
</template>

<script>
export default {
  name: 'CTextarea',
  inheritAttrs: false,

  props: {
    // Form
    modelValue: { type: [String, Number], default: '' },
    type: { type: String, default: 'text' },
    placeholder: { type: String, default: '' },
    maxRows: { type: Number, default: 4 },

    // Validation
    message: { type: String, default: null },
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
    },
    rows () {
      return Math.min((this.modelValue.match(/\r?\n/g) || '').length + 1, this.maxRows)
    }
  },

  methods: {
    input (e) {
      this.$emit('input', e)
      this.$emit('update:modelValue', e.target.value.trim())
    },
    submit () {
      if (!this.invalid) {
        this.$emit('submit')
      }
    }
  }
}
</script>

<style scoped >
.textarea {
  border-radius: 20px;
}
</style>
