export default {
  DICRITEM({ commit }, index) {
    commit("DICRITEM", index);
  },
  INCRITEM({ commit }, index) {
    commit("INCRITEM", index);
  },
  ADD_TO_CART({ commit }, product) {
    commit("SET_CART", product);
  },
  REMOVE_FROM_CART({ commit }, index) {
    commit("REMOVE_FROM_CART", index);
  },
  SET_MOBILE({commit}) {
    commit("SWITCH_MOBILE")
  },
  SET_DESKTOP({commit}) {
    commit("SWITCH_DESKTOP")
  }
};
