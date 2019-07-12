<template>
  <div class="play-btn" :class="home ? 'home' : playMode">
    <i class="material-icons" @click="$store.commit('onChangeNowMession', { id })">play_circle_outline</i>
  </div>
</template>

<script>
  export default {
    props: ['home', 'id'],
    computed: {
      playMode() {
        return this.$store.state.playMode;
      }
    }
  };
</script>

<style lang="scss" scoped>
.play-btn {
  i {
    color: white;
    cursor: pointer;
    transition: .3s;
    &:hover {
      color: $text-color;
    }
  }
  &.home {
    i {
      color: $primary-color;
      &:hover {
        color: rgba($primary-color, 0.5);
      }
    }
  }
  &.break {
    i:hover {
      color: $second-text-color;
    }
  }
}
</style>
