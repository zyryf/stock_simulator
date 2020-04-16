import Vue from "vue";
import Vuex from "vuex";
import founds from "./modules/founds";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    founds,
  },
});
