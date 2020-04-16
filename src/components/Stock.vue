<template>
  <b-container>
    <b-jumbotron>
      <h3>??? Price: ???/</h3>
      <hr />
      <b-input-group prepend="Quantity">
        <b-form-input></b-form-input>
        <b-input-group-append>
          <b-button variant="success">Buy</b-button>
        </b-input-group-append>
      </b-input-group>
    </b-jumbotron>
  </b-container>
</template>

<style scoped>
.input-group-text {
  background-color: rgb(184, 184, 184);
}

.btn-success {
  background-color: #42b983;
}
</style>
