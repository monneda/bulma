<template>
<div class="container is-fluid has-background-light has-text-centered">
  <div class="is-flex is-flex-direction-column is-align-items-center is-justify-content-space-around">
    <figure class="image">
      <img src="@/assets/imgs/logo-horizontal-fundo-claro.png" >
    </figure>

    <span class="has-text-primary">
      <c-icon icon="cartera-404" />
    </span>

    <div>
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
  </div>
</div>
</template>

<script>
import CIcon from '@/ui/CIcon'

export default {
  name: 'NotFound',
  components: { CIcon }
}
</script>

<style scoped>
.container {
  height: 100vh;
}

.is-flex {
  height: 100%;
}

img {
  width: 150px;
  height: auto;
}
</style>
