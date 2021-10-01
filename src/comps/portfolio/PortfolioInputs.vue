<template>
<article>
  <div class="level">
    <!-- Buttons -->
    <div class="level-left">
      <div class="level-item">
        <div class="field has-addons">
          <p class="control">
            <button class="button is-active" @click="emitTiles"> Blocos </button>
          </p>
          <p class="control">
            <button class="button" @click="emitTable"> Lista </button>
          </p>
        </div>
      </div>
    </div>

    <!-- Sectors -->
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
</article>
</template>

<script>
export default {
  name: 'PortfolioInputs',

  methods: {
    emitTiles () {
      this.$emit('mode', 'tiles')
    },
    emitTable () {
      this.$emit('mode', 'table')
    }
  }
}
</script>
