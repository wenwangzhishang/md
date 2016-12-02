<template>
  <div id="app">
    <product></product>
    <fault></fault>
    <place></place>
    <!--<date></date>-->
  </div>
</template>

<script>
import Product from 'Product'
import Fault from 'Fault'
import Place from 'Place'
//import Hello from 'Date'

export default {
  name: 'app',
  components: {
    Product,
    Fault,
    Place
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
