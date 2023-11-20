<template>
  <div>
      <router-link class="btn btn-dark" to="/perfil">Perfil</router-link>
      <router-link class="btn btn-warning" to="/compras"
        >Compras Realizadas</router-link
      >
      <router-link class="btn btn-info" to="/createcompra"
        >Realizar Compra</router-link
      >
    </div>
</template>

<script>
export default {
  name: "MenuUsuario"
}
</script>

<style>

</style>