<template>
  <b-container>
    <b-jumbotron>
      <h3>
        <strong>{{ stock.company }} </strong
        ><span class="price"> Price: {{ stock.price }}$ </span>
      </h3>

      <hr />
      <b-input-group prepend="Quantity">
        <b-form-input
          placeholder="Enter amount ..."
          type="number"
          v-model="stockAmount"
          @input="disabledState = false"
        ></b-form-input>
        <b-input-group-append>
          <b-button variant="success" @click="add" :disabled="disabledState"
            >Buy</b-button
          >
        </b-input-group-append>
      </b-input-group>
    </b-jumbotron>
  </b-container>
</template>

<script>
import { mapMutations } from "vuex";
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      stockAmount: null,
      disabledState: true
    };
  },
  props: {
    stock: Object
  },
  methods: {
    ...mapMutations(["addStock", "decreaseFounds"]),
    ...mapGetters(["getFounds"]),
    add() {
      if (this.stockAmount > 0) {
        const foundState = this.getFounds();
        this.decreaseFounds(this.stockAmount * this.stock.price);

        if (foundState !== this.getFounds()) {
          this.addStock({
            company: this.stock.company,
            price: this.stock.price,
            amount: this.stockAmount
          });
        }
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

.btn-success {
  background-color: #42b983;
}

.price {
  font-size: 0.7em;
}
</style>
