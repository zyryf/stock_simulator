<template>
  <div class="stocks">
    <h2>Available stocks</h2>
    <hr />
    <br />
    <b-container>
      <b-col lg="6">
        <Stock />
      </b-col>
    </b-container>
  </div>
</template>

<script>
import Stock from "../components/Stock.vue";
export default {
  components: {
    Stock
  }
};
</script>
