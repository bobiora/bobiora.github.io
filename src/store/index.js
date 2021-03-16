import Vue from "vue";
import Vuex from "vuex";

import mutations from "@/store/mutations/mutations.js";
import commonActions from "@/store/actions/actions.js";
import apiRequests from "@/store/actions/api-requests.js";
import getters from "@/store/getters/getters.js";

const actions = {...commonActions, ...apiRequests};

Vue.use(Vuex);

let store = new Vuex.Store({
  state: {
    products: [],
    cart: []
  },
  mutations,
  actions,
  getters,
});

export default store;
