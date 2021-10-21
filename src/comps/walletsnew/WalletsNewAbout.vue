<template>
<div class="column is-three-fifths">
  <article class="box">
    <h4 class="title is-4 my-0"> Sobre sua Cartera </h4>

    <hr class="my-2">

    <!-- Name -->
    <div class="field">
      <label class="label"> Nome </label>
      <div class="control has-icons-right">
        <input
          type="text"
          placeholder="Digite um nome..."
          class="input has-background-white-ter is-size-6"
          @input="updateName"
          :class="this.name.length < 3 ? 'is-danger' : 'is-success'"
        >
        <span class="icon is-small is-right">
          <font-awesome-icon v-if="this.name.length >= 3" icon="check" />
          <font-awesome-icon v-if="this.name.length < 3" icon="exclamation-triangle" />
        </span>
      </div>
      <p v-if="this.name.length < 3" class="help is-danger"> Precisa ter pelo menos 3 letras </p>
    </div>

    <!-- Description -->
    <div class="field">
      <div class="control">
        <label class="label"> Descrição </label>
        <textarea
          type="text"
          class="textarea has-background-white-ter is-size-6"
          placeholder="Explique um pouco da sua Cartera: estratégia, objetivos, ..."
          @input="e => $emit('update:description', e.target.value)"
        />
      </div>
    </div>
  </article>
</div>
</template>

<script>
export default {
  name: 'WalletsNewAbout',

  data: () => ({
    name: ''
  }),

  methods: {
    updateName (e) {
      this.name = e.target.value
      this.$emit('update:name', e.target.value)
    }
  }
}
</script>
