<template>
  <div class="bottom-menu-panel" :class="{tools: tools}">
    <div class="icon_list">
      <router-link to="/" class="menu_link">
        <i class="material-icons">home</i>
      </router-link>
      <router-link to="/tools/todo" class="menu_link">
        <i class="material-icons">list</i>
      </router-link>
      <router-link to="/tools/analytics" class="menu_link">
        <i class="material-icons">assessment</i>
      </router-link>
      <router-link to="/tools/ringtones" class="menu_link">
        <i class="material-icons">library_music</i>
      </router-link>
      <div class="menu_link">
        <i class="material-icons mode" :class="$store.state.playMode" @click="$store.commit('switchPlayMode')">free_breakfast</i>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: ['tools']
  };
</script>

<style lang="scss" scoped>
.bottom-menu-panel {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  bottom: 0;
  left: 0;
  overflow: hidden;
  height: 0px;
  transition: 0.3s;
  background-color: $primary-color;
  &.tools {
    background-color: $second-color;
    .icon_list {
      .menu_link {
        color: $primary-color;
      }
    }
  }
  .icon_list {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 45px;
    .menu_link {
      color: $second-color;
    }
  }
  @include spad-width {
    height: 55px;
  }
}
</style>
