<template>
<Navbar class="has-shadow" />

<div class="container">
  <section class="section">
    <ProfileBanner class="box" />
  </section>

  <section class="section">
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
        <div class="column is-4"><PortfolioCard /></div>
        <div class="column is-4"><PortfolioCard /></div>
        <div class="column is-4"><PortfolioCard /></div>
      </div>
    </article>
  </section>

  <section class="section">
    <h1 class="title"> Publicações </h1>

    <div class="columns">
      <div class="column is-8">
        <div class="box">
          <Post />
          <Post />
          <Post />
        </div>
      </div>
      <div class="column">
        <div class="box">Right</div>
      </div>
    </div>
  </section>

  <!-- Right -->
  <div class="column is-2 is-hidden-mobile"></div>
</div>
</template>

<script>
import Post from '@/comps/Post'
import Navbar from '@/comps/navbar/Navbar'
import ProfileBanner from '@/comps/profile/ProfileBanner'
import PortfolioCard from '@/comps/PortfolioCard'

export default {
  components: {
    Post,
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
