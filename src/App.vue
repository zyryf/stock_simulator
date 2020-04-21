<template>
  <div id="app">
    <b-navbar type="dark" variant="dark" id="nav">
      <b-navbar-nav>
        <b-nav-item><router-link to="/">Home</router-link></b-nav-item>
        <b-nav-item>
          <router-link to="/portfolio">Portfolio</router-link></b-nav-item
        >
        <b-nav-item> <router-link to="/stocks">Stocks</router-link></b-nav-item>
      </b-navbar-nav>
      <b-navbar-nav class="ml-auto">
        <b-nav-item class="mx-3" @click="endDay"> End day</b-nav-item>

        <b-nav-item disabled class="mx-3 founds">
          Founds {{ displayFounds }}
        </b-nav-item></b-navbar-nav
      >
    </b-navbar>
    <transition name="hide" mode="out-in">
      <router-view />
    </transition>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { mapMutations } from "vuex";
export default {
  data() {
    return {
      savedStocks: []
    };
  },
  computed: {
    ...mapGetters(["displayFounds"])
  },
  methods: {
    ...mapGetters(["getStocks", "get_myStocks"]),
    ...mapMutations(["updateStocks", "newPrices"]),
    endDay() {
      this.newPrices();
      const stocks = this.getStocks();

      this.updateStocks(stocks);
    }
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  max-width: 1400px;
  margin: 0 auto;
}

#nav {
  padding: 15px 30px;
  font-size: 1.3em;
  margin: 50px;
  border: 2px solid #ddd;
  border-radius: 5px;
}

#nav a {
  color: #f3f3f3;
}

#nav a:hover {
  text-decoration: none;
}
.founds .nav-link {
  color: #bbb !important;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

.dropdown-menu {
  background-color: #343a40 !important;
}

.dropdown-item:hover {
  background-color: #46484b !important;
}
.hide-enter {
  opacity: 0;
  transform: translateY(75px);
}

.hide-enter-active {
  transition: 0.35s;
}

.hide-leave {
  opacity: 1;
  transform: translateY(0px);
}

.hide-leave-active {
  transition: 0.35s;
  opacity: 0;
  transform: translateY(75px);
}
</style>
