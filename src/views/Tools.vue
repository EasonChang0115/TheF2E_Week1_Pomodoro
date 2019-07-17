<template>
  <div class="p__tools">
    <top-panel :tools="true"></top-panel>
    <menu-recipt></menu-recipt>
    <vue-page-transition id="tools_panel" name="slideInDown">
      <router-view></router-view>
    </vue-page-transition>
    <close-bar></close-bar>
    <bottom-menu :tools="true"></bottom-menu>
  </div>
</template>

<script>
import MenuRecipt from '@/components/toolsCom/MenuRecipt.vue';
import CloseBar from '@/components/toolsCom/CloseBar.vue';
import BottomMenu from '@/components/BottomMenu.vue';
import TopPanel from '@/components/TopPanel.vue';
export default {
  components: {
    MenuRecipt,
    CloseBar,
    BottomMenu,
    TopPanel
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
  overflow: scroll;
  #tools_panel {
    width: 100%;
    height: 100%;
  }
  @include spad-width {
    padding: 0 40px;
    margin-top: 80px;
    margin-bottom: 40px;
  }
  @include phone-width {
    padding: 0 15px;
  }
}
</style>
