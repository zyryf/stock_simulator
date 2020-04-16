<template>
  <div class="info">
    <b-container>
      <b-jumbotron>
        <h2>Trade or view your portfolio</h2>
        <p>You may save and load your data</p>
        <p>Click on 'End Day' to begin new day</p>
        <hr />
        <h3>Your founds: {{ displayFounds }}</h3>
      </b-jumbotron>
    </b-container>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["displayFounds"])
  }
};
</script>

<style scoped></style>
