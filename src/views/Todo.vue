<template>
  <div class="p__todoList">
    <div class="todo-panel">
      <todo-input :tools="true"></todo-input>
      <all-todo-list title="TO-DO" :todos="todosDoing"></all-todo-list>
      <all-todo-list title="DONE" :todos="todosCompleted"></all-todo-list>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import TodoInput from '@/components/TodoInput.vue';
import AllTodoList from '@/components/toolsCom/AllTodoList.vue';
export default {
  components: {
    TodoInput,
    AllTodoList
  },
  computed: {
    ...mapState(['todos']),
    todosDoing() {
      return this.todos.filter(todo => todo.isCompleted === false);
    },
    todosCompleted() {
      return this.todos.filter(todo => todo.isCompleted === true);
    }
  }
};
</script>

<style lang="scss">
.p__todoList {
  display: flex;
  justify-content: center;
  padding: 3rem 0;
  height: 100%;
  @include spad-width {
    height: initial;
  }
  .todo-panel {
    width: 100%;
    max-width: 445px;
    @include spad-width {
      max-width: initial;
    }
  }
}
</style>
