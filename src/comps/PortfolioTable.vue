<template>
<article>
  <div class="tabs is-fullwidth is-toggle">
    <ul>
      <li class="is-active"><a>Ativos</a></li>
      <li><a>Composição</a></li>
      <li><a>Histórico</a></li>
    </ul>
  </div>

  <div class="level">
    <div class="level-left">
      <div class="level-item">
        <div class="field has-addons">
          <p class="control">
            <button class="button is-active" ref="blockButton" @click="toggle">
              Blocos
            </button>
          </p>
          <p class="control">
            <button class="button" ref="tableButton" @click="toggle">
              Lista
            </button>
          </p>
        </div>
      </div>
    </div>

    <div class="level-right">
      <div class="level-item">
        <div class="select is-primary">
          <select>
            <option>Setor 1</option>
            <option>Setor 2</option>
            <option>Setor 3</option>
          </select>
        </div>
      </div>

      <div class="level-item">
        <div class="select is-primary">
          <select>
            <option>Segmento 1</option>
            <option>Segmento 2</option>
            <option>Segmento 3</option>
          </select>
        </div>
      </div>

      <div class="level-item">
        <div class="select is-primary">
          <select>
            <option>Tipo 1</option>
            <option>Tipo 2</option>
            <option>Tipo 3</option>
          </select>
        </div>
      </div>
    </div>
  </div>

  <div v-if="blockMode" class="columns is-multiline">
    <div class="column is-6"><AssetCard class="box" /></div>
    <div class="column is-6"><AssetCard class="box" /></div>
    <div class="column is-6"><AssetCard class="box" /></div>
    <div class="column is-6"><AssetCard class="box" /></div>
    <div class="column is-6"><AssetCard class="box" /></div>
    <div class="column is-6"><AssetCard class="box" /></div>
  </div>

  <table v-else class="table is-fullwidth is-hoverable">
    <thead class="has-background-light">
      <tr>
        <th>Nome</th>
        <th>Peso</th>
        <th>Preço</th>
        <th>Variação</th>
      </tr>
    </thead>
    <tbody>
      <AssetRow />
      <AssetRow />
      <AssetRow />
      <AssetRow />
      <AssetRow />
      <AssetRow />
    </tbody>
  </table>
</article>
</template>

<script>
import AssetRow from '@/comps/portfolio/AssetRow'
import AssetCard from '@/comps/portfolio/AssetCard'

export default {
  name: 'PortfolioTable',

  components: {
    AssetRow,
    AssetCard
  },

  data: () => ({
    blockMode: true
  }),

  methods: {
    toggle () {
      this.blockMode = !this.blockMode
      this.$refs.tableButton.classList.toggle('is-active')
      this.$refs.blockButton.classList.toggle('is-active')
    }
  }
}
</script>
