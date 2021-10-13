<template>
<Navbar class="has-shadow" />

<!-- Secondary bar -->
<div class="has-background-white">
  <div class="container p-3">
    <div class="is-flex is-justify-content-space-between">
      <h4 class="is-size-5 has-text-weight-bold"> Editar Perfil </h4>
      <c-button
        class="is-primary"
        right
        icon="arrow-down"
        @click="update"
      >
        Salvar
      </c-button>
    </div>
  </div>
</div>

<br>

<div class="container">
  <div class="columns is-centered mx-0">
    <!-- Image -->
    <div class="column is-one-third">
      <article class="box is-flex is-flex-direction-column is-align-items-center">
        <figure class="image is-128x128 m-5" v-if="user">
          <img class="is-rounded" :src="user.picture">
        </figure>
        <c-button class="is-primary is-fullwidth">Adicionar foto</c-button>
      </article>
    </div>

    <!-- Forms -->
    <div class="column is-two-thirds">
      <!-- Name -->
      <div class="field">
        <label class="label"> Nome </label>
        <input
          class="input has-background-light"
          type="text"
          placeholder="Insira um nome..."
          v-if="user"
          v-model="user.name"
        >
      </div>

      <!-- Username -->
      <div class="field">
        <label class="label"> Nome do usuário </label>
        <input
          class="input has-background-light"
          type="text"
          placeholder="Insira um nome de usuário..."
          v-if="user"
          v-model="user.username"
        >
      </div>

      <!-- Descrição -->
      <div class="field">
        <label class="label"> Descrição </label>
        <textarea
          class="textarea has-background-light"
          rows="5"
          placeholder="Insira uma descrição..."
          v-if="user"
          v-model="user.description"
        />
      </div>
    </div>
  </div>
</div>
</template>

<script>
import client from '@/commons/client.api'

import Navbar from '@/comps/navbar/Navbar'

export default {
  components: {
    Navbar
  },

  props: {
    username: {
      type: String,
      required: true
    }
  },

  data: () => ({
    user: null
  }),

  methods: {
    async update () {
      const patch = [
        { op: 'replace', path: '/name', value: this.user.name },
        { op: 'replace', path: '/username', value: this.user.username },
        { op: 'replace', path: '/description', value: this.user.description },
        { op: 'replace', path: '/picture', value: this.user.picture }
      ]
      this.user = await client.profile.update(patch)
      this.$router.push(`/u/${this.user.username}`)
    }
  },

  async created () {
    this.user = await client.users.byUsername(this.username)
  }
}
</script>
