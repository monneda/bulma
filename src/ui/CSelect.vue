<template>
<div class="select">
  <select @input="$emit('update:modelValue', $event.target.value)">
    <template v-for="{ value, label } of options" :key="label">
      <option :value="value"> {{ label }} </option>
    </template>
  </select>
</div>
</template>

<script>
export default {
  name: 'CSelect',

  props: {
    options: { type: Array, default: () => [] },
    modelValue: { type: String, default: '' }
  }
}
</script>
