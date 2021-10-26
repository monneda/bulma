<template>
  <AssetForm class="box" @submit="submit" />
</template>
<script>
import AssetForm from '@/comps/forms/AssetForm'

export default {
  components: {
    AssetForm
  },

  methods: {
    submit (asset) {
      console.log(asset)
    }
  }
}
</script>
