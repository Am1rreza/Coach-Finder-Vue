import { createStore } from 'vuex';
import coachesModule from './modules/coaches/index.js';
import requestesModule from './modules/requestes/index.js';

const store = createStore({
  state: {
    userId: 'c3',
  },
  modules: {
    coaches: coachesModule,
    requests: requestesModule,
  },
  getters: {
    userId(state) {
      return state.userId;
    },
  },
});

export default store;
