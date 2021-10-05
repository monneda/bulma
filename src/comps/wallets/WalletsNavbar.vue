<template>
<nav class="navbar">
  <div class="container is-flex is-justify-content-space-between is-align-items-center p-2">
    <h3 class="title is-3 is-size-5-touch m-0">
      Minhas carteras
    </h3>

    <button class="button is-primary" @click="$emit('create')">
      <span class="has-text-weight-bold">
        Criar cartera
      </span>
    </button>
  </div>
</nav>
</template>
