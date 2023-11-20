<template>
  <div><h1>Sesion Cerrada</h1></div>
</template>

<script>
export default {
    name: "CerrarSesion",
    mounted(){
        localStorage.removeItem("token")
    }
}
</script>

<style>

</style>