<template>
<article>
  <div class="level">
    <div class="level-left">
      <!-- Image -->
      <div class="level-item">
        <router-link :to="`/u/${user.username}`">
          <c-avatar :src="user.picture" round size="3rem" />
        </router-link>
      </div>

      <!-- Name -->
      <div class="level-item">
        <div class="is-flex is-flex-direction-column has-text-centered-mobile">
          <span> Cartera de </span>
          <router-link :to="`/u/${user.username}`">
            <strong class="has-text-grey-darker"> @{{ user.username }} </strong>
          </router-link>
        </div>
      </div>
    </div>

    <div class="level-right">
      <!-- Edit -->
      <div v-if="isSelf" class="level-item">
        <router-link :to="`/c/${wallet.id}/edit`">
          <c-button class="is-primary" left icon="pen"> Editar cartera </c-button>
        </router-link>
      </div>

      <!-- TODO -->
      <!-- Share -->
      <!-- <div class="level-item">
        <button class="button is-primary is-light">
          <span class="icon-text">
            <span class="icon">
              <font-awesome-icon icon="share" />
            </span>
            <span> Compartilhar </span>
          </span>
        </button>
      </div> -->
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
            <option v-for="(text, days) of OPTIONS" :key="days" :value="days">
              {{ text }}
            </option>
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
            <p class="has-text-weight-bold"> Variação {{ text }}: </p>
            <p> {{ wallet.gain.toFixed(2) }}% </p>
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
    selected: '7',
    OPTIONS: {
      7: '7 dias',
      30: '1 mês',
      90: '3 meses',
      ytd: 'YTD'
    }
  }),

  computed: {
    text () {
      return this.OPTIONS[this.selected]
    },

    isSelf () {
      return this.user.username === this.$store.state.user.profile.username
    }
  },

  methods: {
    change (e) {
      if (this.selected === 'ytd') {
        this.$emit('period', this.daysInYear())
      } else {
        this.$emit('period', this.selected)
      }
    },
    daysInYear () {
      const now = new Date()
      const start = new Date(now.getFullYear(), 0, 0)
      const diff = (now - start) + ((start.getTimezoneOffset() - now.getTimezoneOffset()) * 60 * 1000)
      const oneDay = 1000 * 60 * 60 * 24
      return Math.floor(diff / oneDay)
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
