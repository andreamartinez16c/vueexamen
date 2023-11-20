<template>
  <div>
    <h1>Detalles Cubo</h1>
    <router-link to="/">Back to Home</router-link>
    <div v-if="status">
        <img :src="cubo.imagen" style="width:250px"/>
        <h2>{{ cubo.nombre }}</h2>
        <p>{{ cubo.color }}</p> 
        <p>{{ cubo.marca }}</p> 
        <p>{{ cubo.modelo }}</p> 
        <p>{{ cubo.precio }}€</p> 
        <p>Valoracion: {{ cubo.valoracion }}/5</p> 
        <router-link :to="'/comentarios/' + cubo.idCubo">Comentarios</router-link>
    </div>
    <div v-else>
        Cargando...
    </div>
  </div>
</template>

<script>
import ServiceCubos from '../services/ServiceCubos'
const service = new ServiceCubos()

export default {
    name: "DetallesCubo",
    data() {
        return{
            idcubo: this.$route.params.idcubo,
            status: false,
            cubo: null
        }
    },
    mounted(){
        service.getCuboId(this.idcubo).then(result=> {
            this.cubo= result
            this.status= true
        })
    }
}
</script>

<style>

</style>