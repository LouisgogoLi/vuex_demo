export default {
  handSetOpenState({ commit, state }) {
    const isOpen = !state.isOpen;
    commit("setOpenState", isOpen);
  },
};
