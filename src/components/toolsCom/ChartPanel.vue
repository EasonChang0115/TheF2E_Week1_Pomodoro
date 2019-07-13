<template>
<div class="chart_panel">
  <div class="title-bar">
    <div class="title">CHART</div>
  </div>
  <div class="chart-block">
    <bar-chart :height="250" :chartData="chartData"></bar-chart>
  </div>
</div>
</template>

<script>
import BarChart from '@/components/toolsCom/BarChart.vue';
export default {
  data() {
    return {
      chartData: {
        labels: ['7/1', '7/2', '7/3', '7/4', '7/5', '7/6', '7/7'], // 位於 x 軸的各筆數據 key
        datasets: [
          {
            label: 'Tomatos', // x 軸的標籤項目
            data: ['16', '12', '16', '8', '12', '4', '20', '24'], // 位於 y 軸對應的各筆數據 value
            backgroundColor: [
              'white', 'white', 'white', 'white', 'white', 'white', '#FF4384'
            ],
          }
        ]
      }
    }
  },
  components: {
    BarChart
  }
};
</script>

<style lang="scss" scoped>
.chart_panel {
  .title-bar {
    background-color: $title-bar-color;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.5rem 1rem;
    margin-bottom: 1rem;
    .title {
      color: white;
      font-size: 1.5rem;
      font-weight: bold;
    }
    i {
      cursor: pointer;
      font-size: 1.5rem;
      color: white;
      transition: .3s;
      &.closed {
        transform: rotate(-180deg);
      }
    }
  }
  .chart-block {
    height: 250px;
  }
}
</style>
