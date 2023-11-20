<template>
  <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Navbar</a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link class="nav-link" to="/">Cubos</router-link>
          </li>
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Marcas
            </a>
            <ul class="dropdown-menu">
              <li v-for="marca in marcas" :key="marca">
                <router-link class="dropdown-item" :to="'/cuboMarca/' + marca">{{
                  marca
                }}</router-link>
              </li>
            </ul>
          </li>
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Seguridad
            </a>
            <ul class="dropdown-menu">
              <li>
                <router-link class="dropdown-item" :to="'/login'">Log In</router-link>
              </li>
              <li>
                <router-link class="dropdown-item" :to="'/registro'">Registrarse</router-link>
              </li>
              <li>
                <router-link class="dropdown-item" :to="'/cerrasesion'">Cerrar Sesion</router-link>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import ServiceCubos from "../services/ServiceCubos";
const service = new ServiceCubos();

export default {
  name: "MenuDepartamento",
  data() {
    return {
      marcas: [],
      status: false,
    };
  },
  mounted() {
    service.getMarcas().then((result) => {
      this.marcas = result;
      this.status = true;
    });
  },
};
</script>

<style></style>
