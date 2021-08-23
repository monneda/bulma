<template>
  <!-- Carteira info -->
  <div class="block card">
    <!-- Header -->
    <div class="level card-header mb-0 has-background-light">
      <div class="level-left ml-4">
        <div class="level-item">
          <figure class="image is-48x48">
            <img class="is-rounded" src="http://placekitten.com/64/64">
          </figure>
        </div>
        <div class="level-item">
          <div class="column">
            <span> Cartera de </span>
            <p><strong> {{ portfolio.username }}</strong></p>
          </div>
        </div>
      </div>
      <div class="level-right mr-4">
          <div class="level-item">
            <div class="buttons">
              <button class="button has-background-grey-lighter has-text-grey top-buttons">Compartilhar</button>
              <button class="button has-background-grey-lighter has-text-grey top-buttons">Enviar</button>
            </div>
          </div>
        </div>
    </div>
    <div class="card-content">
      <div class="level">
        <div class="level-left ml-3">
          <div class="level-item">
            <div class="icon-text">
              <Icon class="fa-lg" icon="wallet" :label=portfolio.name></Icon>
            </div>
          </div>
        </div>
        <div class="level-right mr-3">
          <div class="level-item">
            <div v-if="portfolio.gain >= 0" class="icon-text">
              <Icon class="fa-lg" icon="arrow-circle-up"/> <strong> Variação: </strong> {{ portfolio.gain.toFixed(2) }}
            </div>
            <div v-else class="icon-text">
              <Icon class="fa-lg" icon="arrow-circle-down"/> <strong> Variação: </strong> {{ portfolio.gain.toFixed(2) }}
            </div>
          </div>
        </div>
      </div>
      <hr>
      <div class="m-3">
        {{ portfolio.description }}
      </div>
    </div>
    <div class="level card-footer has-background-light">
      <button
        @click=buttonClicked(0)
        class="card-footer-item button is-light first-box-border"
        :class="{'is-active has-text-white has-background-grey': activeButton === 0}"
      >
        Ativos
      </button>
      <button
        @click=buttonClicked(1)
        class="card-footer-item button is-light middle-box-border"
        :class="{'is-active has-text-white has-background-grey': activeButton === 1}"
      >
        Composição
      </button>
      <button
        @click=buttonClicked(2)
        class="card-footer-item button is-light last-box-border"
        :class="{'is-active has-text-white has-background-grey': activeButton === 2}"
      >
        Histórico
      </button>
    </div>
  </div>
  <Assets v-if="activeButton === 0"/>
  <Composition v-if="activeButton === 1"/>
  <Historic v-if="activeButton === 2"/>
</template>

<script>

