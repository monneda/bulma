<template>
<div class="field">

  <div class="control">
    <textarea
      class="textarea"
      :type="type"
      v-bind="$attrs"
      :placeholder="placeholder"
      :class="{ 'is-danger': invalid }"
      :value="modelValue"
      :rows="rows"
      @input="input"
      @keydown.enter.exact.prevent="submit"
    />
  </div>

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
    validator: { type: Function, default: () => () => true }
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
