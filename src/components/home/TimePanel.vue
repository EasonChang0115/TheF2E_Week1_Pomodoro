<template>
  <div class="top_panel" :class="playMode">
    <transition-group name="flip" class='mession-block'>
      <now-mession-bar :nowTodoID="$store.state.nowTodoID" :key="$store.state.nowTodoID"></now-mession-bar>
    </transition-group>
    <div class="time_reciprocal">{{ time | timeformat }}</div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import NowMessionBar from './NowMessionBar';
export default {
  components: {
    NowMessionBar
  },
  computed: {
    ...mapState(['isStart', 'modeTime', 'playMode', 'playingTime']),
    time() {
      if (!this.isStart) return this.modeTime[this.playMode];
      else return this.playingTime;
    }
  }
};
</script>

<style lang="scss" scoped>
.top_panel {
  width: 100%;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  .mession-block {
    display: block;
    max-height: 48px;
    min-height: 48px;
    height: 48px;
    overflow: hidden;
  }
  .time_reciprocal {
    font-size: 11rem;
    font-weight: bold;
    color: $text-color;
    @include pad-width {
      font-size: px-to-vw(rem-to-px(11rem), $pc-media);
    }
  }
  &.break .time_reciprocal{
    color: $second-text-color;
  }
  @include spad-width {
    display: none;
  }
}
</style>
