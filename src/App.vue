<template>
  <div id="app">
    <OrgSearch :thisUnitID="'1'"></OrgSearch>
    <!--    <img src="./assets/logo.png">-->
    <router-view/>
  </div>
</template>

<script>
import OrgSearch from "@/components/OrgSearch.vue";
export default {
  name: 'App',
  components:{
    OrgSearch
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
