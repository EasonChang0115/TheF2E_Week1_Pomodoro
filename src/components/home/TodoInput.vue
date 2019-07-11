<template>
  <div class="todo_input" :class="playMode">
    <input type="text" placeholder="add a new mission...">
    <i class="material-icons">add</i>
  </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
  computed: {
    ...mapState(['playing', 'time', 'playMode'])
  }
};
</script>

<style lang="scss" scoped>
.todo_input {
  width: 100%;
  background: white;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 1rem;
  input {
    outline: none;
    border: none;
    width: 100%;
    height: 56px;
    color: $text-color;
    &::placeholder {
      color: $text-color;
      font-style: italic;
      font-weight: bold;
      text-transform:uppercase;
    }
  }
  i {
    font-size: 24px;
    color: $text-color;
    cursor: pointer;
  }
  &.break {
    input::placeholder {
      color: $second-text-color;
    }
    i {
      color: $second-text-color;
    }
  }
}
</style>
