<template>
  <div class="box">
    <div class="columns is-multiline">
      <Asset class="column is-half" v-for="asset in assets" :key="asset"/>
    </div>
  </div>
</template>

<script>
import Asset from './Asset'
export default {
  name: 'Assets',
  components: { Asset },
  props: {
    assets: {
      type: Object,
      required: true
    }
  }
}
</script>
