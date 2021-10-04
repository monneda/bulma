<template>
<article>
  <div class="level">
    <div class="level-left">
      <!-- Image -->
      <div class="level-item">
        <figure class="image is-48x48">
          <img class="is-rounded" :src="user.picture">
        </figure>
      </div>

      <!-- Name -->
      <div class="level-item">
        <div class="is-flex is-flex-direction-column has-text-centered-mobile">
          <span> Cartera de </span>
          <strong> @{{ user.username }} </strong>
        </div>
      </div>
    </div>

    <div class="level-right">
      <!-- Edit -->
      <div v-if="isSelf" class="level-item">
        <button class="button is-primary">
          <span class="icon-text">
            <span class="icon">
              <font-awesome-icon icon="pen" />
            </span>
            <span> Editar cartera </span>
          </span>
        </button>
      </div>

      <!-- Share -->
      <div class="level-item">
        <button class="button is-primary is-light">
          <span class="icon-text">
            <span class="icon">
              <font-awesome-icon icon="share" />
            </span>
            <span> Compartilhar </span>
          </span>
        </button>
      </div>
    </div>
  </div>

  <div class="level">
    <div class="level-left">
      <!-- Icon -->
      <div class="level-item">
        <span class="icon is-large has-text-primary">
          <font-awesome-icon icon="wallet" size="lg" />
        </span>
      </div>

      <!-- Wallet name -->
      <div class="level-item">
        <h4 class="title is-4"> {{ wallet.name }} </h4>
      </div>
    </div>

    <div class="level-right">
      <div class="level-item">
        <!-- Input -->
        <div class="select is-primary">
          <select v-model="selected" @change="change">
            <option value="7">7 dias</option>
            <option value="30">1 mês</option>
            <option value="90">3 meses</option>
            <option value="360">1 ano</option>
          </select>
        </div>
      </div>

      <!-- Selected item -->
      <div class="level-item">
        <span class="icon-text">
          <span class="icon is-large">
            <font-awesome-icon icon="wallet" size="lg" />
          </span>
          <span class="my-auto">
            <p class="has-text-weight-bold"> Variação {{ selected }}: </p>
            <p> {{ gain.toFixed(2) }}% </p>
          </span>
        </span>
      </div>
    </div>
  </div>

  <hr>

  <!-- Description -->
  <p class="description"> {{ wallet.description }} </p>
</article>
</template>

<script>
export default {
  name: 'PortfolioBanner',

  props: {
    wallet: {
      type: Object,
      required: true
    },
    user: {
      type: Object,
      required: true
    }
  },

  data: () => ({
    selected: '7 dias'
  }),

  computed: {
    isSelf () {
      return this.user.username === this.$store.state.user.profile.username
    },
    gain () {
      return this.wallet.gain || 0
    }
  },

  methods: {
    change (e) {
      console.log(e.target.innerText)
    }
  }
}
</script>

<style scoped>
/*
  Style added to allow rendering of new lines `\n`. Adapted from:
    https://stackoverflow.com/a/22896536

  Added the style based on the following link:
    https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Text/Wrapping_Text#breaking_long_words
 */
.description {
  overflow-wrap: break-word;
  white-space: pre-wrap;
}
</style>
