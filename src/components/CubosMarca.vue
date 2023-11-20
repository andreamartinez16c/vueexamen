<template>
  <div>
    <h1>Cubos marca {{marca}}</h1>
    <div v-for="cubo in cubos" :key="cubo">
        <img :src="cubo.imagen" style="width:150px"/>
        <h3>{{ cubo.nombre }}</h3>
        <p>{{ cubo.precio }}€</p> 
        <router-link class="btn btn-warning" :to="'/detallescubo/' + cubo.idCubo">Detalles</router-link>
    </div>
  </div>
</template>

<script>
import ServiceCubos from '../services/ServiceCubos'
const service = new ServiceCubos()

export default {
    name:"CubosMarca",
    data(){
        return{
            marca: this.$route.params.marca,
            status: false,
            cubos:[]
        }
    },
    mounted(){
        service.getCubosMarca(this.marca).then(result=> {
            this.cubos = result
            this.status= true
        })
    }
}
</script>

<style>

</style>