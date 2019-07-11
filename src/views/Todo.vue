<template>
  <div class="p__todoList">
    <div class="todo-panel">
      <todo-input></todo-input>
    </div>
  </div>
</template>

<script>
import TodoInput from '@/components/TodoInput.vue';
export default {
  components: {
    TodoInput
  }
};
</script>

<style lang="scss">
.p__todoList {
  display: flex;
  justify-content: center;
  padding: 3rem 0;
  .todo-panel {
    width: 100%;
    max-width: 445px;
  }
}

</style>
