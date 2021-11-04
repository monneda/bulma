<template>
<div class="is-flex is-flex-direction-column is-align-items-center has-background-light is-justify-content-center">
  <span class="has-text-primary p-3">
    <c-icon icon="cartera-light" />
  </span>

  <div class="has-text-centered p-3">
    <h4 class="title is-size-4 is-size-5-mobile">
      Você ainda não tem nenhuma cartera!
    </h4>

    <p class="has-text-grey-dark is-size-6-mobile">
      Crie sua cartera e comece a compartilhar seus
      <br>
      investimentos com amigos agora.
    </p>
  </div>

  <router-link to="/c/create">
    <c-button class="is-primary has-text-weight-bold is-justify-content-center m-2" right icon="plus">
      Criar Cartera
    </c-button>
  </router-link>
</div>
</template>

<script>
import CIcon from '@/ui/CIcon'

export default {
  name: 'NotFound',
  components: {
    CIcon
  }
}
</script>

<style scoped>
.is-flex {
  position: absolute;
  z-index: -1;
  height: 100vh;
  top: 0;
  width: 100vw;
}

img {
  width: 10rem;
  height: auto;
}

button {
  width: 13.5rem;
  height: 2.8rem;
}
</style>
