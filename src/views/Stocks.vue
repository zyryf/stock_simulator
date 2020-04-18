<template>
  <div class="stocks">
    <h2>Available stocks</h2>
    <hr />
    <br />
    <b-container>
      <b-row>
        <b-col
          cols="12"
          lg="6"
          v-for="(stock, index) in getStocks"
          :key="index"
        >
          <Stock :stock="stock" />
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Stock from "../components/Stock.vue";
export default {
  components: {
    Stock
  },
  computed: {
    ...mapGetters(["getStocks"])
  }
};
</script>

<style scoped>
</style>
