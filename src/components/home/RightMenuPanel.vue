<template>
  <div class="p__home__right_menu_panel">
    <div class="menu-bar">
      <div class="icon_list">
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
      <div class="menu-title">POMODORO</div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.p__home__right_menu_panel {
  width: $menu-panel-width;
  @include pad-width {
    width: px-to-vw($menu-panel-width, $pc-media);
  }
  .menu-bar {
    padding: 48px 0;
    height: 100%;
    position: absolute;
    right: 85px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    @include pad-width {
      right: px-to-vw(85px, $pc-media);
    }
    @include spad-width {
      display: none;
    }
  }
  .icon_list {
    display: flex;
    flex-direction: column;

    .menu_link {
      margin-bottom: 48px;
    }
    .menu_link i{
      font-size: 36px;
      width: 36px;
      height: 36px;
      color: $second-color;
      cursor: pointer;
      transition: .3s;
      &:hover {
        transform: scale(1.1);
      }
      &.mode.break {
        color: $second-text-color;
        &:hover {
          color: $text-color;
        }
      }
      &.mode.work {
        color: $text-color;
        &:hover {
          color: $second-text-color;
        }
      }
    }
  }
  .menu-title {
    font-size: 1.5rem;
    font-weight: bold;
    color: $second-color;
    writing-mode: vertical-lr
  }
  @include spad-width {
    width: 0;
  }
}
</style>
