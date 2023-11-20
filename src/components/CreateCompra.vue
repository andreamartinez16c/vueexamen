<template>
  <div>
    <h1>Realizar compra</h1>
    <form
      v-on:submit.prevent="createCompra()"
      style="width: 500px; margin: 0 auto"
    >
      <label>Cubo</label>
      <select v-model="cuboSeleccionado" class="form-control">
        <option v-for="cubo in cubos" :key="cubo" :value="cubo.idCubo">
          {{ cubo.nombre }}
        </option>
      </select>
      <button class="btn btn-info">Comprar</button>
    </form>
  </div>
</template>

<script>
import ServiceCubos from "../services/ServiceCubos";
const serviceCubos = new ServiceCubos();

import ServiceSeguridad from "../services/ServiceSeguridad";
const serviceSeguridad = new ServiceSeguridad();

export default {
  name: "CretaeCompra",
  data() {
    return {
      cubos: [],
      status: false,
      cuboSeleccionado: "",
      compra: null,
      token: ""
    };
  },
  mounted() {
    serviceCubos.getCubos().then((result) => {
      this.cubos = result;
      this.status = true;
    });
  },
  methods: {
    createCompra() {
        this.token = JSON.parse(localStorage.getItem("token"));
      serviceSeguridad.insertCompra(this.cuboSeleccionado, this.compra, this.token).then((result) => {
        this.$router.push("/compras");
        console.log(result);
      });
    },
  },
};
</script>

<style></style>
