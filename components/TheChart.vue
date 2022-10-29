<template>
  <div>
    <highcharts
      :constructor-type="'stockChart'"
      :options="chartData"
    ></highcharts>
  </div>
</template>

<script>
export default {
  props: {
    chartData: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {
      chartOptions: {
        series: [
          {
            data: [1, 2, 3],
          },
        ],
      },
    }
  },
}
</script>
