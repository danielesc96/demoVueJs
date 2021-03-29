<template>
  <div>
    <div class="fondoHeader">
      <headerComponent></headerComponent>
    </div>
   <vue-page-transition name="fade-in-left">
    <router-view/>
  </vue-page-transition>
  </div>
</template>
<script>
import Header from "../components/header"
export default {
  name: "Dashboard",
  components: {
    headerComponent: Header
  }
}
</script>
<style>
.fondoHeader { 
  color: white;
  background: linear-gradient(180deg, rgba(66,184,131,1) 0%, rgba(53,73,94,1) 60%);
}
</style>
