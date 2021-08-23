<template>
<article>
  <div class="box p-2">
    <div class="columns">
      <div class="column is-3">
        <!-- Image -->
        <div class="level-item">
          <figure class="image">
            <img class="is-rounded" src="https://cdn.discordapp.com/attachments/826824589312655427/878764010202365962/unknown.png">
          </figure>
        </div>
      </div>

      <div class="column">
        <div class="is-mobile">
          <!-- User first row -->
          <div class="level mb-1 mt-1">
            <div class="level-left">

              <!-- User Info -->
              <div class="level-item">
                <p style="line-height: 1.3rem">
                  <strong class="is-size-4">Roberta Heinrich</strong>
                  <br>
                  <span class="is-size-6 has-text-dark">@heinrichroberta</span>
                </p>
              </div>
            </div>

            <!-- Actions -->
            <div class="level-right">
              <div class="button is-default is-primary level-item px-5">
                <p>
                  <strong class="is-size-6">Seguir +</strong>
                </p>
              </div>
              <div class="button is-default is-success level-item px-5">
                <p>
                  <font-awesome-icon icon="paper-plane" color="#23C881" />
                  <span class="ml-2">Enviar mensagem</span>
                </p>
              </div>
            </div>
          </div>

          <hr class="my-2">

          <!-- User Second row -->
          <div class="level mb-3">
            <div class="level-left">

              <!-- User description -->
              <div class="level-item">
                <p>
                  <small>Foco em usufruir de gestão passiva.</small>
                  <br>
                  <small>Invisto em fundos, cripto, alguns ETFs e poucas ações</small>
                </p>
              </div>
            </div>
          </div>

          <!-- User Third row -->
          <div class="level">
            <div class="level-left">

              <!-- User description -->
              <div class="level-item">
                <p>
                  <strong class="has-text-primary pr-1">10</strong>
                  <span>carteras</span>
                </p>
              </div>
              <!-- User description -->
              <div class="level-item">
                <p>
                  <strong class="has-text-primary pr-1">10 mil</strong>
                  <span>seguidores</span>
                </p>
              </div>
              <!-- User description -->
              <div class="level-item">
                <p>
                  <strong class="has-text-primary pr-1">105</strong>
                  <span>seguindo</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Portfolios info -->
  <div class="box">
    <div class="level is-mobile mb-1">
      <div class="level-left">
        <!-- Header -->
        <div class="level-item">
          <p><strong class="is-size-5"> Carteras </strong></p>
        </div>
      </div>
      <div class="level-left">
            <!-- Info -->
        <div class="level-item">
          <p>
            Variação
          </p>
        </div>
        <Variation class="level-item"/>
      </div>
    </div>
    <div class="level is-mobile mb-1">

      <!-- PORTFOLIO 1 -->
      <div class="box gradient-green p-0">
        <div class="level pt-5">
          <div>
          </div>
          <div>
            <font-awesome-icon icon="wallet" color="white"/>
          </div>
          <div>
          </div>
        </div>
        <div class="level p-5 has-text-centered">
          <p>
            <span class="has-text-white is-size-5 has-text-weight-bold"> Minha Carteira na Clear</span>
            <br>
            <span class="has-text-white is-size-6"> Criada em 12/12/19</span>
          </p>
        </div>
        <div class="level">
          <div class="box gradient-green-faded">
            hei
          </div>
        </div>
      </div>

      <!-- PORTFOLIO 2 -->
      <div class="box gradient-red p-0">
        <div class="level pt-5">
          <div>
          </div>
          <div>
            <font-awesome-icon icon="wallet" color="white"/>
          </div>
          <div>
          </div>
        </div>
        <div class="level p-5 has-text-centered">
          <p>
            <span class="has-text-white is-size-5 has-text-weight-bold"> Tua Carteira na Clear</span>
            <br>
            <span class="has-text-white is-size-6"> Criada em 12/12/19</span>
          </p>
        </div>
        <div class="level">
          <div class="box gradient-red-faded">
            hei
          </div>
        </div>
      </div>
    </div>
  </div>
</article>
</template>

<script>
import Variation from './utils/Variation'

export default {
  name: 'Portfolio',

  components: {
    Variation
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
