<template>
<a :class="classes">
  <div class="is-flex is-flex-direction-column is-align-items-center">
    <Icon class="fas fa-lg" :icon="icon" />
    <span class="is-uppercase">{{ label }}</span>
  </div>
</a>
</template>

<script>
import Icon from '@/comps/Icon'

export default {
  name: 'NavbarItem',

  components: {
    Icon
  },

  props: {
    icon: {
      type: String,
      required: false
    },
    label: {
      type: String,
      required: true
    },
    isActive: {
      type: Boolean,
      default: false
    }
  },

  computed: {
    classes () {
      return {
        'navbar-item': true,
        'is-tab': true,
        'is-active': this.isActive
      }
    }
  }
}
</script>
