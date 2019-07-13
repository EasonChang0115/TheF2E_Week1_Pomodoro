<template>
<div class="chart_panel">
  <div class="title-bar">
    <div class="title">CHART</div>
  </div>

</div>
</template>

<script>
export default {
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
}
</style>
