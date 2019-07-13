<template>
  <div class="p__analytics">
    <div class="analytics_panel">
      <focus-time></focus-time>
      <chart></chart>
    </div>
  </div>
</template>

<script>
import FocusTime from '@/components/toolsCom/FocusTime.vue';
import Chart from '@/components/toolsCom/Chart.vue';

export default {
  components: {
    FocusTime,
    Chart
  }
};
</script>

<style lang="scss">
.p__analytics {
  display: flex;
  justify-content: center;
  padding: 3rem 0;
  height: 100%;
  .analytics_panel {
    width: 100%;
    max-width: 445px;
  }
}
</style>
