<template>
<div class="box gradient-green p-0">
  <!-- Icon -->
  <div class="level p-5">
    <Icon class="level-item" icon="wallet" color="white" />
  </div>

  <!-- Name -->
  <div class="level">
    <div class="level-item">
      <div class="has-text-centered">
        <p class="has-text-white is-size-5 has-text-weight-bold">
          {{ name }}
        </p>
        <p class="has-text-white is-size-6">
          Criada em {{ createdAt.toLocaleDateString('pt-BR') }}
        </p>
      </div>
    </div>
  </div>

  <!-- Footer -->
  <div class="level p-5 gradient-green-faded footer-radius">
    <!-- Variacao -->
    <div class="level-item">
      <div class="level">
        <Icon class="level-item p-5 green footer-radius" icon="wallet" color="white" />
        <div class="level-item mx-3">
          <div class="has-text-white">
            <p class=" has-text-weight-bold"> Variação: </p>
            <p> {{ gain }}% </p>
          </div>
        </div>
      </div>
    </div>

    <!-- Ativos -->
    <div class="level-item">
      <div class="level">
        <Icon class="level-item p-5 green footer-radius" icon="wallet" color="white" />
        <div class="level-item mx-3">
          <div class="has-text-white">
            <p class=" has-text-weight-bold"> Ativos: </p>
            <p> {{ assets.length }} </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import Icon from '@/comps/Icon'

export default {
  name: 'Portfolio',

  components: {
    Icon
  },

  data: () => ({
    name: 'Minha carteira na Clear',
    gain: 12.5,
    createdAt: new Date(),
    assets: [1, 2, 3]
  })
}
</script>

<style scoped>
.gradient-green {
  background: linear-gradient(135deg, rgba(49,223,152,1) 0%, rgba(16,175,140,1) 100%);
}

.gradient-green-faded {
  background: rgb(102, 212, 188);
  width: 100%;
  box-shadow: none;
}

.green {
  background: rgba(16,175,140,1);
}

.footer-radius {
  border-radius: 10px;
}
</style>
