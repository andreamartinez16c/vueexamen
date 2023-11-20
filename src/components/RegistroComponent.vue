<template>
  <form @submit.prevent="createUsuario()">
    <label>Nombre</label>
    <input type="text" class="form-control" v-model="user.nombre" />
    <label>Email</label>
    <input type="text" class="form-control" v-model="user.email" />
    <label>Password</label>
    <input type="password" class="form-control" v-model="user.password" />
    <button type="submit" class="btn btn-info">Registro</button>
  </form>
</template>

<script>
import ServiceSeguridad from "../services/ServiceSeguridad";
const service = new ServiceSeguridad();

export default {
  name: "RegistroComponent",
  data() {
    return {
      user: {
        idUsuario: 0,
        nombre: "",
        email: "",
        password: "",
      },
    };
  },
  mounted() {
    if (localStorage.getItem("token")) {
        this.token = JSON.parse(localStorage.getItem("token"));
        this.$router.push("/menuUsuario");
    }
  },
  methods: {
    createUsuario() {
      service.insertUsuario(this.user).then((result) => {
        console.log(result);
        this.$router.push("/login");
      });
    },
  },
};
</script>

<style></style>
