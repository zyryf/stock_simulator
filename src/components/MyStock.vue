<template>
  <b-container>
    <b-jumbotron>
      <h3>??? Price: ??? Amount ???/</h3>
      <hr />
      <b-input-group prepend="Quantity">
        <b-form-input></b-form-input>
        <b-input-group-append>
          <b-button variant="danger" disabled="">Sell</b-button>
        </b-input-group-append>
      </b-input-group>
    </b-jumbotron>
  </b-container>
</template>

<style scoped>
.input-group-text {
  background-color: rgb(184, 184, 184);
}
</style>
