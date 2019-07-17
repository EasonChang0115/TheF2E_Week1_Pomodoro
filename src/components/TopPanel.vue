<template>
  <div class="top_panel" :class="{tools: tools, break: playMode === 'break'}">
    <transition-group name="flip" class='mession-block'>
      <now-mession-bar-top :nowTodoID="$store.state.nowTodoID" :key="$store.state.nowTodoID" :tools="tools"></now-mession-bar-top>
    </transition-group>
    <div class="time_reciprocal">
      {{ time | timeformat }}
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import NowMessionBarTop from './home/NowMessionBarTop.vue';
export default {
  props: ['tools'],
  components: {
    NowMessionBarTop
  },
  computed: {
    ...mapState(['isStart', 'modeTime', 'playMode', 'playingTime', 'playing']),
    time() {
      if (!this.isStart) return this.modeTime[this.playMode];
      else return this.playingTime;
    }
  }
};
</script>

<style lang="scss" scoped>
.top_panel {
  position: fixed;
  width: 100%;
  height: 0px;
  top: 0;
  right: 0;
  overflow: hidden;
  background-color: $primary-color;
  z-index: 100;
  display: flex;
  padding: 0 45px;
  transition: .3s;
  .time_reciprocal {
    margin-left: auto;
    line-height: 80px;
    font-size: 2rem;
    font-weight: bold;
    color: $text-color;
  }
  &.break {
    .time_reciprocal {
      color: $second-text-color;
    }
  }
  &.tools {
    background-color: $second-color;
  }
  @include spad-width {
    height: 80px;
  }
}
</style>
