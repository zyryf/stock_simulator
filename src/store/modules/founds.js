const state = {
  founds: 10000,
};

const getters = {
  displayFounds: (state) => {
    let amount = state.founds.toString();

    if (amount.length > 3) {
      return (
        amount.substr(0, amount.length - 3) + "." + amount.substr(-3) + "$"
      );
    } else return amount + "$";
  },
  getFounds: (state) => {
    return state.founds;
  },
};

const mutations = {
  decreaseFounds: (state, payload) => {
    if (payload < state.founds) {
      state.founds -= payload;
    } else {
      alert("You dont have enough founds!");
    }
  },
  increaseFounds: (state, payload) => {
    state.founds += payload;
  },
};

export default {
  state,
  getters,
  mutations,
};
