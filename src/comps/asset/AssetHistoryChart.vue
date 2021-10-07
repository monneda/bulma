<template>
<canvas ref="chart"></canvas>
</template>

<script>
import Chart from 'chart.js'
import 'chartjs-plugin-colorschemes/src/plugins/plugin.colorschemes'
import { Tableau20 } from 'chartjs-plugin-colorschemes/src/colorschemes/colorschemes.tableau'

const OPTIONS = {
  plugins: { colorschemes: { scheme: Tableau20 } },
  legend: { display: false },
  scales: {
    xAxes: [{ gridLines: { display: false }, ticks: { display: false } }],
    yAxes: [{ gridLines: { display: false }, ticks: { display: false } }]
  },
  tooltips: {
    mode: 'index',
    intersect: false,
    displayColors: false,
    callbacks: {
      label: tooltip => `R$ ${tooltip.yLabel}`
    }
  }
}

export default {
  name: 'AssetHistoryChart',

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

  watch: {
    labels (val) {
      this.chart.data.labels = val
      this.chart.update()
    },
    data (val) {
      this.chart.data.datasets[0].data = val
      this.chart.update()
    }
  },

  computed: {
    config () {
      return {
        type: 'line',
        data: {
          labels: this.labels,
          datasets: [{
            tension: 0,
            fill: false,
            pointRadius: 0,
            data: this.data,
            borderColor: 'rgba(53, 229, 153, 1)' // primary
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
