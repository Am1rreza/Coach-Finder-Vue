import { createStore } from 'vuex';
import coachesModule from './modules/coaches/index.js';
import requestesModule from "./modules/requestes/index.js"

const store = createStore({
  modules: {
    coaches: coachesModule,
    requests: requestesModule,
    state() {
      return {
        userId: 'c3',
      };
    },
    getters: {
      userId(state) {
        return state.userId;
      },
    },
  },
});

export default store;
