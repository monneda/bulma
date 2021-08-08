<template>
<template v-if="label">
  <span class="icon-text">
    <span class="icon">
      <font-awesome-icon :icon="icon" />
    </span>
    <span v-if="label">{{ label }}</span>
  </span>
</template>

<template v-else>
  <span class="icon">
    <font-awesome-icon :icon="icon" />
  </span>
</template>
</template>

<script>
export default {
  name: 'Icon',
  props: ['icon', 'label']
}
</script>
