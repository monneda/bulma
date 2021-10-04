<template>
<span> {{ ago }} </span>
</template>

<script>
import { format, register } from 'timeago.js'
import ptBR from 'timeago.js/lib/lang/pt_BR'

register('pt_BR', ptBR)

export default {
  name: 'TimeAgo',

  props: {
    time: {
      type: String,
      required: true
    }
  },

  computed: {
    ago () {
      return format(this.time, 'pt_BR')
    }
  }
}
</script>
