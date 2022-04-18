export default {
  namespaced: true,
  state: {
    summary: 10,
  },
  actions: {
    handSetSummary({ commit }, payload) {
      commit("setSummary", payload);
    },
  },
  mutations: {
    setSummary(state, payload) {
      state.summary = payload;
    },
  },
  getters: {
    getSummary(state) {
      return state.summary;
    },
  },
};
