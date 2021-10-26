<template>
<Navbar class="has-shadow" />

<!-- Secondary bar -->
<div class="has-background-white">
  <div class="container p-3">
    <div class="is-flex is-justify-content-space-between">
      <h4 class="is-size-5 has-text-weight-bold"> Editar Perfil </h4>
      <c-button class="is-primary" right icon="arrow-down" @click="update">
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
        <c-avatar v-if="user" :src="user.picture" round size="10rem" />
        <br>
        <c-button class="is-primary is-fullwidth" @click="modal = true">
          Adicionar foto
        </c-button>
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

    <!-- Picture modal -->
    <teleport to="body">
      <c-modal-card :active="modal" @close="modal = false">
        <template #title> Inserir nova foto (URL) </template>
        <c-input
          placeholder="Inserir URL da foto"
          left
          icon="image"
          v-if="user"
          v-model="user.picture"
        />
        <template #footer>
          <c-button @click="modal = false"> Ok </c-button>
        </template>
      </c-modal-card>
    </teleport>
  </div>
</div>

<NavbarBottom/>
</template>

<script>
import { SET_USER } from '@/store/type.mutations'

import client from '@/commons/client.api'

import Navbar from '@/comps/navbar/Navbar'
import NavbarBottom from '../comps/navbar/NavbarBottom'

export default {
  components: {
    NavbarBottom,
    Navbar
  },

  props: {
    username: {
      type: String,
      required: true
    }
  },

  data: () => ({
    user: null,
    modal: false
  }),

  methods: {
    async update () {
      const patch = [
        { op: 'replace', path: '/name', value: this.user.name },
        { op: 'replace', path: '/username', value: this.user.username },
        { op: 'replace', path: '/description', value: this.user.description },
        { op: 'replace', path: '/picture', value: this.user.picture }
      ]
      const user = await client.profile.update(patch)
      this.$store.commit(SET_USER, user)
      this.$router.push(`/u/${this.user.username}`)
    }
  },

  async created () {
    this.user = await client.users.byUsername(this.username)
  }
}
</script>
