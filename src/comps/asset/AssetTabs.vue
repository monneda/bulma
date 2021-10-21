<template>
<div class="tabs">
  <ul>
    <template v-for="({days, text}, i) of items" :key="text">
      <li :class="{ 'is-active': i === selected }">
        <a @click="clicked(i, days)"> {{ text }} </a>
      </li>
    </template>
  </ul>
</div>
</template>

<script>
import { getDaysInYear } from '@/utils.js'

const ITEMS = [
  { days: 7, text: '1 semana' },
  { days: 30, text: '1 mês' },
  { days: 90, text: '3 meses' },
  { days: getDaysInYear(), text: 'YTD' }
]

export default {
  name: 'AssetTabs',

  data: () => ({
    selected: 0,
    items: ITEMS
  }),

  methods: {
    clicked (index, days) {
      this.selected = index
      this.$emit('update', days)
    }
  }
}
</script>
