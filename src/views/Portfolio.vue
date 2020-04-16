<template>
  <div class="potfolio">
    <h2>Your wallet</h2>
    <hr />
    <br />
    <b-container>
      <b-col lg="6">
        <MyStock />
      </b-col>
    </b-container>
  </div>
</template>
<script>
import MyStock from "../components/MyStock.vue";
export default {
  components: {
    MyStock
  }
};
</script>