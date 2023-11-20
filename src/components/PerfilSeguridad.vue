<template>
  <div>
    <h1>Perfil</h1>
    <div v-if="user">
        <h2>{{ user.email }}</h2>
        <p>{{ user.password }}</p> 
    </div>
     <div v-else>
        Cargando...
    </div>
    <router-link class="btn btn-warning" to="/compras"
        >Compras Realizadas</router-link
      >
  </div>
</template>

<script>
import ServiceSeguridad from "../services/ServiceSeguridad";
const service = new ServiceSeguridad();

export default {
    name: "PerfilSeguridad",
    data(){
        return{
            user: null,
            status: false,
            token: ""
        }
    },
    mounted(){
        this.token = JSON.parse(localStorage.getItem("token"));
        service.getPerfil(this.token).then(result=>{
            this.user= result
            this.status=true
            console.log(this.user)
        })
    }
}
</script>

<style>

</style>