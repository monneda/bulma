<template>
<table class="table">
  <thead>
    <tr>
      <th v-for="key of keys" :key="key">
        <div
          class="is-flex is-justify-content-space-between is-align-items-center"
          :class="{ 'is-clickable': sortable }"
          @click="toggle(key)"
        >
          <!-- Column title -->
          <span>
            {{ key.charAt(0).toUpperCase() + key.substr(1).toLowerCase() }}
          </span>

          <!-- Sort icon -->
          <span v-if="sortable" class="icon">
            <font-awesome-icon :icon="icon(key)" />
          </span>
        </div>
      </th>
    </tr>
  </thead>

  <tbody>
    <tr v-for="row, index of sorted" :key="index">
      <td v-for="val, key of row" :key="key"> {{ val }} </td>
    </tr>
  </tbody>
</table>
</template>

<script>
import { DefaultMap } from '@/utils'

const sort = (a, b, key) => {
  if (typeof a[key] === 'string') {
    return a[key].localeCompare(b[key])
  }
  if (typeof a[key] === 'number') {
    return a[key] - b[key]
  }
  return 0
}

export default {
  name: 'CTable',

  props: {
    data: { type: Array, default: () => [] },
    sortable: { type: Boolean, default: false }
  },

  data: () => ({
    key: null,
    sorts: new DefaultMap(() => -1)
  }),

  computed: {
    keys () {
      return this.data.length === 0 ? [] : Object.keys(this.data[0])
    },
    icon () {
      return key => this.sorts.get(key) === -1 ? 'angle-down' : 'angle-up'
    },
    sorted () {
      if (this.key === null) {
        return this.data
      }

      const sorted = [...this.data].sort((a, b) => sort(a, b, this.key))
      const order = this.sorts.get(this.key)

      if (order === -1) {
        sorted.reverse()
      }

      return sorted
    }
  },

  methods: {
    toggle (key) {
      if (this.sortable !== true) {
        return
      }
      this.sorts.set(key, this.sorts.get(key) * -1)
      this.key = key
    }
  }
}
</script>
