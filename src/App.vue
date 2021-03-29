<template>
  <div id="app">
    <dashboardComponent></dashboardComponent>
  </div>
</template>

<script>
import Dashboard from "./views/Dashboard.vue"

export default {
  name: "App",
  components: {
    dashboardComponent: Dashboard,
  },
  created() {
    this.$store.dispatch("initUsers")
  },
}
</script>
<style>
  @import './assets/css/bootstrap.min.css';
</style>

