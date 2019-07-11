<template>
  <div class="reciprocal-panel" :class="playMode">
    <div class="inner-circle" :class="playing ? 'playing' : ''">
      <div class="play-btn">
        <i class="material-icons" v-if="playing === false" @click="togglePlaying(true)">play_circle_filled</i>
        <i class="material-icons" v-else @click="togglePlaying(false)">pause_circle_filled</i>
        <div class="dot"></div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
  computed: {
    ...mapState(['playing', 'time', 'playMode'])
  },
  methods: {
    togglePlaying(value) {
      this.$store.commit('togglePlaying', { value });
    }
  }
};
</script>

<style lang="scss" scoped>
.reciprocal-panel {
  width: 540px;
  height: 540px;
  border: 4px solid $text-color;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
  .inner-circle {
    width: 500px;
    height: 500px;
    border-radius: 50%;
    background-color: $text-color;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: .3s;
    .play-btn {
      color: white;
      width: 6rem;
      height: 6rem;
      transition: .3s;
      i {
        font-size: 6.5rem;
        cursor: pointer;
        transition: .3s;
        user-select: none;
      }
      .dot {
        width: 14px;
        height: 14px;
        background-color: white;
        cursor: pointer;
        position: absolute;
        bottom: 0;
        right: 0;
        transform: translateX(100%);
        transition: .3s;
      }
    }
    &:hover {
      .play-btn {
        transform: scale(1.2);
      }
    }
  }
  .inner-circle.playing {
    background-color: white;
    border: 4px solid $text-color;
    .play-btn {
      color: $text-color;
      .dot {
        background-color: $text-color;
      }
    }
  }
  &.break {
    border-color: $second-text-color;
    .inner-circle {
      background-color: $second-text-color;
    }
    .inner-circle.playing {
      background-color: white;
      border: 4px solid $second-text-color;
      .play-btn {
        color: $second-text-color;
        .dot {
          background-color: $second-text-color;
        }
      }
    }
  }
}
</style>
