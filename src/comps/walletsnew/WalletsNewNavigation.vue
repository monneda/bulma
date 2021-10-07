<template>
<div>
  <div class="is-flex is-flex-direction-column is-align-items-center">
    <!-- Title (mobile) -->
    <div class="is-hidden-desktop">
      <h5 class="is-size-5 has-text-weight-bold">Criar nova Cartera</h5>
    </div>

    <div class="is-align-self-stretch">
      <div class="container py-3">
        <div class="is-flex is-justify-content-space-between">
          <!-- Back -->
          <div style="min-width: 8rem;">
            <button class="button is-light is-fullwidth" @click="prev">
              <span class="icon-text">
                <span class="icon">
                  <font-awesome-icon icon="angle-left" />
                </span>
                <span> Voltar </span>
              </span>
            </button>
          </div>

          <!-- Title (desktop) -->
          <div class="is-hidden-touch">
            <h4 class="is-size-4 has-text-weight-bold"> Criar nova Cartera </h4>
          </div>

          <!-- Continue -->
          <div style="min-width: 8rem;">
            <button class="button is-primary is-fullwidth" @click="next">
              <span class="icon-text">
                <span> Continuar </span>
                <span class="icon">
                  <font-awesome-icon icon="angle-right" />
                </span>
              </span>
            </button>
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

  data: () => ({
    step: 1
  }),

  methods: {
    next () {
      this.step = Math.min(this.step + 1, 3)
      this.$emit('update:modelValue', this.step)
    },
    prev () {
      this.step = Math.max(this.step - 1, 1)
      this.$emit('update:modelValue', this.step)
    }
  }
}
</script>
