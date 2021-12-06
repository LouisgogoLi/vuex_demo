export default {
  namespaced: true,
  state: {
    token: "",
  },
  actions: {
    handSetToken({ commit }, payload) {
      commit("setToken", payload);
    },
  },
  mutations: {
    setToken(state, payload) {
      state.token = payload;
    },
  },
  getters: {
    getToken(state) {
      return state.token;
    },
  },
};
