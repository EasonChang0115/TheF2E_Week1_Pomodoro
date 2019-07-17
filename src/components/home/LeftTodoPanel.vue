<template>
  <div class="p__home__left_todo_panel">
    <div class="todo_panel">
      <todo-input></todo-input>
      <time-panel></time-panel>
      <todo-list></todo-list>
    </div>
    <reciprocal-panel></reciprocal-panel>
  </div>
</template>

<script>
import TodoInput from '../TodoInput.vue';
import TimePanel from './TimePanel.vue';
import TodoList from './TodoList.vue';
import ReciprocalPanel from './ReciprocalPanel.vue';
export default {
  components: {
    TodoInput,
    TimePanel,
    TodoList,
    ReciprocalPanel
  }
};
</script>

<style lang="scss" scoped>
.p__home__left_todo_panel {
  background-color: $second-color;
  width: calc(100% - #{$menu-panel-width});
  padding-left: 85px;
  .todo_panel {
    width: 445px;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    padding: 48px 0;
    @include pad-width {
      width: px-to-vw(445px, $pc-media);
    }
  }
  @include pad-width {
    width: calc(100% - #{px-to-vw($menu-panel-width, $pc-media)});
  }
  @include spad-width {
    width: 100%;
    padding: 45px;
    .todo_panel {
      width: 100%;
      justify-content: flex-end;
    }
  }
}
</style>
