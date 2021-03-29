<template>
  <div class="container">
    <div class="row justify-content-center">
      <loadingBarComponenet v-if="!called"></loadingBarComponenet>
      <table class="table col-sm-8 col-lg-6" v-if="called">
        <tr class="titulo-tabla ">
          <th colspan="2">
            <h2>Usuarios</h2>
          </th>
        </tr>
        <tr v-for="user in users" :key="user.id" class="fila">
          <td>
            {{ user.name }}
          </td>
          <td class="text-left">
            <router-link :to="'UserDetail/' + user.id">
              <font-awesome-icon style="color:#42b883" icon="eye" />
            </router-link>              
          </td>
        </tr>
      </table>
      <div class="table col-sm-12  text-center">
       <span class="texto-ayuda" v-if="users.length>0 && called">
          <font-awesome-icon icon="asterisk" style="color:rgba(53,73,94,1)"/>
            Pulsa en el icono del usuario para ver mas detalles
           
          </span>
        <span class="alert alert-danger" v-if="users.length==0 && called" >
            Error recuperando los datos
            <font-awesome-icon icon="sad-tear" />
          </span>
      </div>
    </div>
  </div>
</template>
<script>
import LoadingBar from "./LoadingBar";

export default {
  computed: {
    users() {
      return this.$store.getters.users
    },
    called(){
        return this.$store.getters.called
    }
  },
  components:{
    'loadingBarComponenet':LoadingBar
  }
}
</script>
<style>
.titulo-tabla {
  text-align: center;
}

.fila td {
  padding-left: 40px !important;
}

h2 {
  font-weight: 900 !important;
  font-size: 72px;
  background: -webkit-linear-gradient(
    rgba(53, 73, 94, 1),
    rgba(66, 184, 131, 1)
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.texto-ayuda{
 
  background: -webkit-linear-gradient(
  rgba(66, 184, 131, 1),
  rgba(53, 73, 94, 1)
   
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
</style>
