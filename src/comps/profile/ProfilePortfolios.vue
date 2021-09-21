<template>
<article class="box">
  <!-- Title + Buttons -->
  <div class="level">
    <h1 class="title"> Carteras </h1>
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
    <div class="column is-4"><ProfilePortfolioCard /></div>
    <div class="column is-4"><ProfilePortfolioCard /></div>
    <div class="column is-4"><ProfilePortfolioCard /></div>
    <div class="column is-4"><ProfilePortfolioCard /></div>
    <div class="column is-4"><ProfilePortfolioCard /></div>
  </div>
</article>
</template>

<script>
import ProfilePortfolioCard from '@/comps/profile/ProfilePortfolioCard'

export default {
  name: 'ProfilePortfolios',
  components: { ProfilePortfolioCard }
}
</script>
