<template>
<div class="dropdown" :class="{ 'is-active': active }">
  <div v-if="$slots.trigger" class="dropdown-trigger">
    <slot name="trigger" />
  </div>

  <div class="dropdown-menu">
    <div class="dropdown-content">
      <template v-for="item, i of items" :key="i">
        <a class="dropdown-item">
          <slot name="item" :item="item" :index="i" />
        </a>
      </template>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'CDropdown',

  props: {
    items: { type: Array, default: () => [] },
    active: { type: Boolean, default: false }
  }
}
</script>
