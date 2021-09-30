<template>
<article>
  <div class="media">
    <figure class="media-left image is-64x64">
      <img class="is-rounded" src="http://placekitten.com/64/64">
    </figure>

    <div class="media-content my-auto" @click="toggle">
      <input
        type="text"
        placeholder="Como estão seus investimentos hoje?"
        class="input has-background-white-ter is-size-6 p-5 is-bordered"
      >
    </div>
  </div>

  <hr class="is-hidden-touch">

  <div class="columns has-text-centered">
    <div class="column">
      <button class="button is-white">
        <span class="has-background-primary-lighter has-text-primary-dark p-2">
          <font-awesome-icon icon="image" size="lg" />
        </span>
        <span class="pl-3 has-text-grey has-text-weight-bold">
          Foto
        </span>
      </button>
    </div>
    <div class="column">
      <button class="button is-white">
        <span class="has-background-primary-lighter has-text-primary-dark p-2">
          <font-awesome-icon icon="video" size="lg" />
        </span>
        <span class="pl-3 has-text-grey has-text-weight-bold">
          Vídeo
        </span>
      </button>
    </div>
    <div class="column">
      <button class="button is-white">
        <span class="has-background-primary-lighter has-text-primary-dark p-2">
          <font-awesome-icon icon="poll" size="lg" />
        </span>
        <span class="pl-3 has-text-grey has-text-weight-bold">
          Enquete
        </span>
      </button>
    </div>
    <div class="column">
      <button class="button is-white">
        <span class="has-background-primary-lighter has-text-primary-dark p-2">
          <font-awesome-icon icon="file" size="lg" />
        </span>
        <span class="pl-3 has-text-grey has-text-weight-bold">
          Documento
        </span>
      </button>
    </div>
  </div>

  <div class="modal" ref="modal">
    <div class="modal-background" @click="toggle"></div>
    <div class="modal-card">
      <!-- Title -->
      <header class="modal-card-head has-background-white">
        <p class="modal-card-title">Criar publicação</p>
        <button class="delete is-large" @click="toggle"></button>
      </header>

      <!-- Form -->
      <section class="modal-card-body is-clipped">
        <textarea class="is-size-5" placeholder="Como estão seus investimentos hoje?" rows="10" />
      </section>

      <!-- Buttons -->
      <footer class="modal-card-foot has-background-white">
        <nav class="level has-text-grey">
          <div class="level-left">
            <button class="level-item button is-primary is-light mx-2">
              <Icon icon="image" label="Foto" />
            </button>
            <button class="level-item button is-primary is-light mx-2">
              <Icon icon="video" label="Vídeo" />
            </button>
            <button class="level-item button is-primary is-light mx-2">
              <Icon icon="poll" label="Enquete" />
            </button>
            <button class="level-item button is-primary is-light mx-2">
              <Icon icon="file" label="Documento" />
            </button>
          </div>

          <div class="level-right">
            <button class="level-item button is-light mx-2">
              <Icon icon="paper-plane" label="Publicar" />
            </button>
          </div>
        </nav>
      </footer>
    </div>
  </div>
</article>
</template>

<script>
import Icon from '@/comps/Icon'

export default {
  name: 'PostCreate',

  components: {
    Icon
  },

  methods: {
    toggle () {
      console.log(this.$refs)
      // this.$refs.modal.classList.toggle('is-active')
    }
  }
}
</script>

<style lang="scss" scoped>
.input {
  border-radius: 25px;
}

.button > span {
  border-radius: $radius;
}

.modal-card-body textarea {
  border-color: transparent;
  resize: none;
  outline: none;
  min-height: 100%;
  min-width: 100%;
}

nav {
  min-width: 100%;
}

.modal-card {
  width: 50vw;
}
</style>
