<template>
<canvas ref="chart"></canvas>
</template>

<script>
import Chart from 'chart.js'
import 'chartjs-plugin-colorschemes/src/plugins/plugin.colorschemes'
import { Tableau20 } from 'chartjs-plugin-colorschemes/src/colorschemes/colorschemes.tableau'

const OPTIONS = {
  plugins: {
    colorschemes: {
      scheme: Tableau20
    }
  }
}

export default {
  name: 'AssetPieChart',

  props: {
    labels: {
      type: Array,
      default: () => []
    },
    data: {
      type: Array,
      default: () => []
    }
  },

  data: () => ({
    chart: null
  }),

  computed: {
    config () {
      return {
        type: 'doughnut',
        data: {
          labels: this.labels,
          datasets: [{
            data: this.data
          }]
        },
        options: OPTIONS
      }
    }
  },

  mounted () {
    this.chart = new Chart(this.$refs.chart, this.config)
  }
}
</script>
