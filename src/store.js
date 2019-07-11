import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    playMode: 'break', // work 工作, break 休息
    playing: true,
    time: {
      work: 1500,
      break: 300
    }
  },
  mutations: {
    togglePlaying(state, { value }) {
      state.playing = value;
    }
  },
  actions: {

  }
});
