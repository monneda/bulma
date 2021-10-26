<template>
<article>
  <h4 class="title is-4"> Adicionar ativos </h4>

  <hr>

  <!-- Search -->
  <ais-instant-search :search-client="client" index-name="assets">
    <!-- Configuration -->
    <ais-configure :hits-per-page.camel="hits" />

    <!-- Input -->
    <ais-search-box>
      <template v-slot="{ refine }">
        <c-input
          type="search"
          label="Ativo"
          placeholder="Procure por código ou nome..."
          class="has-background-white-ter"
          v-model="ticker"
          @input="refine(ticker); clicked = false"
          @keyup.enter="submit"
        />
      </template>
    </ais-search-box>

    <!-- Hits -->
    <ais-hits>
      <template v-slot="{ items }">
        <c-dropdown :items="items" :active="items.length > 0 && !clicked">
          <template v-slot:item="{ item: { codneg, nomres } }">
            <div class="is-flex" @click="clicked = true; ticker = codneg">
              <c-ticker :ticker="codneg" class="pr-3" nolink />
              <div class="is-flex is-flex-direction-column is-justify-content-center">
                <strong> {{ codneg }} </strong>
                <small> {{ nomres }} </small>
              </div>
            </div>
          </template>
        </c-dropdown>
      </template>
    </ais-hits>
  </ais-instant-search>

  <!-- Amount -->
  <c-input
    type="number"
    label="Quantidade"
    v-model.number="amount"
    placeholder="Insira uma quantidade..."
    class="has-background-white-ter"
    @keyup.enter="submit"
  />
</article>
</template>

<script>
import meili from '@/commons/meili.api'

export default {
  name: 'AssetForm',

  props: {
    hits: {
      type: Number,
      default: 3
    }
  },

  data: () => ({
    client: meili(),
    clicked: false,
    ticker: '',
    amount: ''
  }),

  methods: {
    submit () {
      const asset = {
        ticker: this.ticker.toUpperCase(),
        amount: this.amount
      }

      this.$emit('submit', asset)

      this.ticker = ''
      this.amount = ''
    }
  }
}
</script>
