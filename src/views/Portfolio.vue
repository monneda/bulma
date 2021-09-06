<template>
<Navbar class="has-shadow" />
<div class="columns mx-0 my-1">
  <!-- Left -->
  <div class="column is-2 is-hidden-mobile"></div>

  <!-- Center -->
  <div class="column is-8">
    <PortfolioBanner />
    nice
    <Portfolio class="box" />
  </div>

  <!-- Right -->
  <div class="column is-2 is-hidden-mobile"></div>
</div>
</template>

<script>
import Navbar from '@/comps/navbar/Navbar'
import Portfolio from '@/comps/Portfolio'
import PortfolioBanner from '@/comps/PortfolioBanner'

export default {
  components: {
    Navbar,
    Portfolio,
    PortfolioBanner
  },

  props: {
    id: {
      type: String,
      required: true
    }
  }
}
</script>
