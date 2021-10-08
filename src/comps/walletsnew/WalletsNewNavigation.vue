<template>
<div>
  <div class="is-flex is-flex-direction-column is-align-items-center">
    <!-- Title (mobile) -->
    <div class="is-hidden-desktop">
      <h5 class="is-size-5 has-text-weight-bold">
        Criar nova Cartera
      </h5>
    </div>

    <div class="is-align-self-stretch">
      <div class="container py-3">
        <div class="is-flex is-justify-content-space-between">
          <!-- Back -->
          <div style="min-width: 8rem;">
            <c-button
              class="is-light is-fullwidth"
              left
              icon="angle-left"
              :disabled="modelValue <= 1"
              @click="prev"
            >
              Voltar
            </c-button>
          </div>

          <!-- Title (desktop) -->
          <div class="is-hidden-touch">
            <h4 class="is-size-4 has-text-weight-bold">
              Criar nova Cartera
            </h4>
          </div>

          <!-- Continue -->
          <div style="min-width: 8rem;">
            <c-button
              class="is-primary is-fullwidth"
              right
              icon="angle-right"
              @click="next"
            >
              {{ modelValue >= 2 ? 'Finalizar' : 'Continuar' }}
            </c-button>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'WalletsNewNavigation',

  props: {
    modelValue: {
      type: Number,
      required: true
    }
  },

  data: () => ({
    MAX: 3,
    MIN: 1
  }),

  methods: {
    next () {
      const val = Math.min(this.modelValue + 1, this.MAX)
      if (val === this.MAX) {
        this.$emit('finish')
      }
      this.$emit('update:modelValue', val)
    },
    prev () {
      const val = Math.max(this.modelValue - 1, this.MIN)
      this.$emit('update:modelValue', val)
    }
  }
}
</script>
