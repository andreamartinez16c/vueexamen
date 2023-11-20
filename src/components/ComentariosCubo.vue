<template>
  <div>
    <h1>Comentarios</h1>
    <hr>
    <div v-for="comentario in comentarios" :key="comentario">
        <h4 style="color: blue">COMENTARIO:</h4>
      <p>{{ comentario.comentario }}</p>
      <p>{{ comentario.fechaComentario }}</p>
    </div>
  </div>
</template>

<script>
import ServiceCubos from "../services/ServiceCubos";
const service = new ServiceCubos();

export default {
  name: "ComentraiosCubo",
  data() {
    return {
      idcubo: this.$route.params.idcubo,
      status: false,
      comentarios: [],
    }
  },
  mounted(){
    service.getComentariosCubo(this.idcubo).then(result=>{
        this.comentarios=result
        this.status=true
    })
  }
};
</script>

<style></style>
