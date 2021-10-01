<template>
<article>
  <div class="level is-mobile">
    <!-- Title -->
    <div class="level-left">
      <div class="level-item">
        <h4 class="title is-4"> Carteras </h4>
      </div>
    </div>

    <!-- Buttons -->
    <div class="level-right">
      <div class="level-item">
        <!-- Button group -->
        <div class="field has-addons has-text-grey is-hidden-touch">
          <p class="control"><button class="button"> 1 dia </button></p>
          <p class="control"><button class="button"> 1 semana </button></p>
          <p class="control"><button class="button"> 1 mês </button></p>
          <p class="control"><button class="button"> 3 meses </button></p>
          <p class="control"><button class="button"> 1 ano </button></p>
        </div>

        <!-- Select input (mobile) -->
        <div class="select is-hidden-desktop">
          <select>
            <option> 1 dia </option>
            <option> 1 semana </option>
            <option> 1 mês </option>
            <option> 3 meses </option>
            <option> 1 ano </option>
          </select>
        </div>
      </div>
    </div>
  </div>

  <!-- Portfolios -->
  <div class="columns is-flex-wrap-wrap">
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
