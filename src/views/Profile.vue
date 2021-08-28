<template>
<Navbar class="has-shadow" />
<div class="columns mx-0 my-1" style="background-color: #E5E5E5; height: 100rem">
  <!-- Left -->
  <div class="column is-2 is-hidden-mobile"></div>

  <!-- Center -->
  <div class="column is-8">
    <ProfileBanner />

    <div class="box">
      <div class="level">
        <h1 class="title"> Carteras </h1>

        <!-- Buttons -->
        <div class="field has-addons">
          <p class="control"><button class="button"> 1 dia </button></p>
          <p class="control"><button class="button"> 1 semana </button></p>
          <p class="control"><button class="button"> 1 mês </button></p>
          <p class="control"><button class="button"> 3 meses </button></p>
          <p class="control"><button class="button"> 1 ano </button></p>
        </div>
      </div>

      <!-- Portfolios -->
      <div class="columns is-flex-wrap-wrap">
        <div class="column is-4"><PortfolioCard /></div>
        <div class="column is-4"><PortfolioCard /></div>
        <div class="column is-4"><PortfolioCard /></div>
      </div>
    </div>
  </div>

  <!-- Right -->
  <div class="column is-2 is-hidden-mobile"></div>
</div>
</template>

<script>
import Navbar from '@/comps/Navbar'
import ProfileBanner from '@/comps/ProfileBanner'
import PortfolioCard from '@/comps/PortfolioCard'

export default {
  components: {
    Navbar,
    ProfileBanner,
    PortfolioCard
  },

  props: {
    id: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>
.card {
  border: 1px solid #E9E9E9;
}
</style>
