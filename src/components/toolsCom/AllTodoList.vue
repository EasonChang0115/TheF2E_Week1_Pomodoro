<template>
  <div class="all-todo-list" :class="playMode">
    <div class="title-bar">
      <div class="title">{{ title }}</div>
      <i class="material-icons" :class="closed ? 'closed' : ''" @click="toggleLsit">arrow_drop_down</i>
    </div>
    <div class="todo-list" :class="closed ? 'closed' : ''">
      <transition-group name="fade">
        <div class="todo-item" v-for="item in todos" :key="item.id">
          <check-box width="24" height="24" size="16" color="white" :id="item.id" :value="item.isCompleted"
            @toggleValue='toggleItemCompleted'>
          </check-box>
          <div class="item-title" :class="item.isCompleted ? 'line' : ''" @dblclick="deleteItem(item.id)">{{ item.title }}</div>
          <div class="play-btn" v-if="item.isCompleted === false">
            <i class="material-icons">play_circle_outline</i>
          </div>
          <div class="dots" v-else>
            <div class="dot" v-for="(dot, index) in item.doTimes" :key="index"></div>
          </div>
        </div>
      </transition-group>
    </div>
  </div>
</template>

<script>
import CheckBox from '@/components/CheckBox.vue';
export default {
  props: ['todos', 'title'],
  computed: {
    playMode() {
      return this.$store.state.playMode;
    }
  },
  data() {
    return {
      closed: false
    };
  },
  components: {
    CheckBox
  },
  methods: {
    toggleLsit() {
      this.closed = !this.closed;
    },
    toggleItemCompleted(id) {
      this.$store.commit('toggleItemCompleted', { id });
    },
    deleteItem(id) {
      this.$store.commit('deleteTodoItemById', { id });
    }
  }
};
</script>

<style lang="scss" scoped>
.all-todo-list {
  margin-top: 3rem;
  .title-bar {
    background-color: $title-bar-color;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.5rem 1rem;
    .title {
      color: white;
      font-size: 1.5rem;
      font-weight: bold;
    }
    i {
      cursor: pointer;
      font-size: 1.5rem;
      color: white;
      transition: .3s;
      &.closed {
        transform: rotate(-180deg);
      }
    }
  }
  .todo-list {
    display: flex;
    flex-direction: column;
    transition: .3s;
    height: 250px;
    overflow: scroll;
    &::-webkit-scrollbar {
      width: 0 !important;
      height: 0 !important;
    }
    .todo-item {
      width: 100%;
      height: 49px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 10px 0;
      border-bottom: 1px solid rgba(white, 0.2);
      cursor: pointer;
    }
    .item-title {
      width: 100%;
      font-size: 1rem;
      font-weight: bold;
      text-transform: uppercase;
      color: white;
      text-align: left;
      &.line {
        text-decoration: line-through;
      }
    }
    .play-btn {
      i {
        color: white;
        cursor: pointer;
        transition: .3s;
        &:hover {
          color: $text-color;
        }
      }
    }
    .dots {
      display: flex;
      .dot {
        width: 12px;
        height: 12px;
        background-color: #fff;
        border-radius: 50%;
        margin-left: 0.5rem;
      }
    }
    &.closed {
      height: 0;
      overflow: hidden;
    }
  }
  &.break {
    .todo-list .todo-item .play-btn i:hover {
      color: $second-text-color;
    }
  }
}
</style>
