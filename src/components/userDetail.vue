<template>
  <div class="container  text-center">
    <loadingBarComponenet v-if="!called"></loadingBarComponenet>
    <div class="row " v-if="called">
      <div class="col-12 col-md-5 offset-md-1 text-center">
        <img src="../assets/img/Avatar.png" />
      </div>
      <div class="col-sm-12 col-md-4">
        <form>
          <div class="form-group row">
            <label class="col-sm-3 col-lg-4 col-form-label"
              >Nombre: </label
            >
            <div class="col-sm-12 col-lg-10">
              <input
                type="text"
                readonly
                class="form-control"
      :value="user.name"
              />
            </div>
          </div>
          <div class="form-group row">
            <label class="col-sm-4 col-lg-4 col-form-label"
              >Email: </label
            >
            <div class="col-sm-12 col-lg-10">
              <input
                type="text"
                readonly
                class="form-control"
      :value="user.email"
              />
            </div>
          </div>
          <div class="form-group row">
            <label  class="col-sm-3 col-lg-4 col-form-label"
              >Móvil: </label
            >
            <div class="col-sm-12 col-lg-10">
              <input
                type="text"
                readonly
                class="form-control"
      :value="user.phone"
              />
            </div>
          </div>
        </form>
      </div>
     
    </div>
    <br>
      <router-link :to="'UserDetail/' + user.id">
              <font-awesome-icon style="color:rgba(53,73,94,1)" icon="home"  size="2x"/>
      </router-link>              
  </div>
</template>
<script>
import LoadingBar from "./LoadingBar"
export default {
  created() {
    this.$store.dispatch("getSelectedUser", this.$route.params.id)
  },
  computed: {
    user() {
      return this.$store.getters.selectedUser
    },
    called() {
      return this.$store.getters.called
    },
  },
  components: {
    loadingBarComponenet: LoadingBar,
  },
}
</script>
<style scoped>

img {
  margin: 10px 0;
  max-width: 250px;
  max-height: 250px;
}

form{
  padding: 10px 0;
}

</style>
