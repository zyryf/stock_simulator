<template>
  <div class="potfolio">
    <h2>Your wallet</h2>
    <hr />
    <br />
    <h3 v-if="get_myStocks.length === 0">
      You have not purchased anything yet!
    </h3>
    <b-container v-else>
      <b-row>
        <b-col
          cols="12"
          lg="6"
          v-for="(myStock, index) in get_myStocks"
          :key="index"
        >
          <MyStock :myStock="myStock" />
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>
<script>
import MyStock from "../components/MyStock.vue";
import { mapGetters } from "vuex";
export default {
  components: {
    MyStock
  },
  computed: {
    ...mapGetters(["get_myStocks"])
  }
};
</script>