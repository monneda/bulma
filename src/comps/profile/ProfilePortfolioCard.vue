<template>
<article class="has-background-primary-dark">
  <!-- Spacing -->
  <div class="level"></div>

  <!-- Icon -->
  <div class="level">
    <div class="level-item">
      <font-awesome-icon icon="wallet" color="white" />
    </div>
  </div>

  <!-- Name -->
  <div class="level">
    <div class="level-item">
      <div class="has-text-centered">
        <p class="has-text-white has-text-weight-bold is-size-5">
          {{ name }}
        </p>
        <p class="has-text-white is-size-6">
          Criada em {{ createdAt.toLocaleDateString('pt-BR') }}
        </p>
      </div>
    </div>
  </div>

  <!-- Footer -->
  <div class="level has-background-primary p-3">
    <!-- Variation -->
    <div class="level-item has-text-white">
      <span class="icon">
        <font-awesome-icon icon="wallet" size="lg" />
      </span>
      <span class="px-3">
        <p class="has-text-weight-bold">Variação:</p>
        <p> {{ gain }}% </p>
      </span>
    </div>

    <!-- Assets -->
    <div class="level-item has-text-white">
      <span class="icon">
        <font-awesome-icon icon="wallet" size="lg" />
      </span>
      <span class="px-3">
        <p class="has-text-weight-bold">Ativos:</p>
        <p> {{ assets.length }} </p>
      </span>
    </div>
  </div>
</article>
</template>

<script>
export default {
  name: 'ProfilePortfolioCard',

  data: () => ({
    name: 'Minha carteira na Clear',
    gain: 12.5,
    createdAt: new Date(),
    assets: [1, 2, 3]
  })
}
</script>
