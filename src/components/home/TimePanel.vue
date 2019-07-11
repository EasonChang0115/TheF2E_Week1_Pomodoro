<template>
  <div class="time_panel" :class="playMode">
    <div class="now_mession_title">
      <check-box></check-box>
      <div class="now_mession">
        <div class="title">the First thing to do today</div>
        <div class="dot"></div>
      </div>
    </div>
    <div class="time_reciprocal">{{ timeFomat }}</div>
  </div>
</template>

<script>
import CheckBox from '../CheckBox.vue';
import { mapState } from 'vuex';
export default {
  computed: {
    ...mapState(['isStart', 'modeTime', 'playMode', 'playingTime']),
    timeFomat() {
      let time = 0;
      if (!this.isStart) time = this.modeTime[this.playMode];
      else time = this.playingTime;
      let second = time % 60; // 秒數
      let minute = Math.floor(time / 60) % 60; // 分鐘
      let hour = Math.floor(Math.floor(time / 60) / 60);
      if (second.toString().length === 1) second = '0' + second.toString();
      if (minute.toString().length === 1) minute = '0' + minute.toString();
      if (hour.toString().length === 1) hour = '0' + hour.toString();
      return `${minute}:${second}`;
    }
  },
  components: {
    CheckBox
  }
};
</script>

<style lang="scss" scoped>
.time_panel {
  width: 100%;
  .now_mession_title {
    display: flex;
    .now_mession {
      .title {
        font-size: 1.5rem;
        font-weight: bold;
        text-transform:uppercase;
      }
      .dot {
        width: 12px;
        height: 12px;
        border-radius: 50%;
        border: 1px solid $text-color;
        margin-top: 0.5rem;
      }
    }
  }
  .time_reciprocal {
    font-size: 11rem;
    font-weight: bold;
    color: $text-color;
  }
  &.break .time_reciprocal{
    color: $second-text-color;
  }
}
</style>