import Icon from './Icon'
import Assets from './portfolio/Assets'
import Composition from './portfolio/Composition'
import Historic from './portfolio/Historic'
export default {
  name: 'Portfolio',
  components: { Historic, Composition, Assets, Icon },
  data: () => ({
    portfolio: {
      id: '60b6a3aa6757757d371711dc',
      createdAt: '2021-06-01T21:16:26.703Z',
      gain: -3.9815055580835756,
      assets: [
        {
          ticker: 'GOLL4',
          price: 17.67,
          date: '2021-08-19T00:00:00Z',
          name: 'GOL',
          gain: -19.204389574759944,
          weight: 1.4953767723219047
        },
        {
          ticker: 'HASH11',
          price: 45.97,
          date: '2021-08-19T00:00:00Z',
          name: 'HASHDEX NCI',
          gain: 30.93135858729707,
          weight: 2.334209515233886
        },
        {
          ticker: 'AMZO34',
          price: 110.43,
          date: '2021-08-19T00:00:00Z',
          name: 'AMAZON',
          gain: -9.483606557377044,
          weight: 1.869094023401335
        },
        {
          ticker: 'GOGL34',
          price: 98.3,
          date: '2021-08-19T00:00:00Z',
          name: 'ALPHABET',
          gain: 6.431355565179729,
          weight: 6.655145974838403
        },
        {
          ticker: 'TSLA34',
          price: 114.16,
          date: '2021-08-19T00:00:00Z',
          name: 'TESLA INC',
          gain: 5.899814471243033,
          weight: 3.864453023843093
        },
        {
          ticker: 'ABEV3',
          price: 17.19,
          date: '2021-08-19T00:00:00Z',
          name: 'AMBEV S/A',
          gain: 0.5851375073142435,
          weight: 5.819021327948736
        },
        {
          ticker: 'ARZZ3',
          price: 89.2,
          date: '2021-08-19T00:00:00Z',
          name: 'AREZZO CO',
          gain: -7.34392853433053,
          weight: 4.529290597321355
        },
        {
          ticker: 'AZUL4',
          price: 35.19,
          date: '2021-08-19T00:00:00Z',
          name: 'AZUL',
          gain: -13.707699852869055,
          weight: 1.1912237378156836
        },
        {
          ticker: 'CVCB3',
          price: 19.1,
          date: '2021-08-19T00:00:00Z',
          name: 'CVC BRASIL',
          gain: -21.00909842845327,
          weight: 3.232789626638186
        },
        {
          ticker: 'EGIE3',
          price: 38.0,
          date: '2021-08-19T00:00:00Z',
          name: 'ENGIE BRASIL',
          gain: -2.3136246786632455,
          weight: 3.859036831798463
        },
        {
          ticker: 'HGBS11',
          price: 189.28,
          date: '2021-08-19T00:00:00Z',
          name: 'FII HEDGEBS',
          gain: -5.78397212543554,
          weight: 12.814710377593213
        },
        {
          ticker: 'HGTX3',
          price: 38.35,
          date: '2021-08-19T00:00:00Z',
          name: 'CIA HERING',
          gain: -1.363168724279845,
          weight: 9.73645148022836
        },
        {
          ticker: 'ITSA4',
          price: 11.16,
          date: '2021-08-19T00:00:00Z',
          name: 'ITAUSA',
          gain: -0.17889087656529057,
          weight: 3.777793951129022
        },
        {
          ticker: 'LOGG3',
          price: 25.95,
          date: '2021-08-19T00:00:00Z',
          name: 'LOG COM PROP',
          gain: -12.65567149108044,
          weight: 3.0745352653341707
        },
        {
          ticker: 'LREN3',
          price: 39.45,
          date: '2021-08-19T00:00:00Z',
          name: 'LOJAS RENNER',
          gain: -7.263751763046528,
          weight: 4.006289553011826
        },
        {
          ticker: 'NTCO3',
          price: 53.52,
          date: '2021-08-19T00:00:00Z',
          name: 'GRUPO NATURA',
          gain: -10.992848827540328,
          weight: 4.529290597321355
        },
        {
          ticker: 'PETR4',
          price: 26.64,
          date: '2021-08-19T00:00:00Z',
          name: 'PETROBRAS',
          gain: -3.021477975973781,
          weight: 24.79938932434697
        },
        {
          ticker: 'SULA11',
          price: 28.5,
          date: '2021-08-19T00:00:00Z',
          name: 'SUL AMERICA',
          gain: -10.377358490566039,
          weight: 2.4118980198740396
        }
      ],
      username: 'mauricio',
      name: '💰Minha carteira 🤑',
      description: 'Essa é a minha carteira atual.\nTem de tudo um pouco.\nBuy and Hold!.'
    },
    activeButton: 0
  }),

  methods: {
    buttonClicked (i) {
      this.activeButton = i
    }
  }
}
</script>

<style scoped>
textarea {
  resize: none;
}
.top-buttons {
  border-radius: 0.3rem 0.3rem 0.3rem 0.3rem;
  font-size: 85%;
  width: 8rem;
}
.first-box-border {
  border-radius: 0 0 0 0.25rem;
}
.middle-box-border {
  border-radius: 0 0 0 0;
}
.last-box-border {
  border-radius: 0 0 0.25rem 0;
}
</style>
