<template>
  <div class="p__tools">
    <menu-recipt></menu-recipt>
    <router-view></router-view>
    <close-bar></close-bar>
  </div>
</template>

<script>
import MenuRecipt from '@/components/toolsCom/MenuRecipt.vue';
import CloseBar from '@/components/toolsCom/CloseBar.vue';
export default {
  components: {
    MenuRecipt,
    CloseBar
  }
};
</script>

<style lang="scss" scoped>
  .p__tools {
    width: 100%;
    height: 100%;
    padding: 0 85px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
</style>
