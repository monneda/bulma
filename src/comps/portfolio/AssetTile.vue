<template>
<article>
  <div class="level is-mobile">
    <div class="level-left">
      <!-- Icon -->
      <div class="level-item">
        <span class="icon is-large">
          <font-awesome-icon icon="wallet" size="3x" />
        </span>
      </div>

      <!-- Asset name -->
      <div class="level-item">
        <div class="is-flex is-flex-direction-column">
          <span> Petrobras S/A </span>
          <strong> PETR3 </strong>
        </div>
      </div>
    </div>
  </div>

  <hr class="my-2">

  <div class="level is-mobile">
    <div class="level-left">
      <!-- Weight -->
      <div class="level-item px-2">
        <div class="is-flex is-flex-direction-column">
          <strong> Peso </strong>
          <span> 100% </span>
        </div>
      </div>

      <!-- Price -->
      <div class="level-item px-2">
        <div class="is-flex is-flex-direction-column">
          <strong> Preço </strong>
          <span> R$ 100,00 </span>
        </div>
      </div>

      <!-- Performance -->
      <div class="level-item px-2">
        <div class="is-flex is-flex-direction-column">
          <strong> Variação </strong>
          <span> -10% </span>
        </div>
      </div>
    </div>
  </div>
</article>
</template>

<script>
export default {
  name: 'AssetTile'
}
</script>
