const state = {
  myStocks: [],
};

const getters = {
  get_myStocks: (state) => {
    return state.myStocks;
  },
};

const mutations = {
  addStock: (state, payload) => {
    let updated;
    payload.amount = parseInt(payload.amount, 10);

    state.myStocks.forEach((element) => {
      if (payload.company === element.company) {
        element.amount += payload.amount;
        updated = true;
      }
    });

    if (!updated) state.myStocks.push(payload);
  },
  removeStock: (state, payload) => {
    state.myStocks.forEach((element) => {
      if (element.company === payload.company) {
        element.amount -= payload.amount;
      }
    });
    state.myStocks = state.myStocks.filter((element) => element.amount !== 0);
  },
  updateStocks: (state, payload) => {
    state.myStocks.forEach((el, index) => {
      el.price = payload[index].price;
    });
  },
};

export default {
  state,
  getters,
  mutations,
};
