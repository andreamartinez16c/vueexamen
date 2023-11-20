import { createRouter, createWebHistory } from "vue-router";
import CubosComponent from "./components/CubosComponent.vue";
import CubosMarca from "./components/CubosMarca.vue";
import DetallesCubo from "./components/DetallesCubo.vue";
import ComentariosCubo from "./components/ComentariosCubo.vue";
import LoginComponent from "./components/LoginComponent.vue";
import MenuUsuario from "./components/MenuUsuario.vue";
import PerfilSeguridad from "./components/PerfilSeguridad.vue";
import ComprasRealizadas from "./components/ComprasRealizadas.vue";
import RegistroComponent from "./components/RegistroComponent.vue";
import CreateCompra from "./components/CreateCompra.vue";
import CerrarSesion from "./components/CerrarSesion.vue";


const myRoutes = [
  {
    path: "/",
    component: CubosComponent
  },
  {
    path: "/cuboMarca/:marca",
    component: CubosMarca
  },
  {
    path: "/detallescubo/:idcubo",
    component: DetallesCubo
  },
  {
    path: "/comentarios/:idcubo",
    component: ComentariosCubo
  },
  {
    path: "/menuusuario",
    component: MenuUsuario
  },
  {
    path: "/login",
    component: LoginComponent
  },
  {
    path: "/registro",
    component: RegistroComponent
  },
  {
    path: "/cerrasesion",
    component: CerrarSesion
  },
  {
    path: "/perfil",
    component: PerfilSeguridad
  },
  {
    path: "/compras",
    component: ComprasRealizadas
  },
  {
    path: "/createcompra",
    component: CreateCompra
  },
];

const router = createRouter({
  history: createWebHistory(),

  routes: myRoutes,
});

export default router;
