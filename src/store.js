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
      title: ''
    }],
    newTodoID: 0
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
    }
  },
  actions: {

  }
});
