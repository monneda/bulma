<template>
<Navbar />
<AssetPieChart :labels="['a', 'b', 'c']" :data="[1, 2, 3]" />
</template>

<script>
import Navbar from '@/comps/navbar/Navbar.vue'
import AssetPieChart from '@/comps/portfolio/AssetPieChart'

export default {
  components: {
    Navbar,
    AssetPieChart
  }
}
</script>
