const generatePrice = (min, max) => {
  return Math.floor(Math.random() * (max - min)) + min;
};

const state = {
  stocks: [
    {
      company: "Apple",
      price: 0,
    },
    {
      company: "Google",
      price: 0,
    },
    {
      company: "Netflix",
      price: 0,
    },
    {
      company: "Amazon",
      price: 0,
    },
  ],
};

const getters = {
  getStocks: (state) => {
    state.stocks.forEach((el) => {
      el.price = generatePrice(100, 200);
    });

    return state.stocks;
  },
};

const mutations = {
  newPrices: (state) => {
    state.stocks.forEach((el) => {
      el.price = generatePrice(100, 200);
    });
  },
};

export default {
  state,
  getters,
  mutations,
};
