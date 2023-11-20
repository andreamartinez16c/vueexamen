<template>
  <div>
    <h1>Cubos</h1>
    <table class="table table-bordered">
            <thead>
                <tr>
                    <th>Nombre</th>
                    <th>Modelo</th>
                    <th>imagen</th>
                    <th>Color</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="cubo in cubos" :key="cubo">
                    <td>{{cubo.nombre}}</td>
                    <td>{{cubo.modelo}}</td>
                    <td><img :src="cubo.imagen" style="width:150px"/></td>
                    <td>{{cubo.color}}</td>
                </tr>
            </tbody>
        </table>
  </div>
</template>

<script>
import ServiceCubos from '../services/ServiceCubos'
const service = new ServiceCubos()

export default {
    name:"CubosComponent",
    data(){
        return{
            cubos:[],
            status: false
        }
    },
    mounted(){
        service.getCubos().then(result=> {
            this.cubos= result
            this.status= true
        })
    }
}
</script>

<style>

</style>