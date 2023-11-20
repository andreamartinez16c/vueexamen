<template>
  <div>
    <h1>Compras Realizadas</h1>
    <router-link class="btn btn-warning" to="/perfil"
        >Perfil</router-link
      >
      <router-link class="btn btn-info" to="/createcompra"
        >Realizar Compra</router-link
      >
    <div v-for="compra in compras" :key="compra">
        <h3>Compra de cubo con id: {{ compra.idCubo }}</h3>
        <p>Fecha: {{ compra.fechaPedido }}</p> 
    </div>
  </div>
</template>

<script>
import ServiceSeguridad from "../services/ServiceSeguridad";
const service = new ServiceSeguridad();

export default {
    name: "ComprasRealizadas",
    data(){
        return{
            compras: [],
            token:''
        }
    },
    mounted(){
        this.token = JSON.parse(localStorage.getItem("token"));
        service.getCompras(this.token).then(result=>{
            this.compras= result
        })
    }
}
</script>

<style>

</style>