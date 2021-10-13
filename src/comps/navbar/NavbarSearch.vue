<template>
<div class="field">
  <p class="control has-icons-left">
    <input class="input input-size" type="text" placeholder="Pesquisar investidores">
    <span class="icon is-left has-text-primary">
      <font-awesome-icon icon="search" />
    </span>
  </p>
</div>
</template>

<script>
export default {
  name: 'NavbarSearch'
}
</script>

<style scoped>
@media screen and (max-width: 350px) {
  .input-size {
    height: 40px;
    font-size: 14px;
  }
}
</style>
