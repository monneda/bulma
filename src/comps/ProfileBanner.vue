<template>
<article class="box">
  <div class="columns is-vcentered">
    <!-- Image -->
    <div class="column is-3">
      <div class="level">
        <div class="level-item">
          <figure class="image is-128x128">
            <img class="is-rounded" src="http://placekitten.com/200/200">
          </figure>
        </div>
      </div>
    </div>

    <div class="column">
      <div class="level is-mobile mb-1 mt-1">
        <!-- Name -->
        <div class="level-left">
          <div class="level-item">
            <div>
              <p class="is-size-4"> Roberta Heinrich </p>
              <p class="is-size-6 has-text-dark"> @heinrichroberta </p>
            </div>
          </div>
        </div>

        <!-- Buttons -->
        <div class="level-right">
          <button class="button level-item is-primary has-text-weight-bold px-5">
            <span> Seguir + </span>
          </button>
          <button class="button level-item is-success has-text-weight-bold px-5">
            <Icon icon="paper-plane" color="green" />
            <span class="has-text-primary-dark"> Enviar mensagem </span>
          </button>
        </div>
      </div>

      <hr class="my-2">

      <!-- Description -->
      <div class="level">
        <div class="level-left">
          <div class="level-item">
            <small>
              Foco em usufruir de gestão passiva. Invisto em fundos,
              cripto, alguns ETFs e poucas ações
            </small>
          </div>
        </div>
      </div>

      <div class="level">
        <div class="level-left">
          <!-- Wallets -->
          <div class="level-item">
            <p>
              <strong class="has-text-primary"> 10 </strong>
              <span> carteras </span>
            </p>
          </div>

          <!-- Followers -->
          <div class="level-item">
            <p>
              <strong class="has-text-primary"> 10 mil </strong>
              <span> seguidores </span>
            </p>
          </div>

          <!-- Following -->
          <div class="level-item">
            <p>
              <strong class="has-text-primary"> 105 </strong>
              <span> seguindo </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</article>
</template>

<script>
import Icon from '@/comps/Icon'

export default {
  name: 'Portfolio',

  components: {
    Icon
  },

  data: () => ({
    comment: '',
    portfolios: ['a', 'b', 'c']
  }),

  computed: {
    rows () {
      const newlines = this.comment.split('\n').length
      return Math.max(newlines, 1)
    }
  }
}
</script>

<style scoped>
textarea {
  resize: none;
}
.gradient-green {
  background: linear-gradient(135deg, rgba(49,223,152,1) 0%, rgba(16,175,140,1) 100%);
}
.gradient-green-faded {
  background: linear-gradient(135deg, rgb(82, 216, 162) 0%, rgb(102, 212, 188) 100%);
  width: 100%;
  box-shadow: none;
}
.gradient-red {
  background: linear-gradient(135deg, rgba(230,109,109,1) 0%, rgba(211,44,44,1) 100%);
}
.gradient-red-faded {
  background: linear-gradient(135deg, rgb(212, 127, 127) 0%, rgb(209, 93, 93) 100%);
  width: 100%;
  box-shadow: none;
}
</style>
