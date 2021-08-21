<template>
  <!-- Carteira info -->
  <div class="card p-0">
    <!-- Header -->
    <div class="level card-header has-background-light">
      <div class="level-left ml-4">
        <div class="level-item">
          <figure class="image is-48x48">
            <img class="is-rounded" src="http://placekitten.com/64/64">
          </figure>
        </div>
        <div class="level-item">
          <div class="column">
            <span> Cartera de </span>
            <p><strong>Roberta Heinrich</strong></p>
          </div>
        </div>
      </div>
      <div class="level-right mr-4">
          <div class="level-item">
            <div class="buttons">
              <button class="button is-inverted is-light is-outlined">Compartilhar</button>
              <button class="button is-inverted is-light is-outlined">Enviar</button>
            </div>
          </div>
        </div>
    </div>
    <div class="card-content">
      <div class="level">
        <div class="level-left ml-3">
          <div class="level-item">
            <div class="icon-text">
              <Icon class="fa-lg" icon="wallet" label="À prova de balas"></Icon>
            </div>
          </div>
        </div>
        <div class="level-right mr-3">
          <div class="level-item">
            <div class="icon-text">
              <Icon class="fa-lg" icon="arrow-circle-up"/> <strong>Variação:</strong> 15.69%
            </div>
          </div>
        </div>
      </div>
      <hr>
      <div class="m-3">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras pellentesque enim a mi efficitur, tincidunt accumsan
        dolor mollis. Etiam eu sodales urna. Donec auctor pulvinar neque, a sollicitudin sem pulvinar vitae. Integer sit
        amet facilisis metus. Donec vulputate pulvinar nunc ut mollis. Morbi vulputate nulla a nibh accumsan, non viverra
        nisl aliquam. Nulla facilisi. Aenean dictum eleifend purus eu posuere. Cras euismod, nulla nec fringilla sodales,
        mauris felis vehicula turpis, sit amet mattis justo eros ut dolor. Proin pretium faucibus enim eget accumsan.
        Donec non aliquet purus. Quisque quis turpis vel urna tristique venenatis. Aliquam odio orci, aliquet nec auctor
        et, dapibus vitae ante. Ut dolor enim, feugiat sed posuere nec, tempor a libero. Nullam commodo mi in ipsum
        sagittis euismod.
      </div>
    </div>
    <div class="level card-footer has-background-light">
      <button class="card-footer-item button is-light">
        Ativos
      </button>
      <button class="card-footer-item button is-light">
        Composição
      </button>
      <button class="card-footer-item button is-light">
        Histórico
      </button>
    </div>
  </div>
</template>

<script>

import Icon from './Icon'
export default {
  name: 'Portfolio',
  components: { Icon },
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
.first-box-border {
  border-top-right-radius: 0rem;
  border-bottom-right-radius: 0rem;
}
.middle-box-border {
  border-radius: 0rem;
}
.last-box-border {
  border-top-left-radius: 0rem;
  border-bottom-left-radius: 0rem;
}
.box-width {
  width: 4rem;
}
</style>
