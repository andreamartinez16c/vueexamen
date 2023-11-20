<template>
  <form @submit.prevent="getToken()">
    <label>Email</label>
    <input type="text" class="form-control" v-model="user.email" />
    <label>Password</label>
    <input type="password" class="form-control" v-model="user.password" />
    <button type="submit" class="btn btn-info">Log In</button>
  </form>
</template>

<script>
import ServiceSeguridad from "../services/ServiceSeguridad";
const service = new ServiceSeguridad();

export default {
    name: "LoginComponent",
    data(){
        return{
            token: "",
            user: {
                email: "",
                password: ""
            }
        }
    },
    mounted(){
        if (localStorage.getItem("token")) {
            this.token = JSON.parse(localStorage.getItem("token"));
            this.$router.push("/menuUsuario");
        }
    },
    methods: {
    getToken() {
      service.getToken(this.user).then((result) => {
        console.log(result);
        this.token = result;
        // this.getEmpleados();
        localStorage.setItem("token", JSON.stringify(result));
        this.$router.push("/menuUsuario");

      });
    }
    }
}
</script>

<style>

</style>