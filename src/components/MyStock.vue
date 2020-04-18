<template>
  <b-container>
    <b-jumbotron>
      <h3>
        <strong>{{ myStock.company }}</strong>
        <span class="price">
          Price: {{ myStock.price }}$ [{{ myStock.amount }}]
        </span>
      </h3>
      <hr />
      <b-input-group prepend="Quantity">
        <b-form-input
          type="number"
          placeholder="Enter amount ..."
          v-model="stockAmount"
          @input="disabledState = false"
        ></b-form-input>
        <b-input-group-append>
          <b-button
            variant="danger"
            :disabled="disabledState"
            @click="sellStock"
            >Sell</b-button
          >
        </b-input-group-append>
      </b-input-group>
    </b-jumbotron>
  </b-container>
</template>


<script>
import { mapMutations } from "vuex";
export default {
  data() {
    return {
      disabledState: true,
      stockAmount: null
    };
  },
  props: {
    myStock: Object
  },
  methods: {
    ...mapMutations(["increaseFounds", "removeStock"]),
    sellStock() {
      if (this.stockAmount <= this.myStock.amount && this.stockAmount > 0) {
        this.increaseFounds(this.stockAmount * this.myStock.price);
        this.removeStock({
          amount: this.stockAmount,
          company: this.myStock.company
        });
      } else {
        alert("Invalid amount!");
      }
      this.stockAmount = null;
      this.disabledState = true;
    }
  }
};
</script>
<style scoped>
.input-group-text {
  background-color: rgb(184, 184, 184);
}

.price {
  font-size: 0.7em;
}
</style>
