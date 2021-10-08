<template>
<div class="column is-three-fifths">
  <article class="box">
    <h4 class="title is-4 my-0"> Sobre sua Cartera </h4>

    <hr class="my-2">

    <!-- Name -->
    <div class="field">
      <div class="control">
        <label class="label"> Nome </label>
        <input
          type="text"
          placeholder="Digite o nome..."
          class="input has-background-white-ter is-size-6"
          @input="e => $emit('update:name', e.target.value)"
        >
      </div>
    </div>

    <!-- Description -->
    <div class="field">
      <div class="control">
        <label class="label"> Descrição </label>
        <textarea
          type="text"
          placeholder="Digite sua descrição..."
          class="textarea has-background-white-ter is-size-6"
          @input="e => $emit('update:description', e.target.value)"
        />
      </div>
    </div>
  </article>
</div>
</template>

<script>
export default {
  name: 'WalletsNewAbout'
}
</script>
