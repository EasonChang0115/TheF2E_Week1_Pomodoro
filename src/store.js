import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    playMode: 'break', // work 工作, break 休息
    isStart: false,
    playing: false,
    playingTime: 0,
    modeTime: {
      work: 1500,
      break: 300
    },
    todos: [{
      id: 1,
      title: 'the First thing to do today',
      isCompleted: false,
      doTimes: 0,
      remark: ''
    }, {
      id: 2,
      title: 'the second thing to do today',
      isCompleted: true,
      doTimes: 5,
      remark: ''
    }, {
      id: 3,
      title: 'the third thing to do today',
      isCompleted: false,
      doTimes: 3,
      remark: ''
    }, {
      id: 4,
      title: 'the forth thing to do today',
      isCompleted: true,
      doTimes: 4,
      remark: ''
    }, {
      id: 5,
      title: 'the five thing to do today',
      isCompleted: false,
      doTimes: 4,
      remark: ''
    }],
    nowTodoID: 0
  },
  mutations: {
    togglePlaying(state, { value }) {
      state.playing = value;
    },
    toggleStarted(state, { value }) {
      state.isStart = value;
    },
    setPlayingTime(state, { value }) {
      state.playingTime = value;
    },
    countDownPlayingTime(state) {
      state.playingTime = state.playingTime - 1;
    },
    addTodoItem(state, { title }) {
      state.todos.push({
        id: new Date().valueOf(),
        title: title,
        isCompleted: false,
        doTimes: 0,
        remark: ''
      });
    },
    toggleItemCompleted(state, { id }) {
      state.todos.forEach(todo => {
        if (todo.id === id) todo.isCompleted = !todo.isCompleted;
      });
    },
    deleteTodoItemById(state, { id }) {
      state.todos = state.todos.filter(todo => todo.id !== id);
    },
    editTodoItemById(state, { id, text }) {
      state.todos.forEach(todo => {
        if (todo.id === id) todo.title = text;
      });
    }
  },
  actions: {

  }
});
