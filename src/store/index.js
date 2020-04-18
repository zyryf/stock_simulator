import Vue from "vue";
import Vuex from "vuex";
import founds from "./modules/founds";
import stocks from "./modules/stocks";
import myStocks from "./modules/myStocks";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    founds,
    stocks,
    myStocks,
  },
});
