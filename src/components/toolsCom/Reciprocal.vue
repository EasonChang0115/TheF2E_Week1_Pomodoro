<template>
  <div class="reciprocal-panel" :class="playMode">
    <div class="out-circle">
      <div class="inner-circle">
        <div class="play-btn">
          <i class="material-icons" v-if="playing === false" @click="togglePlaying(true)">play_circle_filled</i>
          <i class="material-icons" v-else @click="togglePlaying(false)">pause_circle_filled</i>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
  computed: {
    ...mapState(['playing', 'playMode', 'playingTime', 'modeTime', 'isStart'])
  }
};
</script>

<style lang="scss" scoped>
.reciprocal-panel {
  width: 350px;
  height: 350px;
  background-color: white;
  border-radius: 50%;
  position: absolute;
  bottom: 0;
  transform: translateY(50%);
  .out-circle {
    width: 116px;
    height: 116px;
    border-radius: 50%;
    background-color: $primary-color;
    position: absolute;
    top: -60px;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    justify-content: center;
    align-items: center;
    .inner-circle {
      width: 104px;
      height: 104px;
      border: 2px solid $text-color;
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .play-btn{
      width: 88px;
      height: 88px;
      background-color: white;
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      i {
        color: $text-color;
        font-size: 6.7rem;
        cursor: pointer;
        transition: .3s;
        &:hover {
          transform: scale(1.1);
        }
      }
    }
  }
  &.break {
    .out-circle .inner-circle {
      border: 2px solid $second-text-color;
    }
    .out-circle .inner-circle .play-btn i {
      color: $second-text-color;
    }
  }
}
</style>
