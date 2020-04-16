const state = {
  founds: 5685,
};

const getters = {
  displayFounds: (state) => {
    let amount = state.founds.toString();

    if (amount.length > 3) {
      return (
        amount.substr(0, amount.length - 3) + "." + amount.substr(-3) + "$"
      );
    } else return amount + "$";

    // return Math.floor(state.founds/1000)+'.'+state.founds%1000 + "$";
  },
};

export default {
  state,
  getters,
};
