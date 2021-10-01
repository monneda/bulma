<template>
<div class="container is-fluid has-background-light">
  <div class="is-flex is-flex-direction-column is-align-items-center is-justify-content-space-around">
    <figure class="image">
      <img src="@/assets/imgs/logo-horizontal.png" >
    </figure>

    <span class="has-text-primary">
      <c-icon icon="cartera-404" />
    </span>

    <div class="has-text-centered">
      <h4 class="title is-size-4">
        parece que essa página não está na nossa cartera!
      </h4>

      <p class="has-text-grey-dark">
        Parece que não conseguimos encontrar a página que você está procurando.
        <br>
        Tente voltar a procurar a página que deseja, qualquer coisa entre em contato
        <br>
        conosco para relatar um problema.
      </p>
    </div>

    <button class="button is-primary is-large">
      <span class="has-text-weight-bold p-6">
        voltar para o site
      </span>
    </button>

    <br>
  </div>
</div>

<Footer />
</template>

<script>
import CIcon from '@/ui/CIcon'
import Footer from '@/comps/Footer'

export default {
  name: 'NotFound',
  components: {
    CIcon,
    Footer
  }
}
</script>

<style scoped>
.is-flex {
  height: 100vh;
}

img {
  width: 10rem;
  height: auto;
}
</style>
