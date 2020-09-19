<template>
  <div id="app">
    <Header></Header>
    <router-view></router-view>
    <Footer></Footer>
  </div>
</template>

<script>
//import HomePage from './components/HomePage'
import Header from './components/Header'
import Footer from './components/Footer'

export default {
  name: 'App',
  data: function() {
    return{
      institution: "HEP center of Tsinghua"
    }
  },
  components: {
    Header,
    Footer
  }
}
</script>

<style>
#app {
  background-color: #78C2AD;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 100%;
}
</style>
